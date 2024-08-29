import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(100%, 800px);
    height: 100vh;
    background: rgba(0, 0, 0, 0.7); /* 반투명 검정 배경 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #fff;
`;
