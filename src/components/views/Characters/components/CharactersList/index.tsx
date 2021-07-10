import React, { FC } from 'react'

import { Character } from '../Character'

import { ICharactersListProps as IProps } from './types'

export const CharactersList: FC<IProps> = ({ characters }) => {
  return (
    <ul className='characters__list'>
      {characters.length ? characters.map((character) => (
        <Character key={character.id} character={character} />
      )) : null}
    </ul>
  )
}
