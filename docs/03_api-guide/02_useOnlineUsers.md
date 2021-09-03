---
sidebar_position: 2
---

# useOnlineUsers
本メソッドが実施することは以下になります

* 5000msのインターバルで、URL, ユーザ情報(ランダムに振られた名前、アバター、色)をサーバに送ります
* WebSocketでサーバ上で同一のURLに該当する他のユーザの情報が追加された場合、それを取得します
* 他のユーザの情報をまとめてリストで保持します

本メソッドは１つの関数を返します。
* `onlineUserList`

## onlineUserList
`onlineUserList`は以下のようなオブジェクトのリストになります。

```ts
{
    key: "XXXXX",
    name: "John",
    avator: "😄",
    color: "#CCFF1A",
    deleteTime: "2021-09-03T18:46:50.806Z"
}
```

keyはユーザごとに固有の値
name, avator, colorはそのユーザに決められたランダムな値です。
deleteTimeはサーバで設定された未来の時刻になります。

## delete time
ユーザがオフラインになると、サーバへデータが送られなくなります。
各データにはサーバで振り分けたdelete timeが設定されており、`onlineUserList`ではdelete timeを超えたデータは取り除ぞかれています。
delete timeは１０秒で固定しております。
この設定値を変えたい場合は、[自分でバックエンドを構築する](/how-it-works/self-backend)を参照ください。