import React, { useRef } from "react";
import styles from "./SectionTwo.module.css";
import { motion } from "motion/react";
import AbsLink from "../absLink/AbsLink";
import { useScrollScale } from "../../hooks/useScrollScale";
const SectionTwo = ({ image, linkname, srcType, lazyLoad }) => {
  const { ref, scale } = useScrollScale();

  return (
    <div ref={ref} className={styles.container}>
      {srcType === "image" ? (
        <motion.img
          src={image}
          alt=""
          className={styles.image}
          style={{ scale }}
          loading={lazyLoad ? "lazy" : "auto"}
        />
      ) : (
        <motion.video
          src={image}
          muted
          autoPlay={true}
          loop
          playsInline
          className={styles.image}
          style={{ scale }}
        />
      )}

      <div className="globalArrowWrapper">
        <AbsLink>{linkname}</AbsLink>
      </div>
    </div>
  );
};

export default SectionTwo;
