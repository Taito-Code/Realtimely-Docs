---
sidebar_position: 1
---

# Introduction

## What is Realtimely?
Realtimelyは、あなたのReactアプリに簡単に楽しいリアルタイム要素を導入することができます。
Realtimelyの裏側ではGraphQLとWebsocketでクラウドと通信しますが、ユーザはそれを意識せずにRealtimelyの提供するhooks関数を使うだけでwebsocketベースのリアルタイムな体験を実装することができるようになります。

## For Example
![demo](/img/realtime-cursor.gif)

最もシンプルで分かりやすいのが「Realtime Cursor」です。
Realtimelyが提供する`useRealtimeCursor`を使って以下のようなコンポーネントを作成するだけで、あなたのWebアプリを利用する全ての人のマウスカーソルの動きをリアルタイムに共有できるようになります。

```tsx
import { useRealtimeCursor } from 'realtimely';

export default () => {
    const { onMouseMove, renderCursors } = useRealtimeCursor()
    return (
        <div onMouseMove={onMouseMove}>
                {renderCursors()}
        </div>
    )
}
```


## What you can do
Realtimelyは`useRealtimeUserAction`というより使いやすくて応用範囲の広い関数も用意しています。以下のシンプルなコードをご覧ください。

```tsx
import { useRealtimeUserAction } from 'realtimely';

export default () => {
    const { pushUserAction, userActionList } = useRealtimeUserAction()
    return (<>
        <button onClick={() => {pushUserAction("actionId","value")}}>click</button>
        {JSON.stringify(userActionList)}
    </>)
}
```

`useRealtimeUserAction`メソッドを呼び出すとユーザアクションの監視を開始します。
`pushUserAction`メソッドで何かしらの値を引数に実行すると、その値を同じURLを閲覧している全てのユーザの`userActionList`に配信します。

ただこれだけの機能で、チャットシステムやプレゼンス機能など、様々な機能を実装できます。
あなたのサイトをより生き生きとさせるようなリアルタイムで面白い要素を是非作ってみてください。