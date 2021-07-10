import React, { FC } from 'react'

import { ILayoutProps as IProps } from './types'

export const Layout: FC<IProps> = ({ children }) => (
  <div className='layout'>
    {children}
  </div>
)
