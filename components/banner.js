import React from "react";
import Slider from "react-slick";
const Banner = () => {
  const bannerImage = [
    {
      path: "../public/images/video-chat-a-pro.png",
    },
    {
      path: "../public/images/welcomeAi.png",
    },
    {
      path: "../public/images/",
    },
    {
      path: "images/desmania-design.png",
    },
    {
      path: "images/video-chat-a-pro.png",
    },
    {
      path: "images/vaayu.png",
    },
    {
      path: "images/domino-data-lab.png",
    },
    {
      path: "images/ucview_2.png",
    },
    {
      path: "images/golden-circle-app.png",
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

      <img src="../public/icons/service-icon/Frame.png" />
    </Slider>
  );
};

export default Banner;
