import React from 'react'

const Footer = () => {
  return (
    <div className="footer js-footer">
        <div className="footer__center center">
            <div className="footer__row">
                <div className="footer__col">
                    <a className="footer__logo" href="#">
                        <img className="footer__pic" src="img/logo-dark.svg" alt="" />
                    </a>
                </div>
                <div className="footer__col js-footer-col">
                    <div className="footer__category js-footer-category">
                        Company
                        <svg className="icon icon-arrow-down">
                            <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                        </svg>
                    </div>
                    <div className="footer__menu js-footer-menu">
                        <a className="footer__link" href="#">About us</a>
                        <a className="footer__link" href="#">Jobs</a>
                        <a className="footer__link" href="#">Press</a>
                        <a className="footer__link" href="#">Blog</a>
                    </div>
                </div>
                <div className="footer__col js-footer-col">
                    <div className="footer__category js-footer-category">
                        Support
                        <svg className="icon icon-arrow-down">
                            <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                        </svg>
                    </div>
                    <div className="footer__menu js-footer-menu">
                        <a className="footer__link" href="#">Contact us</a>
                        <a className="footer__link" href="#">Cookies</a>
                        <a className="footer__link" href="#">Privacy & terms</a>
                        <a className="footer__link" href="#">Sitemap</a>
                    </div>
                </div>
                <div className="footer__col js-footer-col">
                    <div className="footer__category js-footer-category">
                        Community
                        <svg className="icon icon-arrow-down">
                            <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                        </svg>
                    </div>
                    <div className="footer__menu js-footer-menu">
                        <a className="footer__link" href="#">Developers</a>
                        <a className="footer__link" href="#">Designers</a>
                        <a className="footer__link" href="#">Forum</a>
                        <a className="footer__link" href="#">UI8</a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <a className="footer__company" href="https://ui8.net/" target="_blank">
                    <img className="footer__pic" src="img/ui8.svg" alt="" />
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