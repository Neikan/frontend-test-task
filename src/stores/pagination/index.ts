import { makeObservable, observable, action } from 'mobx'

import { START_PAGE } from '@consts/common'

import { RootStore } from '@stores'

import { IPaginationStore } from './types'

export const PaginationStore = (rootStore: RootStore): IPaginationStore => {
  return makeObservable(
    {
      rootStore,

      allPages: START_PAGE,
      pageNumber: START_PAGE,

      getFirstPage () {
        this.pageNumber = 1
      },
      getBackPage () {
        this.pageNumber--
      },
      getNextPage () {
        this.pageNumber++
      },
      getLastPage () {
        this.pageNumber = this.allPages
      }
    },
    {
      allPages: observable,
      pageNumber: observable,
      getFirstPage: action.bound,
      getBackPage: action.bound,
      getNextPage: action.bound,
      getLastPage: action.bound
    }
  )
}
