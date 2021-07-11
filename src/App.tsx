import React, { FC } from 'react'

import { Layout } from '@components/common'
import { Characters } from '@components/views'

import { RootStoreProvider } from '@contexts'

const App: FC = () => (
  <RootStoreProvider>
    <Layout>
      <Characters />
    </Layout>
  </RootStoreProvider>
)

export default App
