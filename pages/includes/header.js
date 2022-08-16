import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Slider from "react-slick";

const Header = () => {
    const [headerSearchBar, setHeaderSearchBar] = useState(false);
    const [sideBarHandler, setSideBarHandler] = useState(false);

    const headerSearch = () => {
        const searchBarShowHide = headerSearchBar ? false : true;
        setHeaderSearchBar(searchBarShowHide);
    }

    const handleSidebar = () => {
        sideBarHandler ? setSideBarHandler(false) : setSideBarHandler(true);
    }

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        vertical: true,
        verticalSwiping: true
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
                    <button onClick={() => handleSidebar()} className={ sideBarHandler ? "header__burger js-header-burger active" : "header__burger js-header-burger" }>
                        <span></span>
                    </button>
                    <a className="header__logo" href="./">
                        <img className="header__pic" src="logo/logoEdited.png" alt="" />
                    </a>
                    <div className={ sideBarHandler ? "header__wrap js-header-wrap visible" : "header__wrap js-header-wrap" }>
                        <nav className="header__nav">
                            <a className="header__item" href="./">Home</a>
                            <div className="header__item js-header-item">
                                <a className="header__head js-header-head" href="#">
                                    Solutions
                                    <svg className="icon icon-arrow-down">
                                        <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                                    </svg>
                                </a>
                                <div className="header__body js-header-body">
                                    <div className="header__center center">
                                        <div className="header__row">
                                            <div className="col-lg-4" style={{borderRight: "1px solid rgba(153, 159, 174, 0.2)", paddingLeft: "62px", paddingRight: "30px"}} >
                                                <div className="header__category">Services</div>
                                                <div className="row" >
                                                    <Slider {...settings}>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/computer-front-color.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Web App Development</div>
                                                                    <div className="header__text">Smart automation system</div>
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
                                                                    <div className="header__text">Work with various media formats</div>
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
                                                                    <div className="header__text">Workspace reimagined</div>
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
                                                                    <div className="header__text">Workspace reimagined</div>
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
                                                                    <div className="header__text">Workspace reimagined</div>
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
                                                                    <div className="header__text">Workspace reimagined</div>
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
                                                                    <div className="header__text">Workspace reimagined</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </div>
                                            <div className="col-lg-4" style={{borderRight: "1px solid rgba(153, 159, 174, 0.2)", paddingLeft: "62px", paddingRight: "30px"}} >
                                                <div className="header__category">Technologies</div>
                                                <div className="row" >
                                                    <Slider {...settings}>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/ror1.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Ruby on Rails</div>
                                                                    <div className="header__text">24/7 Live Support</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/node.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Node.js</div>
                                                                    <div className="header__text">Advanced color picker</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/android_2.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Android</div>
                                                                    <div className="header__text">Advanced color picker</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/node_2.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Javascript</div>
                                                                    <div className="header__text">Advanced color picker</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/react_3.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">React</div>
                                                                    <div className="header__text">Advanced color picker</div>
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
                                                                    <div className="header__text">Advanced color picker</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="images/php_2.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">PHP</div>
                                                                    <div className="header__text">Advanced color picker</div>
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
                                                                    <div className="header__text">Advanced color picker</div>
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
                                                                    <div className="header__text">Advanced color picker</div>
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
                                                                    <div className="header__text">Advanced color picker</div>
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
                                                                    <div className="header__text">Advanced color picker</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </div>
                                            <div className="col-lg-4" style={{paddingLeft: "62px", paddingRight: "30px"}} >
                                                <div className="header__category">Portfolio</div>
                                                <div className="row" >
                                                    <Slider {...settings}>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="img/clock.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Deadline</div>
                                                                    <div className="header__text">See who’s behind the magic</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="img/clock.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Deadline</div>
                                                                    <div className="header__text">See who’s behind the magic</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="img/clock.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Deadline</div>
                                                                    <div className="header__text">See who’s behind the magic</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="img/clock.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Deadline</div>
                                                                    <div className="header__text">See who’s behind the magic</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </div>

                                            {/* <div className="header__col">
                                                <div className="header__category">Services</div>
                                                <div className="header__menu">
                                                    <div className="row" >
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-2" >
                                                                    <img className="header-solutions-icon" src="images/computer-front-color.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-10" >
                                                                    <div className="header__info">Web App Development</div>
                                                                    <div className="header__text">Smart automation system</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-2" >
                                                                    <img className="header-solutions-icon" src="images/mobile-front-color.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-10" >
                                                                    <div className="header__info">Mobile App Development</div>
                                                                    <div className="header__text">Work with various media formats</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-2" >
                                                                    <img className="header-solutions-icon" src="images/bag-front-color.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-10" >
                                                                    <div className="header__info">E - commerce</div>
                                                                    <div className="header__text">Workspace reimagined</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    {/* <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                            <img className="header__pic" src="/images/CRP.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">BlockChain/Cryptocurrency</div>
                                                            <div className="header__text">Workspace reimagined</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                            <img className="header__pic" src="/images/crm-erp.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">CRM/CMS/ERP Systems</div>
                                                            <div className="header__text">Workspace reimagined</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                            <img className="header__pic" src="/images/DM3.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Digital Marketing</div>
                                                            <div className="header__text">Workspace reimagined</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                            <img className="header__pic" src="/images/SGT.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Smart Gadget Apps</div>
                                                            <div className="header__text">Workspace reimagined</div>
                                                        </div>
                                                    </a> */}
                                                {/* </div>
                                            </div> */}
                                            {/* <div className="header__col">
                                                <div className="header__category">Technologies</div>
                                                <div className="header__menu">
                                                    <div className="row" >
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-2" >
                                                                    <img className="header-solutions-icon" src="images/ror1.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-10" >
                                                                    <div className="header__info">Ruby on Rails</div>
                                                                    <div className="header__text">24/7 Live Support</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-2" >
                                                                    <img className="header-solutions-icon" src="images/node_2.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-10" >
                                                                    <div className="header__info">Node.js</div>
                                                                    <div className="header__text">Advanced color picker</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-2" >
                                                                    <img className="header-solutions-icon" src="images/android_2.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-10" >
                                                                    <div className="header__info">Android</div>
                                                                    <div className="header__text">Advanced color picker</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                        <img className="header__pic" src="img/fill.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                        <div className="header__info">Javascript</div>
                                                        <div className="header__text">Advanced color picker</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                        <img className="header__pic" src="img/fill.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                        <div className="header__info">React</div>
                                                        <div className="header__text">Advanced color picker</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                        <img className="header__pic" src="img/fill.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                        <div className="header__info">Tizen</div>
                                                        <div className="header__text">Advanced color picker</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                        <img className="header__pic" src="img/fill.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                        <div className="header__info">PHP</div>
                                                        <div className="header__text">Advanced color picker</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                        <img className="header__pic" src="img/fill.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                        <div className="header__info">Python</div>
                                                        <div className="header__text">Advanced color picker</div>
                                                        </div>
                                                    </a>
                                                {/* </div>
                                            </div> */}
                                            {/* <div className="header__col">
                                                <div className="header__category">Features</div>
                                                <div className="header__menu">
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                            <img className="header__pic" src="img/clock.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Deadline</div>
                                                            <div className="header__text">See who’s behind the magic</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                            <img className="header__pic" src="img/bell-flat.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Daily Updates</div>
                                                            <div className="header__text">What we’re working on</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                            <img className="header__pic" src="img/bell-flat.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Analysis</div>
                                                            <div className="header__text">What we’re working on</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="header__item" href="#">Career</a>
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
                    <a className="header__btn btn btn_pink" href='./contact' >Get in Touch</a>
                </div>
                <div className="header__bg js-header-bg"></div>
            </div>
        </>
    )
}

export default Header
