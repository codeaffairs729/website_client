import React from 'react'
import Typewriter from 'typewriter-effect';

const Partners = () => {
  return (
    <div className="partners">
          <div className="partners__center center">
            <div className="partners__head" data-aos="animation-scale-y">
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
            </div>
            <div className="partners__list">
              <div className="partners__item" data-aos>
                <img className="partners__pic" src="img/waves.svg" alt="" />
              </div>
              <div className="partners__item" data-aos data-aos-delay="150">
                <img className="partners__pic" src="img/goldlines.svg" alt="" />
              </div>
              <div className="partners__item" data-aos data-aos-delay="300">
                <img className="partners__pic" src="img/oliver.svg" alt="" />
              </div>
              <div className="partners__item" data-aos data-aos-delay="450">
                <img className="partners__pic" src="img/duotrip.svg" alt="" />
              </div>
              <div className="partners__item" data-aos>
                <img className="partners__pic" src="img/rota-show.svg" alt="" />
              </div>
              <div className="partners__item" data-aos data-aos-delay="150">
                <img className="partners__pic" src="img/travelers.svg" alt="" />
              </div>
              <div className="partners__item" data-aos data-aos-delay="300">
                <img className="partners__pic" src="img/velocity-9.svg" alt="" />
              </div>
              <div className="partners__item" data-aos data-aos-delay="450">
                <img className="partners__pic" src="img/foxds.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="partners__preview" data-aos data-aos-duration="1000">
            <img className="partners__pic" src="img/partners-pic.svg" alt="" />
          </div>
          <div className="partners__circle js-rellax" data-rellax-speed=".6"></div>
        </div>
  )
}

export default Partners