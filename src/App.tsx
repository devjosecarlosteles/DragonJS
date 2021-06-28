import React from 'react'
import { render } from 'react-dom'  
import Routes from './routes'
import { GlobalStyle } from './styles/GlobalStyle'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  )
}

render(<App />, mainElement)
