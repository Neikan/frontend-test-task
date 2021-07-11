import React, { FC, useEffect, useState } from 'react'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { runInAction } from 'mobx'

import { ResponseCode, START_PAGE } from '@consts/common'

import { handleCatchAxiosError } from '@utils/common'

import { PaginationStore } from '@stores/pagination'

import { useCharactersStore } from '@contexts/characters'

import { LayoutContent, LayoutTitle, Pagination } from '@components/common'
import { CharactersList } from './components/CharactersList'

import { ICharacter } from './types'

const paginationStore = PaginationStore()

export const Characters: FC = () => {
  const { getCharacters } = useCharactersStore().charactersStore
  const [characters, setCharacters] = useState<ICharacter[]>([])

  const handleGetCharacters = (config?: AxiosRequestConfig): void => {
      getCharacters(config)
        .then(({ data, status }: AxiosResponse) => {
          if (status === ResponseCode.GET) {
            setCharacters(data.results)

            runInAction(() => {
              paginationStore.allPages = data.info.pages
            })
          }
        })
        .catch(handleCatchAxiosError)
  }

  useEffect(() => {
    runInAction(() => handleGetCharacters({ params: { page: paginationStore.pageNumber } }))
  })

  const isPagination = paginationStore.allPages !== START_PAGE

  return (
    <>
      <LayoutTitle title='Characters' />

      {(
        <>
          <LayoutContent withPagination={isPagination}>
            <section className='characters'>
              <CharactersList characters={characters} />
            </section>
          </LayoutContent>

          {isPagination ? (
            <Pagination
              allPages={paginationStore.allPages}
              pageNumber={paginationStore.pageNumber}
              onGetFirstPage={paginationStore.getFirstPage}
              onGetBackPage={paginationStore.getBackPage}
              onGetNextPage={paginationStore.getNextPage}
              onGetLastPage={paginationStore.getLastPage}
            /> ) : null}
        </> )
      }
    </>
  )
}
