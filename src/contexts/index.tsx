import React, { createContext, FC, PropsWithChildren, useContext } from 'react'

import { IRootStoreContext as IContext } from './types'

import { RootStore } from '@stores'

const rootStore = new RootStore()

const RootStoreContext = createContext<IContext>({ rootStore })

export const RootStoreProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <RootStoreContext.Provider value={{ rootStore }}>{children}</RootStoreContext.Provider>
}

export const useRootStore = (): IContext => useContext(RootStoreContext)
