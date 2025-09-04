import { useScroll } from "motion/react";
import styles from "./Menubar.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
const commonImage =
  "https://framerusercontent.com/images/RbwpysS058DJnVgV6TuqfrOJ0.jpg?scale-down-to=1024&width=1080&height=1620";
const image2 =
  "https://framerusercontent.com/images/Lf0TpWbhf4WYqZnqdm6nW9faAIk.jpg?scale-down-to=1024&width=1080&height=1620";
const Menubar = () => {
  const [currentSidebarLink, setCurrentSidebarLink] = useState("new in");
  const imageVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    // exit: {
    //   opacity: 0,
    //   x: "100%",
    //   transition: { duration: 0.4, ease: "easeInOut" },
    // },
  };
  const sideBarlinks = [
    "new in",
    "shop by category",
    "occasion wear",
    "fabric edit",
    "sale",
    "the style edit",
    "style by color",
  ];

  const rightDummyLinks = [
    "Everyday Chic",
    "Formal & Power Dressing",
    "Evening Wear",
    "Special Even Edit",
    "Celebration Edit",
  ];
  const miscData = {
    "new in": {
      sideLinks: true,
      images: [commonImage, image2, commonImage],
    },
    "shop by category": {
      sideLinks: false,
      images: [commonImage, image2, commonImage, image2],
    },
    "occasion wear": {
      sideLinks: true,
      images: [commonImage, commonImage, commonImage],
    },
    "fabric edit": {
      sideLinks: false,
      images: [commonImage, image2, commonImage, image2],
    },
    sale: {
      sideLinks: true,
      images: [commonImage, commonImage, commonImage],
    },
    "the style edit": {
      sideLinks: true,
      images: [commonImage, commonImage, commonImage],
    },
    "style by color": {
      sideLinks: true,
      images: [commonImage, commonImage, commonImage],
    },
  };

  return (
    <main className={styles.container}>
      <div className={styles.left}>
        <ul>
          {sideBarlinks.map((val, i) => (
            <li
              className={styles.sidebarlink}
              onMouseEnter={() => setCurrentSidebarLink(val)}
              key={i}
            >
              {val}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        {miscData[currentSidebarLink].sideLinks && (
          <div className={styles.rightCat}>
            <div className={styles.catHeaderWrapper}>
              <h3 className={styles.catHeader}>{currentSidebarLink}</h3>
            </div>
            <ul>
              {rightDummyLinks.map((val, i) => (
                <li className={styles.catLinks} key={i}>
                  {val}
                </li>
              ))}
            </ul>
          </div>
        )}

        <AnimatePresence mode="popLayout">
          {miscData[currentSidebarLink].images.map((val, i) => {
            const isLastImage = i === 3;

            return (
              <motion.div
                className={styles.imageWrapper}
                key={`${currentSidebarLink}-${val}-${i}`}
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                {...(isLastImage && {
                  variants: imageVariants,
                  initial: "hidden",
                  animate: "visible",
                  exit: "exit",
                })}
              >
                <p className={styles.imageHeader}>Image Header</p>
                <img src={val} alt="" className={styles.rightImage} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Menubar;
