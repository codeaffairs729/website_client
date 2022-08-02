import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

const Features = () => {
    const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
    const [totalslides, setTotalSlides] = useState(0);
    const [wadMoreLess, setWadMoreLess] = useState(false);
    const [bcMoreLess, setBcMoreLess] = useState(false);
    const [ccesMoreLess, setCcesMoreLess] = useState(false);
    const [dmMoreLess, setDmMoreLess] = useState(false);

    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <button type="button" className="slick-prev"><svg className="icon icon-arrow-prev"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="img/sprite.svg#icon-arrow-prev"></use></svg></button>,
        nextArrow: <button type="button" className="slick-next"><svg className="icon icon-arrow-next"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="img/sprite.svg#icon-arrow-next"></use></svg></button>,
        dots: false,
        infinite: false,
        speed: 600,
        afterChange: current => setCurrentSlideNumber(current),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const wadSeeMoreLess = (e) => {
        e == 1 ? setWadMoreLess(true) : setWadMoreLess(false);
    }

    const bcSeeMoreLess = (e) => {
        e == 1 ? setBcMoreLess(true) : setBcMoreLess(false);
    }

    const ccesSeeMoreLess = (e) => {
        e == 1 ? setCcesMoreLess(true) : setCcesMoreLess(false);
    }

    const dmSeeMoreLess = (e) => {
        e == 1 ? setDmMoreLess(true) : setDmMoreLess(false);
    }

    return (
        <>
            <div id="features" className="features js-features">
                <div className="features__center center">
                    <div className="features__head" data-aos="animation-scale-y">
                        <div className="features__stage stage">Our Services</div>
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
                                                <img className="features__pic" src="/images/webD1.png" alt="" />
                                            </div>
                                            <div className="features__category">Web App Development</div>
                                            <div className="features__text">
                                                <p>We develop User friendly and reliable applications that helps to solve the problems in almost every field.</p>
                                                <p>Related Expertise:
                                                    <span style={{color: "#71caaf"}}>Ruby on Rails,SAAS, Python/Django/Flask, ReactJs/ES6,Web Servers</span>
                                                    (Nginx/Apache),
                                                    <span style={{color: "#71caaf"}}>Mail Servers</span>
                                                    <span style={ wadMoreLess ? {display: "none"} : {display: ""} } id="service1Dots">...
                                                        <a href="javascript:void(0)" onClick={() => wadSeeMoreLess(1)} style={{color: "#71caaf"}}>
                                                            <b>more</b>
                                                        </a>
                                                    </span>
                                                    <span id="service1" style={ wadMoreLess ? {display: ""} : {display: "none"} } >
                                                        (Sendgrid/Mandrill/Mailgun),
                                                        <span style={{color: "#71caaf"}}>MySQL/PSQL/sqlite3</span>
                                                        (SQL dbs),
                                                        <span style={{color: "#71caaf"}}>MongoDB/Redis</span>
                                                        (No SQL dbs), API Development,
                                                        <span style={{color: "#71caaf"}}>Heroku/Amazon S3/Digital Ocean</span>
                                                        (Hosting),
                                                        <span style={{color: "#71caaf"}}>Github/Bitbucket/Gitlab</span>(Git), DevOps
                                                        <br/>
                                                        <a href="javascript:void(0)" onClick={() => wadSeeMoreLess(0)} style={{color: "#71caaf"}}>
                                                            <b>less</b>
                                                        </a>
                                                    </span>
                                                </p>
                                            </div>
                                            {/* <a className="features__link" href="#">Find out more</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide" data-aos="animation-scale-y" data-aos-delay="200">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                {/* <img className="features__pic" src="img/calendar.png" alt="" /> */}
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
                                            <div className="features__category">Mobile App Development</div>
                                            <div className="features__text">
                                                <p>Not just mobile apps, we build user-friendly Experiances.Apps that resolve real-life problems, that got featured over store, and generate revenue.</p>
                                                <p> Related Expertise: <span style={{color: "#dda549"}}>Native & Hybrid Apps, iPhone, Swift, Go Lang, React-Native, Ionic, Android, Mobile Games</span></p>
                                            </div>
                                            {/* <a className="features__link" href="#">Find out more</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="/images/shop1.png" alt=""/>
                                            </div>
                                            <div className="features__category">E - commerce</div>
                                            <div className="features__text">
                                                <p>Do your business on E-commerce platforms and allow your consumers/connected traders to buy things online. Let us provide you best related solutions that will bost up your business.</p>
                                                <p>Related Expertise:
                                                    <span style={{color: "#4dac87"}}>Spree Commerce, Magento, Shopify, Sharetribe, WooCommerce</span>
                                                </p>
                                            </div>
                                            {/* <a className="features__link" href="#">Find out more</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="/images/CRP.png" alt="" />
                                            </div>
                                            <div className="features__category">BlockChain/Cryptocurrency</div>
                                            <div className="features__text">
                                                <p>A Blockchain is secured by system design and is an example of a distributed computing system.It is suitable for the identity management transaction processing. Yes, We have expertise to develop and take care of secure distributed system.</p>
                                                <p>Related Expertise:
                                                    <span style={{color: "#fce9bc"}}>Minning, Block-chain,</span>
                                                    <span style={ bcMoreLess ? {display: "none"} : {display: ""} } id="service2Dots">...
                                                        <a href="javascript:void(0)" onClick={() => bcSeeMoreLess(1)} style={{color: "#fce9bc"}}>
                                                            <b>more</b>
                                                        </a>
                                                    </span>
                                                    <span id="service2" style={ bcMoreLess ? {display: ""} : {display: "none"} } >
                                                        <span style={{color: "#fce9bc"}}>Distributed and central ledger, Fork, Halving, Hashrate, Multisig, Mining, P2P</span>
                                                        (peer to peer),
                                                        <span style={{color: "#fce9bc"}}>POW</span>
                                                        (proof of work),
                                                        <span style={{color: "#fce9bc"}}>POS</span>
                                                        (proof of stake),
                                                        <span style={{color: "#fce9bc"}}>Public/Private keys, Smart contract,Smrat Signature</span>
                                                        <br/>
                                                        <a href="javascript:void(0)" onClick={() => bcSeeMoreLess(0)} style={{color: "#fce9bc"}}>
                                                            <b>less</b>
                                                        </a>
                                                    </span>
                                                </p>
                                            </div>
                                            {/* <a className="features__link" href="#">Find out more</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="/images/crm-erp.png" alt="" />
                                            </div>
                                            <div className="features__category">CRM/CMS/ERP Systems</div>
                                            <div className="features__text">
                                                <p> These kind of systems are of same standard and functionalities in almost all the industires. Though we prefer it platform based but also we develop custom systems as per your requirements. </p>
                                                <p>Related Expertise:
                                                    <span style={{color: "#ed7899"}}>Radiant CMS,Adva CMS,Casein CMS,Locomotive CMS, django CMS, Spina</span>
                                                    <span style={ ccesMoreLess ? {display: "none"} : {display: ""} } id="service3Dots">...
                                                        <a href="javascript:void(0)" onClick={() => ccesSeeMoreLess(1)} style={{color: "#ed7899"}}>
                                                            <b>more</b>
                                                        </a>
                                                    </span>
                                                    <span id="service3" style={ ccesMoreLess ? {display: ""} : {display: "none"} } >
                                                        <span style={{color: "#ed7899"}}> CMS,Fat Free CRM, Wordpress, Redmine, bonsaiERP, Accounting Platform, Payroll Development, Zoho/Salesfore CRM , Point Of Sale Systems, Corporate CRM/ERP Systems</span>
                                                        <br/>
                                                        <a href="javascript:void(0)" onClick={() => ccesSeeMoreLess(0)} style={{color: "#ed7899"}}>
                                                            <b>less</b>
                                                        </a>
                                                    </span>
                                                </p>
                                            </div>
                                            {/* <a className="features__link" href="#">Find out more</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="/images/DM3.png" alt="" />
                                            </div>
                                            <div className="features__category">Digital Marketing</div>
                                            <div className="features__text">
                                                <p>We don't dimension on any quality of value. Our unparalleled <span style={{color: "#f8e390"}}>Search Engine Optimization</span> administrations will without a doubt get you noticed globally! </p>
                                                <p> Related Expertise:
                                                    <span style={{color: "#f8e390"}}> SEO, SMM, ORM, Leads Generation, Ads Reveniew, Facebook Leads</span>
                                                    <span style={ dmMoreLess ? {display: "none"} : {display: ""} } id="service4Dots">...
                                                        <a href="javascript:void(0)" onClick={() => dmSeeMoreLess(1)} style={{color: "#f8e390"}}>
                                                            <b>more</b>
                                                        </a>
                                                    </span>
                                                    <span id="service4" style={ dmMoreLess ? {display: ""} : {display: "none"} } >
                                                        <span style={{color: "#f8e390"}}> Generation, Keywords Resaerch, Website Analysis, Link Building, Youtube Video Ranking</span>
                                                        <br/>
                                                        <a href="javascript:void(0)" onClick={() => dmSeeMoreLess(0)} style={{color: "#f8e390"}}>
                                                            <b>less</b>
                                                        </a>
                                                    </span>
                                                </p>
                                            </div>
                                            {/* <a className="features__link" href="#">Find out more</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="/images/SGT.png" alt="" />
                                            </div>
                                            <div className="features__category">Smart Gadget Apps</div>
                                            <div className="features__text">
                                                <p>
                                                    <span style={{color: "#ed7899"}}>
                                                        Smart TV/ apps
                                                    </span>
                                                    weather it is for exercising, location puproses, Tracking the activities & schedule, Medical reasons, Entertainment or others,From personal to industrial use we are here to develop apps on best level.
                                                </p>
                                                <p> Related Expertise:
                                                    <span style={{color: "#ed7899"}}>Tizen, Android, IOS, SMIL, XML</span>
                                                </p>
                                            </div>
                                            {/* <a className="features__link" href="#">Find out more</a> */}
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="features__status js-features-status">
                            <span className="status__number">0{currentSlideNumber + 1}</span>
                            <span className="status__all">07</span>
                        </div>
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