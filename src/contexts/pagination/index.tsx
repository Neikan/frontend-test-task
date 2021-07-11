import React, { createContext, FC, PropsWithChildren, useContext } from 'react'

import { PaginationStore } from '@stores/pagination'

import { IPaginationContext as IContext } from './types'

const paginationStore = PaginationStore()

const PaginationContext = createContext<IContext>({ paginationStore })

export const CharactersProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <PaginationContext.Provider value={{ paginationStore }}>{children}</PaginationContext.Provider>
}

export const usePaginationStore = (): IContext => useContext(PaginationContext)
