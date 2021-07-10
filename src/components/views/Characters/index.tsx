import { AxiosError, AxiosResponse } from 'axios'
import React, { Component, ReactElement } from 'react'

import charactersService from '@services/characters'

import { ResponseCode } from '@consts/common'

import { LayoutContent, LayoutTitle } from '@components/common'
import { CharactersList } from './components/CharactersList'

import { ICharactersState as IState } from './types'

const initialState: IState = {
  characters: []
}

export class Characters extends Component<{}, IState> {
  constructor (props: {}) {
    super(props)

    this.state = { ...initialState }
  }

  public componentDidMount (): void {
    charactersService
      .getCharacters()
      .then(({ data, status }: AxiosResponse) => {
        if (status === ResponseCode.GET) {
          this.setState({ characters: data.results })
        }
      })
      .catch(this.handleCatchError)
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
      </>
    )
  }

  private readonly handleCatchError = (err: AxiosError): void => {
    alert(err)
  }
}
