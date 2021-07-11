import React, { FC } from 'react'
import { useObserver } from 'mobx-react'

import { CharactersProvider } from '@contexts/characters'

import { Layout } from '@components/common'
import { Characters } from '@components/views'

const App: FC = () => {
  return useObserver(() => (
    <CharactersProvider>
      <Layout>
        <Characters />
      </Layout>
    </CharactersProvider>
  ))
}

export default App
