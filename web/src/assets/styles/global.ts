import { createGlobalStyle } from 'styled-components'
import colors from './colors'

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #FFF;
    background: ${colors.backgroundGray};
  }

  body, input, button, textarea {
    font: 600 18px Nunito, sans-serif
  }

  button, input, textarea {
    border: 0;
  }

  button {
    cursor: pointer;
  }
`
