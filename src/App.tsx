import React, { FC, Suspense } from 'react'

const App: FC = () => (
  <Suspense fallback={null}>
    <div>Здесь будут данные</div>
  </Suspense>
)

export default App
