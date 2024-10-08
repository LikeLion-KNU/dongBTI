import React from "react";

import { useSubmitResult } from "@/hooks/useSubmitResult";

import dongari from "@/assets/images/dongari.svg";

import EmojiAnimation from "../components/display/EmojiAnimation";
import TypingAnimation from "../components/display/TypingAnimation";
import { LoadingContainer, DongariImage } from "./ResultLoading.style";

const ResultLoading: React.FC = () => {
    const texts = [
        "당신의 취향을 분석하는 중...",
        "잠시만 기다려 주세요...",
        "취향 분석 중...",
        "동아리 운명 분석 중... ",
    ];

    const typingInterval = 30;
    const deleteInterval = 10;
    const waitInterval = 1500;

    useSubmitResult();

    return (
        <LoadingContainer>
            <DongariImage src={dongari} alt="동BTI 로고이미지" />
            <TypingAnimation
                texts={texts}
                typingInterval={typingInterval}
                deleteInterval={deleteInterval}
                waitInterval={waitInterval}
            />
            <EmojiAnimation />
        </LoadingContainer>
    );
};

export default ResultLoading;
