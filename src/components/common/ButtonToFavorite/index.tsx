import cn from 'classnames'
import React, { FC } from 'react'

import { ReactComponent as FavoriteIconSVG } from './favorite-icon.svg'

import { IButtonAddToFavoriteProps as IProps } from './types'

export const ButtonToFavorite: FC<IProps> = ({ classes, isActive, onClick }) => {
  const buttonClasses = cn(classes, 'button',
    { 'button--active': isActive }
  )

  const title = isActive ? 'Remove from Favorites' : 'Add to Favorites'

  return (
    <button className={buttonClasses} onClick={onClick} title={title}>
      <span className='button__toFavorite'>
        <FavoriteIconSVG />
      </span>
    </button>
  )
}
