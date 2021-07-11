import React, { FC } from 'react'

import { Icon } from '../../Icon'

import { IIconProps as IProps } from '../../Icon/types'

import { ReactComponent as ArrowNextDoubleIconSVG } from './arrow-next-double-icon.svg'

export const IconArrowNextDouble: FC<IProps> = ({ color = 'gray-500', ...restProps }) => (
  <Icon {...restProps} color={color}>
    <ArrowNextDoubleIconSVG />
  </Icon>
)
