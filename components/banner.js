import React from "react";
import Slider from "react-slick";
const Banner = () => {
  const bannerImage = [
    {
      path: "/images/video-chat-a-pro.webp",
    },
    {
      path: "/images/desmania-design.webp",
    },
    {
      path: "/images/video-chat-a-pro.webp",
    },
    {
      path: "/images/vaayu.webp",
    },
    {
      path: "/images/domino-data-lab.webp",
    },
    {
      path: "/images/ucview_2.webp",
    },
    {
      path: "/images/golden-circle-app.webp",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {bannerImage.map((e, i) => (
        <picture key={i}>
          <div className="nav-logo-slider">
            <img src={e.path} alt="" />
          </div>
        </picture>
      ))}

    </Slider>
  );
};

export default Banner;
