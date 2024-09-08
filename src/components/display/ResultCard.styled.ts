import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface ResultCardStyleProps extends React.ComponentProps<"div"> {
    color: string;
}
export const ResultCardWrapper = styled.div<ResultCardStyleProps>`
    position: relative;
    margin-top: 30px;

    width: 100%;
    max-width: 390px;
    height: 230px;
    border-radius: 20px;

    overflow: hidden;

    display: flex;

    background-color: ${(props) => props.color};
    box-shadow: 4px 4px 16px #0000001f;

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(135deg, #ffffff00 0%, #ffffff5a 100%);
    }
`;

const wiggleRotate = keyframes`
    0% {
        transform: rotate(-8deg);
    }
    50% {
        transform: rotate(8deg);
    }
    100% {
        transform: rotate(-8deg);
    }
`;

const LeftContent = styled.div`
    width: 38%;
    background-color: #ffffff2f;

    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        animation: ${wiggleRotate} 3s infinite ease-in-out;
    }
`;

const RightContent = styled.div`
    padding: 30px 20px;

    height: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const RSC = {
    LeftContent,
    RightContent,
};
