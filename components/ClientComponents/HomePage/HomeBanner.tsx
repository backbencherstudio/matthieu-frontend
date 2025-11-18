"use client";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function HomeBanner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="maxContainer mb-12 ">
      <video
        autoPlay
        muted
        loop
        className="md:h-[500px] w-full object-cover"
        poster="/bannerVideo/bannerThumbnail.png"
      >
        <source src="/bannerVideo/homeBanner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
