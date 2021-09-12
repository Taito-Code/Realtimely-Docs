---
sidebar_position: 5
---

# Realtime Shared State

RealtimelyはReactの`useState`を進化させた`useRealtimeSharedState`を提供します。
これは、同一のURLを見ているすべてのユーザのstateを同期させます。

```tsx
export default () => {
    
    const [slideState, setSlideState] = useRealtimeSharedState({
        pageNumber: 1,
        enableCursor: false,
        enableChat: false
    }, "slideState")

    const onClick = () => {
        slideState.pageNumber += 1
        setSlideState(slideState)
    }

    return (
        <div>
            <button onClick={onClick}>Next</button>
            <Slide pageNumber={slideState.pageNumber}>
        </div>
    )
}
```