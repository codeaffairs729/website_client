import React from 'react'

const Work = () => {
  return (
    <div className="work">
          <div className="work__center center">
            <div className="work__head">
              <div className="work__stage stage">Collaboration Redefined</div>
              <h2 className="work__title title"><span className="title__color">Get Work<br/> Done</span> together</h2>
            </div>
            <div className="work__details" data-aos="animation-translate-y" data-aos-duration="800">
              <div className="work__icon">
                <img className="work__pic" src="img/balls.svg" alt="" />
              </div>
              <div className="work__text">Let your personalized Collab assistant do the heavy lifting while you focus on creating.</div><a className="work__link" href="#">Find out more</a>
            </div>
          </div>
          <div className="work__hands">
            <div className="work__hand" data-aos data-aos-duration="800" data-aos-offset="0">
              <img className="work__pic js-parallax" data-scale="1.2" data-orientation="down" src="img/hand-2.png" alt="" />
            </div>
            <div className="work__hand" data-aos data-aos-duration="800" data-aos-offset="0">
              <img className="work__pic js-parallax" data-scale="1.3" data-orientation="up" src="img/hand-3.png" alt="" />
            </div>
          </div>
          <div className="work__wave">
            <img className="work__pic" src="img/wave.svg" alt="" />
          </div>
          <div className="work__preview" data-aos data-aos-duration="600">
            <img className="work__pic" src="img/work-pic.png" alt="" />
          </div>
          <div className="work__circles">
            <div className="work__circle js-rellax" data-rellax-speed="1"></div>
            <div className="work__circle"></div>
            <div className="work__circle js-rellax" data-rellax-speed="-1"></div>
            <div className="work__circle"></div>
            <div className="work__circle"></div>
          </div>
          <div className="work__cursor" data-aos>
            <img className="work__pic" src="img/cursor.png" alt="" />
          </div>
        </div>
  )
}

export default Work