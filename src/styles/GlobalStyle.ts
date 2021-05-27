import { createGlobalStyle } from 'styled-components'

export const palet = {
  primary: '#1D1D1D',
  secundary: '#262036',
  textPrimary: '#CCCCCC',
  backgroundLight: '#454545',
  backgroundDark: '#262626'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    background-color: ${ palet.primary };
    color: #E1E1E6;
  }
`
