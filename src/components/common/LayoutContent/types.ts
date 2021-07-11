import { ReactNode } from 'react'

export interface IContentProps {
  children: ReactNode
  classes?: string
  /**
   * Параметр необходим для случаев, если нужно отключить скролл
   * По умолчанию - true
   */
  isScrollable?: boolean

  /**
   * Параметр необходим для случаев, если пагинации контента нет
   * По умолчанию - true
   */
  withPagination?: boolean
}
