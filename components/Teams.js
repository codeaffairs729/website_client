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
              We Help You Succeed With
              <br />
              IT Solutions
            </h1>
            <div className={style.about_heading}>
              <p>
                Our dedication lies in shaping technology's future through
                innovative software solutions, including AI, ML, web, and mobile
                development. We're passionate about empowering businesses and
                specialize in crafting software for diverse needs and scales,
                driving technology forward.
              </p>
              <br></br>
            </div>
            <div className={style.about_image}>
              <Image
                // className="w-100 h-100"
                src="/aboutUsImages/group.png"
                alt="Aim Board"
                width={700}
                height={350}
              />
            </div>
          </div>

          <Vision />
        </div>
        <div className="about-area-6-circle-1">
          <Image
            // className="w-100 h-100"
            src="/aboutUsImages/arrow.png"
            alt="Aim Board"
            width={55}
            height={59}
            objectFit="cover"
          />
        </div>
        <div className="about-area-6-circle-2">
          <Image
            // className="w-100 h-100"
            src="/aboutUsImages/cube2.png"
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
            width={84.6}
            height={78.43}
            objectFit="cover"
          />
        </div>
      </div>
    </>
  )
}
export default Teams
