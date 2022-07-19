import React from 'react'
import Slider from "react-slick";

const Package = () => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
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
        speed: 700,
        fade: true,
        adaptiveHeight: true,
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
                            <Slider className="package__slider js-package-slider" {...settings}>
                                <div className="package__slide">
                                    <div className="package__row">
                                        <div className="package__details" data-aos data-aos-duration="600" data-aos-delay="400">
                                            <div className="package__category">
                                                <div className="package__icon">
                                                    <img className="package__pic" src="img/smile-2.svg" alt=""/>
                                                </div>
                                                <div className="package__text">Awesome feature</div>
                                            </div>
                                            <h3 className="package__title title title_sm">Ultimate features</h3>
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
                                                    <button className="package__arrow js-package-prev">
                                                        <svg className="icon icon-arrow-prev">
                                                            <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                                                        </svg>
                                                    </button>
                                                    <button className="package__arrow js-package-next">
                                                        <svg className="icon icon-arrow-next">
                                                            <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <a className="package__btn btn btn_purple" href="login.html">Get Started</a>
                                            </div>
                                        </div>
                                        <div className="package__preview">
                                            <img className="package__pic" src="img/laptop.png" alt="" />
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
                                            <h3 className="package__title title title_sm">Standard features</h3>
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
                                                    <button className="package__arrow js-package-prev">
                                                        <svg className="icon icon-arrow-prev">
                                                            <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                                                        </svg>
                                                    </button>
                                                    <button className="package__arrow js-package-next">
                                                        <svg className="icon icon-arrow-next">
                                                            <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <a className="package__btn btn btn_purple" href="login.html">Get Started</a>
                                            </div>
                                        </div>
                                        <div className="package__preview">
                                            <img className="package__pic" src="img/laptop.png" alt="" />
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
                                            <h3 className="package__title title title_sm">Ultimate features</h3>
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
                                                    <button className="package__arrow js-package-prev">
                                                        <svg className="icon icon-arrow-prev">
                                                            <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                                                        </svg>
                                                    </button>
                                                    <button className="package__arrow js-package-next">
                                                        <svg className="icon icon-arrow-next">
                                                            <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <a className="package__btn btn btn_purple" href="login.html">Get Started</a>
                                            </div>
                                        </div>
                                        <div className="package__preview">
                                            <img className="package__pic" src="img/laptop.png" alt="" />
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
                                            <h3 className="package__title title title_sm">Standard features</h3>
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
                                                    <button className="package__arrow js-package-prev">
                                                        <svg className="icon icon-arrow-prev">
                                                            <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                                                        </svg>
                                                    </button>
                                                    <button className="package__arrow js-package-next">
                                                        <svg className="icon icon-arrow-next">
                                                            <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <a className="package__btn btn btn_purple" href="login.html">Get Started</a>
                                            </div>
                                        </div>
                                        <div className="package__preview">
                                            <img className="package__pic" src="img/laptop.png" alt="" />
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Package