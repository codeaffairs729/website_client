import React, { useState, useRef } from 'react'
import Slider from "react-slick";
import SubSlider from "../components/index/services/subSlider";

const Package = () => {
    const designIcons = [
        ["Figma","icons/figma.png"],
        ["Miro", "icons/miro.png"],
        ["Sketch", "icons/sketch_1.png"],
        ["Adobe Xd","icons/adobe_xd.png"],
        ["Framer","icons/framer.png"],
        ["Ant Design", "icons/ant-design.png"],
        ["Material UI","icons/material_ui.png"],
        ["Tailwind", "icons/tailwind.png"],
        ["Booststrap", "icons/bootstrap_1.png"],
        ["Principle", "icons/principle.png"]
    ]

    const webIcons = [
        ["Ruby on Rails", "icons/rails.png"],
        ["ReactJs", "icons/reactjs.png"],
        ["NextJs", "icons/nextjs.png"],
        ["VueJs", "icons/vuejs.png"],
        ["NuxtJs", "icons/nuxtjs.png"],
        ["NodeJs", "icons/nodejs.png"],
        ["Laravel", "icons/laravel.png"],
        ["Shopify", "images/shopify.png"],
        ["Wordpress", "icons/wordpress.png"]
    ]

    const mobileIcons = [
        ["React Native", "icons/reactjs.png"],
        ["Ionic", "icons/ionic.png"],
        ["Flutter", "images/flutter.png"],
        ["Swift / iOS", "icons/swift.png"],
        ["Android","images/android_4.png"]
    ]

    const slider1 = useRef(null);
    const subSlider1 = useRef(null);
    const subSlider2 = useRef(null);
    const subSlider3 = useRef(null);

    const play = () => {
        slider1.slickPlay();
    }

    const pause = () => {
        slider1.slickPause();
    }

    const subSliderPause = () => {
        slider1.slickPause();
        subSlider1.slickPause();
        subSlider2.slickPause();
        subSlider3.slickPause();
    }

    const subSliderPlay = () => {
        slider1.slickPlay();
        subSlider1.slickPlay();
        subSlider2.slickPlay();
        subSlider3.slickPlay();
    }

    const packageSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: <button className="package__arrow js-package-prev">
                <svg className="icon icon-arrow-prev">
                    <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                </svg>
            </button>,
        nextArrow: <button className="package__arrow js-package-next">
                <svg className="icon icon-arrow-next">
                    <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                </svg>
            </button>,
        speed: 2000,
        fade: true,
        adaptiveHeight: true,
        autoplay: true,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1199,
            settings: {
                dots: false,
                arrows: false,
                pauseOnHover: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: false,
                pauseOnHover: true
            }
        }]
    };

    const packageSubsliderSettings = {
        dots: false,
        arrows: false,
        prevArrow: <button>
                <svg className="icon icon-arrow-prev">
                    <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                </svg>
            </button>,
        nextArrow: <button>
                <svg className="icon icon-arrow-next">
                    <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                </svg>
            </button>,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }]
    };

    return (
        <>
            <div className="package js-package">
                <div className="package__center center">
                    <div className="package__container">
                        <div className="package__wrap">
                            {/* <button className="btn btn-dark" style={{ zIndex: "2", position: "relative" }} onClick={() => play()} >Play</button>
                            <button className="btn btn-dark" style={{ zIndex: "2", position: "relative" }} onClick={() => pause()} >Pause</button> */}
                            <Slider ref={(newSlider1) => { slider1 = newSlider1} } className="package__slider js-package-slider" {...packageSettings}>
                                <div className="package__slide">
                                    <div className="package__row row">
                                        <div className="col-lg-5">
                                            <div onMouseOver={() => pause()} onMouseOut={() => play()} className="package__details" data-aos data-aos-duration="600" data-aos-delay="400">
                                                <div className="package__category">
                                                    <div className="package__icon">
                                                        <img className="package__pic" src="images/content-management-system.png" alt=""/>
                                                    </div>
                                                    <div className="package__text">What we do</div>
                                                </div>
                                                <h3 className="package__title title title_sm title-ui-ux">UI/UX Services</h3>
                                                <div className="package__info">
                                                    Driven by the values of empathy & impact, we are thriving towards this vision. From research backed design decisions to jaw dropping pixels, It's a no brainer to cook your idea in our lab.
                                                </div>
                                                <div className="package__list">
                                                    {/* <a className="package__link" href="#">
                                                        <div className="package__icon">
                                                            <img className="package__pic" src="img/layout-1.svg" alt="" />
                                                        </div>
                                                        <div className="package__text">Awesome website</div>
                                                    </a>
                                                    <a className="package__link" href="#">
                                                        <div className="package__icon">
                                                            <img className="package__pic" src="img/layout-3.svg" alt="" />
                                                        </div>
                                                        <div className="package__text">Stunning interface</div>
                                                    </a> */}
                                                    <ul className="package-list" data-aos="animation-scale-y" data-aos-delay="200">
                                                        <li>Pixel Perfect</li>
                                                        <li>User Centred</li>
                                                        <li>Interactive Prototyping</li>
                                                    </ul>
                                                </div>
                                                <div className='row'>
                                                    <a className="package__btn btn btn_purple" href="./login">Get Started</a>
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
                                                    <a className="package__btn btn btn_purple" href="./login">Get Started</a>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-7 d-flex justify-content-center" >
                                            <div className="package__preview row">
                                                <div className='col-lg-12 d-flex justify-content-center align-items-center' >
                                                    <img onMouseOver={() => pause()} onMouseOut={() => play()} className="package__pic" src="images/laptop_4.png" alt="" />

                                                    {/* <img className="package-pic-figma" src="images/FIGMA.png" alt="" />
                                                    <img className="package-pic-diamond" src="images/sketch-new.png" alt="" />
                                                    <img className="package-pic-image_32" src="images/image_32.png" alt="" />
                                                    <img className="package-pic-image_31" src="images/image_31.png" alt="" /> */}
                                                </div>
                                                <div onMouseOver={() => subSliderPause()} onMouseOut={() => subSliderPlay()} className='col-lg-10 m-auto subSliderIcons' >
                                                    <Slider ref={(newSubSlider1) => { subSlider1 = newSubSlider1}} className="package-subslider d-flex align-items-center" {...packageSubsliderSettings} >
                                                        {
                                                            designIcons.map((element, index) => {
                                                                return <SubSlider
                                                                    key={index}
                                                                    techImage={element[1]}
                                                                    techName={element[0]}
                                                                />
                                                            })
                                                        }
                                                    </Slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="package__slide">
                                    <div className="package__row row">
                                        <div className="col-lg-5">
                                            <div onMouseOver={() => pause()} onMouseOut={() => play()} className="package__details" data-aos data-aos-duration="600" data-aos-delay="400">
                                                <div className="package__category">
                                                    <div className="package__icon">
                                                        <img className="package__pic" src="images/frame.png" alt="" style={{ height: "24px", width: "auto" }} />
                                                    </div>
                                                    <div className="package__text">What we do</div>
                                                </div>
                                                <h3 className="package__title title title_sm">Web Development</h3>
                                                <div className="package__info">
                                                    {/* We develop web solutions on all scales.
                                                    Its development of systems that take care of your valuable processes.
                                                    We develop User friendly and reliable applications that helps to solve the problems in almost every field. */}
                                                    {/* Not just mobile apps, we build user-friendly mobile experience on iOS and Android platforms.
                                                    We have developed Awesome apps for our clients.
                                                    Apps that resolve real-life problems, that got featured over store, and generate revenue. */}
                                                    It's the development of systems that take care of your valuable processes. We develop user friendly, reliable & scalable applications that help to boost productivity in your field and generate revenue.
                                                </div>
                                                <div className="package__list">
                                                    {/* <a className="package__link" href="#">
                                                        <div className="package__icon">
                                                            <img className="package__pic" src="img/layout-1.svg" alt="" />
                                                        </div>
                                                        <div className="package__text">Awesome website</div>
                                                    </a>
                                                    <a className="package__link" href="#">
                                                        <div className="package__icon">
                                                            <img className="package__pic" src="img/layout-3.svg" alt="" />
                                                        </div>
                                                        <div className="package__text">Stunning interface</div>
                                                    </a> */}
                                                    <ul className="package-list" data-aos="animation-scale-y" data-aos-delay="200">
                                                        <li>Fast & Scalable</li>
                                                        <li>Reliable</li>
                                                        <li>Secure</li>
                                                    </ul>
                                                </div>
                                                <div className='row'>
                                                    <a className="package__btn btn btn_purple" href="./login">Get Started</a>
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
                                                    <a className="package__btn btn btn_purple" href="./login">Get Started</a>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-7 d-flex justify-content-center" >
                                            <div className="package__preview row">
                                                <div className='col-lg-12 d-flex justify-content-center align-items-center' >
                                                    <img onMouseOver={() => pause()} onMouseOut={() => play()} className="package__pic package-pic-slide2" src="images/laptop_3.png" alt="" />

                                                    {/* <img className="package-pic-shopify" src="images/shopify.png" alt="" />
                                                    <img className="package-pic-angular" src="images/angular.png" alt="" />
                                                    <img className="package-pic-react" src="images/react_2.png" alt="" />
                                                    <img className="package-pic-image_30" src="images/image_30.png" alt="" />
                                                    <img className="package-pic-nodejs" src="images/node_2.png" alt="" />
                                                    <img className="package-pic-ror" src="images/ror_orig.png" alt="" /> */}
                                                </div>
                                                <div onMouseOver={() => subSliderPause()} onMouseOut={() => subSliderPlay()} className='col-lg-10 m-auto subSliderIcons' >
                                                    <Slider ref={(newSubSlider2) => { subSlider2 = newSubSlider2}} {...packageSubsliderSettings} className="package-subslider d-flex align-items-center" >
                                                        {
                                                            webIcons.map((element, index) => {
                                                                return <SubSlider
                                                                    key={index}
                                                                    techImage={element[1]}
                                                                    techName={element[0]}
                                                                />
                                                            })
                                                        }
                                                    </Slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="package__slide">
                                    <div className="package__row row">
                                        <div className="col-lg-5">
                                            <div onMouseOver={() => pause()} onMouseOut={() => play()} className="package__details" data-aos data-aos-duration="600" data-aos-delay="400">
                                                <div className="package__category">
                                                    <div className="package__icon">
                                                        <img className="package__pic" src="images/mobile-front-color.png" alt="" style={{ height: "24px", width: "auto" }} />
                                                    </div>
                                                    <div className="package__text">What we do</div>
                                                </div>
                                                <h3 className="package__title title title_sm title-ui-ux">Mobile Solutions</h3>
                                                <div className="package__info">
                                                    {/* Not just mobile apps, we build user-friendly mobile experience on iOS and Android platforms.
                                                    We have developed Awesome apps for our clients.
                                                    Apps that resolve real-life problems, that got featured over store, and generate revenue. */}
                                                    Not just mobile apps, we build user-friendly mobile experience. We develop apps that resolve real-life problems, that got featured over store, that dominate with values in the market.
                                                </div>
                                                <div className="package__list">
                                                    {/* <a className="package__link" href="#">
                                                        <div className="package__icon">
                                                            <img className="package__pic" src="img/layout-1.svg" alt="" />
                                                        </div>
                                                        <div className="package__text">Awesome website</div>
                                                    </a>
                                                    <a className="package__link" href="#">
                                                        <div className="package__icon">
                                                            <img className="package__pic" src="img/layout-3.svg" alt="" />
                                                        </div>
                                                        <div className="package__text">Stunning interface</div>
                                                    </a> */}
                                                    <ul className="package-list" data-aos="animation-scale-y" data-aos-delay="200">
                                                        <li>High Performance</li>
                                                        <li>Cross Platform</li>
                                                        <li>Progressive</li>
                                                    </ul>
                                                </div>
                                                <div className='row'>
                                                    <a className="package__btn btn btn_purple" href="./login">Get Started</a>
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
                                                    <a className="package__btn btn btn_purple" href="./login">Get Started</a>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-7 d-flex justify-content-center" >
                                            <div className="package__preview row package-preview-mobile">
                                                <div className='col-lg-12 d-flex justify-content-center align-items-center' >
                                                    <img onMouseOver={() => pause()} onMouseOut={() => play()} className="package__pic package-pic-mobile" src="images/mobile_2.png" alt="" />

                                                    {/* <img className="package-pic-android" src="images/android_4.png" alt="" />
                                                    <img className="package-pic-flutter" src="images/flutter.png" alt="" />
                                                    <img className="package-pic-react_2" src="images/react_2.png" alt="" />
                                                    <img className="package-pic-swift" src="images/swift_1.png" alt="" /> */}
                                                </div>
                                                <div onMouseOver={() => subSliderPause()} onMouseOut={() => subSliderPlay()} className='col-lg-10 m-auto subSliderIcons' >
                                                    <Slider ref={(newSubSlider3) => { subSlider3 = newSubSlider3}} {...packageSubsliderSettings} className="package-subslider d-flex align-items-center">
                                                        {
                                                            mobileIcons.map((element, index) => {
                                                                return <SubSlider
                                                                    key={index}
                                                                    techImage={element[1]}
                                                                    techName={element[0]}
                                                                />
                                                            })
                                                        }
                                                    </Slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <div className="package__line">
                                <img className="package__pic" src="img/line-1.svg" alt="" />
                            </div>
                            <div className="package__circle" data-aos data-aos-duration="600"></div>
                        </div>
                        <div className="package__circles">
                            <div className="package__circle"></div>
                            <div className="package__circle"></div>
                        </div>
                        <div className='package-yellow-circle' ></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Package