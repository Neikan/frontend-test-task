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
  const { getBackPage, getFirstPage, getLastPage, getNextPage, pageNumber } = paginationStore

  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [isLoaded, setLoaded] = useState<boolean>(false)

  const handleGetCharacters = (config?: AxiosRequestConfig): void => {
    getCharacters(config)
      .then(({ data, status }: AxiosResponse) => {
        if (status === ResponseCode.GET) {
          setCharacters(data.results)

          runInAction(() => {
            paginationStore.allPages = data.info.pages
          })

          setLoaded(true)
        }
      })
      .catch(handleCatchAxiosError)
  }

  useEffect(() => {
    if (!isLoaded) {
      handleGetCharacters({ params: { page: pageNumber } })
    }
  })

  const isPagination = paginationStore.allPages !== START_PAGE

  const goToFirstPage = (): void => {
    setLoaded(false)
    getFirstPage()
  }

  const goToBackPage = (): void => {
    setLoaded(false)
    getBackPage()
  }

  const goToNextPage = (): void => {
    setLoaded(false)
    getNextPage()
  }

  const goToLastPage = (): void => {
    setLoaded(false)
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
              pageNumber={pageNumber}
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
