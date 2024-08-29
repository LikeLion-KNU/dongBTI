import React, { useState, useEffect } from "react";
import { ZoomAnimation  } from "@/pages/ResultLoading.style";


const EmojiAnimation: React.FC = () => {
  const emojis: string[] = ["🐶", "🏃‍♂️", "🏋️", "🏓", "🎤", "⚽", "🎸"];
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState<number>(0);

  useEffect(function changeEmojiByInterval() {
    const emojiInterval = setInterval(() => {
          setCurrentEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
    }, 1000); 
    return () => clearInterval(emojiInterval);
}, []);

  return <ZoomAnimation>{emojis[currentEmojiIndex]}</ZoomAnimation>;
};

export default EmojiAnimation;
