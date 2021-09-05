---
sidebar_position: 1
---

# Introduction

## What is Realtimely?
Realtimely makes it easy to introduce fun real-time elements into your React app.
Behind the scenes of Realtimely, GraphQL and Websocket communicate with the cloud, but users can implement a websocket-based real-time experience simply by using the hooks function provided by Realtimely without being aware of it.

## For Example
![demo](/img/realtime-cursor.gif)

The simplest and most straightforward is the "Realtime Cursor".
Simply create the following components using the `useRealtimeCursor` provided by Realtimely, and you will be able to share the movement of the mouse cursor of everyone who uses your web application in real time.

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
Realtimely also provides a function called `useRealtimeUserAction` that is easier to use and has a wider range of applications. See the simple code below.

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

Calling the `useRealtimeUserAction` method will start monitoring user actions.
If you execute some value as an argument with the `pushUserAction` method, that value will be delivered to the `userActionList` of all users viewing the same URL.

With just this function, you can implement various functions such as chat system and presence function.
Please try to create interesting elements in real time that will make your site more lively.