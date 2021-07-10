import { CharacterStatus } from './enumTypes'

export const BASE_URL = 'https://rickandmortyapi.com/api/'

export const ResponseCode = {
  DEL: 204,
  GET: 200,
  POST: 201,
  PUT: 201,
  ERROR: 400
}

export const Chars = {
  QUESTIONS: '???'
}

export const UNKNOWN_VALUE = 'unknown'

export const CharacterStatusClass = {
  [CharacterStatus.ALIVE]: 'value--success',
  [CharacterStatus.DEAD]: 'value--danger'
}
