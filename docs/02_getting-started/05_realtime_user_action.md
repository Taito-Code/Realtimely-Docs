---
sidebar_position: 5
---

# Realtime User Action

最後にもっとも柔軟で有用な関数`useRealtimeUserAction`を紹介する。

```tsx
export default () => {
    
    function callback(actionId: string, value: string){
        console.log({actionId, value})
    }

    const { pushUserAction } = useRealtimeUserAction(callback)

    const onClick = (buttonNumber: number) => {
        pushUserAction("actionId=" + buttonNumber, "value=" + buttonNumber)
    }

    return (
        <div>
            <button onClick={() => onClick(1)}>1</button>
            <button onClick={() => onClick(2)}>2</button>
            <button onClick={() => onClick(3)}>3</button>
        </div>
    )
}
```

`useRealtimeUserAction`の引数にcallback関数を渡して実行することでユーザアクションの監視が開始される。ボタンが押されるたびに返り値の`pushUserAction`を実行することでイベントが発行され、callback関数が実行される。よって、押されたボタンの番号がconsole.logで標準出力されることを確認できるだろう。