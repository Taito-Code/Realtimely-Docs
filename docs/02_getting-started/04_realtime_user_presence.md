---
sidebar_position: 4
---

# Realtime User Presence
![demo](/img/realtime-header.gif)

## Example
Just call the `useOnlineUsers` function to start monitoring the list of users who are viewing the URL (including the path), and when it is updated, it will be reflected in the onlineUserList automatically.

```tsx title="header.tsx"
import UserList from "./UserList";
import { useOnlineUsers } from 'realtimely';

export default () => {
    const { onlineUserList } = useOnlineUsers()
    return (
        <header className="header">
            <h1 className="header_text">
                <a href="/" className="link_text">Realtimely</a>
            </h1>

            <nav className="nav">
                <ul className="ul">
                    <div>
                        <UserList realtimeUser={onlineUserList} />
                    </div>
                </ul>
            </nav>
        </header>
    )
}
```

Check [Github](https://github.dev/KitaharaMugiro/realtime-cursor/blob/main/components/RealtimeHeader.tsx) for the detailed implementation.
