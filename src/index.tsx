import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import App from './App'

const root = document.querySelector('#root')

const init = (): void => {
  ReactDOM.render(<App />, root)
}

init()

serviceWorkerRegistration.unregister()
