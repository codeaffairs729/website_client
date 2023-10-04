import React from 'react'

function Company_highlites() {
  return (
    <>
      <div className="container-fluid trophies bg-white about-us-trophies">
        <div className="container d-flex flex-column">
          <div className="about-area-headline-container">
            <h2 className="text-center mb-5 about-area-4-heading">
              Highlights
            </h2>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-4 trophies-cols"
              data-aos="animation-scale-x-left"
            >
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <img
                    className="trophies-img"
                    src="images/Calendar.webp"
                    alt="3D Calender"
                  />
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
                  <img
                    className="trophies-img"
                    src="images/trophy-front-clay.webp"
                    alt="3D Trophy Front Clay"
                  />
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
                  <img
                    className="trophies-img"
                    src="images/frame_2.webp"
                    alt=""
                  />
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
      </div>
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
      {/* <div className="main">
                <div className="main__center center">
                    <div>
                        <h1>The Team You’re Looking for</h1>
                        <p>We offer flexible pricing options for freelancers and design teams. </p>
                        <button className='btn' >Our Magic Potion</button>
                    </div>
                </div>
            </div> */}
    </>
  )
}
export default Company_highlites
