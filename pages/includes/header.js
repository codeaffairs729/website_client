import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Script from "next/script";
import Slider from "react-slick";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const [headerSearchBar, setHeaderSearchBar] = useState(false);
    const [sideBarHandler, setSideBarHandler] = useState(false);
    const [autoplay1, setAutoplay1] = useState(true);
    const [autoplay2, setAutoplay2] = useState(true);
    const [autoplay3, setAutoplay3] = useState(true);
    const [serviceMenu, setServiceMenu] = useState(false);
    const header = useRef(null);

    const [careerLink, setCareerLink] = useState(false);
    const [aboutUsLink, setAboutUsLink] = useState(false);
    const router = useRouter();

    const headerSearch = () => {
        const searchBarShowHide = headerSearchBar ? false : true;
        setHeaderSearchBar(searchBarShowHide);
    }

    const handleSidebar = (e) => {
        sideBarHandler ? setSideBarHandler(false) : setSideBarHandler(true);
        setServiceMenu(false);
        header.parentElement.style.overflowY = 'unset'
    }

    const toggleSidebarInternalMenu = () => {
        serviceMenu ? setServiceMenu(false) : setServiceMenu(true);
        sideBarHandler ? header.parentElement.style.overflowY = 'scroll' : header.parentElement.style.overflowY = 'unset';
    }

    useEffect(() => {
        setCareerLink(router.pathname == '/careers');
        setAboutUsLink(router.pathname == '/aboutUs');
        //     const timer1 = setTimeout(() => {
        //         setAutoplay1(true);
        //         console.log(autoplay1);
        //     }, 1000);

        //     const timer2 = setTimeout(() => {
        //         setAutoplay2(true);
        //         console.log(autoplay2);
        //     }, 3000);

        //     const timer3 = setTimeout(() => {
        //         setAutoplay3(true);
        //         console.log(autoplay3);
        //     }, 5000);
    }, []);

    const servicesSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: autoplay1,
        vertical: true,
        verticalSwiping: true,
        autoplaySpeed: 3000
    };

    const technologiesSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: autoplay2,
        vertical: true,
        verticalSwiping: true,
        autoplaySpeed: 3000
    };

    const portfolioSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: autoplay3,
        vertical: true,
        verticalSwiping: true,
        autoplaySpeed: 3000
    };
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                {/* <title>Custom Software Development Service Provider Company in India</title> */}
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
                <meta name="format-detection" content="telephone=no" />
                <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.webp" />
                <link rel="icon" type="image.webp" sizes="32x32" href="/logo/cgt_new_favicon.webp" />
                <link rel="icon" type="image.webp" sizes="16x16" href="/logo/cgt_new_favicon.webp" />
                <link rel="manifest" href="img/site.webmanifest" />
                <link rel="mask-icon" href="img/safari-pinned-tab.webp" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                {/* <meta name="description" content="Looking for reliable Custom Web Development Services in India? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!" /> */}
            </Head>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" />
            <div ref={(headerRef) => { header = headerRef }} className="header js-header" id="header">
                <div className="header__center center">
                    <button onClick={(e) => handleSidebar(e)} className={sideBarHandler ? "header__burger js-header-burger active" : "header__burger js-header-burger"}>
                        <span></span>
                    </button>
                    <Link href="/">
                        <div style={{cursor:'pointer'}} className="header__logo" >
                            <img className="header__pic" src="/logo/cgt_new_logo_alt.webp" alt="" />
                        </div>
                    </Link>
                    <div className={sideBarHandler ? "header__wrap js-header-wrap visible" : "header__wrap js-header-wrap"}>
                        <nav className="header__nav">
                            <Link href="./">
                                <div style={{cursor:'pointer'}}className="header__item nav-css">Home</div>
                            </Link>
                            <div className={`header__item ${serviceMenu ? "service-menu-header-item" : ""}`}>
                                <Link href="#">
                                <div style={{cursor:'pointer'}} className={`header__head ${serviceMenu ? "service-menu-head nav-css" : ""}`}  onClick={toggleSidebarInternalMenu}>
                                    Services
                                    <svg className="icon icon-arrow-down">
                                        <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                                    </svg>
                                </div>
                                </Link>
                                <div className={`header__body ${serviceMenu ? "service-menu text-start" : ""}`}>
                                    <div className="header__center center header-dropdown-body">
                                        <div className="header__row row">
                                            <div className="col-lg-4 col-md-4 col-sm-4" >
                                                <div className={`header__category ${serviceMenu ? "service-menu-header-item" : ""}`} >
                                                    <Link href='/services/web-services'>
                                                    Web Solutions
                                                    </Link>
                                                </div>
                                                <div className="row" >
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/ror1.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">Ruby on Rails Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/react_3.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">React / NextJs Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/vuejs.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">VueJs / NuxtJs Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/node_2.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">NodeJs Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/laravel.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">Laravel Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/shopify_icon.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">Shopify</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="icons/wordpress.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">Wordpress</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <Slider {...servicesSettings}>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/ror1.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Ruby on Rails Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/react_3.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">React / Next.js Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/vuejs.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Vue.js / NuxtJs Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/node_2.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Node.js Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/laravel.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Laravel Development</div>
                                                                </div>
                                                            </div>
                                                        </div> */}

                                                    {/* <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/computer-front-color.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Web App Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/mobile-front-color.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Mobile App Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/bag-front-color.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">E - commerce</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/blockchain.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">BlockChain/Cryptocurrency</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/crm.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">CRM/CMS/ERP Systems</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/digitalMarketing.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Digital Marketing</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/smart_gadgets.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Smart Gadget Apps</div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    {/* </Slider> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4" >
                                                <div className={`header__category ${serviceMenu ? "service-menu-header-item service-menu-header-category" : ""}`} >
                                                <Link href='/services/mobile-solutions'>
                                                    Mobile Solutions
                                                    </Link>
                                                </div>
                                                <div className="row" >
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/android_2.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">Android App Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/ios.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">IOS App Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/react_native.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">React Native Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/flutter.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">Flutter</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="icons/ionic.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">Ionic</div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    {/* <Slider {...technologiesSettings}>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/android_2.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Android App Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/ios.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">IOS App Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/android_2.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">React Native Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/flutter.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Flutter</div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    {/* <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/javascript.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Javascript</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/tizen-512.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Tizen</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/php1.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">PHP</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/python_2.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Python</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/FIGMA.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Figma</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/MongoDB.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">MongoDB</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/swift.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Swift</div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    {/* </Slider> */}
                                                </div>
                                                <div className={`header__category mt-3 ${serviceMenu ? "service-menu-header-item" : ""}`} >
                                                   <Link href='/services/dev-ops'>
                                                   DevOps
                                                   </Link>
                                                    </div>
                                                <div className="row" >
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/android_2.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">Automation</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/android_2.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">CI/CD</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="img/cloud.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">Cloud Engineering</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4" >
                                                <div className={`header__category ${serviceMenu ? "service-menu-header-item service-menu-header-category" : ""}`} >
                                                    Miscellaneous
                                                    </div>
                                                <div className="row" >
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/content-management-system.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">UI / UX</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/bag-front-color.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">E-commerce Solutions</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/notebook-iso-color.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">Content Management System</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/customer-relationship-management.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">Customer Relationship Management</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/digital-marketing.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">Digital Marketing (PPC, SEO, ORM)</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/deployment-host-management.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 col-10 ps-0 ms-0" >
                                                                <div className="header__info">Deployment and Host Management</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <Slider {...portfolioSettings}>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="img/clock.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">UI / UX</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/bag-front-color.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">E-commerce Solutions</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="img/clock.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Content Management System</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="img/clock.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Customer Relationship Management</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="img/clock.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Internet Marketing</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="img/clock.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Deployment and Host Management</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slider> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link href="./#portfolio">
                            <div style={{cursor:'pointer'}}className="header__item nav-css" >Portfolio</div>
                            </Link>
                            <Link href="./careers" >
                            <div style={{cursor:'pointer'}} className={careerLink ? "header__item header-item" : "header__item nav-css"} >Careers</div>
                            </Link>
                            <Link href="./aboutUs" >
                            <div style={{cursor:'pointer'}} className={aboutUsLink ? "header__item header-item" : "header__item nav-css"} >About Us</div>
                            </Link>
                        </nav>
                        <div className="header__photo">
                            <img className="header__pic" src="/img/menu-pic.webp" alt="" />
                        </div>
                    </div>
                    <div className="header__search js-header-search" >
                        {/* Social Media Icons */}
                        {/* <a className="header__open" href="https://www.facebook.com/CodeGarageTech" >
                            <img className="icon icon-header-img" src="/images/fb35.webp" alt="" />
                        </a>
                        <a className="header__open" href="https://twitter.com/CodeGarageTech" >
                            <img className="icon icon-header-img" src="/images/tw35.webp" alt="" />
                        </a>
                        <a className="header__open" href="https://www.linkedin.com/company/codegaragetech" >
                            <img className="icon icon-header-img" src="/images/lin35.webp" alt="" />
                        </a>
                        <a className="header__open" href="https://www.instagram.com/codegaragetech/" >
                            <img className="icon icon-header-img" src="/images/instagram.webp" alt="" />
                        </a> */}
                        {/* Social Media Icons */}

                        {/* <button onClick={() => headerSearch()} className="header__open js-header-open">
                            <svg className="icon icon-search">
                                <use xlinkHref="img/sprite.svg#icon-search"></use>
                            </svg>
                        </button> */}
                    </div>
                    {/* <div className={ headerSearchBar ? "header__search js-header-search active" : "header__search js-header-search" }>
                        <button onClick={() => headerSearch()} className="header__open js-header-open">
                            <svg className="icon icon-search">
                                <use xlinkHref="img/sprite.svg#icon-search"></use>
                            </svg>
                        </button>
                        <div className="header__field">
                            <input className="header__input" type="text" placeholder="Search ..." />
                        </div>
                    </div> */}
                    <Link href='./contact' >
                        <a className="header__btn btn-none btn btn_pink" target="_blank"  >
                            Get in Touch
                        </a>
                    </Link>
                </div>
                <div className="header__bg js-header-bg"></div>
            </div>
        </>
    )
}

export default Header
