import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Typewriter from 'typewriter-effect';

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
        infinite: true,
        autoplay: true,
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
                        <div className="features__stage stage">About Us</div>
                        <div className="features__box">
                            <h2 className="features__title title">
                                We’re Top Ranked
                                Service Provider
                                On <Typewriter
                                    options={{
                                        strings: ['Upwork', 'Clutch.co', 'People per Hour'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h2>
                            <div className="features__info info">
                                Our services focus on Mobility Solutions, Web Application Development, Cloud Solutions, IoT, AR/VR, Blockchain, Artificial Intelligence & Machine Learning, Predictive Analytics & Big Data Solutions, and several other trending and emerging technologies.
                            </div>
                        </div>
                    </div>
                    <div className="features__body" id="services" >
                        <div className="features__container">
                            <Slider className="features__slider js-features-slider" {...settings}>
                                {/* <div>
                                    <div className="features__slide" data-aos="animation-scale-y">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="img/camera.webp" alt="" />
                                            </div>
                                            <div className="features__category">World Class Design Team</div>
                                            <div className="features__text">
                                                With more than 20 years of experience in designing for startups to Fortune 500 companies.
                                            </div>
                                            <a className="features__link" href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide" data-aos="animation-scale-y" data-aos-delay="200">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="img/calendar.webp" alt="" />
                                            </div>
                                            <div className="features__category">Enterprise Grade Build</div>
                                            <div className="features__text">
                                                Leveraging modern approaches to web development, we bring front-end, back-end, and architecture together to meet your business needs.
                                            </div>
                                            <a className="features__link" href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div> */}
                                <div>
                                    <div className="features__slide" data-aos="animation-scale-y">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="images/computer-front-color.webp" alt="" />
                                            </div>
                                            <div className="features__category">Web App Development</div>
                                            <div className="features__text">
                                                <p>We develop User friendly and reliable applications that helps to solve the problems in almost every field.</p>
                                                <p>Related Expertise:
                                                    <span style={{color: "#71caaf"}}>Ruby on Rails,SAAS, Python/Django/Flask, ReactJs/ES6,Web Servers</span>
                                                    (Nginx/Apache),
                                                    <span style={{color: "#71caaf"}}>Mail Servers</span>
                                                    <span style={ wadMoreLess ? {display: "none"} : {display: ""} } id="service1Dots">...
                                                        <a href="#" onClick={() => wadSeeMoreLess(1)} style={{color: "#71caaf"}}>
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
                                                        <a href="#" onClick={() => wadSeeMoreLess(0)} style={{color: "#71caaf"}}>
                                                            <b>less</b>
                                                        </a>
                                                    </span>
                                                </p>
                                            </div>
                                            <a className="features__link" href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide" data-aos="animation-scale-y" data-aos-delay="200">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="images/mobile-front-color.webp" alt="" />
                                            </div>
                                            <div className="features__category">Mobile App Development</div>
                                            <div className="features__text">
                                                <p>Not just mobile apps, we build user-friendly Experiances.Apps that resolve real-life problems, that got featured over store, and generate revenue.</p>
                                                <p> Related Expertise: <span style={{color: "#dda549"}}>Native & Hybrid Apps, iPhone, Swift, Go Lang, React-Native, Ionic, Android, Mobile Games</span></p>
                                            </div>
                                            <a className="features__link" href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="images/bag-front-color.webp" alt=""/>
                                            </div>
                                            <div className="features__category">E - commerce</div>
                                            <div className="features__text">
                                                <p>Do your business on E-commerce platforms and allow your consumers/connected traders to buy things online. Let us provide you best related solutions that will bost up your business.</p>
                                                <p>Related Expertise:
                                                    <span style={{color: "#4dac87"}}>Spree Commerce, Magento, Shopify, Sharetribe, WooCommerce</span>
                                                </p>
                                            </div>
                                            <a className="features__link" href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="images/blockchain.webp" alt="" />
                                            </div>
                                            <div className="features__category">BlockChain/Cryptocurrency</div>
                                            <div className="features__text">
                                                <p>A Blockchain is secured by system design and is an example of a distributed computing system.It is suitable for the identity management transaction processing. Yes, We have expertise to develop and take care of secure distributed system.</p>
                                                <p>Related Expertise:
                                                    <span style={{color: "#fce9bc"}}>Minning, Block-chain,</span>
                                                    <span style={ bcMoreLess ? {display: "none"} : {display: ""} } id="service2Dots">...
                                                        <a href="#" onClick={() => bcSeeMoreLess(1)} style={{color: "#fce9bc"}}>
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
                                                        <a href="#" onClick={() => bcSeeMoreLess(0)} style={{color: "#fce9bc"}}>
                                                            <b>less</b>
                                                        </a>
                                                    </span>
                                                </p>
                                            </div>
                                            <a className="features__link" href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="images/crm.webp" alt="" />
                                            </div>
                                            <div className="features__category">CRM/CMS/ERP Systems</div>
                                            <div className="features__text">
                                                <p> These kind of systems are of same standard and functionalities in almost all the industires. Though we prefer it platform based but also we develop custom systems as per your requirements. </p>
                                                <p>Related Expertise:
                                                    <span style={{color: "#ed7899"}}>Radiant CMS,Adva CMS,Casein CMS,Locomotive CMS, django CMS, Spina</span>
                                                    <span style={ ccesMoreLess ? {display: "none"} : {display: ""} } id="service3Dots">...
                                                        <a href="#" onClick={() => ccesSeeMoreLess(1)} style={{color: "#ed7899"}}>
                                                            <b>more</b>
                                                        </a>
                                                    </span>
                                                    <span id="service3" style={ ccesMoreLess ? {display: ""} : {display: "none"} } >
                                                        <span style={{color: "#ed7899"}}> CMS,Fat Free CRM, Wordpress, Redmine, bonsaiERP, Accounting Platform, Payroll Development, Zoho/Salesfore CRM , Point Of Sale Systems, Corporate CRM/ERP Systems</span>
                                                        <br/>
                                                        <a href="#" onClick={() => ccesSeeMoreLess(0)} style={{color: "#ed7899"}}>
                                                            <b>less</b>
                                                        </a>
                                                    </span>
                                                </p>
                                            </div>
                                            <a className="features__link" href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="images/digitalMarketing.webp" alt="" />
                                            </div>
                                            <div className="features__category">Digital Marketing</div>
                                            <div className="features__text">
                                                <p>We don't dimension on any quality of value. Our unparalleled <span style={{color: "#f8e390"}}>Search Engine Optimization</span> administrations will without a doubt get you noticed globally! </p>
                                                <p> Related Expertise:
                                                    <span style={{color: "#f8e390"}}> SEO, SMM, ORM, Leads Generation, Ads Reveniew, Facebook Leads</span>
                                                    <span style={ dmMoreLess ? {display: "none"} : {display: ""} } id="service4Dots">...
                                                        <a href="#" onClick={() => dmSeeMoreLess(1)} style={{color: "#f8e390"}}>
                                                            <b>more</b>
                                                        </a>
                                                    </span>
                                                    <span id="service4" style={ dmMoreLess ? {display: ""} : {display: "none"} } >
                                                        <span style={{color: "#f8e390"}}> Generation, Keywords Resaerch, Website Analysis, Link Building, Youtube Video Ranking</span>
                                                        <br/>
                                                        <a href="#" onClick={() => dmSeeMoreLess(0)} style={{color: "#f8e390"}}>
                                                            <b>less</b>
                                                        </a>
                                                    </span>
                                                </p>
                                            </div>
                                            <a className="features__link" href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="features__slide">
                                        <div className="features__details">
                                            <div className="features__preview">
                                                <img className="features__pic" src="images/smart_gadgets.webp" alt="" />
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
                                            <a className="features__link" href="#">Find out more</a>
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
                    <img className="features__pic" src="img/features-pic-1.webp" alt="" />
                </div>
            </div>
        </>
    )
}

export default Features