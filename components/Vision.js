import React from 'react'
import Image from 'next/image'
import style from '../styles/about.module.css'
function vision() {
  return (
    <>
      <div className={`container-fluid about-area-7 ${style.about_area}`}>
        <div className={`container ${style.container}`}>
          <div className={`row about-area-7-row ${style.about_area_row}`}>
            <div className="col-lg-7 col-md-6 about-area-7-left-outer">
              <div className={`about-area-7-para ${style.about_area_7}`}>
                <div className={style.col12}>
                  <h2
                    className={`about-area-7-heading mb-5 ${style.about_area_7_heading}`}
                  >
                    Our Evolution
                    <div className={style.companyface}>
                      <Image
                        src="/aboutUsImages/ceo.png"
                        alt="Aim Board"
                        width={100}
                        height={100}
                        objectFit="cover"
                      />
                      <div className={style.companyface_title}>
                        <h1>MP Singh</h1>
                      </div>
                    </div>
                  </h2>
                  <h1
                    className="about-area-7-heading mb-5"
                    data-aos="animation-translate-y"
                    data-aos-delay="200"
                  >
                    Growth Through
                    <br />
                    Shared Innovation
                  </h1>
                </div>
                <h3>
                  In 2015, we established our team to aid a few small
                  enterprises to thrive, utilizing information technology. Over
                  these years, we've grown alongside our clients, crafting
                  exceptional software, overcoming challenges, and embracing
                  innovation.
                </h3>
                <div className={style.companyface2}>
                  <Image
                    src="/aboutUsImages/cto.png"
                    alt="Aim Board"
                    width={100}
                    height={100}
                    objectFit="cover"
                  />
                  <div className={style.companyface_title}>
                    {' '}
                    <h1>A Mahajan</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-5 col-md-6 about-area-7-pic-1-outer d-flex align-items-center justify-content-center ">
              <Image
                // className="w-100 h-100"
                src="/aboutUsImages/target_arrow.png"
                alt="Aim Board"
                width={30}
                height={30}
                objectFit="contain"
              />
            </div> */}
            <div className="col-lg-7 col-md-6 about-area-7-left-outer">
              <div className={`about-area-7-para ${style.about_right}`}>
                <h2 className="about-area-7-heading mb-5">
                  Our Mission
                  <div className={style.about_mouse}>
                    <Image
                      // className="w-100 h-100"
                      src="/aboutUsImages/mouse.png"
                      alt="Aim Board"
                      width={55}
                      height={55}
                      objectFit="cover"
                    />
                  </div>
                </h2>
                <h1
                  className="about-area-7-heading mb-5"
                  data-aos="animation-translate-y"
                  data-aos-delay="200"
                >
                  Empowering Entrepreneurs,
                  <br />
                  Building Futures
                </h1>
                <h3>
                  Our mission is to ignite change and empower entrepreneurs to
                  excel. We specialize in providing high-impact software
                  solutions that enhance the quality of life. With expertise in
                  AI, ML, web, and mobile development, we are committed to
                  making a difference
                </h3>
                <div className={style.target}>
                  <Image
                    // className="w-100 h-100"
                    src="/aboutUsImages/target.png"
                    alt="Aim Board"
                    width={170}
                    height={140}
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default vision
