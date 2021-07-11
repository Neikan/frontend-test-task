import { AxiosError } from 'axios'

// ToDo сделать показ всплывающих нотификаций
export const handleCatchAxiosError = (err: AxiosError): void => {
  alert(err)
}
