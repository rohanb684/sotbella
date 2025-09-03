import "./App.css";
import React, { Suspense, lazy } from "react";

import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTwo from "./components/sectionTwo/SectionTwo";
const TwoImageSlider = lazy(() =>
  import("./components/twoImageSlider/TwoImageSlider")
);
import { imageVideoData, onlyImagesData } from "./data/twoSlider";
import Usp from "./components/usp/Usp";
const AutoplayNew = lazy(() => import("./components/autoplayNew/AutoplayNew"));

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Hero />
      <SectionTwo
        image={"/images/section2.avif"}
        srcType={"image"}
        linkname={"Our Most Loved"}
        lazyLoad={false}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <TwoImageSlider sliderData={imageVideoData} />
      </Suspense>
      <SectionTwo
        image={
          "https://framerusercontent.com/images/sjTtlPR69lUo2IgrhnEtHhOTc.jpg?width=1440&height=796"
        }
        srcType={"image"}
        linkname={"explore all styles"}
        lazyLoad={true}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <TwoImageSlider sliderData={onlyImagesData} />
        <AutoplayNew />
      </Suspense>
      <SectionTwo
        image={
          "https://framerusercontent.com/assets/NqRakF0Vf2a3eaU0JvujBJxuGp4.mp4"
        }
        srcType={"vid"}
        lazyLoad={true}
        linkname={""}
      />
      <Usp />
    </div>
  );
}

export default App;
