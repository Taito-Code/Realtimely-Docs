---
sidebar_position: 2
---

# useOnlineUsers
What this method does is:

* Send URL, user information (randomly assigned name, avatar, color) to the server at intervals of 5000ms
* If the information of another user corresponding to the same URL is added on the server by WebSocket, it will be acquired.
* Keeps other users' information together in a list

This method returns one function.
* `onlineUserList`

## onlineUserList
`onlineUserList` is a list of objects like the one below.

```ts
{
    key: "XXXXX",
    name: "John",
    avator: "😄",
    color: "#CCFF1A",
    deleteTime: "2021-09-03T18:46:50.806Z"
}
```

key is a unique value for each user
name, avator, color are random values determined by the user.
deleteTime will be the future time set on the server.

## delete time

When the user goes offline, no data is sent to the server.
The delete time assigned by the server is set for each data, and `useRealtimeCursor` removes the data that exceeds the delete time.
The delete time is fixed at 10 seconds.
If you want to change this setting, see [Build your own backend](/docs/how-it-works/self-backend).