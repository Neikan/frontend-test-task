import { useCharactersStore } from '@contexts/characters'
import React, { FC } from 'react'

import { Character } from '../Character'

export const CharactersList: FC = () => {
  const { characters } = useCharactersStore().charactersStore

  return (
    <section className='characters'>
      <ul className='characters__list'>
        {characters.length ? characters.map((character) => <Character key={character.id} character={character} />) : null}
      </ul>
    </section>
  )
}
