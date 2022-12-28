import React from 'react'
const Demo = () => {
  return (
    <div className="demo">
      <div className="demo__center center">
        <div className="demo__head" data-aos="animation-scale-y">
          <div className="demo__icon">🔥</div>
          <div className="demo__info">We offer flexible pricing options for freelancers and design teams.</div>
        </div>
        <div className="demo__list">
          <div className="demo__item" data-aos="animation-translate-y">
            <h3 className="demo__title title title_sm">Schedule <br />Product <br />Demo</h3>
            <div className="demo__text">Still not sure? Schedule a demo to see how Collab can help you get more done.</div>
            <a className="demo__btn btn btn_purple js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Schedule a Demo</a>
          </div>
          <div className="demo__item" data-aos="animation-translate-y" data-aos-delay="200">
            <h3 className="demo__title title title_sm">Get <br />Started <br />Now</h3>
            <div className="demo__text">Ready to revolutionize your design workflow? Try Collab for free for 30 days.</div>
            <a className="demo__btn btn btn_white js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try free for 30 days</a>
          </div>
        </div>
      </div>
      <div className="demo__circle js-rellax" data-rellax-speed="1"></div>
    </div>
  )
}

export default Demo