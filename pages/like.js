import React, { useEffect, useState } from 'react'
import Router from 'next/router'

const Like = () => {
  const [likeOptionOne, setLikeOptionOne] = useState(false);
  const [likeOptionTwo, setLikeOptionTwo] = useState(false);
  const [likeOptionThree, setLikeOptionThree] = useState(false);
  const [likeOptionFour, setLikeOptionFour] = useState(false);

  const likeOptionOneFunc = () => {
    const likeOptionOneStatus = likeOptionOne ? false : true;
    setLikeOptionOne(likeOptionOneStatus);
    setLikeOptionTwo(false);
    setLikeOptionThree(false);
    setLikeOptionFour(false);
  }

  const likeOptionTwoFunc = () => {
    const likeOptionTwoStatus = likeOptionTwo ? false : true;
    setLikeOptionTwo(likeOptionTwoStatus);
    setLikeOptionOne(false);
    setLikeOptionThree(false);
    setLikeOptionFour(false);
  }

  const likeOptionThreeFunc = () => {
    const likeOptionThreeStatus = likeOptionThree ? false : true;
    setLikeOptionThree(likeOptionThreeStatus);
    setLikeOptionTwo(false);
    setLikeOptionOne(false);
    setLikeOptionFour(false);
  }

  const likeOptionFourFunc = () => {
    const likeOptionFourStatus = likeOptionFour ? false : true;
    setLikeOptionFour(likeOptionFourStatus);
    setLikeOptionThree(false);
    setLikeOptionTwo(false);
    setLikeOptionOne(false);
  }
  return (
    <>
      <div className="like">
        <div className="like__center center">
          <div className="like__container">
            <div className="like__wrap">
              <h2 className="like__title title" data-aos="animation-scale-x">
                Why Code Garage
                <span className="title__color">?</span>
              </h2>
              <div className="like__text" data-aos="animation-scale-x" data-aos-delay="150">
                {/* <p>
                  Let us take care of your problems.
                </p> */}
                <ul className="like-list text-start d-inline-block w-100" data-aos="animation-scale-y" data-aos-delay="200">
                  <li>
                    <a href={void(0)} onClick={() => likeOptionOneFunc()} className="like-options d-flex align-items-center" >
                      Transparency
                      <svg className="icon icon-arrow-down like-section-arrow">
                        <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                      </svg>
                    </a>
                    <div className={likeOptionOne ? "collapse show" : "collapse"} >
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                  </li>
                  <li>
                    <a href={void(0)} onClick={() => likeOptionTwoFunc()} className="like-options d-flex align-items-center" >
                      Availability
                      <svg className="icon icon-arrow-down like-section-arrow">
                        <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                      </svg>
                    </a>
                    <div className={likeOptionTwo ? "collapse show" : "collapse"} >
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                  </li>
                  <li>
                    <a href={void(0)} onClick={() => likeOptionThreeFunc()} className="like-options d-flex align-items-center" >
                      Process Oriented Work
                      <svg className="icon icon-arrow-down like-section-arrow">
                        <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                      </svg>
                    </a>
                    <div className={likeOptionThree ? "collapse show" : "collapse"} >
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                  </li>
                  <li>
                    <a href={void(0)} onClick={() => likeOptionFourFunc()} className="like-options d-flex align-items-center" >
                      Upto Date on IT Trends
                      <svg className="icon icon-arrow-down like-section-arrow">
                        <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                      </svg>
                    </a>
                    <div className={likeOptionFour ? "collapse show" : "collapse"} >
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                  </li>
                </ul>
              </div>
              {/* <div className="like__btn" data-aos="animation-scale-x" data-aos-delay="300">
                <button className="btn btn_purple" onClick={() => { Router.push('./contact') }} >See Our Work</button>
              </div> */}
            </div>
            <div className="like__preview" data-aos>
              <img className="like__pic" src="img/hand-1.png" alt="" />
            </div>
            <div className="like__circle"></div>
            <div className="like__circles">
              <div className="like__circle"></div>
              <div className="like__circle js-rellax" data-rellax-speed="-1"></div>
              <div className="like__circle js-rellax" data-rellax-speed=".8"></div>
              <div className="like__circle"></div>
              <div className="like__circle"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Like