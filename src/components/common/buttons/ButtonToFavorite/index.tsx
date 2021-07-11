import React, { FC } from 'react'

import { Button, IconFavorite } from '@components/common'

import { IButtonAddToFavoriteProps as IProps } from './types'

export const ButtonToFavorite: FC<IProps> = ({ classes, isActive, onClick }) => {
  const title = isActive ? 'Remove from Favorites' : 'Add to Favorites'

  return (
    <Button classes={classes} onClick={onClick} title={title}>
      <IconFavorite />
    </Button>
  )
}
