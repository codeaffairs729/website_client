import React from 'react'

const Footer = () => {
  return (
    <div className="footer js-footer">
        <div className="footer__center center">
            <div className="footer__row">
                {/* <div className="footer__col">
                    <a className="footer__logo" href="#">
                        <img className="footer__pic" src="logo/logoEdited.png" alt="" />
                    </a>
                </div> */}
                <div className="footer__col" style={{paddingTop: "8px"}} >
                    <div className="footer__category js-footer-category">
                        About Us
                        <svg className="icon icon-arrow-down">
                            <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                        </svg>
                    </div>
                    <div className="footer__menu js-footer-menu">
                        We're one of the first class development and consulting organization situated in Mohali India. We’re in business just like you - we understand how stressful it can be to work on projects with outside vendors, especially when large budgets are involved.
                    </div>
                </div>
                <div className="footer__col js-footer-col">
                    <div className="footer__category js-footer-category">
                        What We Do
                        <svg className="icon icon-arrow-down">
                            <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                        </svg>
                    </div>
                    <div className="footer__menu js-footer-menu">
                        <a className="footer__link" href="#">Ruby on Rails</a>
                        <a className="footer__link" href="#">Node.js</a>
                        <a className="footer__link" href="#">Android</a>
                        <a className="footer__link" href="#">Javascript</a>
                        <a className="footer__link" href="#">React</a>
                        <a className="footer__link" href="#">Tizen</a>
                        <a className="footer__link" href="#">PHP</a>
                        <a className="footer__link" href="#">Python</a>
                    </div>
                </div>
                <div className="footer__col js-footer-col">
                    <div className="footer__category js-footer-category">
                        Contact Us
                        <svg className="icon icon-arrow-down">
                            <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                        </svg>
                    </div>
                    <div className="footer__menu js-footer-menu">
                        <a className="footer__link" href="#">+0172-4783676</a>
                        <a className="footer__link" href="#">+91-7589103409</a>
                        <a className="footer__link" href="#">codegaragetech@123</a>
                        <a className="footer__link" href="#">hr@codegaragetech.com</a>
                        <a className="footer__link" href="#">
                            The Atrium at Quarkcity Lower ground floor,Zone-B, Plot no A45, industrial area, phase 8B, SAS-Nagar, Mohali, Punjab -160059
                        </a>
                    </div>
                </div>
                <div className="footer__col js-footer-col">
                    <div className="footer__category js-footer-category">
                        Check Us on Social Network
                        <svg className="icon icon-arrow-down">
                            <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                        </svg>
                    </div>
                    <div className="footer__menu js-footer-menu footer-social-menu">
                        <a className="footer__link" href="https://www.facebook.com/CodeGarageTech">
                            <img className="icon icon-header-img" src="/images/fb35.png" alt="" />
                        </a>
                        <a className="footer__link" href="https://twitter.com/CodeGarageTech">
                            <img className="icon icon-header-img" src="/images/tw35.png" alt="" />
                        </a>
                        <a className="footer__link" href="https://www.linkedin.com/company/codegaragetech">
                            <img className="icon icon-header-img" src="/images/lin35.png" alt="" />
                        </a>
                        <a className="footer__link" href="https://www.instagram.com/codegaragetech/">
                            <img className="icon icon-header-img" src="/images/instagram.png" alt="" />
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