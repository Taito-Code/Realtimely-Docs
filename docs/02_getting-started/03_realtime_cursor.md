---
sidebar_position: 3
---

# Realtime Cursor
![demo](/img/realtime-cursor.gif)

## Example
あなたのReactアプリで全画面をカバーしている要素で、`useRealtimeCursor`を呼び出します。
返り値の`onMouseMove`をその要素のonMouseMoveイベントに渡し、どこでも良いので`renderCursors`メソッドをHTML内で呼び出します。

```tsx title="App.tsx"
import React from 'react';
import { useRealtimeCursor } from "realtimely"

function App() {

  const { onMouseMove, renderCursors } = useRealtimeCursor()

  return (
    <div className="App" onMouseMove={onMouseMove}>
      {renderCursors()}
    </div>
  );
}

export default App
```