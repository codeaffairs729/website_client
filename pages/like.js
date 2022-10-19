import React, { useEffect, useState, useRef } from 'react'
import Router from 'next/router'

const Like = () => {
  const dropdowns = useRef(null);

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

  useEffect(() => {
    var dropdownsEle = dropdowns.getElementsByClassName("like-options");
    var cnt = 0;
    const interval = setInterval(() => {
      for (let i = 0; i < dropdownsEle.length; i++) {
        if(dropdownsEle[i].ariaExpanded == "true"){
          dropdownsEle[i].click();
        }
      }
      if(cnt < 4){
        dropdownsEle[cnt].click();
        cnt = cnt + 1;
      } else {
        dropdownsEle[0].click();
        cnt = 1;
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);
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
                <ul ref={(dropdownsRef) => { dropdowns = dropdownsRef}} className="like-list text-start d-inline-block w-100" data-aos="animation-scale-y" data-aos-delay="200">
                  <li>
                    <a data-bs-toggle="collapse" href="#collapseTransparency" role="button" aria-expanded="false" aria-controls="collapseTransparency" className="like-options d-flex align-items-center" >
                      Transparency
                      <svg className="icon icon-arrow-down like-section-arrow">
                        <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                      </svg>
                    </a>
                    <div className="collapse" id="collapseTransparency" >
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                  </li>
                  <li>
                    <a data-bs-toggle="collapse" href="#collapseAvailability" role="button" aria-expanded="false" aria-controls="collapseAvailability" className="like-options d-flex align-items-center" >
                      Availability
                      <svg className="icon icon-arrow-down like-section-arrow">
                        <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                      </svg>
                    </a>
                    <div className="collapse" id="collapseAvailability" >
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                  </li>
                  <li>
                    <a data-bs-toggle="collapse" href="#collapseProcessOrientedWork" role="button" aria-expanded="false" aria-controls="collapseProcessOrientedWork" className="like-options d-flex align-items-center" >
                      Process Oriented Work
                      <svg className="icon icon-arrow-down like-section-arrow">
                        <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                      </svg>
                    </a>
                    <div className="collapse" id="collapseProcessOrientedWork" >
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                  </li>
                  <li>
                    <a data-bs-toggle="collapse" href="#collapseUptoDateonITTrends" role="button" aria-expanded="false" aria-controls="collapseUptoDateonITTrends" className="like-options d-flex align-items-center" >
                      Upto Date on IT Trends
                      <svg className="icon icon-arrow-down like-section-arrow">
                        <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                      </svg>
                    </a>
                    <div className="collapse" id="collapseUptoDateonITTrends" >
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