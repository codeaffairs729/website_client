import React from 'react'
import Image from 'next/image'
const Trophies = () => {
  return (
    <>
      <div className="container-fluid trophies margin-bottom">
        <div className="container trophies-padding">
          <div className="row">
            <div
              className="col-lg-4 col-md-4 trophies-cols"
              data-aos="animation-scale-x-left"
            >
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  {/* <img
                    className="trophies-img"
                    src="images/Calendar.webp"
                    alt="3D Calender"
                  /> */}
                  <div className="trophies-img">
                    <Image
                      src="/images/Calendar.webp"
                      alt="3D Calender"
                      width={74}
                      height={100}
                    />
                  </div>
                </div>
                <div className="col-lg-12 text-center trophies-text">
                  7+ Years
                  <br />
                  Of Excellence
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 trophies-cols"
              data-aos="animation-scale-y"
            >
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  {/* <img
                    className="trophies-img"
                    src="images/trophy-front-clay.webp"
                    alt="3D Trophy Front Clay"
                  /> */}
                  <div className="trophies-img">
                    <Image
                      src="/images/trophy-front-clay.webp"
                      alt="3D Trophy Front Clay"
                      width={84}
                      height={100}
                    />
                  </div>
                </div>
                <div className="col-lg-12 text-center trophies-text">
                  150+ Projects
                  <br />
                  Delivered
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4"
              data-aos="animation-scale-x-right"
            >
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  {/* <img
                    className="trophies-img"
                    src="images/frame_2.webp"
                    alt="frame image"
                  /> */}
                  <div className="trophies-img">
                    <Image
                      src="/images/frame_2.webp"
                      alt="frame image"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="col-lg-12 text-center trophies-text">
                  120+ International
                  <br />
                  Clients
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="trophies-dark-circle"></div>
        <div className="trophies-two-colored-circle"></div>
      </div>
    </>
  )
}

export default Trophies
