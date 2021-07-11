import { CharactersStore } from './characters'
import { PaginationStore } from './pagination'

import { IPaginationStore } from './pagination/types'

export class RootStore {
  charactersStore: CharactersStore
  paginationStore: IPaginationStore

  constructor () {
    this.charactersStore = new CharactersStore(this)
    this.paginationStore = PaginationStore(this)
  }
}
