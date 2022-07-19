import React from 'react'
import Slider from "react-slick";

const Details = () => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="details">
            <div className="details__center center">
                <div className="details__head" data-aos="animation-scale-y">
                    <h2 className="details__title title">
                        Research &
                        <br/>
                        background, summary
                        <span className="title__color">.</span>
                    </h2>
                    <div className="details__info info">Collab is fast. Files are always up to date and ready for production</div>
                </div>
                <div className="details__row">
                    <div className="details__container">
                        <Slider className="details__slider js-details-slider" {...settings}>
                            <div className="details__slide">
                                <div className="details__counter"><span className="details__number">16</span> m</div>
                                <div className="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                                <div className="details__control"><button className="details__play">Play</button><a className="details__link" href="#">Find out more</a></div>
                            </div>
                            <div className="details__slide">
                                <div className="details__counter"><span className="details__number">16</span> m</div>
                                <div className="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                                <div className="details__control"><button className="details__play">Play</button><a className="details__link" href="#">Find out more</a></div>
                            </div>
                            <div className="details__slide">
                                <div className="details__counter"><span className="details__number">16</span> m</div>
                                <div className="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                                <div className="details__control"><button className="details__play">Play</button><a className="details__link" href="#">Find out more</a></div>
                            </div>
                            <div className="details__slide">
                                <div className="details__counter"><span className="details__number">16</span> m</div>
                                <div className="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                                <div className="details__control"><button className="details__play">Play</button><a className="details__link" href="#">Find out more</a></div>
                            </div>
                        </Slider>
                    </div>
                    <div className="details__graphic">
                        <div className="details__mobile">
                            <img className="details__pic" src="img/mobile.svg" alt="" />
                            <div className="details__box">
                                <div className="details__chart" data-aos data-aos-offset="0" data-aos-delay="300" data-aos-duration="1000">
                                    <img className="details__pic" src="img/chart.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details__hand">
                    <img className="details__pic js-parallax" data-scale="1.2" data-orientation="up" src="img/hand-5.png" alt="" />
                </div>
                <div className="details__line">
                    <img className="details__pic" src="img/line-2.svg" alt="" />
                </div>
                <div className="details__circles">
                    <div className="details__circle"></div>
                    <div className="details__circle js-rellax" data-rellax-speed="-.5"></div>
                </div>
            </div>
        </div>
    )
}

export default Details