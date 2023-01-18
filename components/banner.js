import React from "react";
import Slider from "react-slick";
const Banner = () => {
  const bannerImage = [
    {
      path: "/images/video-chat-a-pro.webp",
      altImg: "",
    },
    {
      path: "/images/desmania-design.webp",
      altImg: "Desmania Design - Logo",
    },
    {
      path: "/images/vaayu.webp",
      altImg: "Vaayu - Logo",
    },
    {
      path: "/images/domino-data-lab.webp",
      altImg: "Domino Data Lab - Logo",
    },
    {
      path: "/images/ucview_2.webp",
      altImg: "UcView - Logo",
    },
    {
      path: "/images/golden-circle-app.webp",
      altImg: "Golden Circle App - Logo",
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
            <img src={e.path} alt={e.altImg} />
          </div>
        </picture>
      ))}
    </Slider>
  );
};

export default Banner;
