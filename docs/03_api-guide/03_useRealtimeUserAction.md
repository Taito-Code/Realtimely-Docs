---
sidebar_position: 3
---

# useRealtimeUserAction

What this method does is:

* Create a method `pushUserAction` to send URL, actionId, value, user information (randomly assigned name, avatar, color) to the server.
* If the information of another user corresponding to the same URL is added on the server by WebSocket, it will be acquired.
* If a callback function is given to this method, it will be executed when the user information is added.
* Keeps other users' information together in a list

This method returns three functions and variables.
* `pushUserAction`
* `createdUserAction`
* `userActionList`

It also accepts a callback function as an argument.

## pushUserAction
This function is for sending user actions to the server.
You must pass the string actionId and value as arguments.

### actionId
This is the ID to distinguish the event.
For example, if you have three buttons on your site, you can use actionId to distinguish which button was pressed.

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
Think of value as a box for describing user actions in more detail.
For example, pass the value entered in the form.

## createdUserAction
The latest data acquired in real time is stored.
The object is as follows.

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
`onlineUserList` is a list of objects like the one below.

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
If you pass a function of the following type to `useRealtimeUserAction`, it will be executed each time a new user action is generated.

```ts
(actionId: string, value: string, userInfo?: { name: string, color: string, avator: string }) => void
```

## delete time

When the user goes offline, no data is sent to the server.
The delete time assigned by the server is set for each data, and `useRealtimeCursor` removes the data that exceeds the delete time.
The delete time is fixed at 30 seconds.
If you want to change this setting, see [Build your own backend](/docs/how-it-works/self-backend).

