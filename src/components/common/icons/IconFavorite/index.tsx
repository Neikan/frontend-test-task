import React, { FC } from 'react'

import { Icon } from '../../Icon'

import { IIconProps as IProps } from '../../Icon/types'

import { ReactComponent as FavoriteIconSVG } from './favorite-icon.svg'

export const IconFavorite: FC<IProps> = ({ color = 'primary-500', ...restProps }) => (
  <Icon {...restProps} color={color} withoutStroke={false}>
    <FavoriteIconSVG />
  </Icon>
)
