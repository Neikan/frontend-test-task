import { FormEvent, MouseEvent, ReactNode } from 'react'

type TButtonType = 'button' | 'submit'

export interface IButtonProps {
  children: ReactNode
  classes?: string
  isActive?: boolean
  isDisabled?: boolean
  onClick?: (e?: FormEvent<HTMLButtonElement> | MouseEvent<HTMLButtonElement> | MouseEvent<HTMLSpanElement>) => void
  title?: string
  type?: TButtonType
}
