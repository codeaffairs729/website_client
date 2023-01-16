import React from 'react'

const Speed = () => {
  return (
    <div className="speed">
          <div className="speed__center center">
            <div className="speed__wrap">
              <div className="speed__head" data-aos="animation-scale-y">
                <div className="speed__stage stage">Collab is fast, super fast.</div>
                <h2 className="speed__title title">Speed up <br/>your <br/>workflow<span className="title__color">.</span></h2>
                <div className="speed__text">Essentially no lag, no matter the size of the file, even on mobile devices.</div>
              </div>
              <div className="speed__number" data-aos="animation-scale-y"><span>8.1</span>x</div>
            </div>
          </div>
          <div className="speed__line">
            <img className="speed__pic" src="img/line.webp" alt="" />
          </div>
          <div className="speed__preview" data-aos>
            <div className="speed__graphic">
              <img className="speed__pic" src="img/graphic.webp" alt=""/>
            </div>
            <div className="speed__plant">
              <img className="speed__pic js-parallax" data-scale="1.3" data-orientation="left" src="img/plant.webp" alt="" />
            </div>
          </div>
          <div className="speed__circles">
            <div className="speed__circle js-rellax" data-rellax-speed="-1"></div>
            <div className="speed__circle js-rellax" data-rellax-speed="1"></div>
            <div className="speed__circle"></div>
          </div>
        </div>
  )
}

export default Speed