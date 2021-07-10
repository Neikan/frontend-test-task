import { AxiosResponse, AxiosRequestConfig } from 'axios'

import AbstractHttpService from '../abstractHttpService'

import urls from '@consts/urls'

import { IGettedCharactersData } from './types'

class CharactersService extends AbstractHttpService {
  async getCharacters (config?: AxiosRequestConfig): Promise<AxiosResponse<IGettedCharactersData>> {
    const url = urls.characters

    const response: AxiosResponse<IGettedCharactersData> = await this._http.get(url, config)

    return response
  }
}

export default new CharactersService()
