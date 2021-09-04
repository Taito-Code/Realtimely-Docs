---
sidebar_position: 2
---


# Self hosted Backend
[Architecture](/docs/how-it-works/architecture)で説明したように、RealtimelyはAWSと接続を行います。
現在のバージョンでは、RealtimelyのAppSyncと接続するオプションしか用意されておらず、次のようなリスクがあります。

* ランダムに生成されたユーザ情報と、そのユーザのアクションがあなたが管理しないサーバに送信され、一時的にDBに反映されます。
* Realtimelyがサービスを停止し、AppSyncエンドポイントおよびデータベースを破棄すると、このライブラリは動作しなくなります。


:::caution

よって現在のバージョンのRealtimelyはProduction Readyとは言えず、PoCレベルでの活用に留めることをお勧めします。

:::

## How to self host backend

:::caution

現在のバージョンでは、あなたのAWS環境に同等のバックエンドを構築し、URLエンドポイントを切り替えるオプションはありません。

:::

実装のスケジュールについては[ロードマップ](/docs/roadmap)をご覧ください。