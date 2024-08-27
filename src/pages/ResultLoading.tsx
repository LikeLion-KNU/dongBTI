import React, { useState, useEffect } from "react";
import Hangul from "hangul-js"; //npm install hangul-js 필요
import { LoadingContainer, ZoomAnimation, TypingText } from "./ResultLoading.style";

const ResultLoading: React.FC = () => {
  const emojis = ["🐶", "🏃‍♂️", "🏋️", "🏓", "🎤", "⚽", "🎸"];
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isCursorBlinking, setIsCursorBlinking] = useState(false); // 커서 깜빡임 상태
  const texts = [
    "당신의 취향을 분석하는 중...",
    "잠시만 기다려 주세요...",
    "취향 분석 중...",
    "곧 당신의 동아리 운명을 공개합니다...!",
    "동아리 운명 분석 중... ",
    "... 설레지 않나요?",
  ];

  const typingInterval = 30; // 타이핑 속도
  const deleteInterval = 300 / texts[currentTextIndex].length; // 삭제 속도
  const waitInterval = 1500; // 타이핑 이후 삭제 전까지 대기 시간

  useEffect(() => {
    const emojiInterval = setInterval(() => {
      setCurrentEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
    }, 1000); // 1초마다 이모지를 변경

    return () => clearInterval(emojiInterval);
  }, []);

  useEffect(() => {
    const disassembled = Hangul.disassemble(texts[currentTextIndex]);
    let index = 0;
    let isDeleting = false;
    let typeTimeout: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting) {
        setIsCursorBlinking(false); // 타이핑 중에는 커서 깜빡임을 비활성화

        if (index <= disassembled.length) {
          const nextText = Hangul.assemble(disassembled.slice(0, index));
          setDisplayedText(nextText);
          index++;
        } else {
          // 모든 텍스트가 타이핑되면 커서 깜빡임 활성화
          setIsCursorBlinking(true);
          setTimeout(() => {
            isDeleting = true;
            index = texts[currentTextIndex].length;
            setIsCursorBlinking(false); // 삭제 중에도 커서 깜빡임 비활성화
            handleTyping();
          }, waitInterval);
          return;
        }
      } else {
        if (index > 0) {
          setDisplayedText((prevText) => prevText.slice(0, index - 1));
          index--;
        } else {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          isDeleting = false;
          setDisplayedText("");
          clearTimeout(typeTimeout);
          setIsCursorBlinking(true); // 다음 텍스트로 이동하기 전 깜빡임 활성화
          return;
        }
      }

      typeTimeout = setTimeout(handleTyping, isDeleting ? deleteInterval : typingInterval);
    };

    typeTimeout = setTimeout(handleTyping, typingInterval);

    return () => clearTimeout(typeTimeout);
  }, [currentTextIndex]);

  return (
    <LoadingContainer>
      <TypingText isCursorBlinking={isCursorBlinking}>{displayedText}</TypingText>
      <ZoomAnimation>{emojis[currentEmojiIndex]}</ZoomAnimation>
    </LoadingContainer>
  );
};

export default ResultLoading;
