import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const root = document.querySelector('#root')

const init = (): void => {
  ReactDOM.render(<App />, root)
}

init()
