import React, { FC } from 'react'

import { ILayoutTitleProps as IProps } from './types'

export const LayoutTitle: FC<IProps> = ({ title }) => <h3 className='layout__title'>{title}</h3>
