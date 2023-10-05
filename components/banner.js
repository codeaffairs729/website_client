import React from 'react'
import Slider from 'react-slick'
import styles from '../styles/hireService.module.css'
const Banner = ({ techTitle }) => {
  console.log(techTitle)
  const bannerImage = [
    //web technologies
    { id: 0, name: 'Rails', path: '/icons/rails.webp', title: 'Web Solutions' },
    { id: 1, name: 'Vuejs', path: '/icons/vuejs.webp', title: 'Web Solutions' },
    {
      id: 2,
      name: 'ReactJs',
      path: '/icons/reactjs.webp',
      title: 'Web Solutions',
    },
    {
      id: 3,
      name: 'NextJs',
      path: '/icons/nextjs.webp',
      title: 'Web Solutions',
    },
    {
      id: 4,
      name: 'Nuxtjs',
      path: '/icons/nuxtjs.webp',
      title: 'Web Solutions',
    },
    {
      id: 5,
      name: 'Nodejs',
      path: '/icons/nodejs.webp',
      title: 'Web Solutions',
    },
    {
      id: 6,
      name: 'Shopify',
      path: '/images/shopify.webp',
      title: 'Web Solutions',
    },
    {
      id: 7,
      name: 'Laravel',
      path: '/icons/laravel.webp',
      title: 'Web Solutions',
    },
    {
      id: 8,
      name: 'Ruby',
      path: '/images/ror_orig.webp',
      title: 'Web Solutions',
    },
    {
      id: 9,
      name: 'Python',
      path: '/images/python_2.webp',
      title: 'Web Solutions',
    },

    //mobile technology
    {
      id: 10,
      name: 'Android',
      path: '/images/android_4.webp',
      title: 'Mobile Solutions',
    },
    {
      id: 11,
      name: 'Flutter',
      path: '/images/flutter.webp',
      title: 'Mobile Solutions',
    },
    {
      id: 12,
      name: 'Swift',
      path: '/icons/swift.webp',
      title: 'Mobile Solutions',
    },
    {
      id: 13,
      name: 'ionic',
      path: '/icons/ionic.webp',
      title: 'Mobile Solutions',
    },
    {
      id: 14,
      name: 'React Native',
      path: '/icons/reactjs.webp',
      title: 'Mobile Solutions',
    },
    {
      id: 12,
      name: 'Swift',
      path: '/icons/swift.webp',
      title: 'Mobile Solutions',
    },
    {
      path: '/images/video-chat-a-pro.webp',
      altImg: '',
      title: 'miscellaneous',
    },
    {
      path: '/images/desmania-design.webp',
      altImg: 'Desmania Design - Logo',
      title: 'miscellaneous',
    },
    {
      path: '/images/vaayu.webp',
      altImg: 'Vaayu - Logo',
      title: 'miscellaneous',
    },
    {
      path: '/images/domino-data-lab.webp',
      altImg: 'Domino Data Lab - Logo',
      title: 'miscellaneous',
    },
    {
      path: '/images/ucview_2.webp',
      altImg: 'UcView - Logo',
      title: 'miscellaneous',
    },
    {
      path: '/images/golden-circle-app.webp',
      altImg: 'Golden Circle App - Logo',
      title: 'miscellaneous',
    },
  ]

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
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
  }
  const filteredBannerImages = bannerImage.filter(
    (image) => image.title === techTitle
  )

  return (
    <Slider {...settings}>
      {filteredBannerImages.map((e, i) => (
        <div className="flex" key={i}>
          <picture>
            <div className={styles.navlogoslider}>
              <img src={e.path} alt={e.name} />
              <span>{e.name}</span>
            </div>
          </picture>
        </div>
      ))}
    </Slider>
  )
}

export default Banner
