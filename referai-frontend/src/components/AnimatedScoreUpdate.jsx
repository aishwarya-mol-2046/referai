import { useState, useEffect } from "react";

const AnimatedScoreUpdate = ({ initialScore, finalScore, duration = 600 }) => {
  const [displayScore, setDisplayScore] = useState(initialScore);

  useEffect(() => {
    const startTime = Date.now();
    const scoreDifference = finalScore - initialScore;

    const animationFrame = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentScore = initialScore + scoreDifference * easeOutCubic;

      setDisplayScore(parseFloat(currentScore.toFixed(1)));

      if (progress === 1) {
        clearInterval(animationFrame);
      }
    }, 16); // ~60fps

    return () => clearInterval(animationFrame);
  }, [initialScore, finalScore, duration]);

  return (
    <span className="font-mono font-bold text-white">
      {displayScore.toFixed(1)}
    </span>
  );
};

export default AnimatedScoreUpdate;
