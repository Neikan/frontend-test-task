import React, { FC } from 'react'

import { CharacterStatusClass } from '@consts/common'

import { ButtonToFavorite } from '@components/common/buttons'
import { CharacterDescription } from './components/CharacterDescription'

import { ICharacterProps as IProps } from './types'

export const Character: FC<IProps> = ({
  character: { gender, image, location, name, origin, species, status, type }
}) => {
  return (
    <li className='characters__item character'>
      <div className='character__info character__info--first'>
        <span className='character__name'>{name}</span>
        <ButtonToFavorite classes='character__toFavorite' isActive onClick={() => null} />
      </div>

      <div className='character__info character__info--second'>
        <img src={image} alt={name} className='character__image' />
        <ul className='character__list'>
          <CharacterDescription title='Status' value={status} classToValue={CharacterStatusClass[status]} />
          <CharacterDescription title='Gender' value={gender} />
          <CharacterDescription title='Species' value={species} />
          <CharacterDescription title='Type' value={type} />
        </ul>
      </div>

      <ul className='character__list character__list--last'>
        <CharacterDescription title='Origin' value={origin.name} />
        <CharacterDescription title='Location' value={location.name} />
      </ul>
    </li>
  )
}
