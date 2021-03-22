import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box
  }
  
  body {
    color: #333;
    width: 100vw;
    height: 100vh;
  }

  container {
      background: red;
      margin: 2em;
      border: 1px solid red;
  }

  label {
      font-size: 1.5em;
      font-weight: bold;
  }

  h1 {
    margin: 0;
    padding: 0;
  }
`

