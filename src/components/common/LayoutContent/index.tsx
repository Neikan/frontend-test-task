import cn from 'classnames'
import React, { FC } from 'react'
import { detect } from 'detect-browser'

import { Browser } from '@consts/enumTypes'

import { IContentProps as IProps } from './types'

const isFireFox = detect()?.name === Browser.FIREFOX

export const LayoutContent: FC<IProps> = ({ children, classes = '', isScrollable = true }: IProps) => {
  const getClasses = (classes: string): string =>
    cn(
      'layout__content',
      !isScrollable && 'layout__content--not_scrollbar',
      isScrollable && isFireFox && 'layout__content--firefox',
      isScrollable && !isFireFox && 'layout__content--not_firefox',
      isScrollable && 'layout__content--scrollbar',
      classes
    )

  return <div className={getClasses(classes)}>{children}</div>
}
