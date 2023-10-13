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
                        width={140}
                        height={142}
                        objectFit="cover"
                      />
                      <div className={style.companyface_title}>
                        <h1>MP Singh</h1>
                      </div>
                    </div>
                  </h2>
                  <h1 className="about-area-7-heading mb-5">
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
                  innovation. Our global reach has solidified connections with
                  enterprises worldwide, and our commitment to excellence
                  remains unwavering as we continue to embrace new challenges
                  and opportunities on the horizon.
                </h3>
                <div className={style.companyface2}>
                  <Image
                    src="/aboutUsImages/cto.png"
                    alt="Aim Board"
                    width={140}
                    height={142}
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
                <h1 className="about-area-7-heading mb-5">
                  Empowering Entrepreneurs,
                  <br />
                  Building Futures
                </h1>
                <h3>
                  We're driven by a mission to be a catalyst for change,
                  enabling entrepreneurs to thrive. Our focus is on delivering
                  valuable software solutions that elevate society's quality.
                  With expertise in web design, mobile development, and digital
                  marketing, we harness cutting-edge technologies to provide
                  quality-centered software services, fostering the growth of
                  aspiring businesses.
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
