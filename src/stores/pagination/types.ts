export interface IPaginationStore {
  allPages: number
  pageNumber: number
  getFirstPage: () => void
  getBackPage: () => void
  getNextPage: () => void
  getLastPage: () => void
}
