import { useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

export const useScrollScale = (config = {}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: config.offset || ["start end", "end end"],
  });

  const rawScale = useTransform(
    scrollYProgress,
    config.inputRange || [0, 1],
    config.outputRange || [0.7, 1]
  );

  const scale = useSpring(rawScale, {
    stiffness: config.stiffness || 100,
    damping: config.damping || 20,
    mass: config.mass || 0.3,
  });

  return { ref, scale };
};
