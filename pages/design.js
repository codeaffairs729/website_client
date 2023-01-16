import React, { useRef } from 'react'
import Slider from "react-slick";
import { GrFormPreviousLink } from 'react-icons/gr';
import { GrFormNextLink } from 'react-icons/gr';
import Link from 'next/link'

const SliderButton = ({ gotoPrev, gotoNext }) => {
    return (
        <div>
            <button
                className='m-4'
                onClick={gotoPrev}
            ><GrFormPreviousLink className='h2 border border-dark rounded-circle' /></button>
            <button
                onClick={gotoNext}
            ><GrFormNextLink
                    className='h2 border border-dark rounded-circle '
                /></button>
        </div>
    )

}

import Head from 'next/head';

const Design = () => {
    const gotoNext = () => {
        sliderRef.current.slickNext();
    }
    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    }
    const sliderRef = useRef();
    const designSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        accessibility: false,
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
                slidesToShow: 1,

            }
        }]
    };

    return (
        <>
            {/* <Head>
                <title>Check Out our Portfolio Here  - Code Garage Tech! </title>
                <meta name="description" content="Discover Code Garage Tech’s portfolio! We feel pleasure in sharing our wonderful portfolio which is no less than an achievement for us! " />
            </Head> */}

            <div id="portfolio" className="design">

                <div className="design__center center">
                    <div className="design__body">
                        <h2 className='h1' style={{ marginBottom: "10px", display: "inline-flex", marginBottom: "80px", fontWeight: "500", letterSpacing: "-.04em" }}>
                            We Build Delightful Experiences.
                        </h2>
                        {/* <a className="design__scroll" href="#">
                            <div className="design__icon">
                                <img className="design__pic" src="img/scroll.webp" alt="" />
                            </div>
                            <div className="design__text">Our Portfolio</div>
                        </a> */}
                        <div className="design__container">
                            <div className='d-flex justify-content-end'>
                                <SliderButton gotoNext={gotoNext} gotoPrev={gotoPrev} />
                            </div>
                            <Slider ref={sliderRef} className="design__slider js-design-slider" {...designSettings}>
                                <div className="design-slide-pink" data-aos="animation-translate-y" data-aos-delay="0">
                                    <div className="design__view design-view-ucview-bg" >
                                        {/* <div className="design__preview">
                                            <img className="design__pic" src="images/ucview.webp" alt="" />
                                        </div> */}
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Digital Signage</div>
                                        <div className="design__info">UCView</div>
                                        <div className="design__text">
                                            UCView is a leading provider of digital signage software worldwide, offering world-class digital signage Saas and servers based (with load balancing) and content management software that is reliable, simple to use, and cost-effective to operate.
                                        </div>
                                        <Link href="https://www.ucview.com/">
                                            <a className="design__link" >
                                                Visit
                                                <svg className="icon icon-arrow-right">
                                                    <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="design-slide-blue" data-aos="animation-translate-y" data-aos-delay="200">
                                    <div className="design__view design-view-stockarchitect-bg">
                                        {/* <div className="design__preview">
                                            <img className="design__pic" src="images/stockarchitect.webp" alt="" />
                                        </div> */}
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Stock Market Analysis</div>
                                        <div className="design__info">Stock Architect</div>
                                        <div className="design__text">
                                            Stock Architect delivers stock market information from various sources in the curated form to its users to help them take informed decisions before buying or selling stocks. You can now get real-time views from real investors and traders.                                         </div>
                                        <Link href="https://stockarchitect.com/">
                                            <a className="design__link" >
                                                Visit
                                                <svg className="icon icon-arrow-right">
                                                    <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="design-slide-green" data-aos="animation-translate-y" data-aos-delay="400">
                                    <div className="design__view design-view-withrelay-bg">
                                        {/* <div className="design__preview">
                                            <img className="design__pic" src="images/withrelay.webp" alt="" />
                                        </div> */}
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Interactive Voice Response & Messaging</div>
                                        <div className="design__info">Withrelay</div>
                                        <div className="design__text">
                                            Send & receive text messages, set auto-responders, schedule notifications & accept payments using your existing business phone number in a single conversation. It gives a virtual SMS phone number that your customers can use to text immediately.                                        </div>
                                        <Link href="https://www.withrelay.com/">
                                            <a className="design__link" >
                                                Visit
                                                <svg className="icon icon-arrow-right">
                                                    <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="design-slide-pink" data-aos="animation-translate-y">
                                    <div className="design__view design-view-videochatapro-bg">
                                        {/* <div className="design__preview">
                                            <img className="design__pic" src="images/videochatapro.webp" alt="" />
                                        </div> */}
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Video Chat Assistance</div>
                                        <div className="design__info">VideoChatAPro</div>
                                        <div className="design__text">
                                            With the help of Video Chat a Pro app you can get advice from skilled HVAC & landscaping professionals in real-time, it is super simple to download this app. This app power your business on the go by instantly notifying you of free customer leads, and much more.                                          </div>
                                        <Link href="https://videochatapro.com/">
                                            <a className="design__link" href="https://videochatapro.com/">
                                                Visit
                                                <svg className="icon icon-arrow-right">
                                                    <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="design-slide-blue" data-aos="animation-translate-y">
                                    <div className="design__view design-view-buyma-bg">
                                        {/* <div className="design__preview">
                                            <img className="design__pic" src="images/buyma.webp" alt="" />
                                        </div> */}
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">E-commerce</div>
                                        <div className="design__info">Buyma</div>
                                        <div className="design__text">
                                            Buyma is a shopping application that allows you to shop for a variety of products, including clothing, bags, and accessories. You can have access to limited collections of your favorite brands that may not be sold in your country.                                         </div>
                                        <Link href="https://www.buyma.us/">
                                            <a className="design__link" >
                                                Visit
                                                <svg className="icon icon-arrow-right">
                                                    <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="design-slide-green" data-aos="animation-translate-y" data-aos-delay="0">
                                    <div className="design__view design-view-fintrakk-bg">
                                        {/* <div className="design__preview">
                                            <img className="design__pic" src="images/fintrakk.webp" alt="" />
                                        </div> */}
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">Fintech</div>
                                        <div className="design__info">Fintrakk</div>
                                        <div className="design__text">
                                            Fintrakk is an application that offers knowledge about Finance, Investments, Stock Brokers, and Stock Market. You can explore important concepts, popular products or services, trading apps, and interesting investing ideas across the world.                                         </div>
                                        <Link href="https://fintrakk.com/">
                                            <a className="design__link" href="https://fintrakk.com/">
                                                Visit
                                                <svg className="icon icon-arrow-right">
                                                    <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="design-slide-pink" data-aos="animation-translate-y">
                                    <div className="design__view design-view-welcome-bg">
                                        {/* <div className="design__preview">
                                            <img className="design__pic" src="images/welcomeAi.webp" alt="" />
                                        </div> */}
                                    </div>
                                    <div className="design__details">
                                        <div className="design__category">AI Blogs</div>
                                        <div className="design__info">Welcome AI</div>
                                        <div className="design__text">
                                            Welcome AI is an application that provides you with essential knowledge on Artificial Intelligence, emerging technologies, and changing industries. You can discover and learn about AI and emerging technologies within business today.                                        </div>
                                        <Link href="https://welcome.ai/">
                                            <a className="design__link" href="https://welcome.ai/">
                                                Visit
                                                <svg className="icon icon-arrow-right">
                                                    <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="design-slide-blue" data-aos="animation-translate-y">
                                    <div className="design__view design-view-bzigo-bg"></div>
                                    <div className="design__details">
                                        <div className="design__category">IoT Technology</div>
                                        <div className="design__info">Bzigo</div>
                                        <div className="design__text">
                                            Bzigo is the first-ever device that actively detects and locates mosquitoes. Once a mosquito is detected, you receive a notification on your smartphone, and a laser marker shows the mosquito’s precise location, allowing you to easily eliminate it.                                        </div>
                                        <Link href="https://bzigo.com/">
                                            <a className="design__link" href="https://bzigo.com/">
                                                Visit
                                                <svg className="icon icon-arrow-right">
                                                    <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                            </Slider>
                            <div className='d-flex justify-content-start'>
                                <SliderButton gotoNext={gotoNext} gotoPrev={gotoPrev} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Design