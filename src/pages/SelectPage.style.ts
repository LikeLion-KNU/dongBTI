import { motion } from "framer-motion";

import styled from "@emotion/styled";

export const SelectPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SelectPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 8vh;
    overflow: hidden;
    height: 100%;
`;

export const Item = styled(motion.div)`
    position: relative;
    background-color: #fff;
    width: min(80vw, 400px);

    aspect-ratio: 3 / 4; /* 가로 세로 비율을 4:3으로 설정 */
    border-radius: 20px;
    background-size: cover;
    background-position: center;
`;

export const ItemWrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;
export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: auto;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`;

export const OptionWrapper = styled.div`
    position: fixed;
    bottom: 3rem;
    width: min(100%, 800px);
    display: flex;
    justify-content: space-between;
`;

export const OptionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const OptionLeft = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    overflow: hidden; /* 내용이 넘치면 숨김 */
    white-space: nowrap; /* 텍스트를 한 줄로 유지 */
    text-overflow: clip; /* 텍스트가 넘치면 그냥 잘라냄 */
    background-color: #d9d9d9;
    color: #000;
    border-radius: 0 15px 15px 0;
`;

export const OptionRight = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    overflow: hidden; /* 내용이 넘치면 숨김 */
    white-space: nowrap; /* 텍스트를 한 줄로 유지 */
    text-overflow: clip; /* 텍스트가 넘치면 그냥 잘라냄 */
    background-color: #37cdcd;
    color: #fff;
    border-radius: 15px 0 0 15px;
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
