"use client";
import image from "@/constant/Images/image";
import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderTwo = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    className:
      "w-full mx-auto pl-12 cursor-pointer flex justify-center items-center",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div className="px-12 lg:py-6 py-12">
      <Slider {...settings}>
        <div>
          {/* <video controls>
          <source src="../../../assets/portfolio/Digipillarvideo.mp4" type="video/mp4"/>
        </video> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/496-LZwZa7M?si=geC3lVE7fxUlPctR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/58Z6ej5Ie_g?si=SYWprFEJn7fi3Xhh"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/496-LZwZa7M?si=geC3lVE7fxUlPctR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/58Z6ej5Ie_g?si=SYWprFEJn7fi3Xhh"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </Slider>
    </div>
  );
};

export default SliderTwo;
