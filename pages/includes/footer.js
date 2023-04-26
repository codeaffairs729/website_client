import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FooterNew = () => {
  const [aboutUs, setAboutUs] = useState(false)
  const [technologies, setTechnologies] = useState(false)
  const [contactUs, setContactUs] = useState(false)
  const [socialIcons, setSocialIcons] = useState(false)
  const footer = useRef(null)
  const rubyImg = '/icons/ror.webp'

  const showAboutUs = (e) => {
    const items = footer.getElementsByClassName('js-footer-col')
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

    const aboutUsStatus = aboutUs ? false : true
    setAboutUs(aboutUsStatus)
    setTechnologies(false)
    setContactUs(false)
    setSocialIcons(false)
  }

  const showTechnologies = () => {
    const technologiesStatus = technologies ? false : true
    setAboutUs(false)
    setTechnologies(technologiesStatus)
    setContactUs(false)
    setSocialIcons(false)
  }

  const showContactUs = () => {
    const contactUsStatus = contactUs ? false : true
    setAboutUs(false)
    setTechnologies(false)
    setContactUs(contactUsStatus)
    setSocialIcons(false)
  }

  const showSocialIcons = () => {
    const socialIconsStatus = socialIcons ? false : true
    setAboutUs(false)
    setTechnologies(false)
    setContactUs(false)
    setSocialIcons(socialIconsStatus)
  }

  const salesEmailRef = useRef(null)
  useEffect(() => {
    const salesEmailElement = salesEmailRef.current
    const sales = 'sales@codegaragetech.com'
    salesEmailElement.innerHTML = `<a href="mailto:${sales}">${sales}</a>`
  }, [])

  return (
    <>
      <div
        ref={(footerRef) => {
          footer = footerRef
        }}
        className="footer overflow-hidden"
      >
        <div className="footer__center center">
          <div className="footer__row pt-5">
            <div
              onClick={(e) => showAboutUs(e)}
              className={
                aboutUs
                  ? 'footer__col col-lg-4 col-md-4 active'
                  : 'footer__col col-lg-4 col-md-4 js-footer-col'
              }
            >
              <Link href="/">
                <div className="cursor_pointer footer__category js-footer-category footer-category-cgt-name">
                  <Image
                    src="/logo/cgt_new_logo_alt.webp"
                    alt="Code Garage Tech - Logo"
                    width={210}
                    height={39}
                    priority={true}
                  />
                </div>
              </Link>
              <div
                className={`footer__menu js-footer-menu ${
                  aboutUs ? '' : 'hide'
                }`}
              >
                <span className="footer__link footer-link-about">
                  Want to take your business online? Count on us, we offer the
                  best software solutions to your business.
                  <br />
                  <br />
                </span>
                <span className="footer__link footer-link-contact d-flex">
                  <span className="mr-2">
                    <Image src="/logo/india_logo.svg" width={32} height={24} />
                  </span>
                  <span>&nbsp;&nbsp;+91 82889 83623</span>
                </span>
                <span className="footer__link footer-link-contact d-flex">
                  <span>
                    <Image src="/logo/US_logo.svg" width={32} height={24} />
                  </span>
                  <span>&nbsp;&nbsp;+1 7606839821</span>
                </span>
                <span className="footer__link footer-link-contact">
                  <p>
                    <span ref={salesEmailRef}></span>
                  </p>
                  {/* <Image
                    src="/logo/emailImg.png"
                    alt="email-text-image-png"
                    width={190}
                    height={24}
                  /> */}
                </span>
              </div>
            </div>
            <div
              onClick={() => showTechnologies()}
              className={
                technologies
                  ? 'footer__col col-lg-5 col-md-4'
                  : 'footer__col col-lg-5 col-md-4 js-footer-col'
              }
            >
              <div className="footer__category js-footer-category">
                Technologies We Work On
                <svg
                  className="icon icon-arrow-down"
                  aria-labelledby="arrow-down-icon"
                >
                  <use xlinkHref="/img/sprite.svg#icon-arrow-down"></use>
                </svg>
              </div>
              <div
                className={`footer__menu js-footer-menu ${
                  technologies ? '' : 'hide'
                }`}
              >
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="row">
                      <div className="col-lg-4 col-md-2 col-sm-2 col-xs-2 col-2 d-flex justify-content-center align-items-center">
                        {/* <img className='footer-tech-img' src='/icons/ror.webp' alt='ROR - PNG Icon' /> */}

                        <Image
                          src={'/icons/ror.webp'}
                          alt="ROR - PNG Icon"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="col-lg-8 col-md-10 col-sm-10 col-xs-10 col-10">
                        <span className="footer__link footer-link-technology">
                          Ruby on Rails
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="row">
                      <div className="col-lg-4 col-md-2 col-sm-2 col-xs-2 col-2 d-flex justify-content-center align-items-center">
                        {/* <img
                          className="footer-tech-img"
                          src="/images/node_2.webp"
                          alt="Nodejs PNG Image"
                        /> */}

                        <Image
                          src={'/images/node_2.webp'}
                          alt="Nodejs PNG Image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className="col-lg-8 col-md-10 col-sm-10 col-xs-10 col-10">
                        <span className="footer__link footer-link-technology">
                          NodeJs
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="row">
                      <div className="col-lg-4 col-md-2 col-sm-2 col-xs-2 col-2 d-flex justify-content-center align-items-center">
                        {/* <img
                          className="footer-tech-img"
                          src="/icons/reactjs.webp"
                          alt="Reactjs Icon"
                        /> */}
                        <Image
                          src={'/icons/reactjs.webp'}
                          alt="Reactjs Icon"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className="col-lg-8 col-md-10 col-sm-10 col-xs-10 col-10">
                        <span className="footer__link footer-link-technology">
                          React Native
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="row">
                      <div className="col-lg-4 col-md-2 col-sm-2 col-xs-2 col-2 d-flex justify-content-center align-items-center">
                        {/* <img
                          className="footer-tech-img"
                          src="/icons/laravel.webp"
                          alt="Laravel Icon"
                        /> */}

                        <Image
                          src={'/icons/laravel.webp'}
                          alt="Laravel Icon"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className="col-lg-8 col-md-10 col-sm-10 col-xs-10 col-10">
                        <span className="footer__link footer-link-technology">
                          Laravel
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="row">
                      <div className="col-lg-4 col-md-2 col-sm-2 col-xs-2 col-2 d-flex justify-content-center align-items-center">
                        {/* <img
                          className="footer-tech-img"
                          src="/icons/reactjs.webp"
                          alt="Reactjs Icon"
                        /> */}

                        <Image
                          src={'/icons/reactjs.webp'}
                          alt="Reactjs Icon"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className="col-lg-8 col-md-10 col-sm-10 col-xs-10 col-10">
                        <span className="footer__link footer-link-technology">
                          ReactJs / NextJs
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="row">
                      <div className="col-lg-4 col-md-2 col-sm-2 col-xs-2 col-2 d-flex justify-content-center align-items-center">
                        {/* <img
                          className="footer-tech-img"
                          src="/icons/vuejs.webp"
                          alt=""
                        /> */}
                        <Image
                          src={'/icons/vuejs.webp'}
                          alt=""
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className="col-lg-8 col-md-10 col-sm-10 col-xs-10 col-10">
                        <span className="footer__link footer-link-technology">
                          VueJs / NuxtJs
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => showSocialIcons()}
              className={
                socialIcons
                  ? 'footer__col col-lg-3 col-md-4 active'
                  : 'footer__col col-lg-3 col-md-4 js-footer-col'
              }
            >
              <div className="footer__category js-footer-category">
                Check Us on Social Network
                <svg
                  className="icon icon-arrow-down"
                  aria-labelledby="arrow-down-icon"
                >
                  <use xlinkHref="/img/sprite.svg#icon-arrow-down"></use>
                </svg>
              </div>
              <div
                className={`footer__menu js-footer-menu footer-social-menu ${
                  socialIcons ? '' : 'hide'
                }`}
              >
                <Link href="https://www.facebook.com/codegaragetech">
                  <a
                    className="footer__link me-3 cursor_pointer"
                    target="_blank"
                  >
                    {/* <img
                      className="icon icon-header-img"
                      src="/images/Facebook3d.webp"
                      alt="3D Facebook Icon"
                    /> */}

                    <Image
                      src={'/images/Facebook3d.webp'}
                      alt="3D Facebook Icon"
                      height={35}
                      width={35}
                    />
                  </a>
                </Link>
                <Link href="https://twitter.com/codegaragetech">
                  <a className="footer__link me-3" target="_blank">
                    {/* <img
                      className="icon icon-header-img cursor_pointer"
                      src="/images/Twitter3d.webp"
                      alt="3D Twitter Icon"
                    /> */}
                    <Image
                      src={'/images/Twitter3d.webp'}
                      alt="3D Twitter Icon"
                      height={35}
                      width={35}
                    />
                    {/* <Image src="/images/Twitter3d.webp" alt="3D Twitter Icon" /> */}
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/company/codegarage-tech/">
                  <a className="footer__link me-3" target="_blank">
                    {/* <img
                      className="icon icon-header-img"
                      src="/images/LinkedIn3d.webp"
                      alt="3D LinkedIn Icon"
                    /> */}
                    <Image
                      src={'/images/LinkedIn3d.webp'}
                      alt="3D LinkedIn Icon"
                      height={35}
                      width={35}
                    />
                  </a>
                </Link>
                <Link href="https://www.instagram.com/codegaragetech/">
                  <a className="footer__link" target="_blank">
                    {/* <img
                      className="icon icon-header-img"
                      src="/images/Instagram3d.webp"
                      alt="3D Instagram Icon"
                    /> */}
                    <Image
                      src={'/images/Instagram3d.webp'}
                      alt="3D Instagram Icon"
                      height={35}
                      width={35}
                    />
                  </a>
                </Link>
              </div>
              <span className="footer__link footer-link-about">
                <br />
                The Atrium Quarkcity,
                <br />
                industrial area, SAS-Nagar, Mohali, Punjab -160059
              </span>
            </div>
          </div>
        </div>
        <div className="footer__bottom footer-bottom">
          <div className="footer__copyright">
            Copyright © 2023 CodeGarageTech Pvt. Ltd.
          </div>
          <span className="footer__scroll">
            <div className="footer__text">All Right Reserved.</div>
          </span>
        </div>
      </div>
    </>
  )
}

export default FooterNew
