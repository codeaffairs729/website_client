import React from 'react'

const Quality = () => {
  return (
    <div className="quality">
          <div className="quality__head">
            <div className="quality__center center">
              <div className="quality__top" data-aos="animation-scale-y">
                <div className="quality__stage stage">Effortless</div>
                <h2 className="quality__title title">Go from ideation to <br/>design and done<span className="title__color">.</span></h2>
              </div>
              <div className="quality__info info" data-aos="animation-scale-y" data-aos-delay="200">Easily create truly responsive components while deploying production-ready code.</div>
            </div>
            <div className="quality__line">
              <img className="quality__pic" src="img/line-3.webp" alt="" />
            </div>
            <div className="quality__preview">
              <img className="quality__pic js-parallax" data-scale="1.2" data-orientation="left" src="img/lamp.webp" alt="" />
            </div>
          </div>
          <div className="quality__body">
            <div className="quality__col">
              <div className="quality__item" data-aos="animation-scale-x-left">
                <div className="quality__icon">
                  <img className="quality__pic" src="img/camera-big.webp" alt="" />
                </div>
                <div className="quality__details">
                  <div className="quality__category">Assets Library</div>
                  <div className="quality__text">Get access to huge library of ready-made components and illustrations, free to use on all your projects.</div><a className="quality__link" href="#">Learn more<svg className="icon icon-arrow-right">
                      <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="quality__col">
              <div className="quality__item" data-aos="animation-scale-x-right" data-aos-delay="200">
                <div className="quality__icon">
                  <img className="quality__pic" src="img/clock-big.webp" alt="" />
                </div>
                <div className="quality__details">
                  <div className="quality__category">Save Time</div>
                  <div className="quality__text">Save tons of time by eliminating repetitive day-to-day tasks and slow load times. </div><a className="quality__link" href="#">Learn more<svg className="icon icon-arrow-right">
                      <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="quality__col">
              <div className="quality__item" data-aos="animation-scale-x-left">
                <div className="quality__icon">
                  <img className="quality__pic" src="img/cup-big.webp" alt="" />
                </div>
                <div className="quality__details">
                  <div className="quality__category">Relax</div>
                  <div className="quality__text">Let your personalized Collab assistant do the heavy lifting while you focus on creating.Say good bye to code 👋</div><a className="quality__link" href="#">Learn more<svg className="icon icon-arrow-right">
                      <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="quality__col">
              <div className="quality__item" data-aos="animation-scale-x-right" data-aos-delay="200">
                <div className="quality__icon">
                  <img className="quality__pic" src="img/chatbox-big.webp" alt="" />
                </div>
                <div className="quality__details">
                  <div className="quality__category">Support</div>
                  <div className="quality__text">Got stuck or need any help? Our support team is online 24/7 to help assist you with any issues.</div><a className="quality__link" href="#">Learn more<svg className="icon icon-arrow-right">
                      <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                    </svg></a>
                </div>
              </div>
            </div>
          </div>
          <div className="quality__circles">
            <div className="quality__circle"> </div>
            <div className="quality__circle"> </div>
          </div>
        </div>
  )
}

export default Quality