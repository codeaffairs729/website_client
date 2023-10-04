import React from 'react'

function Joining() {
  return (
    <>
      <div className="container-fluid my-5 career-area-3">
        <div className="container">
          <div className="row career-area-3-outer-row border-top-5 p-5">
            <div className="col-lg-12">
              <h2 className="mb-4 career-area-3-heading">
                Hop on a Hyper Growth ride
                {/* &gt;&gt;&gt; */}
              </h2>
            </div>
            <div className="col-lg-6 col-md-6 career-area-3-para d-flex align-items-center">
              <p>
                We Experiment, Adapt & Continually Grow. You won&apos;t find a
                more dedicated, diligent team of professionals anywhere else who
                utilize Web & App development technology cheerfully. We want to
                see your career success and we pride ourselves on working hard
                to make sure it happens. Mark your part as an inclusive,
                collaborative, diverse, and supportive team. At Code Garage
                Tech, we push the boundaries to make your career go boom!
              </p>
            </div>
            <div className="col-lg-6 col-md-6 career-area-3-circle-outer text-end">
              <img
                className="career-area-3-img-rocket"
                src="/career_images/ROCKET.webp"
                alt="3D Rocket Backgroound Imageebp"
              />
              {/* <div className='about-area-circle career-area-3-circle1' ></div>
                        <img className='career-area-3-cursor' src='img/cursor.webp' alt='' />
                        <div className='about-area-circle career-area-3-circle2' ></div> */}
            </div>
            <div className="about-area-circle career-area-3-circle3"></div>
            <img
              className="career-area-3-cursor"
              src="/img/cursor-1.webp"
              alt="3D Cursor"
            />
            <img
              className="career-area-3-cloud-1"
              src="/img/cloud.webp"
              alt="3D Cloud"
            />
            <img
              className="career-area-3-cloud-2"
              src="/img/cloud.webp"
              alt="3D Cloud"
            />
          </div>
          {/* <img className='career-area-3-line-circle' src='images/career-line-circle.webp' alt='' /> */}
        </div>
      </div>
      <div className="container-fluid career-area-4">
        <div className="container">
          <div className="row justify-content-center align-items-center career-area-4-row">
            <div className="career-area-4-heading">
              Our Best Perks Are
              <br />
              Pe<span className="text-danger">o</span>ple Themselves
            </div>
            <div className="rounded-circle career-area-4-circle1"></div>
            <div className="rounded-circle career-area-4-circle2"></div>
            <div
              className="rounded-circle career-area-4-circle3"
              role="img"
              aria-label="2 Girls having fun at Swiming Pool"
            ></div>
            <div className="rounded-circle career-area-4-circle4"></div>
          </div>
          <div className="rounded-circle career-area-4-circle5"></div>
        </div>
      </div>
    </>
  )
}
export default Joining
