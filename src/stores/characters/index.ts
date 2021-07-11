import { action, observable, runInAction } from 'mobx'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

import charactersService from '@services/characters'

import { ResponseCode } from '@consts/common'

import { ICharacter } from '@components/views/Characters/types'

export class CharactersStore {
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
