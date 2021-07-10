import React, { FC } from 'react'

import { Icon } from '../../Icon'

import { IIconProps as IProps } from '../../Icon/types'

import { ReactComponent as ArrowBackIconSVG } from './arrow-back-icon.svg'

export const IconArrowBack: FC<IProps> = ({ color = 'gray-500', ...restProps }) => (
  <Icon {...restProps} color={color}>
    <ArrowBackIconSVG />
  </Icon>
)
