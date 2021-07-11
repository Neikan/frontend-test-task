import React, { FC } from 'react'
import { observer } from 'mobx-react'

import { START_PAGE } from '@consts/common'

import { Button, IconArrowBack, IconArrowBackDouble, IconArrowNext, IconArrowNextDouble } from '@components/common'

import { IPaginationProps as IProps } from './types'

export const Pagination: FC<IProps> = observer(({ allPages, pageNumber, onGetFirstPage, onGetBackPage, onGetNextPage, onGetLastPage }) => {
  const isDisabledPrevButton = pageNumber === START_PAGE
  const isDisabledNextButton = pageNumber === allPages

  return (
    <div className='pagination'>
      <Button isDisabled={isDisabledPrevButton} onClick={onGetFirstPage}>
        <IconArrowBackDouble />
      </Button>
      <Button isDisabled={isDisabledPrevButton} onClick={onGetBackPage}>
        <IconArrowBack />
      </Button>
      {/* // ToDo заменить на инпут */}
      <span className='pagination__page'>{pageNumber}</span>
      <Button isDisabled={isDisabledNextButton} onClick={onGetNextPage}>
        <IconArrowNext />
      </Button>
      <Button isDisabled={isDisabledNextButton} onClick={onGetLastPage}>
        <IconArrowNextDouble />
      </Button>
    </div>
  )
})
