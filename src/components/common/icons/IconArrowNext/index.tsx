import React, { FC } from 'react'

import { Icon } from '../../Icon'

import { IIconProps as IProps } from '../../Icon/types'

import { ReactComponent as ArrowNextIconSVG } from './arrow-next-icon.svg'

export const IconArrowNext: FC<IProps> = ({ color = 'gray-500', ...restProps }) => (
  <Icon {...restProps} color={color}>
    <ArrowNextIconSVG />
  </Icon>
)
