/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const rootStyles = css`
  * {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif !important;
  }
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
    max-width: 100vw;
  }
  #root {
    display: flex;
    flex-direction: column;
  }
`;

const colors = {
  mainDark: '#000000',
  mainBlue: '#004ED7',
  mainGray: '#F2F2F2',
  eerieBlack: '#222222',
  cultured: '#F1F1F1',
  lightGray: '#bfbfbf',
};

const styles = {
  rootStyles,
  colors,
};
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
export const breakpoints = [480, 600, 900, 1200];

export default styles;
