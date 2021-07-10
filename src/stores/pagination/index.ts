import { makeObservable, observable, action } from 'mobx'
import { IPaginationStore } from './types'

export const paginationStore = (): IPaginationStore => {
  return makeObservable(
    {
      allPages: 1,
      pageNumber: 1,

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
