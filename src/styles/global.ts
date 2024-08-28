import { css } from "@emotion/react";

export const GlobalStyle = css`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: "NanumSquareNeo", sans-serif;
    }

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
