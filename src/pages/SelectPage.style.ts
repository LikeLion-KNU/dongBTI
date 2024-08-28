import styled from "@emotion/styled";

export const SelectPageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #568;

    .cardWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .optionContainer {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: auto;
        margin-top: 20px;
    }

    .optionWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .optionLeft,
    .optionRight {
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        padding: 10px 20px;
        overflow: hidden; /* 내용이 넘치면 숨김 */
        white-space: nowrap; /* 텍스트를 한 줄로 유지 */
        text-overflow: clip; /* 텍스트가 넘치면 그냥 잘라냄 */
    }

    .optionLeft {
        height: 100%;
        background-color: #d9d9d9;
        color: #000;
        border-radius: 0 15px 15px 0;
    }

    .optionRight {
        height: 100%;
        background-color: #37cdcd;
        color: #fff;
        border-radius: 15px 0 0 15px;
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        padding: 50px;
    }

    .item {
        position: relative;
        background-color: #fff;
        width: 60vw;
        max-width: 370px;
        aspect-ratio: 3 / 4; /* 가로 세로 비율을 4:3으로 설정 */

        box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.3);
        border-radius: 20px;
        background-size: cover;
        background-position: center;
    }
`;
