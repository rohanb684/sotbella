import styles from "./AutoplayNew.module.css";
import { autoplayData } from "../../data/twoSlider";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useScrollScale } from "../../hooks/useScrollScale";
const AutoplayNew = () => {
  const images = [...autoplayData, ...autoplayData];
  const sliderRef = useRef(null);
  const [inView, setInView] = useState(true);
  const { ref, scale } = useScrollScale();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.1 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container} ref={sliderRef}>
      <div
        className={styles.slider}
        style={{
          animationPlayState: inView ? "running" : "paused",
        }}
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            ref={ref}
            style={{ scale }}
            className={styles.imageWrapper}
          >
            <img src={src} alt="" className={styles.image} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AutoplayNew;
