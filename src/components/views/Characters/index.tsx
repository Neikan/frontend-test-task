import React, { Component, ReactElement } from 'react'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { observer } from 'mobx-react'
import { runInAction } from 'mobx'

import charactersService from '@services/characters'

import { ResponseCode } from '@consts/common'

import { paginationStore } from '@stores'

import { LayoutContent, LayoutTitle, Pagination } from '@components/common'
import { CharactersList } from './components/CharactersList'

import { ICharactersState as IState } from './types'

const store = paginationStore()

const initialState: IState = {
  characters: []
}

export const Characters = observer(class Characters extends Component<{}, IState> {
  constructor (props: {}) {
    super(props)

    this.state = { ...initialState }
  }

  public componentDidMount (): void {
    const params = { page: store.pageNumber }

    this.handleGetCharacters({ params })
  }

  public componentDidUpdate (): void {
    const params = { page: store.pageNumber }

    this.handleGetCharacters({ params })
  }

  public render (): ReactElement {
    const { characters } = this.state

    return (
      <>
        <LayoutTitle title='Characters' />

        <LayoutContent>
          <section className='characters'>
            <CharactersList characters={characters} />
          </section>
        </LayoutContent>

        <Pagination
          allPages={store.allPages}
          pageNumber={store.pageNumber}
          onGetFirstPage={store.getFirstPage}
          onGetBackPage={store.getBackPage}
          onGetNextPage={store.getNextPage}
          onGetLastPage={store.getLastPage}
        />
      </>
    )
  }

  public readonly handleGetCharacters = (config?: AxiosRequestConfig): void => {
    charactersService
      .getCharacters(config)
      .then(({ data, status }: AxiosResponse) => {
        if (status === ResponseCode.GET) {
          this.setState({ characters: data.results })

          runInAction(() => {
            store.allPages = data.info.pages
          })
        }
      })
      .catch(this.handleCatchError)
  }

  private readonly handleCatchError = (err: AxiosError): void => {
    alert(err)
  }
})
