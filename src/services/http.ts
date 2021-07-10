import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, ResponseType } from 'axios'

import { BASE_URL } from '@consts/common'
import { ResponseTypes } from '@consts/enumTypes'

class Http {
  private readonly axiosInstance = (responseType: ResponseType = ResponseTypes.JSON): AxiosInstance =>
    axios.create({
      baseURL: BASE_URL,
      responseType
    })

  constructor () {
    this.addInterceptors()
  }

  private addInterceptors (): void {
    this.axiosInstance().interceptors.request.use((config) => {
      return config
    })

    this.axiosInstance().interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
  }

  private setHeaders (config: AxiosRequestConfig): void {
    const { headers = {} } = config

    config.headers = {
      ...headers
    }
  }

  async get (
    url: string,
    config: AxiosRequestConfig = {},
    type: ResponseType = ResponseTypes.JSON
  ): Promise<any> {
    this.setHeaders(config)

    return await this.axiosInstance(type)?.get(url, config)
  }
}

export default new Http()
