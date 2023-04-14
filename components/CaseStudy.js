import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Styles from '../styles/Case.module.css'
import Slider from 'react-slick'

export default function CaseStudy({ data }) {
  // const blogData = data.filter((e, i) => i < 5)
  const blogData = data
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          slidesToShow: 2,
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
          slidesToShow: 1,
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
    <div className="container justify-content-center blog-container">
      <h2>CASE STUDY</h2>
      <div className={`${Styles.caseContainer}`}>
        <Slider {...settings}>
          {blogData.map((e, i) => (
            <Link href={`/case-studies/${e.id}`} key={e.id}>
              <div className={`${Styles.cardContainer} cursor_pointer`} key={i}>
                <div className={Styles.caseImg}>
                  <div className={Styles.overlap}></div>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${e.image}`}
                    style={{ width: '100%', height: '430px' }}
                  />

                  <div
                    className={`${Styles.caseReadLink} cursor_pointer d-flex justify-content-center align-items-center`}
                  >
                    <div
                      className={`${Styles.caseLinePaper} d-flex justify-content-center align-items-center`}
                    >
                      <Image
                        src="/case study/document.png"
                        width={16}
                        height={16}
                        alt="line paper"
                      />
                    </div>
                    <div className="fw-bold ">READ</div>
                  </div>
                </div>
                <div className="case-body">
                  <div className={Styles.caseStudy}>
                    <p>Case Study</p>
                    <h3 className={Styles.caseTitle}>{e.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  )
}
