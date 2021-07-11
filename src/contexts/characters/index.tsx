import React, { createContext, FC, PropsWithChildren, useContext } from 'react'

import { CharactersStore } from '@stores/characters'

import { ICharactersContext as IContext } from './types'

const charactersStore = new CharactersStore()

const CharactersContext = createContext<IContext>({ charactersStore })

export const CharactersProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <CharactersContext.Provider value={{ charactersStore }}>{children}</CharactersContext.Provider>
}

export const useCharactersStore = (): IContext => useContext(CharactersContext)
