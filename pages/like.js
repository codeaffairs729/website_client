import React from 'react'
import Router from 'next/router'

const Like = () => {
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
                <p>
                  Let us take care of your problems.
                </p>
                <ul className="like-list" data-aos="animation-scale-y" data-aos-delay="200">
                    <li>Quality 1</li>
                    <li>Quality 2</li>
                    <li>Quality 3</li>
                    <li>Quality 4</li>
                </ul>
              </div>
              <div className="like__btn" data-aos="animation-scale-x" data-aos-delay="300">
                <button className="btn btn_purple" onClick={() => { Router.push('./contact') }} >See Our Work</button>
              </div>
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