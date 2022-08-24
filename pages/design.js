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
        infinite: true,
        autoplay: true,
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
                    <div className="design__body">
                        <h1 style={{ marginBottom: "10px", display: "inline-flex", marginBottom: "80px", fontWeight: "500", letterSpacing: "-.04em" }}>See our work</h1>
                        {/* <a className="design__scroll" href="#">
                            <div className="design__icon">
                                <img className="design__pic" src="img/scroll.svg" alt="" />
                            </div>
                            <div className="design__text">Our Portfolio</div>
                        </a> */}
                        <div className="design__container">
                            <Slider className="design__slider js-design-slider" {...designSettings}>
                                <div className="design-slide-pink" data-aos="animation-translate-y" data-aos-delay="0">
                                    <div className="design__view design-view-ucview-bg" >
                                        {/* <div className="design__preview">
                                            <img className="design__pic" src="images/ucview.png" alt="" />
                                        </div> */}
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Design</div>
                                        <div className="design__info">ucview</div>
                                        <div className="design__text">
                                            Use the smart color picker to easily select and apply colors.
                                        </div>
                                        <a className="design__link" href="https://www.ucview.com/">
                                            See More
                                            <svg className="icon icon-arrow-right">
                                                <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="design-slide-blue" data-aos="animation-translate-y" data-aos-delay="200">
                                    <div className="design__view design-view-stockarchitect-bg">
                                        {/* <div className="design__preview">
                                            <img className="design__pic" src="images/stockarchitect.png" alt="" />
                                        </div> */}
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Design</div>
                                        <div className="design__info">Stock architect</div>
                                        <div className="design__text">
                                            Using the Component Builder with your projects.
                                        </div>
                                        <a className="design__link" href="https://stockarchitect.com/">
                                            See More
                                            <svg className="icon icon-arrow-right">
                                                <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="design-slide-green" data-aos="animation-translate-y" data-aos-delay="400">
                                    <div className="design__view design-view-withrelay-bg">
                                        {/* <div className="design__preview">
                                            <img className="design__pic" src="images/withrelay.png" alt="" />
                                        </div> */}
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Design</div>
                                        <div className="design__info">Withrelay</div>
                                        <div className="design__text">
                                            Deploy your projects more efficiently for web &amp; mobile.
                                        </div>
                                        <a className="design__link" href="https://www.withrelay.com/">
                                            See More
                                            <svg className="icon icon-arrow-right">
                                                <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="design-slide-pink" data-aos="animation-translate-y">
                                    <div className="design__view design-view-videochatapro-bg">
                                        {/* <div className="design__preview">
                                            <img className="design__pic" src="images/videochatapro.png" alt="" />
                                        </div> */}
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Design</div>
                                        <div className="design__info">Videochatapro</div>
                                        <div className="design__text">
                                            Use the smart color picker to easily select and apply colors.
                                        </div>
                                        <a className="design__link" href="https://videochatapro.com/">
                                            See More
                                            <svg className="icon icon-arrow-right">
                                                <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="design-slide-blue" data-aos="animation-translate-y">
                                    <div className="design__view design-view-buyma-bg">
                                        {/* <div className="design__preview">
                                            <img className="design__pic" src="images/buyma.png" alt="" />
                                        </div> */}
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Design</div>
                                        <div className="design__info">Buyma</div>
                                        <div className="design__text">
                                            Using the Component Builder with your projects.
                                        </div>
                                        <a className="design__link" href="https://www.buyma.us/">
                                            See More
                                            <svg className="icon icon-arrow-right">
                                                <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="design-slide-green" data-aos="animation-translate-y" data-aos-delay="0">
                                    <div className="design__view design-view-fintrakk-bg">
                                        {/* <div className="design__preview">
                                            <img className="design__pic" src="images/fintrakk.png" alt="" />
                                        </div> */}
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Design</div>
                                        <div className="design__info">Fintrakk</div>
                                        <div className="design__text">
                                            Use the smart color picker to easily select and apply colors.
                                        </div>
                                        <a className="design__link" href="https://fintrakk.com/">
                                            See More
                                            <svg className="icon icon-arrow-right">
                                                <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="design-slide-pink" data-aos="animation-translate-y">
                                    <div className="design__view design-view-welcome-bg">
                                        {/* <div className="design__preview">
                                            <img className="design__pic" src="images/welcomeAi.png" alt="" />
                                        </div> */}
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Design</div>
                                        <div className="design__info">Welcome AI</div>
                                        <div className="design__text">
                                            Use the smart color picker to easily select and apply colors.
                                        </div>
                                        <a className="design__link" href="https://welcome.ai/">
                                            See More
                                            <svg className="icon icon-arrow-right">
                                                <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="design-slide-blue" data-aos="animation-translate-y">
                                    <div className="design__view design-view-bzigo-bg"></div>
                                    <div className="design__details">
                                        <div className="design__category">Design</div>
                                        <div className="design__info">Bzigo</div>
                                        <div className="design__text">
                                            Use the smart color picker to easily select and apply colors.
                                        </div>
                                        <a className="design__link" href="https://bzigo.com/">
                                            See More
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