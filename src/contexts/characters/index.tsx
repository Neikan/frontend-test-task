import React, { createContext, FC, PropsWithChildren, useContext } from 'react'

import { CharactersStore } from '@stores/characters'

import { ICharactersContext as IContext } from './types'

import { RootStore } from '@stores'

const charactersStore = new CharactersStore(new RootStore())

const CharactersContext = createContext<IContext>({ charactersStore })

export const CharactersProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <CharactersContext.Provider value={{ charactersStore }}>{children}</CharactersContext.Provider>
}

export const useCharactersStore = (): IContext => useContext(CharactersContext)
