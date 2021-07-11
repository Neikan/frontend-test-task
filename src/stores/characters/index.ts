import { action, observable, runInAction } from 'mobx'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

import charactersService from '@services/characters'

import { ResponseCode } from '@consts/common'

import { RootStore } from '@stores'

import { ICharacter } from './types'

export class CharactersStore {
  rootStore: RootStore

  constructor (rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable
  characters: ICharacter[] = []

  @action
  getCharacters = (config?: AxiosRequestConfig): Promise<any> =>
    charactersService.getCharacters(config).then((resp: AxiosResponse) => {
      if (resp.status === ResponseCode.GET) {
        runInAction(() => {
          this.characters = resp.data.results
        })
      }

      return resp
    })
}
