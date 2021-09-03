---
sidebar_position: 3
---

# useRealtimeUserAction

本メソッドが実施することは以下になります

* URL, actionId, value, ユーザ情報(ランダムに振られた名前、アバター、色)をサーバに送るためのメソッド`pushUserAction`を作成します。
* WebSocketでサーバ上で同一のURLに該当する他のユーザの情報が追加された場合、それを取得します
* 本メソッドにcallback関数が与えられている場合は、ユーザの情報が追加されたタイミングで実行します。
* 他のユーザの情報をまとめてリストで保持します

本メソッドは３つの関数と変数を返します。
* `pushUserAction`
* `createdUserAction`
* `userActionList`

また、引数としてcallback関数を受け付けます。

## pushUserAction
この関数はユーザアクションをサーバに送信するための関数になります。
引数に文字列のactionIdとvalueを必須で渡す必要があります。

### actionId
こちらはイベントを区別するためのIDになります。
例えば、サイト内に３つのボタンがあった場合、それぞれどのボタンが押されたかを区別するためにactionIdを使うことができます。

```tsx
const onClick = (buttonNumber: number) => {
    const actionId = "actionId=" + buttonNumber
    pushUserAction(actionId, "value")
}

return (
    <div>
        <button onClick={() => onClick(1)}>1</button>
        <button onClick={() => onClick(2)}>2</button>
        <button onClick={() => onClick(3)}>3</button>
    </div>
)
```

### value
valueはユーザアクションをより詳細に記述するための箱であると考えてください。
例えば、フォームに入力された値などを渡します。

## createdUserAction
リアルタイムに取得した最新のデータが格納されています。
以下のようなオブジェクトになっています。

```ts
{
    key: "XXXXX",
    actionId: "form_1",
    value: "hello!!",
    name: "John",
    avator: "😄",
    color: "#CCFF1A",
    deleteTime: "2021-09-03T18:46:50.806Z"
}
```

## userActionList
`onlineUserList`は以下のようなオブジェクトのリストになります。

```ts
{
    key: "XXXXX",
    actionId: "form_1",
    value: "hello!!",
    name: "John",
    avator: "😄",
    color: "#CCFF1A",
    deleteTime: "2021-09-03T18:46:50.806Z"
}
```

## callback
以下のような型の関数を`useRealtimeUserAction`に渡すと、新規のユーザアクションが生成されるたびに実行します。

```ts
(actionId: string, value: string, userInfo?: { name: string, color: string, avator: string }) => void
```

## delete time
ユーザがオフラインになると、サーバへデータが送られなくなります。
各データにはサーバで振り分けたdelete timeが設定されており、`useRealtimeCursor`ではdelete timeを超えたデータは取り除きます。
delete timeは３０秒で固定しております。
この設定値を変えたい場合は、[自分でバックエンドを構築する](/how-it-works/self-backend)を参照ください。

