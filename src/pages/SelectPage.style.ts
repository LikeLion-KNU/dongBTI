import styled from "@emotion/styled";

export const SelectPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

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
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .optionLeft,
    .optionRight {
        display: flex;

        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 10px 20px;
        overflow: hidden; /* 내용이 넘치면 숨김 */
        white-space: nowrap; /* 텍스트를 한 줄로 유지 */
        text-overflow: clip; /* 텍스트가 넘치면 그냥 잘라냄 */
    }

    .optionLeft {
        background-color: #d9d9d9;
        color: #000;
        border-radius: 0 15px 15px 0;
    }

    .optionRight {
        background-color: #37cdcd;
        color: #fff;
        border-radius: 15px 0 0 15px;
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        padding: 80px;
    }

    .item {
        position: relative;
        background-color: #fff;
        width: 80vw;
        max-width: 400px;
        aspect-ratio: 3 / 4; /* 가로 세로 비율을 4:3으로 설정 */

        border-radius: 20px;
        background-size: cover;
        background-position: center;
    }
    .box {
        width: 200px;
        height: 200px;
        background: var(--accent);
        background-color: #000;
    }
`;

export const SelectPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100vh;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7); /* 반투명 검정 배경 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
`;

export const ModalContent = styled.div`
    background: transparent; /* 배경을 투명하게 설정 */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #fff; /* 텍스트를 흰색으로 설정 */
`;
