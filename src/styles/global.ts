import { css } from "@emotion/react";

export const GlobalStyle = css`
    @font-face {
        font-family: 'NanumSquare Neo Regular';
        src: url('/src/assets/font/NanumSquareNeoTTF-bRg.woff') format('woff');
    }

    @font-face {
        font-family: 'NanumSquare Neo Light';
        src: url('/src/assets/font/NanumSquareNeoTTF-aLt.woff') format('woff');
    }
    
    @font-face {
        font-family: 'NanumSquare Neo Bold';
        src: url('/src/assets/font/NanumSquareNeoTTF-cBd.woff') format('woff');
             
    }

    body {
        font-family: 'NanumSquare Neo Regular', sans-serif;
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
