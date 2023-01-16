import React from 'react'

const Offer = () => {
  return (
    <div className="offer">
          <div className="offer__center center">
            <div className="offer__container">
              <div className="offer__head">
                <h2 className="offer__title title" data-aos="animation-scale-y">Ready to use the smartest design tool?</h2>
                <div className="offer__info info" data-aos="animation-scale-y" data-aos-delay="150">We offer flexible pricing options for freelancing and design teams.</div>
                <div className="offer__btn" data-aos="animation-scale-y" data-aos-delay="300"><a className="btn btn_white js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try free for 30 days</a></div>
              </div>
              <div className="offer__circles">
                <div className="offer__circle"></div>
                <div className="offer__circle"></div>
              </div>
            </div>
            <div className="offer__circle"></div>
          </div>
          <div className="offer__view" data-aos data-aos-delay="400" data-aos-offset="0">
            <div className="offer__preview">
              <img className="offer__pic" src="img/offer-pic-1.webp" alt="" />
            </div>
            <div className="offer__preview">
              <img className="offer__pic" src="img/offer-pic-2.webp" alt="" />
            </div>
            <div className="offer__preview">
              <img className="offer__pic" src="img/offer-pic-3.webp" alt="" />
            </div>
            <div className="offer__preview">
              <img className="offer__pic" src="img/offer-pic-4.webp" alt="" />
            </div>
            <div className="offer__preview">
              <img className="offer__pic" src="img/offer-pic-5.webp" alt="" />
            </div>
          </div>
        </div>
  )
}

export default Offer