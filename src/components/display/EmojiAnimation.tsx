import React, { useState, useEffect } from "react";
import { ZoomAnimation  } from "@/pages/ResultLoading.style";


const EmojiAnimation: React.FC = () => {
  const emojis = ["🐶", "🏃‍♂️", "🏋️", "🏓", "🎤", "⚽", "🎸"];
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);

  useEffect(() => {
    const emojiInterval = setInterval(() => {
      setCurrentEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
    }, 1000); // 1초마다 이모지를 변경

    return () => clearInterval(emojiInterval);
  }, []);

  return <ZoomAnimation>{emojis[currentEmojiIndex]}</ZoomAnimation>;
};

export default EmojiAnimation;
