import React from 'react'
import Slider from "react-slick";
import PrevButton from '../components/prevButton';
import NextButton from '../components/nextButton';

const Design = () => {
    const designSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: <PrevButton />,
        nextArrow: <NextButton />,
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
            <div id="portfolio" className="design">
                <div className="design__center center">
                    <div className="design__body">
                        <h1 style={{ marginBottom: "10px", display: "inline-flex", marginBottom: "80px", fontWeight: "500", letterSpacing: "-.04em" }}>
                            We Build Delightful Experiences.
                        </h1>
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
                                        <div className="design__info">UCView</div>
                                        <div className="design__text">
                                            UCView is a leading provider of digital signage software worldwide, offering world-class digital signage SaaS and servers based (with load balancing) and content management software that is reliable, simple to use, and cost-effective to operate. Our company’s mission is to enable the business convergence of digital display owners, advertisers and consumers.
                                        </div>
                                        <a className="design__link" href="https://www.ucview.com/">
                                            Visit
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
                                        <div className="design__info">Stock Architect</div>
                                        <div className="design__text">
                                            StockArchitect delivers stock market information from various sources in curated form to its users to help them take informed decisions before buying or selling stocks.
                                        </div>
                                        <a className="design__link" href="https://stockarchitect.com/">
                                            Visit
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
                                            Send & receive text messages, set auto-responders, schedule notifications & accept payments using your existing business phone number in single conversation. It gives a virtual SMS phone number that your customers can text immediately.
                                        </div>
                                        <a className="design__link" href="https://www.withrelay.com/">
                                            Visit
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
                                        <div className="design__info">VideoChatAPro</div>
                                        <div className="design__text">
                                            The Video Chat a Pro app, allows you to power your business on the go by instantly notifying you of free customer leads, allowing you to charge for video chat, optimize your business listing, manage employees, collect reviews, and more! The app allows you to manage your free lead forms and respond to paid customer video chat requests. Contractors and technicians specializing in plumbing, HVAC, landscaping, electrical, appliances, or automotive repair will get free customers on Video Chat a Pro.
                                        </div>
                                        <a className="design__link" href="https://videochatapro.com/">
                                            Visit
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
                                            Buyma is a marketplace which provides premier & luxury brand items with a joy of shopping experience with trusted sellers in the globe.
                                        </div>
                                        <a className="design__link" href="https://www.buyma.us/">
                                            Visit
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
                                            Visit
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
                                            Welcome.AI helps businesses to discover, learn and evaluate all the new and emerging AI technologies that are coming into the market today.
                                        </div>
                                        <a className="design__link" href="https://welcome.ai/">
                                            Visit
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
                                            Visit
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