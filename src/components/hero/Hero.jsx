import React, { useRef, useState } from "react";
import styles from "./Hero.module.css";
import Slider from "react-slick";
import AbsLink from "../absLink/AbsLink";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
const videoData = [
  "https://framerusercontent.com/assets/qQ3spxuQTSe2soPUdtpDXQClOA.mp4",
  "https://framerusercontent.com/assets/yWs7c11lDM7q6oz66aZFcLG7Nw.mp4",
  "https://framerusercontent.com/assets/6k6VxDxY5BfmrLkUufXY6ZywXe8.mp4",
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next + 1);
    },
  };
  return (
    <main className={styles.container}>
      <div className={styles.sliderWrapper}>
        <Slider {...settings} ref={sliderRef}>
          {videoData.map((video, i) => (
            <div key={i} className={styles.videoWrapper}>
              <video
                src={video}
                muted
                autoPlay={true}
                loop
                playsInline
                className={styles.video}
                poster="/images/poster.jpg"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="globalArrowWrapper">
        <AbsLink>Shop new in</AbsLink>
      </div>

      <div
        className={`${styles.lArwWrapper} ${
          currentSlide === 1 ? styles.disabled : ""
        }`}
        onClick={() => {
          if (currentSlide === 1) return;
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
          currentSlide === videoData.length ? styles.disabled : ""
        }`}
        onClick={() => {
          if (currentSlide === videoData.length) return;
          // setCurrentSlide((prev) => prev + 1);
          sliderRef.current?.slickNext();
        }}
      >
        <div className={styles.arw}>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </main>
  );
};

export default Hero;
