import React from 'react'
import Slider from "react-slick";

const Design = () => {
    const designSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: <button type="button" className="slick-prev"><svg className="icon icon-arrow-prev"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="img/sprite.svg#icon-arrow-prev"></use></svg></button>,
        nextArrow: <button type="button" className="slick-next"><svg className="icon icon-arrow-next"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="img/sprite.svg#icon-arrow-next"></use></svg></button>,
        speed: 700,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    };

    return (
        <>
            <div className="design">
                <div className="design__center center">
                    <div className="design__wrap" data-aos="animation-translate-y">
                        <div className="design__stage stage">Design accordlogy</div>
                        <h2 className="design__title title">
                            Enrich your design workflow
                            <span className="title__color">.</span>
                        </h2>
                        <div className="design__info info">Design anything from simple icons to fully featured websites and applications.</div>
                    </div>
                    <div className="design__hand" data-aos data-aos-duration="600">
                        <img className="design__pic" src="img/hand-4.png" alt="" />
                    </div>
                    <div className="design__bg" data-aos data-aos-delay="400">
                        <img className="design__pic" src="img/design-pic.png" alt="" />
                    </div>
                    <div className="design__circles">
                        <div className="design__circle js-rellax" data-rellax-speed="1"></div>
                        <div className="design__circle"></div>
                        <div className="design__circle js-rellax" data-rellax-speed=".5"></div>
                    </div>
                    <div className="design__body">
                        <a className="design__scroll" href="#">
                            <div className="design__icon">
                                <img className="design__pic" src="img/scroll.svg" alt="" />
                            </div>
                            <div className="design__text">Using Collab</div>
                        </a>
                        <div className="design__container">
                            <Slider className="design__slider js-design-slider" {...designSettings}>
                                <div className="design__slide" data-aos="animation-translate-y" data-aos-delay="0">
                                    <div className="design__view">
                                        <div className="design__preview">
                                            <img className="design__pic" src="img/design-pic-1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Design</div>
                                        <div className="design__info">Automation Color Picker</div>
                                        <div className="design__text">
                                            Use the smart color picker to easily select and apply colors.
                                        </div>
                                        <a className="design__link" href="./login">
                                            Get started
                                            <svg className="icon icon-arrow-right">
                                                <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="design__slide" data-aos="animation-translate-y" data-aos-delay="200">
                                    <div className="design__view">
                                        <div className="design__preview">
                                            <img className="design__pic" src="img/design-pic-2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Build</div>
                                        <div className="design__info">Component Builder Guide</div>
                                        <div className="design__text">
                                            Using the Component Builder with your projects.
                                        </div>
                                        <a className="design__link" href="./login">
                                            Get started
                                            <svg className="icon icon-arrow-right">
                                                <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="design__slide" data-aos="animation-translate-y" data-aos-delay="400">
                                    <div className="design__view">
                                        <div className="design__preview">
                                            <img className="design__pic" src="img/design-pic-3.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Ship</div>
                                        <div className="design__info">Cross-platform Deployment</div>
                                        <div className="design__text">
                                            Deploy your projects more efficiently for web &amp; mobile.
                                        </div>
                                        <a className="design__link" href="./login">
                                            Get started
                                            <svg className="icon icon-arrow-right">
                                                <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="design__slide" data-aos="animation-translate-y">
                                    <div className="design__view">
                                        <div className="design__preview">
                                            <img className="design__pic" src="img/design-pic-1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Design</div>
                                        <div className="design__info">Automation Color Picker</div>
                                        <div className="design__text">
                                            Use the smart color picker to easily select and apply colors.
                                        </div>
                                        <a className="design__link" href="./login">
                                            Get started
                                            <svg className="icon icon-arrow-right">
                                                <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="design__slide" data-aos="animation-translate-y">
                                    <div className="design__view">
                                        <div className="design__preview">
                                            <img className="design__pic" src="img/design-pic-2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Build</div>
                                        <div className="design__info">Component Builder Guide</div>
                                        <div className="design__text">
                                            Using the Component Builder with your projects.
                                        </div>
                                        <a className="design__link" href="./login">
                                            Get started
                                            <svg className="icon icon-arrow-right">
                                                <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Design