---
sidebar_position: 1
---

# useRealtimeCursor
What this method does is:

* Monitor mouse movement and save clientX and clinentY in state
* Send URL, clientX, clientY, user information (randomly assigned name, avatar, color) to the server at intervals of 500ms
* If the information of another user corresponding to the same URL is added on the server by WebSocket, it will be acquired.
* Define a function that keeps other users together in a list and draws it on the screen

This method returns two functions.
* `onMouseMove`
* `renderCursors`

## onMouseMove
This function is a function that handles mouse events.
Apply onMouseMove to the element close to the root that covers the full screen.

```tsx
<div onMouseMove={onMouseMove}>
```

## renderCursors
It is a function that draws mouse position information and user information (randomly assigned names, avatars, colors) acquired in real time.

```tsx
return (
  <div>
    {renderCursors()}
  </div>
);
```

You can put a function that creates a custom view of the cursor in the argument of `renderCursors`.

```tsx
const customView = (param: CustomCursorViewParameter) => {
    return (<CursorEye userInfo={param.userInfo} />)
}

return (
  <div>
    {renderCursors(customView)}
  </div>
);
```

## delete time

When the user goes offline, no data is sent to the server.
The delete time assigned by the server is set for each data, and `useRealtimeCursor` removes the data that exceeds the delete time.
The delete time is fixed at 10 seconds.
If you want to change this setting, see [Build your own backend](/docs/how-it-works/self-backend).