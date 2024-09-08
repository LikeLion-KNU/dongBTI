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

        background:
            linear-gradient(to bottom, transparent 39px, #dcfcf9 39px) 0 0 / 100vw 40px repeat-y,
            linear-gradient(to right, transparent 39px, #dcfcf9 39px) 0 0 / 40px 100vh repeat-x #f6f9ff;
    }

    img {
        display: block;
        object-fit: cover;
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

        --font-weight-light: 300;
        --font-weight-regular: 400;
        --font-weight-bold: 700;
        --font-weight-extrabold: 800;
        --font-weight-heavy: 900;

        --color-primary: #37cdcd;
        --color-likelion: #ff7b17;
        --color-primary-300: #64e4e0;
        --color-primary-200: #9df2ec;
        --color-primary-100: #cef9f5;
        --color-primary-50: #f1fcfb;
    }
`;
