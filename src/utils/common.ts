import { AxiosError } from 'axios'

export const handleCatchAxiosError = (err: AxiosError): void => {
  alert(err)
}
