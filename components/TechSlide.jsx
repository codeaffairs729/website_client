import React from 'react'
import Slider from 'react-slick'
// import styles from '../styles/hireService.module.css'
const styles = {
  mainDiv: {
    border: '1px solid red',
    // position: 'relative',
    display: 'flex', // Add this property
    justifyContent: 'center', // Add this property
    alignItems: 'center', // Add this property
  },
  mainDivP: {
    color: '#333333',
    fontSize: '15px',
    fontWeight: '900',
    textAlign: 'center', // Add this property
    width: '100%', // Add this property
  },
}

const TechSlide = () => {
  const bannerImage = [
    {
      path: '/techSlideImg/tech_img1.png',
      name: 'Web Development',
    },
    {
      path: '/techSlideImg/tech_img2.png',
      name: 'Devops',
    },
    {
      path: '/techSlideImg/tech_img4.png',
      name: 'Mobile App Dev',
    },
    {
      path: '/techSlideImg/tech_img5.png',
      name: 'IT Consulting',
    },
    {
      path: '/techSlideImg/tech_img7.png',
      name: 'E-Commerce',
    },
    // {
    //   path: '/techSlideImg/tech_img6.png',
    //   name: 'UI/UX Design',
    // },
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
    autoplaySpeed: 1300,
  }
  return (
    <Slider {...settings}>
      {bannerImage.map((e, i) => (
        <div key={i} style={styles.mainDiv}>
          <div className="mb-4 py-1">
            <img
              src={e.path}
              alt={e.name}
              className="w-100"
              style={{ height: '90px' }}
            />
          </div>
          <p style={styles.mainDivP}>{e.name}</p>
          <div></div>
        </div>
      ))}
    </Slider>
  )
}

export default TechSlide
