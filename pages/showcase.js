import React from 'react'

const Showcase = () => {
  return (
    <div className="showcase">
          <div className="showcase__center center">
            <div className="showcase__wrap">
              <div className="showcase__top" data-aos="animation-scale-y">
                <div className="showcase__stage stage">Showcase</div>
                <h2 className="showcase__title title">Created with Collab<span className="title__color">.</span></h2>
              </div>
              <div className="showcase__info info" data-aos="animation-scale-y" data-aos-delay="150">See what designers around the world are building with Collab.</div>
              <div className="showcase__btn" data-aos="animation-scale-y" data-aos-delay="300"><button className="btn btn_purple">View More Projects</button></div>
            </div>
          </div>
          <div className="showcase__bg">
            <img className="showcase__pic" src="img/showcase-circle.webp" alt="Solid Blue Circle with white Dots" />
          </div>
          <div className="showcase__circles">
            <div className="showcase__circle"></div>
            <div className="showcase__circle"></div>
          </div>
          <div className="showcase__list">
            <div className="showcase__preview">
              <img className="showcase__pic js-parallax" data-scale="1.3" data-orientation="right" src="img/group-1.webp" alt="" />
            </div>
            <div className="showcase__preview">
              <img className="showcase__pic js-parallax" data-scale="1.3" data-orientation="left" src="img/group-2.webp" alt="" />
            </div>
          </div>
        </div>
  )
}

export default Showcase