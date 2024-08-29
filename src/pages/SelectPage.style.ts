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
