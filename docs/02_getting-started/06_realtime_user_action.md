---
sidebar_position: 6
---

# Realtime User Action

Finally, I would like to introduce the most flexible and useful function `useRealtimeUserAction`.

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

User action monitoring is started by passing the callback function to the argument of `useRealtimeUserAction` and executing it. By executing the return value `pushUserAction` each time the button is pressed, an event is issued and the callback function is executed. Therefore, you can see that the number of the pressed button in console logs.