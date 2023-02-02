import React, { useState, useRef } from "react";
import Slider from "react-slick";
import SubSlider from "../components/index/services/subSlider";
import SliderButton from "../components/sliderButton";

const Package = () => {
  const gotoNext = () => {
    slider1.current.slickNext();
  };
  const gotoPrev = () => {
    slider1.current.slickPrev();
  };
  const designIcons = [
    ["Figma", "Figma Icon", "/icons/figma.webp"],
    ["Miro", "Miro Icon", "/icons/miro.webp"],
    ["Sketch", "Sketch Icon", "/icons/sketch_1.webp"],
    ["Adobe Xd", "Adobe XD Icon", "/icons/adobe_xd.webp"],
    ["Framer", "Framer Icon", "/icons/framer.webp"],
    ["Ant Design", "Ant Design Icon", "/icons/ant-design.webp", "40"],
    ["Material UI", "Material UI Icon", "/icons/material_ui.webp", "40"],
    ["Tailwind", "Tailwind Icon", "/icons/tailwind.webp", "33"],
    ["Booststrap", "Bootstrap Icon", "/icons/bootstrap_1.webp", "40"],
    ["Principle", "Principle Icon", "/icons/principle.webp"],
  ];

  const webIcons = [
    ["Ruby on Rails", "Rails PNG", "/icons/rails.webp"],
    ["ReactJs", "Reactjs Icon", "/icons/reactjs.webp"],
    ["NextJs", "Nextjs Icon", "/icons/nextjs.webp"],
    ["VueJs", "Vuejs Icon", "/icons/vuejs.webp"],
    ["NuxtJs", "Nuxtjs Icon", "/icons/nuxtjs.webp"],
    ["NodeJs", "Nodejs Icon", "/icons/nodejs.webp"],
    ["Laravel", "Laravel Icon", "/icons/laravel.webp"],
    ["Shopify", "Shopify PNG Image", "/images/shopify.webp"],
    ["Wordpress", "Wordpress Icon", "/icons/wordpress.webp"],
  ];

  const mobileIcons = [
    ["React Native", "Reactjs Icon", "/icons/reactjs.webp", "40"],
    ["Ionic", "Ionic Icon", "/icons/ionic.webp", "40"],
    ["Flutter", "Flutter PNG Image", "/images/flutter.webp", "33"],
    ["Swift / iOS", "Swift Icon", "/icons/swift.webp", "40"],
    ["Android", "Android", "/images/android_4.webp", "42"],
  ];

  const slider1 = useRef(null);
  const subSlider1 = useRef(null);
  const subSlider2 = useRef(null);
  const subSlider3 = useRef(null);

  const play = () => {
    slider1.current.slickPlay();
  };

  const pause = () => {
    slider1.current.slickPause();
  };

  const subSliderPause = () => {
    slider1.current.slickPause();
    subSlider1.slickPause();
    subSlider2.slickPause();
    subSlider3.slickPause();
  };

  const subSliderPlay = () => {
    slider1.current.slickPlay();
    subSlider1.slickPlay();
    subSlider2.slickPlay();
    subSlider3.slickPlay();
  };

  const packageSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    // prevArrow: <PrevButton />,
    // nextArrow: <NextButton />,
    speed: 2000,
    fade: true,
    adaptiveHeight: true,
    autoplay: true,
    pauseOnHover: false,
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
  };

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
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <div className="package package-main">
        <div className="package__center center">
          <div className="package__container">
            <div className="package__wrap">
              <Slider
                ref={slider1}
                /*ref={(newSlider1) => { slider1 = newSlider1 }}*/ className="package__slider js-package-slider"
                {...packageSettings}
              >
                <div className="package__slide">
                  <div className="package__row row">
                    <div className="col-lg-5">
                      <div
                        onMouseOver={() => pause()}
                        onMouseOut={() => play()}
                        className="package__details"
                        data-aos
                        data-aos-duration="600"
                        data-aos-delay="400"
                      >
                        <div className="package__category">
                          <div className="package__icon">
                            <img
                              className="package__pic"
                              src="images/content-management-system.webp"
                              alt="3D Pencil"
                            />
                          </div>
                          <div className="package__text">What we do</div>
                        </div>
                        <h3 className="package__title title title_sm title-ui-ux">
                          UI/UX Services
                        </h3>
                        <div className="package__info">
                          Driven by the values of empathy & impact, we are
                          thriving towards this vision. From research backed
                          design decisions to jaw dropping pixels, It's a no
                          brainer to cook your idea in our lab.
                        </div>
                        <div className="package__list">
                          {/* <a className="package__link" href="#">
                                                        <div className="package__icon">
                                                            <img className="package__pic" src="img/layout-1.webp" alt="" />
                                                        </div>
                                                        <div className="package__text">Awesome website</div>
                                                    </a>
                                                    <a className="package__link" href="#">
                                                        <div className="package__icon">
                                                            <img className="package__pic" src="img/layout-3.webp" alt="" />
                                                        </div>
                                                        <div className="package__text">Stunning interface</div>
                                                    </a> */}
                          <ul
                            className="package-list"
                            data-aos="animation-scale-y"
                            data-aos-delay="200"
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

                        {/* <div className="row">
                          <a
                            href="/contact"
                            target="_blank"
                            className="package__btn btn btn_purple"
                          >
                            Get a Quote
                          </a>
                        </div> */}
                        {/* <div className="package__btns">
                                                    <div className="package__arrows"> */}
                        {/* <button className="package__arrow js-package-prev">
                                                            <svg className="icon icon-arrow-prev">
                                                                <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                                                            </svg>
                                                        </button>
                                                        <button className="package__arrow js-package-next">
                                                            <svg className="icon icon-arrow-next">
                                                                <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                                                            </svg>
                                                        </button> */}
                        {/* </div>
                                                    <a className="package__btn btn btn_purple" href="./login">Let's Connect</a>
                                                </div> */}
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex justify-content-center">
                      <div className="package__preview row">
                        <div className="col-lg-12 d-flex justify-content-center align-items-center">
                          <img
                            onMouseOver={() => pause()}
                            onMouseOut={() => play()}
                            className="package__pic"
                            src="images/laptop_4.webp"
                            alt="3D Laptop-1 PNG"
                          />

                          {/* <img className="package-pic-figma" src="images/FIGMA.webp" alt="" />
                                                    <img className="package-pic-diamond" src="images/sketch-new.webp" alt="" />
                                                    <img className="package-pic-image_32" src="images/image_32.webp" alt="" />
                                                    <img className="package-pic-image_31" src="images/image_31.webp" alt="" /> */}
                        </div>
                        <div
                          onMouseOver={() => subSliderPause()}
                          onMouseOut={() => subSliderPlay()}
                          className="col-lg-10 m-auto subSliderIcons"
                        >
                          <Slider
                            ref={(newSubSlider1) => {
                              subSlider1 = newSubSlider1;
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
                                />
                              );
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
                        onMouseOver={() => pause()}
                        onMouseOut={() => play()}
                        className="package__details"
                        data-aos
                        data-aos-duration="600"
                        data-aos-delay="400"
                      >
                        <div className="package__category">
                          <div className="package__icon">
                            <img
                              className="package__pic package__pic__frame"
                              src="images/frame.webp"
                              alt="3D Internet PNG"
                            />
                          </div>
                          <div className="package__text">What we do</div>
                        </div>
                        <h3 className="package__title title title_sm">
                          Web Development
                        </h3>
                        <div className="package__info">
                          {/* We develop web solutions on all scales.
                                                    Its development of systems that take care of your valuable processes.
                                                    We develop User friendly and reliable applications that helps to solve the problems in almost every field. */}
                          {/* Not just mobile apps, we build user-friendly mobile experience on iOS and Android platforms.
                                                    We have developed Awesome apps for our clients.
                                                    Apps that resolve real-life problems, that got featured over store, and generate revenue. */}
                          It's the development of systems that take care of your
                          valuable processes. We develop user friendly, reliable
                          & scalable applications that help to boost
                          productivity in your field and generate revenue.
                        </div>
                        <div className="package__list">
                          {/* <a className="package__link" href="#">
                                                        <div className="package__icon">
                                                            <img className="package__pic" src="img/layout-1.webp" alt="" />
                                                        </div>
                                                        <div className="package__text">Awesome website</div>
                                                    </a>
                                                    <a className="package__link" href="#">
                                                        <div className="package__icon">
                                                            <img className="package__pic" src="img/layout-3.webp" alt="" />
                                                        </div>
                                                        <div className="package__text">Stunning interface</div>
                                                    </a> */}
                          <ul
                            className="package-list"
                            data-aos="animation-scale-y"
                            data-aos-delay="200"
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

                        {/* <div className="row">
                          <a
                            href="/contact"
                            target="_blank"
                            className="package__btn btn btn_purple"
                          >
                            Get a Quote
                          </a>
                        </div> */}
                        {/* <div className="package__btns">
                                                    <div className="package__arrows"> */}
                        {/* <button className="package__arrow js-package-prev">
                                                            <svg className="icon icon-arrow-prev">
                                                                <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                                                            </svg>
                                                        </button>
                                                        <button className="package__arrow js-package-next">
                                                            <svg className="icon icon-arrow-next">
                                                                <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                                                            </svg>
                                                        </button> */}
                        {/* </div>
                                                    <a className="package__btn btn btn_purple" href="./login">Let's Connect</a>
                                                </div> */}
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex justify-content-center">
                      <div className="package__preview row">
                        <div className="col-lg-12 d-flex justify-content-center align-items-center">
                          <img
                            onMouseOver={() => pause()}
                            onMouseOut={() => play()}
                            className="package__pic package-pic-slide2"
                            src="images/laptop_3.webp"
                            alt="3D Laptop-2 PNG"
                          />

                          {/* <img className="package-pic-shopify" src="images/shopify.webp" alt="" />
                                                    <img className="package-pic-angular" src="images/angular.webp" alt="" />
                                                    <img className="package-pic-react" src="images/react_2.webp" alt="" />
                                                    <img className="package-pic-image_30" src="images/image_30.webp" alt="" />
                                                    <img className="package-pic-nodejs" src="images/node_2.webp" alt="" />
                                                    <img className="package-pic-ror" src="images/ror_orig.webp" alt="Nodejs PNG Image" /> */}
                        </div>
                        <div
                          onMouseOver={() => subSliderPause()}
                          onMouseOut={() => subSliderPlay()}
                          className="col-lg-10 m-auto subSliderIcons"
                        >
                          <Slider
                            ref={(newSubSlider2) => {
                              subSlider2 = newSubSlider2;
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
                                />
                              );
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
                        onMouseOver={() => pause()}
                        onMouseOut={() => play()}
                        className="package__details"
                        data-aos
                        data-aos-duration="600"
                        data-aos-delay="400"
                      >
                        <div className="package__category">
                          <div className="package__icon">
                            <img
                              className="package__pic package__pic__frame"
                              src="images/mobile-front-color.webp"
                              alt="Mobile's Front PNG Image"
                            />
                          </div>
                          <div className="package__text">What we do</div>
                        </div>
                        <h3 className="package__title title title_sm title-ui-ux">
                          Mobile Solutions
                        </h3>
                        <div className="package__info">
                          {/* Not just mobile apps, we build user-friendly mobile experience on iOS and Android platforms.
                                                    We have developed Awesome apps for our clients.
                                                    Apps that resolve real-life problems, that got featured over store, and generate revenue. */}
                          Not just mobile apps, we build user-friendly mobile
                          experience. We develop apps that resolve real-life
                          problems, that got featured over store, that dominate
                          with values in the market.
                        </div>
                        <div className="package__list">
                          {/* <a className="package__link" href="#">
                                                        <div className="package__icon">
                                                            <img className="package__pic" src="img/layout-1.webp" alt="" />
                                                        </div>
                                                        <div className="package__text">Awesome website</div>
                                                    </a>
                                                    <a className="package__link" href="#">
                                                        <div className="package__icon">
                                                            <img className="package__pic" src="img/layout-3.webp" alt="" />
                                                        </div>
                                                        <div className="package__text">Stunning interface</div>
                                                    </a> */}
                          <ul
                            className="package-list"
                            data-aos="animation-scale-y"
                            data-aos-delay="200"
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
                        {/* <div className="package__btns">
                                                    <div className="package__arrows"> */}
                        {/* <button className="package__arrow js-package-prev">
                                                            <svg className="icon icon-arrow-prev">
                                                                <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                                                            </svg>
                                                        </button>
                                                        <button className="package__arrow js-package-next">
                                                            <svg className="icon icon-arrow-next">
                                                                <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                                                            </svg>
                                                        </button> */}
                        {/* </div>
                                                    <a className="package__btn btn btn_purple" href="./login">Let's Connect</a>
                                                </div> */}
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex justify-content-center">
                      <div className="package__preview row package-preview-mobile">
                        <div className="col-lg-12 d-flex justify-content-center align-items-center">
                          <img
                            onMouseOver={() => pause()}
                            onMouseOut={() => play()}
                            className="package__pic package-pic-mobile"
                            src="images/mobile_2.webp"
                            alt="Mobile Graph PNG"
                          />
                          {/* <img className="package-pic-android" src="images/android_4.webp" alt="" />
                                                    <img className="package-pic-flutter" src="images/flutter.webp" alt="" />
                                                    <img className="package-pic-react_2" src="images/react_2.webp" alt="" />
                                                    <img className="package-pic-swift" src="images/swift_1.webp" alt="" /> */}
                        </div>
                        <div
                          onMouseOver={() => subSliderPause()}
                          onMouseOut={() => subSliderPlay()}
                          className="col-lg-10 m-auto subSliderIcons"
                        >
                          <Slider
                            ref={(newSubSlider3) => {
                              subSlider3 = newSubSlider3;
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
                                />
                              );
                            })}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
              {/* <SliderButton gotoNext={gotoNext} gotoPrev={gotoPrev} /> */}
              <div className="package__line">
                <img
                  className="package__pic"
                  src="img/line-1.webp"
                  alt="Background Curve Line"
                />

                {/* <div className="package__pic">
                  <Image
                    src="/img/line-1.webp"
                    alt="Background Curve Line"
                    layout="fill"
                  />
                </div> */}
              </div>
              <div
                className="package__circle"
                data-aos
                data-aos-duration="600"
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
  );
};

export default Package;
