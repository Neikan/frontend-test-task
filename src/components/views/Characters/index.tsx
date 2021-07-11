import React, { FC, useEffect, useState } from 'react'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { runInAction } from 'mobx'

import { ResponseCode, START_PAGE } from '@consts/common'

import { handleCatchAxiosError } from '@utils/common'

import { useCharactersStore } from '@contexts/characters'

import { LayoutContent, LayoutTitle, Pagination } from '@components/common'
import { CharactersList } from './components/CharactersList'

import { ICharacter } from './types'
import { usePaginationStore } from '@contexts/pagination'

export const Characters: FC = () => {
  const { getCharacters } = useCharactersStore().charactersStore

  const { paginationStore } = usePaginationStore()
  const { getBackPage, getFirstPage, getLastPage, getNextPage } = paginationStore

  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [count, setCount] = useState<number>(0)

  const handleGetCharacters = (config?: AxiosRequestConfig): void => {
    getCharacters(config)
      .then(({ data, status }: AxiosResponse) => {
        if (status === ResponseCode.GET) {
          setCharacters(data.results)

          runInAction(() => {
            paginationStore.allPages = data.info.pages
          })

          setCount(1)
        }
      })
      .catch(handleCatchAxiosError)
  }

  useEffect(() => {
    if (count === 0) {
      handleGetCharacters({ params: { page: paginationStore.pageNumber } })
    }
  })

  const isPagination = paginationStore.allPages !== START_PAGE

  const goToFirstPage = (): void => {
    setCount(0)
    getFirstPage()
  }

  const goToBackPage = (): void => {
    setCount(0)
    getBackPage()
  }

  const goToNextPage = (): void => {
    setCount(0)
    getNextPage()
  }

  const goToLastPage = (): void => {
    setCount(0)
    getLastPage()
  }

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
              allPages={paginationStore.allPages}
              pageNumber={paginationStore.pageNumber}
              onGetFirstPage={goToFirstPage}
              onGetBackPage={goToBackPage}
              onGetNextPage={goToNextPage}
              onGetLastPage={goToLastPage}
            />
          ) : null}
        </>
      ) : null}
    </>
  )
}
