import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
const Like = () => {
  const dropdowns = useRef(null)

  const handleOnMouseOverList = (e) => {
    clearInterval(interval)
  }
  const handleOnListLeave = (e) => {
    var dropdownsEle = dropdowns.getElementsByClassName('like-options')
    for (let i = 0; i < dropdownsEle.length; i++) {
      if (dropdownsEle[i].ariaExpanded == 'true') {
        dropdownsEle[i].click()
      }
    }
  }

  const [likeOptionOne, setLikeOptionOne] = useState(false)
  const [likeOptionTwo, setLikeOptionTwo] = useState(false)
  const [likeOptionThree, setLikeOptionThree] = useState(false)
  const [likeOptionFour, setLikeOptionFour] = useState(false)

  const likeOptionOneFunc = () => {
    const likeOptionOneStatus = likeOptionOne ? false : true
    setLikeOptionOne(likeOptionOneStatus)
    setLikeOptionTwo(false)
    setLikeOptionThree(false)
    setLikeOptionFour(false)
  }

  const likeOptionTwoFunc = () => {
    const likeOptionTwoStatus = likeOptionTwo ? false : true
    setLikeOptionTwo(likeOptionTwoStatus)
    setLikeOptionOne(false)
    setLikeOptionThree(false)
    setLikeOptionFour(false)
  }

  const likeOptionThreeFunc = () => {
    const likeOptionThreeStatus = likeOptionThree ? false : true
    setLikeOptionThree(likeOptionThreeStatus)
    setLikeOptionTwo(false)
    setLikeOptionOne(false)
    setLikeOptionFour(false)
  }

  const likeOptionFourFunc = () => {
    const likeOptionFourStatus = likeOptionFour ? false : true
    setLikeOptionFour(likeOptionFourStatus)
    setLikeOptionThree(false)
    setLikeOptionTwo(false)
    setLikeOptionOne(false)
  }

  var interval
  useEffect(() => {
    const dropdownsEle = dropdowns.getElementsByClassName('like-options')

    const cnt = 0
    interval = setInterval(() => {
      for (let i = 0; i < dropdownsEle.length; i++) {
        if (dropdownsEle[i].ariaExpanded == 'true') {
          dropdownsEle[i].click()
        }
      }
      if (cnt < 4) {
        dropdownsEle[cnt].click()
        cnt = cnt + 1
      } else {
        dropdownsEle[0].click()
        cnt = 1
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

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
              <div
                className="like__text"
                data-aos="animation-scale-x"
                data-aos-delay="150"
              >
                {/* <p>
                  Let us take care of your problems.
                </p> */}
                <ul
                  ref={(dropdownsRef) => {
                    dropdowns = dropdownsRef
                  }}
                  className="like-list text-start d-inline-block w-100"
                  data-aos="animation-scale-y"
                  data-aos-delay="200"
                >
                  <li>
                    <div
                      onMouseOut={handleOnListLeave}
                      onMouseOver={handleOnMouseOverList}
                    >
                      <a
                        data-bs-toggle="collapse"
                        href="#collapseTransparency"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseTransparency"
                        className="fw-bold like-options d-flex align-items-center"
                      >
                        Customized Service
                        <svg
                          className="icon icon-arrow-down like-section-arrow"
                          aria-labelledby="arrow-down-icon"
                        >
                          <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                        </svg>
                      </a>
                      <div
                        className="collapse like-headline-description"
                        id="collapseTransparency"
                      >
                        Every business has its own set of requirements, and we
                        are here to fulfill those requirements with transparency
                        in custom web development services. Code Garage is
                        devoted to providing one-of-a-kind solutions for each
                        website design project and has assisted many customers
                        in realizing their goals.{' '}
                      </div>
                    </div>
                  </li>
                  <li data-id="2" className="list-items">
                    <div
                      onMouseOut={handleOnListLeave}
                      onMouseOver={handleOnMouseOverList}
                    >
                      <a
                        data-bs-toggle="collapse"
                        href="#collapseAvailability"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseAvailability"
                        className="fw-bold like-options d-flex align-items-center"
                      >
                        An Adept Team
                        <svg
                          className="icon icon-arrow-down like-section-arrow"
                          aria-labelledby="arrow-down-icon"
                        >
                          <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                        </svg>
                      </a>
                      <div
                        className="collapse like-headline-description"
                        id="collapseAvailability"
                      >
                        We have a team of talented people who help your business
                        reach new heights of success in custom web development.
                        Our Professional web developers are always available at
                        your service to make your company&apos;s website look
                        outstanding.
                      </div>
                    </div>
                  </li>
                  <li data-id="3" className="list-items">
                    <div
                      onMouseOut={handleOnListLeave}
                      onMouseOver={handleOnMouseOverList}
                    >
                      <a
                        data-bs-toggle="collapse"
                        href="#collapseProcessOrientedWork"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseProcessOrientedWork"
                        className="fw-bold like-options d-flex align-items-center"
                      >
                        Development Scope
                        <svg
                          className="icon icon-arrow-down like-section-arrow"
                          aria-labelledby="arrow-down-icon"
                        >
                          <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                        </svg>
                      </a>
                      <div
                        className="collapse like-headline-description"
                        id="collapseProcessOrientedWork"
                      >
                        We know that your website needs to grow as your business
                        thrives. Hence, our custom web application development
                        solutions come with the flexibility of modifications
                        that will aid your business in earning more revenue.
                      </div>
                    </div>
                  </li>
                  <li data-id="4" className="list-items">
                    <div
                      onMouseOut={handleOnListLeave}
                      onMouseOver={handleOnMouseOverList}
                    >
                      <a
                        data-bs-toggle="collapse"
                        href="#collapseUptoDateonITTrends"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseUptoDateonITTrends"
                        className="fw-bold like-options d-flex align-items-center"
                      >
                        Maintenance & Support
                        <svg
                          className="icon icon-arrow-down like-section-arrow"
                          aria-labelledby="arrow-down-icon"
                        >
                          <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                        </svg>
                      </a>
                      <div className="collapse" id="collapseUptoDateonITTrends">
                        Our team of professional developers offers support and
                        maintenance services to enhance our client&apos;s
                        business life. At Code Garage, our client&apos;s
                        satisfaction is indispensable because we don&apos;t want
                        them to face any kind of lag.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <div className="like__btn" data-aos="animation-scale-x" data-aos-delay="300">
                <button className="btn btn_purple" onClick={() => { Router.push('./contact') }} >See Our Work</button>
              </div> */}
            </div>
            <div className="like__preview" data-aos>
              {/* <img
                className="like__pic"
                src="img/hand-1.webp"
                alt="3D Hand Thumbs up"
              /> */}
              <div className="like__pic">
                <Image
                  src="/img/hand-1.webp"
                  alt="3D Hand Thumbs up"
                  width={520}
                  height={543}
                />
              </div>
            </div>
            <div className="like__circle"></div>
            <div className="like__circles">
              <div className="like__circle"></div>
              <div
                className="like__circle js-rellax"
                data-rellax-speed="-1"
              ></div>
              <div
                className="like__circle js-rellax"
                data-rellax-speed=".8"
              ></div>
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
