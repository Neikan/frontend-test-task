import React, { FC } from 'react'

import { Icon } from '../../Icon'

import { IIconProps as IProps } from '../../Icon/types'

import { ReactComponent as ArrowBackDoubleIconSVG } from './arrow-back-double-icon.svg'

export const IconArrowBackDouble: FC<IProps> = ({ color = 'gray-500', ...restProps }) => (
  <Icon {...restProps} color={color}>
    <ArrowBackDoubleIconSVG />
  </Icon>
)
