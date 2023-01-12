import React from "react";
import Slider from "react-slick";
const Banner = ({ bannerImage }) => {
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
      {bannerImage.map((e) => (
        <div className="nav-logo-slider">
          <img src={e.path} alt="" />
          <p>{e.name}</p>
        </div>
      ))}
      {/* <div className="nav-logo-slider">
        <img src="images/video-chat-a-pro.png" alt="" />
      </div>
      <div className="nav-logo-slider">
        <img src="images/welcomeAi_2.png" alt="" />
      </div>
      <div className="nav-logo-slider">
        <img src="images/bzigo.png" alt="" />
      </div>
      <div className="nav-logo-slider">
        <img src="images/desmania-design.png" alt="" />
      </div>
      <div className="nav-logo-slider">
        <img src="images/vaayu.png" alt="" />
      </div>
      <div className="nav-logo-slider">
        <img src="images/domino-data-lab.png" alt="" />
      </div>
      <div className="nav-logo-slider">
        <img src="images/ucview_2.png" alt="" />
      </div>
      <div className="nav-logo-slider">
        <img src="images/golden-circle-app.png" alt="" />
      </div> */}
    </Slider>
  );
};

export default Banner;
