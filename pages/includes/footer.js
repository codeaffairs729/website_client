import React, { useEffect, useState } from 'react'

const Footer = () => {
    const [aboutUs, setAboutUs] = useState(false);
    const [technologies, setTechnologies] = useState(false);
    const [contactUs, setContactUs] = useState(false);
    const [socialIcons, setSocialIcons] = useState(false);

    const showAboutUs = () => {
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
        <div className="footer js-footer">
            <div className="footer__center center">
                <div className="footer__row">
                    {/* <div className="footer__col">
                        <a className="footer__logo" href="#">
                            <img className="footer__pic" src="logo/logoEdited.png" alt="" />
                        </a>
                    </div> */}
                    <div onClick={() => showAboutUs()} className={ aboutUs ? "footer__col active" : "footer__col"} style={{paddingTop: "8px"}} >
                        <div className="footer__category js-footer-category">
                            About Us
                            <svg className="icon icon-arrow-down">
                                <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                            </svg>
                        </div>
                        <div className="footer__menu js-footer-menu" style={ aboutUs ? { display: "block" } : { display: "none" }} >
                            We're one of the first class development and consulting organization situated in Mohali India. We’re in business just like you - we understand how stressful it can be to work on projects with outside vendors, especially when large budgets are involved.
                        </div>
                    </div>
                    <div onClick={() => showTechnologies()} className={ technologies ? "footer__col js-footer-col active" : "footer__col js-footer-col"}>
                        <div className="footer__category js-footer-category">
                            Technologies We Work On
                            <svg className="icon icon-arrow-down">
                                <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                            </svg>
                        </div>
                        <div className="footer__menu js-footer-menu" style={ technologies ? { display: "block" } : { display: "none" }} >
                            <span className="footer__link" >Ruby on Rails</span>
                            <span className="footer__link" >NodeJs</span>
                            <span className="footer__link" >React Native</span>
                            <span className="footer__link" >Laravel</span>
                            <span className="footer__link" >React / Next</span>
                            <span className="footer__link" >Vue / Nuxt</span>
                        </div>
                    </div>
                    <div onClick={() => showContactUs()} className={ contactUs ? "footer__col js-footer-col active" : "footer__col js-footer-col" } >
                        <div className="footer__category js-footer-category">
                            Contact Us
                            <svg className="icon icon-arrow-down">
                                <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                            </svg>
                        </div>
                        <div className="footer__menu js-footer-menu" style={ contactUs ? { display: "block" } : { display: "none" }} >
                            <a className="footer__link" href="#">+0172-4783676</a>
                            <a className="footer__link" href="#">+91-7589103409</a>
                            <a className="footer__link" href="#">codegaragetech@123</a>
                            <a className="footer__link" href="#">hr@codegaragetech.com</a>
                            <a className="footer__link" href="#">
                                The Atrium at Quarkcity Lower ground floor,Zone-B, Plot no A45, industrial area, phase 8B, SAS-Nagar, Mohali, Punjab -160059
                            </a>
                        </div>
                    </div>
                    <div onClick={() => showSocialIcons()} className={ socialIcons ? "footer__col js-footer-col active" : "footer__col js-footer-col" } >
                        <div className="footer__category js-footer-category">
                            Check Us on Social Network
                            <svg className="icon icon-arrow-down">
                                <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                            </svg>
                        </div>
                        <div className="footer__menu js-footer-menu footer-social-menu justify-content-evenly" style={ socialIcons ? { display: "flex" } : { display: "none" }} >
                            <a className="footer__link" href="https://www.facebook.com/CodeGarageTech">
                                <img className="icon icon-header-img" src="images/Facebook3d.png" alt="" />
                            </a>
                            <a className="footer__link" href="https://twitter.com/CodeGarageTech">
                                <img className="icon icon-header-img" src="images/Twitter3d.png" alt="" />
                            </a>
                            <a className="footer__link" href="https://www.linkedin.com/company/codegaragetech">
                                <img className="icon icon-header-img" src="images/LinkedIn3d.png" alt="" />
                            </a>
                            <a className="footer__link" href="https://www.instagram.com/codegaragetech/">
                                <img className="icon icon-header-img" src="images/Instagram3d.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <a className="footer__company" href="#">
                        <img className="footer__pic footer-icon" src="/logo/favicon_white.jpg" alt="" />
                    </a>
                    <div className="footer__copyright">© 2020, UI8 LLC.</div>
                    <a className="footer__scroll js-link-scroll" href="#header">
                        <div className="footer__icon">
                            <img className="footer__pic" src="img/scroll.svg" alt="" />
                        </div>
                        <div className="footer__text">Back to top</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer