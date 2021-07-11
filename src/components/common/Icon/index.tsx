import cn from 'classnames'
import React, { FC } from 'react'

import { IIconProps as IProps } from './types'

export const Icon: FC<IProps> = ({ children, color = 'gray-500', classes, withoutStroke = true }) => {
  const cssColor = `var(--${color})`
  const colorStyle = {
    borderColor: cssColor,
    fill: cssColor,
    stroke: withoutStroke ? undefined : cssColor
  }

  const iconClasses = cn('icon', classes)

  return (
    <span className={iconClasses} style={{ ...colorStyle }}>
      {children}
    </span>
  )
}
