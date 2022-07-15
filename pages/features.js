import React from 'react'
import Slider from "react-slick";

const Features = () => {
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <button type="button" className="slick-prev"><svg className="icon icon-arrow-prev"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="img/sprite.svg#icon-arrow-prev"></use></svg></button>,
        nextArrow: <button type="button" className="slick-next"><svg className="icon icon-arrow-next"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="img/sprite.svg#icon-arrow-next"></use></svg></button>,
        dots: false,
        infinite: false,
        speed: 600,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="features js-features">
                <div className="features__center center">
                    <div className="features__head" data-aos="animation-scale-y">
                        <div className="features__stage stage">Features</div>
                        <div className="features__box">
                            <h2 className="features__title title">The world’s most powerful design tool.</h2>
                            <div className="features__info info">Simultaneously design, code and collaborate with your team all from one place.</div>
                        </div>
                    </div>
                    <div className="features__body">
                        <div className="features__container">
                            <Slider className="features__slider js-features-slider" {...settings}>
                                <div>
                                    <div className="features__slide" data-aos="animation-scale-y">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="img/camera.png" alt="" />
                                            </div>
                                            <div className="features__category">Import Photos & Videos</div>
                                            <div className="features__text">Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</div>
                                            <a className="features__link" href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide" data-aos="animation-scale-y" data-aos-delay="200">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="img/calendar.png" alt="" />
                                            </div>
                                            <div className="features__category">Calendar API Built-In</div>
                                            <div className="features__text">Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.</div>
                                            <a className="features__link" href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="img/camera.png" alt=""/>
                                            </div>
                                            <div className="features__category">Import Photos & Videos</div>
                                            <div className="features__text">Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</div>
                                            <a className="features__link" href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="img/calendar.png" alt="" />
                                            </div>
                                            <div className="features__category">Calendar API Built-In</div>
                                            <div className="features__text">Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.</div>
                                            <a className="features__link" href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="img/camera.png" alt="" />
                                            </div>
                                            <div className="features__category">Import Photos & Videos</div>
                                            <div className="features__text">Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</div>
                                            <a className="features__link" href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="features__status js-features-status"></div>
                    </div>
                </div>
                <div className="features__circle js-rellax" data-rellax-speed="-.7"></div>
                <div className="features__bg" data-aos data-aos-duration="1000">
                    <img className="features__pic" src="img/features-pic-1.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Features