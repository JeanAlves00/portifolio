import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    background-color: #1A0033;
  }
`

export default GlobalStyles;