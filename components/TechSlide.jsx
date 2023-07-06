import React from 'react'
import Slider from 'react-slick'
import styles from '../styles/hireService.module.css'
const TechSlide = () => {
  const bannerImage = [
    // {
    //   path: '/techSlideImg/Rectangle 18721.svg',
    //   altImg: 'Rectangle-1',
    // },
    // {
    //   path: '/techSlideImg/Rectangle 18722.svg',
    //   altImg: 'Rectangle-2',
    // },
    // {
    //   path: '/techSlideImg/Rectangle 18723.svg',
    //   altImg: 'Rectangle-3',
    // },
    // {
    //   path: '/techSlideImg/Rectangle 18724.svg',
    //   altImg: 'Rectangle-4',
    // },
    {
      path: '/techSlideImg/consultant_tech.png',
      altImg: 'consultant',
    },
    {
      path: '/techSlideImg/devops.png',
      altImg: 'devops',
    },
    {
      path: '/techSlideImg/mobile_tech.png',
      altImg: 'mobile tech',
    },
    {
      path: '/techSlideImg/ux&ui.png',
      altImg: 'ui-ux',
    },
    {
      path: '/techSlideImg/webdev_tech.png',
      altImg: 'mobile tech',
    },
  ]

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
          slidesToShow: 1,
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
  }
  return (
    <Slider {...settings}>
      {bannerImage.map((e, i) => (
        <picture key={i}>
          <div className="flex justify-content-center align-content-center align-items-center">
            <img src={e.path} alt={e.altImg} className="w-100 h-100 " />
          </div>
        </picture>
      ))}
    </Slider>
  )
}

export default TechSlide
