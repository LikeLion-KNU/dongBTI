import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useAxios from "@/hooks/useAxios";

import dongari from "@/assets/images/dongari.svg";

import EmojiAnimation from "../components/display/EmojiAnimation";
import TypingAnimation from "../components/display/TypingAnimation";
import { LoadingContainer, DongariImage } from "./ResultLoading.style";
import { useUserInfo } from "@/store/store";

const ResultLoading: React.FC = () => {
    let navigate = useNavigate();

    const texts = [
        "당신의 취향을 분석하는 중...",
        "잠시만 기다려 주세요...",
        "취향 분석 중...",
        "동아리 운명 분석 중... ",
    ];

    const typingInterval = 30;
    const deleteInterval = 10;
    const waitInterval = 1500;

    const major = useUserInfo((state) => state.major) || "humanities";
    const { resultType } = useParams();

    const {
        data: data,
        loading: loading,
        error: error,
    } = useAxios(
        {
            url: "/stats",
            method: "POST",
            data: { department: major, mbti: resultType },
        },
        [major, resultType],
    );

    useEffect(() => {
        if (data) {
            const timer = setTimeout(() => {
                navigate(`/result/${resultType}`);
            }, 1540 * 6);
            return () => clearTimeout(timer);
        }
    }, [data]);

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
