import React, { useState, useEffect } from 'react'
import style from '../styles/about.module.css'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const Vision = dynamic(() => import('../components/Vision'), {
  ssr: false,
})
function Teams() {
  const [loaded, setLoaded] = useState(false)
  const handleImageLoad = (origin) => {
    setLoaded(true)
  }

  useEffect(() => {
    handleImageLoad('useEffect')
  }, [loaded])
  return (
    <>
      <div className="container-fluid about-area-6">
        <div className="row">
          <div className="col-lg-12 about-area-6-heading-outer">
            <h1 className="text-center about-area-6-heading">
              We Clear Your Path,
              <br />
              <span className="title__color"> We Help You Succeed,</span>
              <br />
              We Keep You Successful
            </h1>
            <div className={style.about_heading}>
              <p>
                We are dedicated to shaping the future of technology through
                innovative software development solutions. With a passion for
                empowering businesses, we specialize in crafting software
                solutions that cater to a diverse range of needs and scales.
              </p>
              <br></br>
              <p>
                Our vision is rooted in the belief that technology is the
                driving force behind modern business evolution. We aspire to be
                the catalyst for growth, aiding individuals and organizations in
                their quest for a seamless transition into the digital era.
              </p>
            </div>
          </div>
          {/* <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-12 text-end">
                <img
                  // className="about-area-6-pic-1"
                  className={`about-area-6-pic-1 ${
                    loaded ? 'blur-image-loaded' : 'blur-image'
                  }
                  `}
                  src="aboutUsImages/team_pic_3.webp"
                  alt="Harsh, Dixit & Vishav"
                />
              </div>
              <div className="col-lg-2 col-md-2 col-4">
                <div className="row">
                  <div className="col-lg-12 about-area-6-img-outer">
                    <img
                      // className="about-area-6-pics"
                      className={`about-area-6-pics ${
                        loaded ? 'blur-image-loaded' : 'blur-image'
                      }
                      `}
                      src="aboutUsImages/team_pic_4.webp"
                      alt="Harsh, Abhishek and Vishav"
                    />
                  </div>
                  <div className="col-lg-12 about-area-6-img-outer">
                    <img
                      // className="about-area-6-pics"
                      className={`about-area-6-pics ${
                        loaded ? 'blur-image-loaded' : 'blur-image'
                      }
                      `}
                      src="aboutUsImages/team_pic_2.webp"
                      alt="Tanya"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-8">
                <img
                  // className="about-area-6-pic-1"
                  className={`about-area-6-pic-1 ${
                    loaded ? 'blur-image-loaded' : 'blur-image'
                  }
                  `}
                  src="aboutUsImages/diveroid2.webp"
                  alt="Udham, Ankush & Mehakpal(Boss)"
                />
              </div>
            </div>
          </div> */}
          <Vision />
        </div>
        <div className="about-area-6-circle-1">
          <Image
            // className="w-100 h-100"
            src="/aboutUsImages/Cloud.png"
            alt="Aim Board"
            width={162}
            height={119.34}
            objectFit="cover"
          />
        </div>
        <div className="about-area-6-circle-2">
          <Image
            // className="w-100 h-100"
            src="/aboutUsImages/cube.png"
            alt="Aim Board"
            width={43.85}
            height={40.65}
            objectFit="cover"
          />
        </div>
        <div className="about-area-7-circle-1"></div>
        <div className="about-area-6-circle-3">
          <Image
            // className="w-100 h-100"
            src="/aboutUsImages/cube2.png"
            alt="Aim Board"
            width={50.85}
            height={50.65}
            objectFit="cover"
          />
        </div>
      </div>
    </>
  )
}
export default Teams
