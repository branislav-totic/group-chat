import { css, createGlobalStyle } from 'styled-components';

export const FontLoader = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans';
    src: url('fonts/NotoSans.woff2') format('woff2'),
        url('fonts/NotoSans.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
      font-family: 'Noto Sans';
      src: url('fonts/NotoSans-Bold.woff2') format('woff2'),
          url('fonts/NotoSans-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }
`;

export const fontRegular = css`
  font-family: 'Noto Sans';
  font-weight: normal;
`;

export const fontBold = css`
  font-family: 'Noto Sans';
  font-weight: bold;
`;
