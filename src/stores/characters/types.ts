import { CharacterGender, CharacterStatus } from '@consts/enumTypes'

export interface ICharacterLocation {
  name: string
  url: string
}

export interface ICharacter {
  // The id of the character
  id: number

  // The name of the character
  name: string

  // The status of the character ('Alive', 'Dead' or 'unknown')
  status: CharacterStatus

  // The species of the character
  species: string

  // The type or subspecies of the character
  type: string

  // The gender of the character ('Female', 'Male', 'Genderless' or 'unknown')
  gender: CharacterGender

  // Name and link to the character's origin / last known location endpoint location
  origin: ICharacterLocation
  location: ICharacterLocation

  // Link to the character's image
  image: string

  // List of episodes in which this character appeared
  episode: string[]

  // Link to the character's own URL endpoint
  url: string

  // Time at which the character was created in the database
  created: string
}
