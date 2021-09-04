---
sidebar_position: 1
---

# Architecture

## Overview
![demo](/img/architecture.drawio.png)

RealtimelyはAWS AppSyncの機能を最大限活用しています。
AppSyncで生成したGraphQLエンドポイントをApollo Clientで接続し、Reactでステート管理する構成になっています。


## Backend
### DynamoDB
DynamoDBはキーバリューストアのスケーラブルなNoSQLデータベースです。
DynamoDBのキーはHashKeyとSortKeyがあり、この組み合わせが一意であるようにDB設計を行います。
RealtimeCursorとOnlineUserは次のようなスキーマになっています。

|  HashKey  |  SortKey  |
| ---- | ---- |
|  URL#{URL}  |  UserId#{UserId}  |

{URL}と{UserId}には実際の値が入ります。
このキーに対して、マウスのカーソル位置(X,Y)やユーザ情報をAttributeとして保存しています。
つまり常に最新のデータがこのキーに紐付いて更新するため、時系列的データは保持していません。
Realtimelyの関心は常に「今」であるためこのDB設計が効率的でパフォーマンスが高いのです。

### AppSync
AppSyncはGraphQLサーバのマネージドサービスです。
DynamoDBのテーブルと接続することで、自動でGraphQLスキーマとリゾルバを生成する機能があります。
Realtimelyは自動で作成されたスキーマとリゾルバを少しカスタマイズして利用しています。

主に使っているリゾルバは次の二つです。(XXXにはテーブル名が入ります)
* createXXX 
* onCreateXXX 

`createXXX`はリソースの作成を行い、DynamoDBのテーブルに値を追加します。デフォルトのリゾルバでは同一キーが存在した場合エラーになるような実装がされていますが、カスタマイズして同一キーの場合は更新するようにしています。また、現在時刻からdeleteTimeの計算をして値を格納しています。

`onCreateXXX`は`createXXX`のmutationを監視しており、このmutationが実行された時にそこで生成されたリソースをSubscrition(Websocket)で通知します。これにより作成・更新されたデータをフロントに届けることができます。

## Frontend
### Apollo Client
AppSyncエンドポイントと通信するためにApollo Clientを採用しています。

### React
RealtimelyはReactでステート管理を行います。
`createXXX`で最新のリソース(例えばカーソル位置)を送信し、`onCreateXXX`で作成されたリソースを受信します。
受信したリソースはリストで管理し、deleteTimeを超えたものは廃棄することで、最新の状態を保ちます。
`createXXX`はdeleteTime以内の時間で再度呼び出しすることで、管理しているリストからいなくならないようにします。
逆に、deleteTime以内の時間に`createXXX`が呼び出されなかったリソースについては、すでにそのユーザは画面から離脱していると判断して他のユーザからは見えなくなります。




