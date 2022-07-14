import React, { useEffect, useState } from 'react'
import Head from 'next/head'

const Header = () => {
    const [headerSearchBar, setHeaderSearchBar] = useState(false);

    const headerSearch = () => {
        const searchBarShowHide = headerSearchBar ? false : true;
        setHeaderSearchBar(searchBarShowHide);
    }

    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <title>CodeGarageTech</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
                <meta name="format-detection" content="telephone=no"/>
                <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png"/>
                <link rel="manifest" href="img/site.webmanifest"/>
                <link rel="mask-icon" href="img/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <meta name="description" content=""/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content=""/>
                <meta name="twitter:title" content=""/>
                <meta name="twitter:description" content=""/>
                <meta name="twitter:creator" content=""/>
                <meta name="twitter:image" content=""/>
                <meta property="og:title" content=""/>
                <meta property="og:type" content="Article"/>
                <meta property="og:url" content=""/>
                <meta property="og:image" content=""/>
                <meta property="og:description" content=""/>
                <meta property="og:site_name" content=""/>
                <meta property="fb:admins" content=""/>
            </Head>
            <div className="header js-header" id="header">
                <div className="header__center center">
                    <button className="header__burger js-header-burger">
                        <span></span>
                    </button>
                    <a className="header__logo" href="#">
                        <img className="header__pic" src="/img/logo.svg" alt="" />
                    </a>
                    <div className="header__wrap js-header-wrap">
                        <nav className="header__nav">
                            <a className="header__item" href="#">Features</a>
                            <a className="header__item" href="#">Pricing</a>
                            <a className="header__item" href="#">Tours</a>
                            <div className="header__item js-header-item">
                                <a className="header__head js-header-head" href="#">
                                    Explore
                                    <svg className="icon icon-arrow-down">
                                        <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                                    </svg>
                                </a>
                                <div className="header__body js-header-body">
                                    <div className="header__center center">
                                        <div className="header__row">
                                            <div className="header__col">
                                                <div className="header__category">Features</div>
                                                <div className="header__menu">
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                            <img className="header__pic" src="img/cup.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Collab Assistant</div>
                                                            <div className="header__text">Smart automation system</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                            <img className="header__pic" src="img/camera.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Advanced Importer</div>
                                                            <div className="header__text">Work with various media formats</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                            <img className="header__pic" src="img/calendar.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Product Management</div>
                                                            <div className="header__text">Workspace reimagined</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="header__col">
                                                <div className="header__category">Features</div>
                                                <div className="header__menu">
                                                <a className="header__box" href="#">
                                                    <div className="header__preview">
                                                    <img className="header__pic" src="img/chatbox.png" alt="" />
                                                    </div>
                                                    <div className="header__deetails">
                                                    <div className="header__info">Support</div>
                                                    <div className="header__text">24/7 Live Support</div>
                                                    </div>
                                                </a>
                                                <a className="header__box" href="#">
                                                    <div className="header__preview">
                                                    <img className="header__pic" src="img/fill.png" alt="" />
                                                    </div>
                                                    <div className="header__deetails">
                                                    <div className="header__info">Color Picker</div>
                                                    <div className="header__text">Advanced color picker</div>
                                                    </div>
                                                </a>
                                                </div>
                                            </div>
                                            <div className="header__col">
                                                <div className="header__category">Company</div>
                                                <div className="header__menu">
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                            <img className="header__pic" src="img/clock.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Collab Team</div>
                                                            <div className="header__text">See who’s behind the magic</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                            <img className="header__pic" src="img/bell-flat.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Collab Design</div>
                                                            <div className="header__text">What we’re working on</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="header__photo">
                            <img className="header__pic" src="img/menu-pic.png" alt="" />
                        </div>
                    </div>
                    <div className={ headerSearchBar ? "header__search js-header-search active" : "header__search js-header-search" }>
                        <button onClick={() => headerSearch()} className="header__open js-header-open">
                            <svg className="icon icon-search">
                                <use xlinkHref="img/sprite.svg#icon-search"></use>
                            </svg>
                        </button>
                        <div className="header__field">
                            <input className="header__input" type="text" placeholder="Search ..." />
                        </div>
                    </div>
                    <a className="header__btn btn btn_pink" href="login.html">Get Started</a>
                </div>
                <div className="header__bg js-header-bg"></div>
            </div>
        </>
    )
}

export default Header
