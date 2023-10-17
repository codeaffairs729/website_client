import React from 'react'
import Image from 'next/image'
import style from '../styles/about.module.css'

function Company_highlites() {
  const images = [
    {
      src: '/aboutUsImages/teams1.png',
      alt: 'Image 1',
      height: 300,
      width: 500,
      objectFit: 'cover',
      borderRadius: '20px',
      position: { top: '2rem' },
    },
    {
      src: '/aboutUsImages/trophy1.png',
      alt: 'Image 2',
      height: 300,
      width: 500,
      objectFit: 'cover',
      borderRadius: '20px',
      position: 'left',
    },
    {
      src: '/aboutUsImages/teams2.png',
      alt: 'Image 3',
      height: 300,
      width: 500,
      objectFit: 'cover',
      borderRadius: '20px',
      position: { top: '-2rem' },
    },
    {
      src: '/aboutUsImages/trophy2.png',
      alt: 'Image 4',
      height: 300,
      width: 500,
      objectFit: 'cover',
      borderRadius: '20px',
      position: 'top 2rem',
    },
    {
      src: '/aboutUsImages/teams3.png',
      alt: 'Image 3',
      height: 300,
      width: 500,
      objectFit: 'cover',
      borderRadius: '20px',
      position: { top: '-2rem' },
    },
    {
      src: '/aboutUsImages/trophy3.png',
      alt: 'Image 4',
      height: 300,
      width: 500,
      objectFit: 'cover',
      borderRadius: '20px',
      position: 'top 2rem',
    },
    {
      src: '/aboutUsImages/teams4.png',
      alt: 'Image 3',
      height: 300,
      width: 500,
      objectFit: 'cover',
      borderRadius: '20px',
      position: { top: '-2rem' },
    },
    {
      src: '/aboutUsImages/teams6.png',
      alt: 'Image 3',
      height: 300,
      width: 500,
      objectFit: 'cover',
      borderRadius: '20px',
      position: { top: '-2rem' },
    },
    {
      src: '/aboutUsImages/teams5.png',
      alt: 'Image 3',
      height: 300,
      width: 500,
      objectFit: 'cover',
      borderRadius: '20px',
      position: { top: '-2rem' },
    },
    {
      src: '/aboutUsImages/teams7.png',
      alt: 'Image 3',
      height: 300,
      width: 500,
      objectFit: 'cover',
      borderRadius: '20px',
      position: { top: '-2rem' },
    },
    {
      src: '/aboutUsImages/teams8.png',
      alt: 'Image 3',
      height: 300,
      width: 500,
      objectFit: 'cover',
      borderRadius: '20px',
      position: { top: '-2rem' },
    },
  ]

  return (
    <>
      {/* <div
        className={`container-fluid trophies about-us-trophies ${style.main_div}`}
      >
        <div className={`container ${style.container_highlight}`}>
          <div className="about-area-headline-container">
            <h2
              className={`text-center mb-5 about-area-4-heading ${style.about_area_heading}`}
            ></h2>
          </div>
          <div className={style.pics}>
            <div className={style.pics_slider}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-md-4 trophies-cols ${style.col_lg_5}`}
                  style={{
                    position: 'absolute',
                    top: image.position.top,
                    left: image.position.left,
                  }}
                >
                  <Image
                    className="trophies-img"
                    src={image.src}
                    alt={image.alt}
                    height={image.height}
                    width={image.width}
                    objectFit={image.objectFit}
                    style={{ borderRadius: image.borderRadius }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid about-area-5">
        <div className="container about-area-5-container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="mb-5 about-area-5-heading">
                Are you looking for a team just like us?
              </h2>
              <div className="d-flex flex-wrap align-items-content">
                <p className="align-self-center about-area-5-para">
                  Let us know right
                </p>
                <span className="d-flex">
                  <p className="align-self-center about-area-5-para">
                    away
                    <svg
                      className="mx-2"
                      width="34"
                      height="27"
                      viewBox="0 0 34 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8621 1L32 13.3636M32 13.3636L19.8621 25.7273M32 13.3636H1.19209e-07"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                  </p>

                  <a
                    href="./contact"
                    target="_blank"
                    className="freelancer-main__btn about_btn my-2"
                  >
                    Get in Touch
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Company_highlites
