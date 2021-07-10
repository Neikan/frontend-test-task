import cn from 'classnames'
import React, { FC } from 'react'

import { IButtonProps } from './types'

export const Button: FC<IButtonProps> = (props: IButtonProps) => {
  const { children, classes, isActive, isDisabled, onClick, title, type = 'button' } = props

  const className = cn(classes, 'button', {
    'button--active': isActive,
    'button--disabled': isDisabled
  })

  return (
    <button className={className} disabled={isDisabled} onClick={onClick} title={title} type={type}>
      {children}
    </button>
  )
}
