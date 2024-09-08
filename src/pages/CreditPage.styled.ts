import styled from "@emotion/styled";

export const Content = styled.div`
    margin-top: 90px;
`;

export const FixedBackground = styled.div`
    position: fixed;
    top: 60px;
    left: 0;
    background: linear-gradient(157deg, rgba(93, 238, 238, 1) 0%, rgba(255, 255, 255, 1) 100%);
    width: 100vw;
    height: 100vh;
    z-index: -100;
`;

export const TitleHeader = styled.div`
    padding-left: 10px;

    display: flex;
    justify-content: left;
    align-items: end;
    gap: 6px;

    margin-bottom: 16px;

    & > span {
        color: white;
        text-shadow: 2px 2px 8px #00000040;
    }
`;

export const MessageBox = styled.div`
    padding: 20px;
    box-sizing: border-box;
    border-radius: 20px;

    background-color: white;
    box-shadow: 2px 2px 30px #00000030;

    margin-bottom: 50px;
`;
