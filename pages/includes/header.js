import React, { useEffect, useState } from 'react'
import Head from 'next/head'

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

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
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
                            <a className="header__item" href="#">About Us</a>
                            <a className="header__item" href="./contact">Contact Us</a>
                            <a className="header__item" href="#">Careers</a>
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
                                                <div className="header__category">Services</div>
                                                <div className="header__menu">
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                            <img className="header__pic" src="/images/webD1.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Web App Development</div>
                                                            <div className="header__text">Smart automation system</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                            {/* <img className="header__pic" src="img/camera.png" alt="" /> */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 252 252" style={{fill: "#2980b9"}}>
                                                                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
                                                                    <path d="M0,252v-252h252v252z" fill="none"></path>
                                                                    <g>
                                                                        <g id="surface1">
                                                                            <path d="M27.5625,11.8125h86.625c13.04297,0 23.625,10.58203 23.625,23.625v181.125c0,13.04297 -10.58203,23.625 -23.625,23.625h-86.625c-13.04297,0 -23.625,-10.58203 -23.625,-23.625v-181.125c0,-13.04297 10.58203,-23.625 23.625,-23.625z" fill="#acb7d0"></path>
                                                                            <path d="M3.9375,200.8125h133.875v15.75c0,13.04297 -10.58203,23.625 -23.625,23.625h-86.625c-13.04297,0 -23.625,-10.58203 -23.625,-23.625z" fill="#acb7d0"></path>
                                                                            <path d="M3.9375,43.3125h133.875v157.5h-133.875z" fill="#c5e4fa"></path>
                                                                            <path d="M66.9375,200.8125l72.36694,-72.33618l-1.49194,-57.60132l-129.9375,129.9375z" fill="#e3f2ff"></path>
                                                                            <path d="M137.8125,43.3125v11.8125l-133.875,133.875v-23.625l122.0625,-122.0625z" fill="#e3f2ff"></path>
                                                                            <path d="M110.25,43.3125l-106.3125,106.3125v-19.6875l86.625,-86.625z" fill="#e3f2ff"></path>
                                                                            <path d="M125.56934,133.29053l-4.69116,-4.69117c-6.64453,-6.65991 -6.64453,-17.44189 0,-24.1018c5.90625,-5.89087 15.19629,-6.65992 21.97925,-1.81494l7.875,5.52173c-2.9685,-2.95312 -4.62964,-6.96753 -4.62964,-11.15112c0,-4.16821 1.66113,-8.18262 4.62964,-11.13574l-0.7998,0.78442c5.29102,-5.21411 13.48901,-6.0293 19.6875,-1.96875l5.95239,3.9375l1.61499,1.89185c-2.67627,-2.66089 -4.16821,-6.29077 -4.16821,-10.05908c0,-3.76831 1.49195,-7.3982 4.16821,-10.05908c5.35254,-5.36792 13.93506,-5.72168 19.6875,-0.78442l31.85376,27.5625c10.72046,9.30542 17.08814,22.64063 17.5957,36.82178c0.50757,14.18115 -4.89112,27.93164 -14.91944,37.99072l-33.3457,33.3457c-10.64355,10.61279 -25.70141,15.51929 -40.55933,13.22754l-80.87256,-12.75073c-0.83057,-0.13843 -1.58423,-0.52295 -2.1687,-1.10742c-4.27588,-4.27588 -5.86011,-10.55127 -4.15283,-16.34985c1.72266,-5.79858 6.47534,-10.18213 12.38159,-11.44336l34.45313,-7.64429l-69.21387,-69.45996c-6.13696,-6.15234 -6.13696,-16.10376 0,-22.24072c2.95313,-2.96851 6.95215,-4.62964 11.13574,-4.62964c4.18359,0 8.18262,1.66113 11.13574,4.62964l49.14185,49.0957" fill="#dda549"></path>
                                                                            <path d="M174.54199,71.15186l-2.63013,13.5813l-12.44311,-2.04565l-8.45947,6.45996l-4.13745,15.07324l-12.32007,-2.55322l-12.48926,0.70752l-10.42822,16.61133l16.73437,16.85742l48.81885,-39.60571c15.65772,-12.84301 38.48291,-11.72021 52.80249,2.59937l-11.15112,-11.15113c-14.08887,-14.28882 -28.62378,-29.37744 -44.29687,-16.53442z" fill="#dda549"></path>
                                                                            <path d="M163.09863,204.31934l15.27319,15.27319l-97.45312,-13.9043c-1.73804,-1.73804 -2.21484,-4.38354 -1.19971,-6.62915c1.01513,-2.23023 3.30689,-3.62988 5.76782,-3.47608l67.44507,4.19897c3.82983,0.23071 7.42896,1.8457 10.16675,4.53735z" fill="#dda549"></path>
                                                                            <path d="M53.15625,145.6875l4.87573,8.90552l8.90552,4.87573l-8.90552,4.87573l-4.87573,8.90552l-4.87573,-8.90552l-8.90552,-4.87573l8.90552,-4.87573z" fill="#fff8f8"></path>
                                                                            <path d="M29.22363,95.13061l3.33765,6.18311l6.18311,3.33765l-6.18311,3.39917l-3.33765,6.13696l-3.39917,-6.13696l-6.13696,-3.39917l6.13696,-3.33765z" fill="#fff8f8"></path>
                                                                            <path d="M81.30322,53.94067l2.29175,4.21435l4.21435,2.29175l-4.21435,2.32251l-2.29175,4.16821l-2.27637,-4.16821l-4.21436,-2.32251l4.21436,-2.29175z" fill="#fff8f8"></path>
                                                                            <path d="M27.5625,70.875c-2.1687,0 -3.9375,1.7688 -3.9375,3.9375v7.875c0,2.1687 1.7688,3.9375 3.9375,3.9375c2.1687,0 3.9375,-1.7688 3.9375,-3.9375v-7.875c0,-2.1687 -1.7688,-3.9375 -3.9375,-3.9375z" fill="#8d6c9f"></path>
                                                                            <path d="M94.5,70.875c-2.1687,0 -3.9375,1.7688 -3.9375,3.9375v7.875c0,2.1687 1.7688,3.9375 3.9375,3.9375c2.1687,0 3.9375,-1.7688 3.9375,-3.9375v-7.875c0,-2.1687 -1.7688,-3.9375 -3.9375,-3.9375z" fill="#8d6c9f"></path>
                                                                            <path d="M114.1875,70.875c-2.1687,0 -3.9375,1.7688 -3.9375,3.9375v7.875c0,2.1687 1.7688,3.9375 3.9375,3.9375c2.1687,0 3.9375,-1.7688 3.9375,-3.9375v-7.875c0,-2.1687 -1.7688,-3.9375 -3.9375,-3.9375z" fill="#8d6c9f"></path>
                                                                            <path d="M78.75,220.5c0,4.35278 -3.52222,7.875 -7.875,7.875c-4.35278,0 -7.875,-3.52222 -7.875,-7.875c0,-4.35278 3.52222,-7.875 7.875,-7.875c4.35278,0 7.875,3.52222 7.875,7.875z" fill="#8d6c9f"></path>
                                                                            <path d="M74.8125,31.5h15.75c2.1687,0 3.9375,-1.7688 3.9375,-3.9375c0,-2.1687 -1.7688,-3.9375 -3.9375,-3.9375h-15.75c-2.1687,0 -3.9375,1.7688 -3.9375,3.9375c0,2.1687 1.7688,3.9375 3.9375,3.9375z" fill="#8d6c9f"></path>
                                                                            <path d="M51.1875,31.5h7.875c2.1687,0 3.9375,-1.7688 3.9375,-3.9375c0,-2.1687 -1.7688,-3.9375 -3.9375,-3.9375h-7.875c-2.1687,0 -3.9375,1.7688 -3.9375,3.9375c0,2.1687 1.7688,3.9375 3.9375,3.9375z" fill="#8d6c9f"></path>
                                                                            <path d="M231.45117,94.14624l-31.8999,-27.5625c-7.33667,-6.15234 -18.14941,-5.7063 -24.96314,1.03052c-3.29151,3.29151 -5.18335,7.73657 -5.27564,12.39697c-6.84448,-3.18384 -14.90405,-2.1687 -20.74878,2.59936c-0.26147,0.15381 -0.49219,0.33838 -0.70752,0.55371l-0.78442,0.78442c-0.21533,0.21533 -0.3999,0.44604 -0.55371,0.70752c-2.99927,3.67603 -4.55273,8.30566 -4.41431,13.02759h-0.30762v-62.24634c0,-15.22705 -12.35083,-27.5625 -27.5625,-27.5625h-86.67114c-15.22705,0 -27.5625,12.33545 -27.5625,27.5625v181.125c0,15.22705 12.33545,27.5625 27.5625,27.5625h86.625c13.85815,0 25.56299,-10.30517 27.33179,-24.05566l15.2732,2.39941c16.11914,2.50708 32.46899,-2.8147 44.02002,-14.33496l33.3457,-33.3457c10.82813,-10.82812 16.65747,-25.65527 16.11914,-40.94385c-0.53833,-15.30396 -7.42896,-29.66968 -18.99536,-39.698zM118.125,101.62134c-3.30689,3.2915 -5.41406,7.58276 -5.98315,12.2124l-39.14429,-39.02124c-7.69043,-7.70581 -20.16431,-7.72119 -27.87012,-0.04614c-7.70581,7.69043 -7.73657,20.17969 -0.04614,27.8855l60.8313,61.10815l3.27612,3.27612l-27.5625,5.98315c-7.33667,1.52271 -13.22754,6.99829 -15.27319,14.21191c-0.86133,3.1377 -0.969,6.45996 -0.27686,9.6438h-58.20117v-110.25c2.1687,0 3.9375,-1.7688 3.9375,-3.9375v-7.875c0,-2.1687 -1.7688,-3.9375 -3.9375,-3.9375v-23.625h126v23.625c-2.1687,0 -3.9375,1.7688 -3.9375,3.9375v7.875c0,2.1687 1.7688,3.9375 3.9375,3.9375v9.01319c-5.86011,-0.30762 -11.58179,1.87646 -15.75,5.98315zM27.5625,15.75h86.625c10.87427,0 19.6875,8.81323 19.6875,19.6875v3.9375h-126v-3.9375c0,-10.87427 8.81323,-19.6875 19.6875,-19.6875zM114.1875,236.25h-86.625c-10.87427,0 -19.6875,-8.81323 -19.6875,-19.6875v-11.8125h61.50806c0.67676,0.99975 1.4458,1.93799 2.27637,2.79932c1.18433,1.16895 2.69165,1.93799 4.3374,2.19946l57.60132,9.09009c-1.15357,9.87451 -9.47461,17.33423 -19.41065,17.41113zM228.72876,169.3125l-33.3457,33.3457c-9.79761,9.79761 -23.68652,14.31958 -37.37549,12.16626l-80.74951,-12.87378c-3.24536,-3.24536 -4.46045,-8.01343 -3.16846,-12.41235c1.30738,-4.39893 4.9065,-7.75195 9.38233,-8.72095l32.40747,-7.05982l6.85986,6.85987c1.55347,1.33814 3.87598,1.24585 5.33716,-0.21533c1.46118,-1.4458 1.53809,-3.78369 0.19995,-5.33716l-8.49023,-8.50562l-69.1062,-69.5061c-4.61426,-4.61426 -4.59888,-12.10474 0.01538,-16.70362c4.61426,-4.61426 12.10474,-4.59888 16.719,0.01538l48.58814,48.54199c0.64599,0.89209 1.35352,1.72266 2.12256,2.4917l4.64502,4.64502c1.53809,1.52271 4.04516,1.52271 5.56787,-0.01538c1.53809,-1.55347 1.52271,-4.04517 -0.01538,-5.58325l-4.64502,-4.44507l-0.78442,-0.86133c-0.19995,-0.38452 -0.44605,-0.7229 -0.75367,-1.03052c-3.44531,-5.18335 -2.78393,-12.05859 1.58423,-16.50366c4.50659,-4.55273 11.67407,-5.15259 16.88819,-1.41504l7.875,5.52173c1.73804,1.39966 4.27588,1.1228 5.69092,-0.61523c1.39966,-1.73804 1.1228,-4.29126 -0.61523,-5.69092c-4.49121,-3.98364 -5.02954,-10.79736 -1.24585,-15.45776c3.78369,-4.6604 10.55127,-5.52173 15.38086,-1.93799l5.62939,3.9375l1.41504,1.41504c0.969,1.1228 2.47632,1.61499 3.92212,1.26123c1.43042,-0.33838 2.55322,-1.46118 2.90698,-2.90698c0.33838,-1.43042 -0.15381,-2.95312 -1.27661,-3.90674c-4.01441,-4.0144 -4.01441,-10.52051 0,-14.53491c3.87598,-3.8606 10.05908,-4.12207 14.25805,-0.63061l31.85376,27.5625c9.88989,8.61328 15.75,20.94873 16.19604,34.05322c0.44605,13.10449 -4.58349,25.7937 -13.87353,35.05298z" fill="#8d6c9f"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Mobile App Development</div>
                                                            <div className="header__text">Work with various media formats</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                            <img className="header__pic" src="/images/shop1.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">E - commerce</div>
                                                            <div className="header__text">Workspace reimagined</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
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
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="header__col">
                                                <div className="header__category">Technologies</div>
                                                <div className="header__menu">
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                        <img className="header__pic" src="img/chatbox.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                        <div className="header__info">Ruby on Rails</div>
                                                        <div className="header__text">24/7 Live Support</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                        <img className="header__pic" src="img/fill.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                        <div className="header__info">Node.js</div>
                                                        <div className="header__text">Advanced color picker</div>
                                                        </div>
                                                    </a>
                                                    <a className="header__box" href="#">
                                                        <div className="header__preview">
                                                        <img className="header__pic" src="img/fill.png" alt="" />
                                                        </div>
                                                        <div className="header__deetails">
                                                        <div className="header__info">Android</div>
                                                        <div className="header__text">Advanced color picker</div>
                                                        </div>
                                                    </a>
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
                                                </div>
                                            </div>
                                            <div className="header__col">
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
                    <div className="header__search js-header-search" >
                        <a className="header__open" href="https://www.facebook.com/CodeGarageTech" >
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
                        </a>
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
                    {/* <a className="header__btn btn btn_pink" href='./login' >Get Started</a> */}
                </div>
                <div className="header__bg js-header-bg"></div>
            </div>
        </>
    )
}

export default Header
