import React, { useEffect, useState } from 'react'

const Plan = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const handlePlanSelect = (e) => {
    setSelectedPlan(e);
  }
  return (
    <>
        <div id="plan" className="plan js-plan">
          <div className="plan__center center">
            <div className="plan__head" data-aos="animation-scale-y">
              <div className="plan__stage stage">Join The Revolution</div>
              <h2 className="plan__title title">
                Find the
                <span className="title__color">Right Plan.</span>
              </h2>
              <div className="plan__info info">Flexible pricing options for freelancers and design teams.</div>
              <label className="switch">
                <input className="switch__input" type="checkbox" defaultChecked />
                <span className="switch__flex">
                  <span className="switch__yearly">Billed Yearly</span>
                  <span className="switch__box"></span>
                  <span className="switch__monthly">Billed Monthly</span>
                </span>
              </label>
              <div className="plan__variants">
                <select onChange={e => handlePlanSelect(e.target.value)} className="plan__select js-plan-select">
                  <option value="professional" >Professional</option>
                  <option value="standard" >Standard</option>
                  <option value="ultimate" >Ultimate</option>
                </select>
              </div>
            </div>
            <div className="plan__body">
              <div className="plan__item js-plan-item" style={ selectedPlan == 'professional' ? {display: "block"} : {display: "none"} } data-aos="animation-translate-y">
                <div className="plan__star"><svg className="icon icon-star">
                    <use xlinkHref="img/sprite.svg#icon-star"></use>
                  </svg></div>
                <div className="plan__category">
                  <div className="plan__icon">
                    <img className="plan__pic" src="img/smile-1.webp" alt="" />
                  </div>
                  <div className="plan__text">Individual</div>
                </div>
                <h3 className="plan__title title title_sm">Professional</h3>
                <div className="plan__price"><span className="plan__money">$19.99</span> /month</div>
                <ul className="plan__list">
                  <li>1 user</li>
                  <li>2 TB of secure storage</li>
                  <li>Premium productivity features and simple, secure file sharing</li>
                </ul><a className="plan__btn btn btn_white js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try free for 30 days</a>
              </div>
              <div className="plan__item js-plan-item" style={ selectedPlan == 'standard' ? {display: "block"} : {display: "none"} } data-aos="animation-translate-y" data-aos-delay="200">
                <div className="plan__category">
                  <div className="plan__icon">
                    <img className="plan__pic" src="img/smile-2.webp" alt="" />
                  </div>
                  <div className="plan__text">Small Team</div>
                </div>
                <h3 className="plan__title title title_sm">Standard</h3>
                <div className="plan__price"><span className="plan__money">$29.99</span> /month</div>
                <ul className="plan__list">
                  <li>3+ user</li>
                  <li>5 TB of secure storage</li>
                  <li>Premium productivity features and simple, secure file sharing</li>
                </ul><a className="plan__btn btn btn_pink js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try free for 30 days</a>
              </div>
              <div className="plan__item js-plan-item" style={ selectedPlan == 'ultimate' ? {display: "block"} : {display: "none"} } data-aos="animation-translate-y" data-aos-delay="400">
                <div className="plan__category">
                  <div className="plan__icon">
                    <img className="plan__pic" src="img/smile-2.webp" alt="" />
                  </div>
                  <div className="plan__text">Large Team</div>
                </div>
                <h3 className="plan__title title title_sm">Ultimate</h3>
                <div className="plan__price"><span className="plan__money">$99.99</span> /month</div>
                <ul className="plan__list">
                  <li>10+ user</li>
                  <li>10 TB of secure storage</li>
                  <li>Premium productivity features and simple, secure file sharing</li>
                </ul><a className="plan__btn btn btn_purple js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try free for 30 days</a>
              </div>
            </div>
          </div>
          <div className="plan__circle js-rellax" data-rellax-speed="-1"></div>
        </div>
    </>
  )
}

export default Plan