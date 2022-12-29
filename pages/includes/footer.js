import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link'

const Footer = () => {
    const [aboutUs, setAboutUs] = useState(false);
    const [technologies, setTechnologies] = useState(false);
    const [contactUs, setContactUs] = useState(false);
    const [socialIcons, setSocialIcons] = useState(false);
    const footer = useRef(null);

    const showAboutUs = (e) => {
        const items = footer.getElementsByClassName('js-footer-col');
        // for (let i = 0; i < items.length; i++) {
        //     let item = e.currentTarget,
        //         category = item.getElementsByClassName('js-footer-category'),
        //         menu = item.getElementsByClassName('js-footer-menu');

        //     if(!category.className == 'active'){
        //         items.className = 'footer__col col-lg-4 col-md-4';
        //         items.getElementsByClassName('js-footer-menu').slideUp();
        //         item.className = 'footer__col col-lg-4 col-md-4 active';
        //         menu.slideDown();
        //     }else{
        //         items.className = 'footer__col col-lg-4 col-md-4';
        //         items.getElementsByClassName('js-footer-menu').slideUp();
        //     }
        // }

        const aboutUsStatus = aboutUs ? false : true;
        setAboutUs(aboutUsStatus);
        setTechnologies(false);
        setContactUs(false);
        setSocialIcons(false);
    }

    const showTechnologies = () => {
        const technologiesStatus = technologies ? false : true;
        setAboutUs(false);
        setTechnologies(technologiesStatus);
        setContactUs(false);
        setSocialIcons(false);
    }

    const showContactUs = () => {
        const contactUsStatus = contactUs ? false : true;
        setAboutUs(false);
        setTechnologies(false);
        setContactUs(contactUsStatus);
        setSocialIcons(false);
    }

    const showSocialIcons = () => {
        const socialIconsStatus = socialIcons ? false : true;
        setAboutUs(false);
        setTechnologies(false);
        setContactUs(false);
        setSocialIcons(socialIconsStatus);
    }
    return (
        <>
            <div ref={(footerRef) => { footer = footerRef }} className="footer" style={{ overflow: "hidden" }}>
                <div className="footer__center center">
                    <div className="footer__row pt-5">
                        <div onClick={(e) => showAboutUs(e)} className={aboutUs ? "footer__col col-lg-4 col-md-4 active" : "footer__col col-lg-4 col-md-4 js-footer-col"} >
                            <div className="footer__category js-footer-category footer-category-cgt-name">
                                Code Garage
                                <svg className="icon icon-arrow-down">
                                    <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                                </svg>
                            </div>
                            <div className={`footer__menu js-footer-menu ${aboutUs ? "" : "hide"}`} >
                                <span className="footer__link footer-link-about" >Want to elevate your brand? Get in Touch!</span>
                                <span className="footer__link footer-link-contact" >+91 82889 83623</span>
                                <span className="footer__link footer-link-contact" >hr@codegaragetech.com</span>
                                <span className="footer__link footer-link-about" >
                                    The Atrium Quarkcity,<br />
                                    industrial area, SAS-Nagar,<br />
                                    Mohali, Punjab -160059
                                </span>
                            </div>
                        </div>
                        <div onClick={() => showTechnologies()} className={technologies ? "footer__col col-lg-4 col-md-4 active" : "footer__col col-lg-4 col-md-4 js-footer-col"}>
                            <div className="footer__category js-footer-category">
                                Technologies We Work On
                                <svg className="icon icon-arrow-down">
                                    <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                                </svg>
                            </div>
                            <div className={`footer__menu js-footer-menu ${technologies ? "" : "hide"}`} >
                                <div className='row' >
                                    <div className='col-lg-6 mb-4' >
                                        <div className='row' >
                                            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 d-flex justify-content-center align-items-center' >
                                                <img className='footer-tech-img' src='icons/ror.png' alt='' />
                                            </div>
                                            <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10' >
                                                <span className="footer__link footer-link-technology" >Ruby on Rails</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 mb-4' >
                                        <div className='row' >
                                            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 d-flex justify-content-center align-items-center' >
                                                <img className='footer-tech-img' src='images/node_2.png' alt='' />
                                            </div>
                                            <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10' >
                                                <span className="footer__link footer-link-technology" >NodeJs</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 mb-4' >
                                        <div className='row' >
                                            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 d-flex justify-content-center align-items-center' >
                                                <img className='footer-tech-img' src='icons/reactjs.png' alt='' />
                                            </div>
                                            <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10' >
                                                <span className="footer__link footer-link-technology" >React Native</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 mb-4' >
                                        <div className='row' >
                                            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 d-flex justify-content-center align-items-center' >
                                                <img className='footer-tech-img' src='icons/laravel.png' alt='' />
                                            </div>
                                            <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10' >
                                                <span className="footer__link footer-link-technology" >Laravel</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 mb-4' >
                                        <div className='row' >
                                            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 d-flex justify-content-center align-items-center' >
                                                <img className='footer-tech-img' src='icons/reactjs.png' alt='' />
                                            </div>
                                            <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10' >
                                                <span className="footer__link footer-link-technology" >ReactJs / NextJs</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 mb-4' >
                                        <div className='row' >
                                            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 d-flex justify-content-center align-items-center' >
                                                <img className='footer-tech-img' src='icons/vuejs.png' alt='' />
                                            </div>
                                            <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10' >
                                                <span className="footer__link footer-link-technology" >VueJs / NuxtJs</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => showSocialIcons()} className={socialIcons ? "footer__col col-lg-4 col-md-4 active" : "footer__col col-lg-4 col-md-4 js-footer-col"} >
                            <div className="footer__category js-footer-category">
                                Check Us on Social Network
                                <svg className="icon icon-arrow-down">
                                    <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                                </svg>
                            </div>
                            <div className={`footer__menu js-footer-menu footer-social-menu ${socialIcons ? "" : "hide"}`} >
                                <Link href="https://www.facebook.com/CodeGarageTech">
                                    <a className="footer__link me-3" >
                                        <img className="icon icon-header-img" src="images/Facebook3d.png" alt="" />
                                    </a>
                                </Link>
                                <Link href="https://twitter.com/CodeGarageTech">
                                    <a className="footer__link me-3" >
                                        <img className="icon icon-header-img" src="images/Twitter3d.png" alt="" />
                                    </a>
                                </Link>
                                <Link href="https://www.linkedin.com/company/codegaragetech">
                                    <a className="footer__link me-3" >
                                        <img className="icon icon-header-img" src="images/LinkedIn3d.png" alt="" />
                                    </a>
                                </Link>
                                <Link href="https://www.instagram.com/codegaragetech/">
                                    <a className="footer__link" >
                                        <img className="icon icon-header-img" src="images/Instagram3d.png" alt="" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom footer-bottom">
                    <div className="footer__copyright">© Copyright 2022. CGT</div>
                    <span className="footer__scroll" >
                        <div className="footer__text">All Right Reserved.</div>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Footer