---
sidebar_position: 4
---

# Realtime User Presence
![demo](/img/realtime-header.gif)

## Example
`useOnlineUsers`関数を呼び出すだけでそのURL(パスも含む)を閲覧しているユーザのリストの監視を開始し、更新されるとonlineUserListに反映される。

```tsx title="header.tsx"
import UserList from "./UserList";
import { useOnlineUsers } from '../src';

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

詳しい実装は[Github](https://github.dev/KitaharaMugiro/realtime-cursor/blob/main/components/RealtimeHeader.tsx)で確認

