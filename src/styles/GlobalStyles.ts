// GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #F5F5F5;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
