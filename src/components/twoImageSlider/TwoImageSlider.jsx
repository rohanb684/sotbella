import { useRef, useState } from "react";
import styles from "./TwoImageSlider.module.css";
import Slider from "react-slick";
import { useScrollScale } from "../../hooks/useScrollScale";
import { motion } from "motion/react";
import AbsLink from "../absLink/AbsLink";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
const TwoImageSlider = ({ sliderData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { ref, scale } = useScrollScale();

  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.sliderWrapper}>
        <Slider {...settings} ref={sliderRef}>
          {sliderData.map((val, i) => {
            return (
              <div key={i} className={styles.videoWrapper}>
                {val.type === "image" ? (
                  <motion.img
                    src={val.src}
                    className={styles.image}
                    style={{ scale }}
                  />
                ) : (
                  <motion.video
                    src={val.src}
                    muted
                    autoPlay={true}
                    loop
                    playsInline
                    style={{ scale }}
                    className={styles.video}
                  />
                )}
                <div className="globalArrowWrapper">
                  <AbsLink>{val.abs}</AbsLink>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div
        className={`${styles.lArwWrapper} ${
          currentSlide === 0 ? styles.disabled : ""
        }`}
        onClick={() => {
          if (currentSlide === 0) return;
          // setCurrentSlide((prev) => prev - 1);
          sliderRef.current?.slickPrev();
        }}
      >
        <div className={styles.arw}>
          <MdOutlineKeyboardArrowLeft />
        </div>
      </div>

      <div
        className={`${styles.rArwWrapper} ${
          currentSlide >= sliderData.length - settings.slidesToShow
            ? styles.disabled
            : ""
        }`}
        onClick={() => {
          if (currentSlide >= sliderData.length - settings.slidesToShow) return;
          sliderRef.current?.slickNext();
        }}
      >
        <div className={styles.arw}>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default TwoImageSlider;
