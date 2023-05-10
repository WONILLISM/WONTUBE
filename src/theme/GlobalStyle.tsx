import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul, li, ol {
    margin:0;
    padding:0;
    list-style:none;
    list-style-type:none;
  }
  
  button {
    all: unset;
    cursor: pointer;
  }

  html, body {
    font-family: 'Noto Sans KR', sans-serif;

    margin:0;
    padding:0;
    width:100%;
    height: 100%;
    background-color:#0A131D;
    color: #ffffff;
  }  
`;

export default GlobalStyle;
