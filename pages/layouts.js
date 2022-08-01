import React from 'react'

const Layouts = () => {
  return (
    <>
        <div className="layouts">
          <div className="layouts__center center">
            <div className="layouts__wrap">
              <div className="layouts__head" data-aos="animation-scale-y">
                <h2 className="layouts__title title">Technologies We Use<span className="title__color">.</span></h2>
              </div>
              <div className="layouts__info info" data-aos="animation-scale-y">Easily create truly responsive components while deploying production-ready code.</div>
              <div className="layouts__list">
                <div className="layouts__item" data-aos="animation-scale-y">
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="img/layout-1.svg" alt="" />
                  </div>
                  <div className="layouts__text">React/Redux</div>
                </div>
                <div className="layouts__item" data-aos="animation-scale-y">
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="img/layout-2.svg" alt="" />
                  </div>
                  <div className="layouts__text">Android/Swift</div>
                </div>
                <div className="layouts__item" data-aos="animation-scale-y">
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="img/layout-3.svg" alt="" />
                  </div>
                  <div className="layouts__text">Python/Flask/Django</div>
                </div>
                <div className="layouts__item" data-aos="animation-scale-y">
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="img/layout-3.svg" alt="" />
                  </div>
                  <div className="layouts__text">Node JS</div>
                </div>
                <div className="layouts__item" data-aos="animation-scale-y">
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="img/layout-3.svg" alt="" />
                  </div>
                  <div className="layouts__text">Ruby on Rails</div>
                </div>
                <div className="layouts__item" data-aos="animation-scale-y">
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="img/layout-3.svg" alt="" />
                  </div>
                  <div className="layouts__text">PHP/Wordpress</div>
                </div>
              </div>
            </div>
            <div className="layouts__view" data-aos>
              <div className="layouts__preview">
                <img className="layouts__pic" src="img/layouts-pic-1.png" alt="" />
              </div>
              <div className="layouts__preview">
                <img className="layouts__pic" src="img/layouts-pic-2.png" alt="" />
              </div>
              <div className="layouts__preview">
                <img className="layouts__pic" src="img/layouts-pic-3.png" alt="" />
              </div>
              <div className="layouts__preview">
                <img className="layouts__pic" src="img/layouts-pic-4.png" alt="" />
              </div>
              <div className="layouts__preview">
                <img className="layouts__pic" src="img/layouts-pic-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Layouts