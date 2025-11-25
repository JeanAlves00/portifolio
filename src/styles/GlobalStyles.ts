import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #1A0033;
    overflow: hidden;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
