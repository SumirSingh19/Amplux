import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const ScrollAnimation = ({ frames }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animationInterval = useRef(null);

  useEffect(() => {
    const playAnimation = () => {
      let frameIndex = 0;
      animationInterval.current = setInterval(() => {
        if (frameIndex < frames.length) {
          setCurrentFrame(frameIndex);
          frameIndex++;
        } else {
          clearInterval(animationInterval.current);
        }
      }, 100); // Adjust this interval for smoother transitions
    };

    const reverseAnimation = () => {
      let frameIndex = frames.length - 1;
      animationInterval.current = setInterval(() => {
        if (frameIndex >= 0) {
          setCurrentFrame(frameIndex);
          frameIndex--;
        } else {
          clearInterval(animationInterval.current);
        }
      }, 100);
    };

    if (inView) {
      clearInterval(animationInterval.current);
      playAnimation();
    } else if (entry) {
      clearInterval(animationInterval.current);
      reverseAnimation();
    }

    return () => clearInterval(animationInterval.current);
  }, [inView, entry, frames]);

  return (
    <div ref={ref} className="relative w-[69rem] h-[42rem]">
      {frames.map((frame, index) => (
        <img
          key={index}
          src={frame}
          alt={`frame-${index}`}
          className={`absolute inset-0 w-full h-full duration-[30ms] ${currentFrame === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
};

export default ScrollAnimation;
