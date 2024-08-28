import React, { useState, useEffect } from "react";
import Hangul from "hangul-js";
import { TypingText } from "@/pages/ResultLoading.style";

interface TypingAnimationProps {
  texts: string[];
  typingInterval: number;
  deleteInterval: number;
  waitInterval: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  texts,
  typingInterval,
  deleteInterval,
  waitInterval,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isCursorBlinking, setIsCursorBlinking] = useState(false);

  useEffect(() => {
    const disassembled = Hangul.disassemble(texts[currentTextIndex]);
    let index = 0;
    let isDeleting = false;
    let typeTimeout: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting) {
        setIsCursorBlinking(false); // 타이핑 중에는 커서 깜빡임 비활성화

        if (index <= disassembled.length) {
          const nextText = Hangul.assemble(disassembled.slice(0, index));
          setDisplayedText(nextText);
          index++;
        } else {
          setIsCursorBlinking(true); // 모든 텍스트가 타이핑되면 커서 깜빡임 활성화
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
    <TypingText isCursorBlinking={isCursorBlinking}>
      <h1 css={{ fontFamily: "NanumSquareNeo", fontSize: "25px", fontWeight: 100 }}>
        {displayedText}
      </h1>
    </TypingText>
  );
};

export default TypingAnimation;
