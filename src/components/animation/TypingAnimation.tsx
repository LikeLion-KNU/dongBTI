import React, { useState, useEffect, useRef } from "react";
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
  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [isCursorBlinking, setIsCursorBlinking] = useState<boolean>(false);

  const index = useRef<number>(0);
  const isDeleting = useRef<boolean>(false);
  const typeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const disassembled = Hangul.disassemble(texts[currentTextIndex]);

    const handleTyping = () => {
      if (!isDeleting.current) {
        setIsCursorBlinking(false);

        if (index.current <= disassembled.length) {
          const nextText = Hangul.assemble(disassembled.slice(0, index.current));
          setDisplayedText(nextText);
          index.current++;
        } else {
          setIsCursorBlinking(true);
          setTimeout(() => {
            isDeleting.current = true;
            index.current = texts[currentTextIndex].length;
            setIsCursorBlinking(false);
            handleTyping();
          }, waitInterval);
          return;
        }
      } else {
        if (index.current > 0) {
          setDisplayedText((prevText) => prevText.slice(0, index.current - 1));
          index.current--;
        } else {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          isDeleting.current = false;
          setDisplayedText("");
          if (typeTimeout.current) clearTimeout(typeTimeout.current);
          setIsCursorBlinking(true);
          return;
        }
      }

      typeTimeout.current = setTimeout(
        handleTyping,
        isDeleting.current ? deleteInterval : typingInterval
      );
    };

    typeTimeout.current = setTimeout(handleTyping, typingInterval);

    return () => {
      if (typeTimeout.current) clearTimeout(typeTimeout.current);
    };
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
