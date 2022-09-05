import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Slider from "react-slick";
import Link from 'next/link';

const Header = () => {
    const [headerSearchBar, setHeaderSearchBar] = useState(false);
    const [sideBarHandler, setSideBarHandler] = useState(false);
    const [autoplay1, setAutoplay1] = useState(true);
    const [autoplay2, setAutoplay2] = useState(true);
    const [autoplay3, setAutoplay3] = useState(true);

    const headerSearch = () => {
        const searchBarShowHide = headerSearchBar ? false : true;
        setHeaderSearchBar(searchBarShowHide);
    }

    const handleSidebar = () => {
        sideBarHandler ? setSideBarHandler(false) : setSideBarHandler(true);
    }

    // useEffect(() => {
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
    // }, []);

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
                <title>CodeGarageTech</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
                <meta name="format-detection" content="telephone=no"/>
                <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon_white.jpg"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon_white.jpg"/>
                <link rel="manifest" href="img/site.webmanifest"/>
                <link rel="mask-icon" href="img/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <meta name="description" content="CodeGarageTech"/>
            </Head>
            <div className="header js-header" id="header">
                <div className="header__center center">
                    {/* <button onClick={() => handleSidebar()} className={ sideBarHandler ? "header__burger js-header-burger active" : "header__burger js-header-burger" }>
                        <span></span>
                    </button> */}
                    <a className="header__logo" href="./">
                        <img className="header__pic" src="logo/logoEdited.png" alt="" />
                    </a>
                    <div className={ sideBarHandler ? "header__wrap js-header-wrap visible" : "header__wrap js-header-wrap" }>
                        <nav className="header__nav">
                            <a className="header__item" href="./">Home</a>
                            <div className="header__item js-header-item">
                                <a className="header__head" href="#">
                                    Services
                                    <svg className="icon icon-arrow-down">
                                        <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                                    </svg>
                                </a>
                                <div className="header__body js-header-body">
                                    <div className="header__center center header-dropdown-body">
                                        <div className="header__row row">
                                            <div className="col-lg-4 col-md-4 col-sm-4" >
                                                <div className="header__category">
                                                    <a href="#services" >Web Solutions</a>
                                                </div>
                                                <div className="row" >
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/ror1.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">Ruby on Rails Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/react_3.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">React / Next.js Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/vuejs.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">Vue.js / NuxtJs Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/node_2.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">Node.js Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/laravel.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">Laravel Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/shopify_icon.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">Shopify</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/shopify_icon.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">Wordpress</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <Slider {...servicesSettings}>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/ror1.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Ruby on Rails Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/react_3.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">React / Next.js Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/vuejs.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Vue.js / NuxtJs Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/node_2.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Node.js Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/laravel.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Laravel Development</div>
                                                                </div>
                                                            </div>
                                                        </div> */}

                                                        {/* <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/computer-front-color.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Web App Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/mobile-front-color.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Mobile App Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/bag-front-color.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">E - commerce</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/blockchain.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">BlockChain/Cryptocurrency</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/crm.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">CRM/CMS/ERP Systems</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/digitalMarketing.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Digital Marketing</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/smart_gadgets.png" alt="" />
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
                                                <div className="header__category"><a href="#layouts" >Mobile Solutions</a></div>
                                                <div className="row" >
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/android_2.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">Android App Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/ios.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">IOS App Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/react_native.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">React Native Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/flutter.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">Flutter</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/flutter.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">Ionic</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <Slider {...technologiesSettings}>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/android_2.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Android App Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/ios.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">IOS App Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/android_2.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">React Native Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/flutter.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Flutter</div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        {/* <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/javascript.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Javascript</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/tizen-512.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Tizen</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/php1.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">PHP</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/python_2.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Python</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/FIGMA.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Figma</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/MongoDB.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">MongoDB</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/swift.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Swift</div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    {/* </Slider> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4" >
                                                <div className="header__category">Miscellaneous</div>
                                                <div className="row" >
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/content-management-system.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">UI / UX</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/bag-front-color.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">E-commerce Solutions</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/notebook-iso-color.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">Content Management System</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/customer-relationship-management.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">Customer Relationship Management</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/digital-marketing.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">Digital Marketing (PPC, SEO, ORM)</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="images/deployment-host-management.png" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-11 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">Deployment and Host Management</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <Slider {...portfolioSettings}>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="img/clock.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">UI / UX</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/bag-front-color.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">E-commerce Solutions</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="img/clock.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Content Management System</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="img/clock.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Customer Relationship Management</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="img/clock.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Internet Marketing</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="img/clock.png" alt="" />
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
                            <a className="header__item" href="./#portfolio">Portfolio</a>
                            <a className="header__item" href="./aboutUs">About Us</a>
                        </nav>
                        <div className="header__photo">
                            <img className="header__pic" src="img/menu-pic.png" alt="" />
                        </div>
                    </div>
                    <div className="header__search js-header-search" >
                        {/* Social Media Icons */}
                        {/* <a className="header__open" href="https://www.facebook.com/CodeGarageTech" >
                            <img className="icon icon-header-img" src="/images/fb35.png" alt="" />
                        </a>
                        <a className="header__open" href="https://twitter.com/CodeGarageTech" >
                            <img className="icon icon-header-img" src="/images/tw35.png" alt="" />
                        </a>
                        <a className="header__open" href="https://www.linkedin.com/company/codegaragetech" >
                            <img className="icon icon-header-img" src="/images/lin35.png" alt="" />
                        </a>
                        <a className="header__open" href="https://www.instagram.com/codegaragetech/" >
                            <img className="icon icon-header-img" src="/images/instagram.png" alt="" />
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
                        <a className="header__btn btn btn_pink" target="_blank"  >
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
