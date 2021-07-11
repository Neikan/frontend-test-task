import React, { FC } from 'react'
import { Observer } from 'mobx-react'

import { CharactersProvider } from '@contexts/characters'

import { Layout } from '@components/common'
import { Characters } from '@components/views'

const App: FC = () => (
  <Observer>
    {() => (
      <CharactersProvider>
        <Layout>
          <Characters />
        </Layout>
      </CharactersProvider>
    )}
  </Observer>
)

export default App
