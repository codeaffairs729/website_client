import React from 'react'
import Image from 'next/image'
function vision() {
  return (
    <>
      <div className="container-fluid about-area-7">
        <div className="container">
          <div className="row about-area-7-row">
            <div className="col-lg-7 col-md-6 about-area-7-left-outer">
              <h2 className="about-area-7-heading mb-5">
                Our
                <span className="title__color about-area-7-heading-span">
                  {' '}
                  Vision
                </span>
              </h2>
              <p className="about-area-7-para">
                Our vision is to develop future-oriented solutions to assure
                growth for people seeking a technological transition in their
                modern business modules.
                <br />
                <br />
                We believe in empowering entrepreneurs by providing valuable
                software and delivering quality to society. Our IT services
                emphasize delivering optimal solutions with top-notch services
                in web design and development, mobile development, and digital
                marketing. By leveraging the power of new technologies, our goal
                is to deliver quality-centered software services to aspiring
                businesses.
                <br />
                <br />
              </p>
            </div>
            <div className="col-lg-5 col-md-6 about-area-7-pic-1-outer d-flex align-items-center justify-content-center ">
              <Image
                // className="w-100 h-100"
                src="/aboutUsImages/target_arrow.png"
                alt="Aim Board"
                width={400}
                height={400}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="about-area-7-circle-1"></div>
        </div>
      </div>
    </>
  )
}
export default vision
