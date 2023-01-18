import React from 'react'

const Tool = () => {
  return (
    <div className="tool">
      <div className="tool__center center">
        <div className="tool__container">
          <div className="tool__wrap">
            <h2 className="tool__title title" data-aos="animation-scale-y">Ready to use the smartest design tool?</h2>
            <div className="tool__info info" data-aos="animation-scale-y" data-aos-delay="150">We offer flexible pricing options for freelancers and design teams. </div>
            <div className="tool__btn" data-aos="animation-scale-y" data-aos-delay="300"><a className="btn btn_white js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try free for 30 days</a></div>
          </div>
          <div className="tool__cloud">
            <img className="tool__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.webp" alt="3D Cloud" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tool