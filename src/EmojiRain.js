import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const EmojiRain = ({ emojis }) => {
  const [emojiElements, setEmojiElements] = useState([]);

  useEffect(() => {
    const createEmojiElement = () => {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const xPosition = Math.random() * window.innerWidth;
      const animationDuration = Math.random() * 5 + 5; // 5-10 seconds

      return {
        emoji,
        xPosition,
        animationDuration,
        key: Date.now() + Math.random(), // Unique key for each emoji
      };
    };

    const addEmoji = () => {
      setEmojiElements((prev) => [...prev, createEmojiElement()]);
    };

    // Initially add some emojis
    for (let i = 0; i < 15; i++) {
      addEmoji();
    }

    // Add new emoji every 500ms
    const interval = setInterval(addEmoji, 500);

    return () => clearInterval(interval);
  }, [emojis]);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {emojiElements.map(({ emoji, xPosition, animationDuration, key }) => (
        <motion.div
          key={key}
          className="absolute text-4xl"
          initial={{ x: xPosition, y: -50 }}
          animate={{ y: window.innerHeight + 50 }}
          transition={{
            duration: animationDuration,
            ease: "linear"
          }}
          onAnimationComplete={() => {
            // Remove emoji from state when it completes animation
            setEmojiElements((prev) => prev.filter((item) => item.key !== key));
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default EmojiRain;