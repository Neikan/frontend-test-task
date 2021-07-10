import React, { FC } from 'react'
import { observer } from 'mobx-react'

import { Button, IconArrowBack, IconArrowBackDouble, IconArrowNext, IconArrowNextDouble } from '@components/common'

import { paginationStore } from '@stores'

import { IPaginationProps as IProps } from './types'

const { allPages, pageNumber, getFirstPage, getBackPage, getNextPage, getLastPage } = paginationStore()

export const Pagination: FC<IProps> = observer(() => {
  const isDisabledPrevButton = pageNumber === 1
  const isDisabledNextButton = pageNumber === allPages

  return (
    <div className='pagination'>
      <Button isDisabled={isDisabledPrevButton} onClick={getFirstPage}>
        <IconArrowBackDouble />
      </Button>
      <Button isDisabled={isDisabledPrevButton} onClick={getBackPage}>
        <IconArrowBack />
      </Button>
      {/* заменить на инпут */}
      <span className='pagination__page'>{pageNumber}</span>
      <Button isDisabled={isDisabledNextButton} onClick={getNextPage}>
        <IconArrowNext />
      </Button>
      <Button isDisabled={isDisabledNextButton} onClick={getLastPage}>
        <IconArrowNextDouble />
      </Button>
    </div>
  )
})
