import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import SubSlider from '../components/index/services/subSlider'
import SliderButton from '../components/sliderButton'
import Image from 'next/image'
const Package = () => {
  const [isTrue, setIsTrue] = useState(true)
  const gotoNext = () => {
    slider1.current.slickNext()
  }
  const gotoPrev = () => {
    slider1.current.slickPrev()
  }
  const designIcons = [
    ['Figma', 'Figma Icon', '/icons/figma.webp', '27', '40'],
    ['Miro', 'Miro Icon', '/icons/miro.webp', '40', '40'],
    ['Sketch', 'Sketch Icon', '/icons/sketch_1.webp', '45', '40'],
    ['Adobe Xd', 'Adobe XD Icon', '/icons/adobe_xd.webp', '42', '40'],
    ['Framer', 'Framer Icon', '/icons/framer.webp', '40', '40'],
    ['Ant Design', 'Ant Design Icon', '/icons/ant-design.webp', '40', '40'],
    ['Material UI', 'Material UI Icon', '/icons/material_ui.webp', '51', '40'],
    ['Tailwind', 'Tailwind Icon', '/icons/tailwind.webp', '67', '40'],
    ['Booststrap', 'Bootstrap Icon', '/icons/bootstrap_1.webp', '40', '40'],
    ['Principle', 'Principle Icon', '/icons/principle.webp', '40', '40'],
  ]

  const webIcons = [
    ['Ruby on Rails', 'Rails PNG', '/icons/rails.webp', '31', '40'],
    ['ReactJs', 'Reactjs Icon', '/icons/reactjs.webp', '40', '40'],
    ['NextJs', 'Nextjs Icon', '/icons/nextjs.webp', '67', '40'],
    ['VueJs', 'Vuejs Icon', '/icons/vuejs.webp', '44', '40'],
    ['NuxtJs', 'Nuxtjs Icon', '/icons/nuxtjs.webp', '54', '40'],
    ['NodeJs', 'Nodejs Icon', '/icons/nodejs.webp', '37', '40'],
    ['Laravel', 'Laravel Icon', '/icons/laravel.webp', '39', '40'],
    ['Shopify', 'Shopify PNG Image', '/images/shopify.webp', '72', '40'],
    ['Wordpress', 'Wordpress Icon', '/icons/wordpress.webp', '40', '40'],
  ]

  const mobileIcons = [
    ['React Native', 'Reactjs Icon', '/icons/reactjs.webp', '40', '40'],
    ['Ionic', 'Ionic Icon', '/icons/ionic.webp', '40', '40'],
    ['Flutter', 'Flutter PNG Image', '/images/flutter.webp', '33', '40'],
    ['Swift / iOS', 'Swift Icon', '/icons/swift.webp', '40', '40'],
    ['Android', 'Android', '/images/android_4.webp', '42', '40'],
  ]

  const slider1 = useRef(null)
  const subSlider1 = useRef(null)
  const subSlider2 = useRef(null)
  const subSlider3 = useRef(null)

  const play = () => {
    // slider1.current.slickPlay();
  }

  const pause = () => {
    // slider1.current.slickPause();
  }

  const subSliderPause = () => {
    // slider1.current.slickPause();
    // subSlider1.slickPause();
    // subSlider2.slickPause();
    // subSlider3.slickPause();
  }

  const subSliderPlay = () => {
    // slider1.current.slickPlay();
    // subSlider1.slickPlay();
    // subSlider2.slickPlay();
    // subSlider3.slickPlay();
  }

  const packageSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    // prevArrow: <PrevButton />,
    // nextArrow: <NextButton />,
    speed: 1000,
    fade: true,
    adaptiveHeight: true,
    autoplay: isTrue,
    pauseOnHover: false,
    lazyload: 'progressive',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          dots: false,
          arrows: false,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          pauseOnHover: true,
        },
      },
    ],
  }

  const packageSubsliderSettings = {
    dots: false,
    arrows: false,
    prevArrow: (
      <button>
        <svg className="icon icon-arrow-prev">
          <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
        </svg>
      </button>
    ),
    nextArrow: (
      <button>
        <svg className="icon icon-arrow-next">
          <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
        </svg>
      </button>
    ),
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: isTrue,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  }

  return (
    <>
      <div className="package package-main">
        <div className="package__center center">
          <div className="package__container">
            <div className="package__wrap">
              <Slider
                ref={slider1}
                className="package__slider js-package-slider"
                {...packageSettings}
              >
                <div className="package__slide">
                  <div className="package__row row">
                    <div className="col-lg-5">
                      <div
                        // onMouseOver={() => pause()}
                        // onMouseOut={() => play()}
                        className="package__details"
                        // data-aos
                        // data-aos-duration="600"
                        // data-aos-delay="400"
                      >
                        <div className="package__category">
                          <div className="package__icon">
                            {/* <img
                              className="package__pic"
                              src="images/content-management-system.webp"
                              alt="3D Pencil"
                            /> */}
                            <div className="package__pic">
                              <Image
                                src="/images/content-management-system.webp"
                                alt="3D Pencil"
                                width={24}
                                height={24}
                              />
                            </div>
                          </div>
                          <div className="package__text">What we do</div>
                        </div>
                        <h3 className="package__title title title_sm title-ui-ux">
                          UI/UX Services
                        </h3>
                        <div className="package__info">
                          Driven by the values of empathy & impact, we are
                          thriving towards this vision. From research backed
                          design decisions to jaw dropping pixels, It&apos;s a
                          no brainer to cook your idea in our lab.
                        </div>
                        <div className="package__list">
                          <ul
                            className="package-list"
                            // data-aos="animation-scale-y"
                            // data-aos-delay="200"
                          >
                            <li>Pixel Perfect</li>
                            <li>User Centred</li>
                            <li>Interactive Prototyping</li>
                          </ul>
                        </div>
                        <div className="row">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="">
                              <SliderButton
                                gotoNext={gotoNext}
                                gotoPrev={gotoPrev}
                              />
                            </div>
                            <div className="">
                              <a
                                href="/contact"
                                target="_blank"
                                className="package__btn btn btn_purple"
                              >
                                Get a Quote
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex justify-content-center">
                      <div className="package__preview row">
                        <div className="col-lg-12 d-flex justify-content-center align-items-center">
                          {/* <img
                            onMouseOver={() => pause()}
                            onMouseOut={() => play()}
                            className="package__pic"
                            src="images/laptop_4.webp"
                            alt="3D Laptop-1 PNG"
                          /> */}

                          <Image
                            // onMouseOver={() => pause()}
                            // onMouseOut={() => play()}
                            src="/images/laptop_4.webp"
                            alt="3D Laptop-1 PNG"
                            width={641}
                            height={363}
                          />
                        </div>
                        <div
                          // onMouseOver={() => subSliderPause()}
                          // onMouseOut={() => subSliderPlay()}
                          className="col-lg-10 m-auto subSliderIcons"
                        >
                          <Slider
                            ref={(newSubSlider1) => {
                              subSlider1 = newSubSlider1
                            }}
                            className="package-subslider d-flex align-items-center"
                            {...packageSubsliderSettings}
                          >
                            {designIcons.map((element, index) => {
                              return (
                                <SubSlider
                                  key={index}
                                  techName={element[0]}
                                  altimg={element[1]}
                                  techImage={element[2]}
                                  imgWidth={element[3]}
                                  imgHeight={element[4]}
                                />
                              )
                            })}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="package__slide">
                  <div className="package__row row">
                    <div className="col-lg-5">
                      <div
                        // onMouseOver={() => pause()}
                        // onMouseOut={() => play()}
                        className="package__details"
                        // data-aos
                        // data-aos-duration="600"
                        // data-aos-delay="400"
                      >
                        <div className="package__category">
                          <div className="package__icon">
                            {/* <img
                              className="package__pic package__pic__frame"
                              src="images/frame.webp"
                              alt="3D Internet PNG"
                            /> */}
                            <div className="package__pic package__pic__frame">
                              <Image
                                src="/images/frame.webp"
                                alt="3D Internet PNG"
                                width={30}
                                height={24}
                              />
                            </div>
                          </div>
                          <div className="package__text">What we do</div>
                        </div>
                        <h3 className="package__title title title_sm">
                          Web Development
                        </h3>
                        <div className="package__info">
                          It&apos;s the development of systems that take care of
                          your valuable processes. We develop user friendly,
                          reliable & scalable applications that help to boost
                          productivity in your field and generate revenue.
                        </div>
                        <div className="package__list">
                          <ul
                            className="package-list"
                            // data-aos="animation-scale-y"
                            // data-aos-delay="200"
                          >
                            <li>Fast & Scalable</li>
                            <li>Reliable</li>
                            <li>Secure</li>
                          </ul>
                        </div>
                        <div className="row">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="">
                              <SliderButton
                                gotoNext={gotoNext}
                                gotoPrev={gotoPrev}
                              />
                            </div>
                            <div className="">
                              <a
                                href="/contact"
                                target="_blank"
                                className="package__btn btn btn_purple"
                              >
                                Get a Quote
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex justify-content-center">
                      <div className="package__preview row">
                        <div className="col-lg-12 d-flex justify-content-center align-items-center">
                          {/* <img
                            onMouseOver={() => pause()}
                            onMouseOut={() => play()}
                            className="package__pic package-pic-slide2"
                            src="images/laptop_3.webp"
                            alt="3D Laptop-2 PNG"
                          /> */}
                          <Image
                            // onMouseOver={() => pause()}
                            // onMouseOut={() => play()}
                            src="/images/laptop_3.webp"
                            alt="3D Laptop-2 PNG"
                            width={640}
                            height={363}
                          />
                        </div>
                        <div
                          // onMouseOver={() => subSliderPause()}
                          // onMouseOut={() => subSliderPlay()}
                          className="col-lg-10 m-auto subSliderIcons"
                        >
                          <Slider
                            ref={(newSubSlider2) => {
                              subSlider2 = newSubSlider2
                            }}
                            {...packageSubsliderSettings}
                            className="package-subslider d-flex align-items-center"
                          >
                            {webIcons.map((element, index) => {
                              return (
                                <SubSlider
                                  key={index}
                                  techName={element[0]}
                                  altimg={element[1]}
                                  techImage={element[2]}
                                  imgWidth={element[3]}
                                  imgHeight={element[4]}
                                />
                              )
                            })}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="package__slide">
                  <div className="package__row row">
                    <div className="col-lg-5">
                      <div
                        // onMouseOver={() => pause()}
                        // onMouseOut={() => play()}
                        className="package__details"
                        // data-aos
                        // data-aos-duration="600"
                        // data-aos-delay="400"
                      >
                        <div className="package__category">
                          <div className="package__icon">
                            {/* <img
                              className="package__pic package__pic__frame"
                              src="images/mobile-front-color.webp"
                              alt="Mobile's Front PNG Image"
                            /> */}
                            <div className="package__pic package__pic__frame">
                              <Image
                                src="/images/mobile-front-color.webp"
                                alt="Mobile's Front PNG Image"
                                width={14}
                                height={24}
                              />
                            </div>
                          </div>
                          <div className="package__text">What we do</div>
                        </div>
                        <h3 className="package__title title title_sm title-ui-ux">
                          Mobile Solutions
                        </h3>
                        <div className="package__info">
                          Not just mobile apps, we build user-friendly mobile
                          experience. We develop apps that resolve real-life
                          problems, that got featured over store, that dominate
                          with values in the market.
                        </div>
                        <div className="package__list">
                          <ul
                            className="package-list"
                            // data-aos="animation-scale-y"
                            // data-aos-delay="200"
                          >
                            <li>High Performance</li>
                            <li>Cross Platform</li>
                            <li>Progressive</li>
                          </ul>
                        </div>
                        <div className="row">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <SliderButton
                                gotoNext={gotoNext}
                                gotoPrev={gotoPrev}
                              />
                            </div>
                            <div>
                              <a
                                href="/contact"
                                target="_blank"
                                className="package__btn btn btn_purple"
                              >
                                Get a Quote
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex justify-content-center">
                      <div className="package__preview row package-preview-mobile">
                        <div className="col-lg-12 d-flex justify-content-center align-items-center">
                          <Image
                            // onMouseOver={() => pause()}
                            // onMouseOut={() => play()}
                            src="/images/mobile_2.webp"
                            alt="Mobile Graph PNG"
                            width={194}
                            height={363}
                          />
                        </div>
                        <div
                          // onMouseOver={() => subSliderPause()}
                          // onMouseOut={() => subSliderPlay()}
                          className="col-lg-10 m-auto subSliderIcons"
                        >
                          <Slider
                            ref={(newSubSlider3) => {
                              subSlider3 = newSubSlider3
                            }}
                            {...packageSubsliderSettings}
                            className="package-subslider d-flex align-items-center"
                          >
                            {mobileIcons.map((element, index) => {
                              return (
                                <SubSlider
                                  key={index}
                                  techName={element[0]}
                                  altimg={element[1]}
                                  techImage={element[2]}
                                  imgWidth={element[3]}
                                  imgHeight={element[4]}
                                />
                              )
                            })}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
              <div className="package__line"></div>
              <div
              // className="package__circle"
              // data-aos
              // data-aos-duration="600"
              ></div>
            </div>
            <div className="package__circles">
              <div className="package__circle"></div>
              <div className="package__circle"></div>
            </div>
            <div className="package-yellow-circle"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Package
