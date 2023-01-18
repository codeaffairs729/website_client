import React from 'react'
import Trophies from './trophies'

const Partners = () => {
  return (
    <>
      <Trophies />
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
              <img className="partners__pic partners-pic" src="images/video-chat-a-pro.webp" alt="Video Chat a Pro - Logo" />
            </div>
            <div className="partners__item" data-aos data-aos-delay="450">
              <img className="partners__pic partners-pic" src="images/welcomeAi_2.webp" alt="Welcome AI - Logo" />
            </div>
            <div className="partners__item" data-aos data-aos-delay="150">
              <img className="partners__pic partners-pic" src="images/bzigo.webp" alt="Bzigo - Logo" />
            </div>
            <div className="partners__item" data-aos>
              <img className="partners__pic partners-pic" src="images/desmania-design.webp" alt="Desmania Design - Logo" />
            </div>
            <div className="partners__item" data-aos data-aos-delay="450">
              <img className="partners__pic partners-pic" src="images/vaayu.webp" alt="Vaayu - Logo" />
            </div>
            <div className="partners__item" data-aos data-aos-delay="150">
              <img className="partners__pic partners-pic" src="images/domino-data-lab.webp" alt="Domino Data Lab - Logo" />
            </div>
            <div className="partners__item" data-aos data-aos-delay="300">
              <img className="partners__pic partners-pic" src="images/ucview_2.webp" alt="UcView - Logo" />
            </div>
            <div className="partners__item" data-aos data-aos-delay="300">
              <img className="partners__pic partners-pic" src="images/golden-circle-app.webp" alt="Golden Circle App - Logo" />
            </div>
          </div>
        </div>
        <div className="partners__preview" data-aos data-aos-duration="1000">
          <img className="partners__pic" src="images/logos-circle.webp" alt="Background Circle" />
        </div>
        {/* <div className="partners__circle js-rellax" data-rellax-speed=".6"></div> */}
      </div>
    </>
  )
}

export default Partners