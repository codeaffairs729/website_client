import React from 'react'
import Slider from "react-slick";

const Teams = () => {
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: <button type="button" className="slick-prev"><svg className="icon icon-arrow-prev"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="img/sprite.svg#icon-arrow-prev"></use></svg></button>,
        nextArrow: <button type="button" className="slick-next"><svg className="icon icon-arrow-next"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="img/sprite.svg#icon-arrow-next"></use></svg></button>,
        speed: 700,
        autoplay: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1
            }
        }]
    };

    return (
        <>
            <div className="teams">
                <div className="teams__center center">
                    <div className="teams__head" data-aos="animation-scale-y">
                        <div className="teams__stage stage">Team Collaboration Redefined</div>
                        <h2 className="teams__title title">
                            Helping world-className teams design faster together
                            <span className="title__color">.</span>
                        </h2>
                    </div>
                    <div className="teams__body">
                        <div className="teams__col" data-aos="animation-scale-y">
                            <h3 className="teams__title title title_sm">What others are&nbsp;saying</h3>
                        </div>
                        <div className="teams__col">
                            <div className="teams__container">
                                <Slider className="teams__slider js-teams-slider" {...settings}>
                                    <div className="teams__slide" data-aos="animation-scale-y" data-aos-delay="200">
                                        <div className="teams__line" style={{backgroundColor: "#5956E9"}}></div>
                                        <div className="teams__name" style={{color: "#C75C6F"}}>UI8</div>
                                        <div className="teams__text">
                                            “ Collab is fast. Files are always up to date.
                                            <br/>
                                            It’s easy to share designs across the organization, so collaboration is easy ”
                                        </div>
                                        <div className="teams__user">
                                            <div className="teams__ava">
                                                <img className="teams__pic" src="img/ui8.png" alt="" />
                                            </div>
                                            <div className="teams__box">
                                                <div className="teams__man">Dash</div>
                                                <div className="teams__login">Founder @UI8</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="teams__slide" data-aos="animation-scale-y" data-aos-delay="400">
                                        <div className="teams__line" style={{backgroundColor: "#FAB8C4"}}></div>
                                        <div className="teams__name" style={{color: "#5956E9"}}>Bento</div>
                                        <div className="teams__text">
                                            “ Collab is fast. Files are always up to date.
                                            <br/>
                                            It’s easy to share designs across the organization, so collaboration is easy ”
                                        </div>
                                        <div className="teams__user">
                                            <div className="teams__ava">
                                                <img className="teams__pic" src="img/ava-1.png" alt="" />
                                            </div>
                                            <div className="teams__box">
                                                <div className="teams__man">Emily</div>
                                                <div className="teams__login">Founder @Bento</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="teams__slide">
                                        <div className="teams__line" style={{backgroundColor: "#5956E9"}}></div>
                                        <div className="teams__name" style={{color: "#C75C6F"}}>UI8</div>
                                        <div className="teams__text">
                                            “ Collab is fast. Files are always up to date.
                                            <br/>
                                            It’s easy to share designs across the organization, so collaboration is easy ”
                                        </div>
                                        <div className="teams__user">
                                            <div className="teams__ava">
                                                <img className="teams__pic" src="img/ui8.png" alt="" />
                                            </div>
                                            <div className="teams__box">
                                                <div className="teams__man">Dash</div>
                                                <div className="teams__login">Founder @UI8</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="teams__slide">
                                        <div className="teams__line" style={{backgroundColor: "#FAB8C4"}}></div>
                                        <div className="teams__name" style={{color: "#5956E9"}}>Bento</div>
                                        <div className="teams__text">
                                            “ Collab is fast. Files are always up to date.
                                            <br/>
                                            It’s easy to share designs across the organization, so collaboration is easy ”
                                        </div>
                                        <div className="teams__user">
                                            <div className="teams__ava">
                                                <img className="teams__pic" src="img/ava-1.png" alt="" />
                                            </div>
                                            <div className="teams__box">
                                                <div className="teams__man">Emily</div>
                                                <div className="teams__login">Founder @Bento</div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="teams__circle js-rellax" data-rellax-speed="1"></div>
            </div>
        </>
    )
}

export default Teams