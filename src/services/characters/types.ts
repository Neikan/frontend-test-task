import { ICharacter } from '@components/views/Characters/types'
import { Nullable } from '@types'

export interface IGettedCharactersData {
  info: {
    count: number
    pages: number
    next: Nullable<string>
    prev: Nullable<string>
  }
  results: ICharacter[]
}
