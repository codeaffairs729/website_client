import React from 'react'
import Slider from "react-slick";

const Package = () => {
    const packageSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        // prevArrow: <button className="package__arrow js-package-prev">
        //         <svg className="icon icon-arrow-prev">
        //             <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
        //         </svg>
        //     </button>,
        // nextArrow: <button className="package__arrow js-package-next">
        //         <svg className="icon icon-arrow-next">
        //             <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
        //         </svg>
        //     </button>,
        speed: 700,
        fade: true,
        adaptiveHeight: true,
        autoplay: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: false
            }
        }]
    };

    return (
        <>
            <div className="package js-package">
                <div className="package__center center">
                    <div className="package__container">
                        <div className="package__wrap">
                            <Slider className="package__slider js-package-slider" {...packageSettings}>
                                <div className="package__slide">
                                    <div className="package__row">
                                        <div className="package__details" data-aos data-aos-duration="600" data-aos-delay="400">
                                            <div className="package__category">
                                                <div className="package__icon">
                                                    <img className="package__pic" src="img/smile-2.svg" alt=""/>
                                                </div>
                                                <div className="package__text">Awesome feature</div>
                                            </div>
                                            <h3 className="package__title title title_sm">UI/UX Services</h3>
                                            <div className="package__info">It’s easy to share designs across the organization, so team collaboration is fast and easy.</div>
                                            <div className="package__list">
                                                <a className="package__link" href="#">
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
                                                </a>
                                            </div>
                                            <div className="package__btns">
                                                <div className="package__arrows">
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
                                                </div>
                                                <a className="package__btn btn btn_purple" href="./login">Get Started</a>
                                            </div>
                                        </div>
                                        <div className="package__preview">
                                            <img className="package__pic" src="img/laptop.png" alt="" />
                                            <img className="package-pic-figma" src="images/FIGMA.png" alt="" />
                                            <img className="package-pic-diamond" src="images/sketch-new.png" alt="" />
                                            <img className="package-pic-image_32" src="images/image_32.png" alt="" />
                                            <img className="package-pic-image_31" src="images/image_31.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="package__slide">
                                    <div className="package__row">
                                        <div className="package__details" data-aos data-aos-duration="600" data-aos-delay="400">
                                            <div className="package__category">
                                                <div className="package__icon">
                                                    <img className="package__pic" src="img/smile-2.svg" alt="" />
                                                </div>
                                                <div className="package__text">Awesome feature</div>
                                            </div>
                                            <h3 className="package__title title title_sm">Web Development</h3>
                                            <div className="package__info">It’s easy to share designs across the organization, so team collaboration is fast and easy.</div>
                                            <div className="package__list">
                                                <a className="package__link" href="#">
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
                                                </a>
                                            </div>
                                            <div className="package__btns">
                                                <div className="package__arrows">
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
                                                </div>
                                                <a className="package__btn btn btn_purple" href="./login">Get Started</a>
                                            </div>
                                        </div>
                                        <div className="package__preview">
                                            <img className="package__pic package-pic-slide2" src="images/Laptop.png" alt="" />
                                            <img className="package-pic-shopify" src="images/shopify.png" alt="" />
                                            <img className="package-pic-angular" src="images/angular.png" alt="" />
                                            <img className="package-pic-react" src="images/react_2.png" alt="" />
                                            <img className="package-pic-image_30" src="images/image_30.png" alt="" />
                                            <img className="package-pic-nodejs" src="images/node_2.png" alt="" />
                                            <img className="package-pic-ror" src="images/ror_orig.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="package__slide">
                                    <div className="package__row">
                                        <div className="package__details" data-aos data-aos-duration="600" data-aos-delay="400">
                                            <div className="package__category">
                                                <div className="package__icon">
                                                    <img className="package__pic" src="img/smile-2.svg" alt="" />
                                                </div>
                                                <div className="package__text">Awesome feature</div>
                                            </div>
                                            <h3 className="package__title title title_sm">Mobile Solutions</h3>
                                            <div className="package__info">It’s easy to share designs across the organization, so team collaboration is fast and easy.</div>
                                            <div className="package__list">
                                                <a className="package__link" href="#">
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
                                                </a>
                                            </div>
                                            <div className="package__btns">
                                                <div className="package__arrows">
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
                                                </div>
                                                <a className="package__btn btn btn_purple" href="./login">Get Started</a>
                                            </div>
                                        </div>
                                        <div className="package__preview package-preview-mobile">
                                            <img className="package__pic package-pic-mobile" src="images/Mobile_1.png" alt="" />
                                            <img className="package-pic-android" src="images/android_4.png" alt="" />
                                            <img className="package-pic-flutter" src="images/flutter.png" alt="" />
                                            <img className="package-pic-react_2" src="images/react_2.png" alt="" />
                                            <img className="package-pic-swift" src="images/swift_1.png" alt="" />
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