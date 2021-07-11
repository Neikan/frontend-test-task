import cn from 'classnames'
import React, { FC } from 'react'
import { detect } from 'detect-browser'

import { Browser } from '@consts/enumTypes'

import { IContentProps as IProps } from './types'

const isFireFox = detect()?.name === Browser.FIREFOX

export const LayoutContent: FC<IProps> = ({ children, classes = '', isScrollable = true, withPagination = true }: IProps) => {
  const getClasses = (classes: string): string =>
    cn(
      'layout__content',
      withPagination ? 'layout__content--pagination' : 'layout__content--notPagination',
      !isScrollable && 'layout__content--notScrollbar',
      isScrollable && isFireFox && 'layout__content--firefox',
      isScrollable && !isFireFox && 'layout__content--notFirefox',
      isScrollable && 'layout__content--scrollbar',
      classes
    )

  return <div className={getClasses(classes)}>{children}</div>
}
