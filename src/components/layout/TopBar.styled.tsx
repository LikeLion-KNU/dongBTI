import styled from "@emotion/styled";

export const TopBarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    width: 100%;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    width: 100%;
    height: 60px;

    // RootLayout의 max-width를 따라갑니다.
    max-width: 800px;

    // RootLayout의 max-width를 따라갑니다.
    max-width: 800px;
`;

export const TopBarContainer = styled.div`
    position: relative;

    display: flex;
    height: 60px;

    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #e0e0e0;
    font-weight: 800;
    background-color: white;

    & > img {
        position: absolute;
        left: 15px;
    }
`;
