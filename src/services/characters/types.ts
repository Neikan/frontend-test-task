import { Nullable } from '@types'
import { ICharacter } from '@stores/characters/types'

export interface IGettedCharactersData {
  info: {
    count: number
    pages: number
    next: Nullable<string>
    prev: Nullable<string>
  }
  results: ICharacter[]
}
