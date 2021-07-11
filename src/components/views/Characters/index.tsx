import React, { FC, useState } from 'react'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { observer } from 'mobx-react'
import { runInAction } from 'mobx'

import charactersService from '@services/characters'

import { ResponseCode, START_PAGE } from '@consts/common'

import { handleCatchAxiosError } from '@utils/common'

import { paginationStore } from '@stores'

import { LayoutContent, LayoutTitle, Pagination } from '@components/common'
import { CharactersList } from './components/CharactersList'
import { ICharacter } from './types'

const store = paginationStore()

export const Characters: FC = observer(() => {
  const [characters, setCharacters] = useState<ICharacter[]>([])

  const handleGetCharacters = (config?: AxiosRequestConfig): void => {
    charactersService
      .getCharacters(config)
      .then(({ data, status }: AxiosResponse) => {
        if (status === ResponseCode.GET) {
          setCharacters(data.results)

          runInAction(() => {
            store.allPages = data.info.pages
          })
        }
      })
      .catch(handleCatchAxiosError)
  }

  handleGetCharacters({ params: { page: store.pageNumber } })

  const isPagination = store.allPages !== START_PAGE

  return (
    <>
      <LayoutTitle title='Characters' />

      {characters.length ? (
        <>
          <LayoutContent withPagination={isPagination}>
            <section className='characters'>
              <CharactersList characters={characters} />
            </section>
          </LayoutContent>

          {isPagination ? (
            <Pagination
              allPages={store.allPages}
              pageNumber={store.pageNumber}
              onGetFirstPage={store.getFirstPage}
              onGetBackPage={store.getBackPage}
              onGetNextPage={store.getNextPage}
              onGetLastPage={store.getLastPage}
            /> ) : null}
        </> ) : null
      }
    </>
  )
})
