import cn from 'classnames'
import React, { FC } from 'react'

import { Chars, UNKNOWN_VALUE } from '@consts/common'

import { ICharacterDescriptionProps as IProps } from './types'

export const CharacterDescription: FC<IProps> = ({ classToValue, title, value }) => {
  const isNotValue = !value || value === UNKNOWN_VALUE

  const classesToValue = cn(
    'character__description--value',
    {
      'value--unknown': isNotValue
    },
    classToValue
  )
  const renderedValue = isNotValue ? Chars.QUESTIONS : value

  return (
    <li className='character__description'>
      <span className='character__description--title'>{title}:</span>
      <span className={classesToValue} title={renderedValue}>
        {renderedValue}
      </span>
    </li>
  )
}
