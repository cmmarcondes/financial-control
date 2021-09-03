import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    overflow-x: hidden !important;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    &:hover {
      text-decoration: none;
    }
  }

  [disabled] {
    cursor: not-allowed;
  }
`;
