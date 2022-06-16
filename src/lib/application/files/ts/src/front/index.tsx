import React from 'react'
import { createRoot } from 'react-dom/client'
import reportWebVitals from 'front/reportWebVitals'
import { App } from '@fission-js/fission'

import { Example } from '../entities'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App gqlUri={'http://localhost:3001/graphql'} entities={[Example]} />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
