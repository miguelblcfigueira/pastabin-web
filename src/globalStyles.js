import { createGlobalStyle } from 'styled-components';

const PRIMARY_COLOR_DARKER = '#23272A';
const PRIMARY_COLOR_LIGHTER = '#3e4248';
const SECONDARY_COLOR = '#5865F2';
const WHITE = '#F6F6F6';

const CONTENT_MAX_WIDTH = '1200px';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${PRIMARY_COLOR_DARKER};
    color: ${WHITE};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
  }
`;

export {
  PRIMARY_COLOR_DARKER,
  PRIMARY_COLOR_LIGHTER,
  SECONDARY_COLOR,
  WHITE,
  CONTENT_MAX_WIDTH,
};
export default GlobalStyle;
