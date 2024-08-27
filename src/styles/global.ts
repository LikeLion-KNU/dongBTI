import { css } from "@emotion/react";

export const GlobalStyle = css`
    @font-face {
        font-family: 'NanumSquare Neo';
        src: url('@/assets/font/NanumSquareNeo-aLt.woff') format('woff'),
             url('@/assets/font/NanumSquareNeo-bRg.woff') format('woff');
             url('@/assets/font/NanumSquareNeo-cBd.woff') format('woff');
             url('@/assets/font/NanumSquareNeo-dEb.woff') format('woff');
             url('@/assets/font/NanumSquareNeo-eHv.woff') format('woff');

        font-weight: normal;
        font-style: normal;
    }

    body {
        font-family: 'NanumSquare Neo', sans-serif;
    }


    margin: 0;
    padding: 0;
    border: 0;

    box-sizing: border-box;

    img {
        display: block;
    }
    a {
        text-decoration: none;
    }
        
    :root {
        --font-size-xl: 24px;
        --font-size-l: 22px;
        --font-size-m: 18px;
        --font-size-s: 16px;
        --font-size-xs: 13px;

        --color-primary: #37cdcd;
        --color-primary-300: #64e4e0;
        --color-primary-200: #9df2ec;
        --color-primary-100: #cef9f5;
        --color-primary-50: #f1fcfb;
    }
`;
