import SideImages from './sideImages'
import React, { useState, useEffect, useRef } from 'react'
import style from '../styles/about.module.css'
import Link from 'next/link'
import Slider from 'react-slick'
import Image from 'next/image'
function Companyfaces() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    handleImageLoad('useEffect')
  }, [loaded])
  const [companyFacesDesc, setCompanyFacesDesc] = useState(0)
  const handleImageLoad = (origin) => {
    setLoaded(true)
  }
  const [selectedImageIndex, setSelectedImageIndex] = useState(0) // Track the selected slide index
  const sliderDiv = useRef(null)

  const sideImgArr = [
    ['aboutUsImages/about-img1.webp', 'MP Singh(Founder)'],
    ['aboutUsImages/about-img6.jpg', , 'Ankush Mahajan(CTO)'],
    ['aboutUsImages/about-img2.jpg', 'Himani Choudhary(HR Manager)'],
    ['aboutUsImages/naresh_pic.jpg', 'Naresh Bhatia(Chartered Accountant)'],
    ['aboutUsImages/about-img3.webp', 'Kannav Sharma(Lawyer)'],
  ]

  const companyFacesDetail = [
    [
      'MP Singh',
      'CEO',
      'MP Singh',
      "The guy, who established Code Garage Tech. He is a computer science engineer and has experience of more than a decade in software development. He encourages conformity with business rules & regulations and also ensures that the company's code of ethics is being followed.",
      'https://www.linkedin.com/in/mehakpal-singh-3a9215a5/',
      'https://api.whatsapp.com/send?phone=14376629166',
      '/aboutUsImages/about-img1.webp',
    ],
    [
      'Ankush Mahajan',
      'CTO',
      'Ankush',
      "The guy, who empowers excellence with technology leadership. With a master's degree in computer science and over eight years of professional experience in the software development industry, he possesses a strong academic background and extensive professional expertise.",
      'https://www.linkedin.com/in/ankush-mahajan-776397205/',
      'https://api.whatsapp.com/send?phone=17606839821',
      '/aboutUsImages/about-img6.jpg',
    ],
    [
      'Himani Choudhary',
      'Human Resource Manager',
      'Himani',
      'Himani integrates and implements technology through enhanced training, staffing, and open communication with all employees. She offers recommendations on approaches, business solutions, and processes to the management for the purpose of  achieving greater organizational efficiency and success.',
      'https://www.linkedin.com/in/himani-c-200788197/',
      'www.instagram.com',
      'aboutUsImages/about-img2.jpg',
    ],
    [
      'Naresh Bhatia',
      'Head of Accounts',
      'Naresh',
      'As a proactive and result-oriented finance professional, he has a strong track record of handling multiple assignments efficiently. He has 15 years of experience and is very diligent in handling Accounts & Finance, Direct & Indirect Tax, Internal Auditing, and Risk Assessment of the company.',
      'https://www.linkedin.com/in/nareshbhatiaca/',
      'www.instagram.com',
      'aboutUsImages/naresh_pic.png',
    ],
    [
      'Kannav Sharma',
      'Head of Legal',
      'Kannav',
      "Proudly a first-generation lawyer, Kannav embarked on his legal career with the noble aim of leaving a lasting impact & assisting as many people as possible to the best of his capabilities. He, diligently ensures that the company's strategies, actions, & processes align with state, local, international, & federal laws.",
      'https://www.linkedin.com/in/kannavsharma001/',
      'www.instagram.com',
      'aboutUsImages/about-img3.webp',
    ],
  ]
  const [imageIndex, setImageIndex] = useState(0)
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: 0,
    slidesToShow: 1,
    speed: 800,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    lazyLoad: true,
    beforeChange: (currentSlide, nextSlide) => {
      setSelectedImageIndex(nextSlide)
    },
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          dots: false,
          arrows: false,
          pauseOnHover: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          pauseOnHover: true,
          variableWidth: false,
          slidesToShow: 1,
        },
      },
    ],
  }

  const handleSlideChange = (currentSlide) => {
    setSelectedImageIndex(currentSlide)
  }
  const SideImagesChangeHandle = (index) => {
    setCompanyFacesDesc(index)
    setSelectedImageIndex(index)
    sliderDiv.current.slickGoTo(index)
  }

  return (
    <div className={`container about-area-4 ${style.about_area_4_outer}`}>
      <h5>Our Leadership</h5>
      <div className={`row about-area-4-main-outer ${style.about_area_4}`}>
        <div
          className={`col-lg-1 col-md-2 text-center mt-4 d-flex flex-column justify-content-center ${style.col_lg_1}`}
        >
          <div
            className={`row about-area-4-sideImages-row ${style.about_area_4_sideImages}`}
          >
            {sideImgArr.map((element, index) => (
              <SideImages
                key={index}
                id={index}
                altImg={element[1]}
                sideImagesgUrl={element[0]}
                SideImagesChangeHandle={SideImagesChangeHandle}
                selected={index === selectedImageIndex}
              />
            ))}
          </div>
        </div>

        <div className={`col-lg-11 col-md-10 ${style.col_md_10}`}>
          <Slider ref={sliderDiv} {...settings}>
            {companyFacesDetail.map((detail, index) => (
              <div
                className="row about-area-4-main-data-outer d-flex"
                key={index}
              >
                <div
                  className={`col-lg-6 col-md-6 d-flex align-items-center about-img-height  ${style.image_height}`}
                >
                  <div className="row">
                    <div
                      className={`col-lg-10 col-md-12 col-10 ${style.col_10}`}
                    >
                      <div className="about-area-4-main-img-outer">
                        <img
                          className="about-area-4-main-img"
                          src={detail[6]}
                          alt=""
                        />
                        <div className="about-area-4-main-img-shape-1">
                          <div className="text-center about-area-4-main-img-text-area">
                            <div className="about-area-4-main-name margin-bottom-1px">
                              {detail[0]}
                            </div>
                            <p className="about-area-4-main-designation">
                              {detail[1]}
                            </p>
                          </div>
                          <img
                            className="w-100"
                            src="/aboutUsImages/about-area-4-main-img-shape.webp"
                            alt="Background Shape"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex about-area-4-main-desc-outer">
                  <div className="row h-100">
                    <div
                      className={`col-lg-12 d-flex flex-column justify-content-center ${style.col_lg}`}
                    >
                      <div className="about-area-4-main-para">
                        <div className={`fw-bolder ${style.about_faces}`}>
                          <h1>About {detail[2]}</h1>
                          <div className="d-flex">
                            <a
                              href={detail[4]}
                              className="footer__link me-3"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Image
                                src={'/images/LinkedIn3d.webp'}
                                alt="3D LinkedIn Icon"
                                height={50}
                                width={50}
                              />
                            </a>
                            {index === 0 || index === 1 ? (
                              <a
                                href={detail[5]}
                                className="footer__link me-3"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Image
                                  src={'/images/WhatsApp.webp'}
                                  alt="WhatsApp Icon"
                                  height={50}
                                  width={50}
                                />
                              </a>
                            ) : null}
                          </div>
                        </div>
                        <div className={style.facedetail}>{detail[3]}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Companyfaces
