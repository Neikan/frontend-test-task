export interface IPaginationProps {
  allPages: number
  pageNumber: number
  onGetFirstPage: () => void
  onGetBackPage: () => void
  onGetNextPage: () => void
  onGetLastPage: () => void
}
