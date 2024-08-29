import React from "react";
import TypingAnimation from "../components/display/TypingAnimation";
import EmojiAnimation from "../components/display/EmojiAnimation";
import { LoadingContainer } from "./ResultLoading.style";

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

  return (
    <LoadingContainer>
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