import React from 'react'
import Image from 'next/image'
function Company_history() {
  return (
    <>
      <div className="container-fluid my-3 about-area-2">
        <div className="container">
          <div className="row about-area-2-outer-row">
            <div className="col-lg-6 d-flex justify-content-center about-area-2-outer-col">
              <div className="about-area-2-pic-2">
                <Image
                  className="image-radius-50"
                  src="/aboutUsImages/team_pic_6.webp"
                  alt="Old CGT Team Members"
                  layout="fill"
                />
              </div>
              {/* <img
                className="about-area-2-pic-3"
                src="aboutUsImages/team_pic_7.webp"
                alt="Old CGT Team "
              /> */}
              <div className="about-area-2-pic-3">
                <Image
                  className="image-radius-50"
                  src="/aboutUsImages/team_pic_7.webp"
                  alt="Old CGT Team "
                  layout="fill"
                />
              </div>
              {/* <img
                className="about-area-2-pic-4"
                src="aboutUsImages/team_pic_8.webp"
                alt="Vishav, Shubham & Tanya"
              /> */}

              <div className="about-area-2-pic-4">
                <Image
                  className="image-radius-50"
                  src="/aboutUsImages/team_pic_8.webp"
                  alt="Vishav, Shubham & Tanya"
                  layout="fill"
                />
              </div>
            </div>
            <div className="col-lg-6 about-area-2-text-area">
              <h2 className="about-area-2-heading mb-5">Our History</h2>
              <p className="about-area-2-para">
                In 2015, we established our agency to aid a few small
                enterprises to thrive, utilizing information technology. During
                our journey of 7 years, they have grown up with us.
                <br />
                <br />
                Code Garage was founded with an apparent idea in mind - to
                create exceptional software that we can take pride in. We built
                many brands by crafting digital experiences that create lasting
                impact.
                <br />
                <br />
                Throughout our remarkable journey, we encountered numerous
                challenges, yet our unwavering dedication and determination led
                us to overcome each one of them.
                <br />
                <br />
                By embracing innovation and staying at the forefront of
                technological advancements, we have continuously empowered
                businesses with transformative solutions tailored to their
                unique needs, that helped us establish robust connections with
                enterprises across the globe.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="about-area-2-circle1"></div>
        <div className="about-area-2-circle2"></div>
        <div className="about-area-2-circle3"></div>
        <div className="about-area-2-circle4"></div>
        {/* <img
          className="about-area-2-cube"
          src="images/cube.webp"
          alt="3D Cube"
        /> */}

        <div className="about-area-2-cube">
          <Image
            className=""
            src="/images/cube.webp"
            alt="3D Cube"
            layout="fill"
          />
        </div>
      </div>

      <div className="container-fluid about-area-8">
        <div className="container about-area-8-container d-flex flex-column justify-content-center align-items-center  ">
          <h2 className="text-center about-area-8-heading">
            We Connect Globally
          </h2>
          <img
            className="w-75"
            src="aboutUsImages/global_connections.webp"
            alt="3D Global Map"
            useMap="#world-map"
          />
          <map name="world-map">
            <area
              shape="rect"
              coords="180,130,200,180"
              alt="North America"
              title="North America"
              className="cursor_pointer"
            />
            <area
              shape="rect"
              coords="480,160,500,210"
              alt="Europe"
              title="Europe"
              className="cursor_pointer"
            />
            <area
              shape="rect"
              coords="500,270,520,320"
              alt="India"
              title="Africa"
              className="cursor_pointer"
            />
            <area
              shape="rect"
              coords="630,170,650,220"
              alt="Asia"
              title="Asia"
              className="cursor_pointer"
            />
            <area
              shape="rect"
              coords="220,320,250,370"
              alt="South America"
              title="South America"
              className="cursor_pointer"
            />
            <area
              shape="rect"
              coords="780,380,810,430"
              alt="Australia"
              title="Australia"
              className="cursor_pointer"
            />
          </map>
        </div>
      </div>
    </>
  )
}
export default Company_history
