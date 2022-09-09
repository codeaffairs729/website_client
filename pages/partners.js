import React from 'react'

const Partners = () => {
  return (
    <>
      <div className='container-fluid trophies' >
        <div className='container' >
          <div className='row' >
            <div className='col-lg-4 col-md-4 trophies-cols' data-aos="animation-scale-x-left">
              <div className='row' >
                <div className='col-lg-12 d-flex justify-content-center' >
                  <img className='trophies-img' src='images/Calendar.png' alt='' />
                </div>
                <div className='col-lg-12 text-center trophies-text' >
                  7+ Years
                  <br/>
                  Of Excellence
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 trophies-cols' data-aos="animation-scale-y" >
              <div className='row' >
                <div className='col-lg-12 d-flex justify-content-center' >
                  <img className='trophies-img' src='images/trophy-front-clay.png' alt='' />
                </div>
                <div className='col-lg-12 text-center trophies-text' >
                  150+ Projects
                  <br/>
                  Delivered
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4' data-aos="animation-scale-x-right">
              <div className='row' >
                <div className='col-lg-12 d-flex justify-content-center' >
                  <img className='trophies-img' src='images/frame_2.png' alt='' />
                </div>
                <div className='col-lg-12 text-center trophies-text' >
                  120+ International
                  <br/>
                  Clients
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='trophies-dark-circle' ></div>
        <div className='trophies-two-colored-circle' ></div>
      </div>
      <div className="partners">
        <div className="partners__center center">
          {/* <div className="partners__head" data-aos="animation-scale-y">
            <div className="partners__stage stage">Clients</div>
            <div className="partners__details">
              <h2 className="partners__title title">
                We’re Top Ranked
                Service Provider
                On <Typewriter
                    options={{
                        strings: ['Upwork', 'Clutch.co', 'People per Hour'],
                        autoStart: true,
                        loop: true,
                    }}
                />
              </h2>
              <div className="partners__info info">Design anything from simple icons to fully featured websites and applications.</div>
            </div>
          </div> */}
          <div className="partners__list">
            <div className="partners__item" data-aos>
              <img className="partners__pic partners-pic" src="images/video-chat-a-pro.png" alt="" />
            </div>
            <div className="partners__item" data-aos data-aos-delay="450">
              <img className="partners__pic partners-pic" src="images/welcomeAi_2.png" alt="" />
            </div>
            <div className="partners__item" data-aos data-aos-delay="150">
              <img className="partners__pic partners-pic" src="images/bzigo.png" alt="" />
            </div>
            <div className="partners__item" data-aos>
              <img className="partners__pic partners-pic" src="images/desmania-design.png" alt="" />
            </div>
            <div className="partners__item" data-aos data-aos-delay="450">
              <img className="partners__pic partners-pic" src="images/vaayu.png" alt="" />
            </div>
            <div className="partners__item" data-aos data-aos-delay="150">
              <img className="partners__pic partners-pic" src="images/domino-data-lab.png" alt="" />
            </div>
            <div className="partners__item" data-aos data-aos-delay="300">
              <img className="partners__pic partners-pic" src="images/ucview_2.png" alt="" />
            </div>
            <div className="partners__item" data-aos data-aos-delay="300">
              <img className="partners__pic partners-pic" src="images/golden-circle-app.png" alt="" />
            </div>
          </div>
        </div>
        <div className="partners__preview" data-aos data-aos-duration="1000">
          <img className="partners__pic" src="images/logos-circle.png" alt="" />
        </div>
        {/* <div className="partners__circle js-rellax" data-rellax-speed=".6"></div> */}
      </div>
    </>
  )
}

export default Partners