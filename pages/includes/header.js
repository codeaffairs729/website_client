import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Header = () => {
  const [headerSearchBar, setHeaderSearchBar] = useState(false)
  const [sideBarHandler, setSideBarHandler] = useState(false)
  const [autoplay1, setAutoplay1] = useState(true)
  const [autoplay2, setAutoplay2] = useState(true)
  const [autoplay3, setAutoplay3] = useState(true)
  const [serviceMenu, setServiceMenu] = useState(false)

  const header = useRef(null)

  const [careerLink, setCareerLink] = useState(false)
  const [aboutUsLink, setAboutUsLink] = useState(false)
  const router = useRouter()
  const [visible, setVisible] = useState('none')
  const currentPath = router.pathname

  const headerSearch = () => {
    const searchBarShowHide = headerSearchBar ? false : true
    setHeaderSearchBar(searchBarShowHide)
  }

  const handleSidebar = (e) => {
    sideBarHandler ? setSideBarHandler(false) : setSideBarHandler(true)
    setServiceMenu(false)
    header.parentElement.style.overflowY = 'unset'
    setVisible('none')
  }

  const toggleSidebarInternalMenu = () => {
    serviceMenu ? setServiceMenu(false) : setServiceMenu(true)
    // sideBarHandler
    //   ? (header.parentElement.style.overflow = 'scroll')
    //   : (header.parentElement.style.overflowY = 'unset')
  }
  // sticky header upon scroll
  const [sticky, setSticky] = useState('')
  const [isActive, setActive] = useState('')
  useEffect(() => {
    setCareerLink(router.pathname == '/careers')
    setAboutUsLink(router.pathname == '/about-us')

    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  }, [])

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY
    const stickyClass = scrollTop >= 250 ? 'is-sticky' : ''
    setSticky(stickyClass)
    if (scrollTop > 80) setActive('js-header-white')
    else setActive('')
    // console.log(stickyClass)
  }

  const handleOnShowMenu = () => {
    setVisible('flex')
  }

  const handleOnLeave = () => {
    setVisible('none')
  }

  const classes = `header-section is-sticky`
  const headerBg = `header js-header ${isActive}`
  const servicesSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: autoplay1,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 3000,
  }

  const technologiesSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: autoplay2,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 3000,
  }

  const portfolioSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: autoplay3,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 3000,
  }
  return (
    <>
      <header className={classes}>
        <Head>
          <meta charSet="utf-8" />
          {/* <title>Custom Software Development Service Provider Company in India</title> */}
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.96, maximum-scale=2.0"
          />
          <meta name="format-detection" content="telephone=no" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="img/apple-touch-icon.webp"
          />
          <link
            rel="icon"
            type="image.webp"
            sizes="32x32"
            href="/logo/cgt_new_favicon.webp"
          />
          <link
            rel="icon"
            type="image.webp"
            sizes="16x16"
            href="/logo/cgt_new_favicon.webp"
          />
          {/* <link rel="manifest" href="/img/site.webmanifest" /> */}
          <link
            rel="mask-icon"
            href="img/safari-pinned-tab.webp"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          {/* <meta name="description" content="Looking for reliable Custom Web Development Services in India? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!" /> */}
        </Head>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        />
        <div
          ref={(headerRef) => {
            header = headerRef
          }}
          className={headerBg}
          id="header"
        >
          <div className="header__center center">
            <button
              onClick={(e) => handleSidebar(e)}
              className={
                sideBarHandler
                  ? 'header__burger js-header-burger active'
                  : 'header__burger js-header-burger'
              }
            >
              <span></span>
            </button>
            <Link href="/">
              <div className="cursor_pointer header__logo">
                <div className="header__pic">
                  <Image
                    src="/logo/cgt_new_logo_alt.webp"
                    alt="Code Garage Tech - Logo"
                    width={210}
                    height={39}
                    priority={true}
                  />
                </div>
              </div>
            </Link>
            <div
              className={
                sideBarHandler
                  ? 'header__wrap js-header-wrap visible'
                  : 'header__wrap js-header-wrap'
              }
            >
              <nav className="header__nav">
                <div
                  className={`header__item ${
                    serviceMenu && 'service-menu-header-item '
                  }`}
                  // style={{ display: `${visible}` }}
                >
                  {/* <Link href="#"> */}
                  <div
                    className={`btn-outline-danger cursor_pointer header__head ${
                      visible === 'flex' ? 'service-underline' : ''
                    } ${serviceMenu ? 'service-menu-head nav-css' : ''}`}
                    onClick={toggleSidebarInternalMenu}
                    onMouseOver={handleOnShowMenu}
                  >
                    Services
                    <svg
                      className="icon icon-arrow-down"
                      aria-labelledby="arrow-down-icon"
                    >
                      <use xlinkHref="/img/sprite.svg#icon-arrow-down"></use>
                    </svg>
                  </div>
                  {/* </Link> */}
                  <div
                    className={`header__body ${
                      serviceMenu && 'service-menu text-start'
                    }`}

                    // style={{opacity:"1"}}
                  >
                    <div
                      className="header__center center header-dropdown-body"
                      style={{ display: `${visible}` }}
                    >
                      <div
                        className="service-menu-visible header__row row"
                        style={{ display: `${visible}` }}
                        onMouseLeave={handleOnLeave}
                      >
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          <div
                            className={`header__category cursor_pointer ${
                              serviceMenu && 'service-menu-header-item'
                            }`}
                          >
                            <Link
                              href="/services/web-solutions"
                              legacyBehavior={true}
                            >
                              <div onClick={handleSidebar}>Web Solutions</div>
                            </Link>
                          </div>
                          <div className="row">
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/web-solutions/#ruby-rails">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/images/ror1.webp"
                                  alt="ROR - Icon"
                                /> */}
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/images/ror1.webp"
                                        alt="ROR - Icon"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Ruby on Rails Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/reactjs-nextjs">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/images/react_3.webp"
                                        alt="React Icon"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      React / NextJs Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/vuejs-nuxtjs">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/images/vuejs.webp"
                                  alt="Vuejs PNG Image"
                                /> */}
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/vuejs.webp"
                                        alt="Vuejs PNG Image"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      VueJs / NuxtJs Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div
                              className="col-lg-12 header-solutions-outer"
                              style={{ position: 'relative' }}
                            >
                              <Link href="/services/web-solutions/#nodejs">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/images/node_2.webp"
                                  alt="Nodejs PNG Image"
                                /> */}

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/node_2.webp"
                                        alt="Nodejs PNG Image"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      NodeJs Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/web-solutions/#laravel">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/images/laravel.webp"
                                  alt="Laravel PNG Image"
                                /> */}
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/laravel.webp"
                                        alt="Laravel PNG Image"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Laravel Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/web-solutions/#shopify">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/images/shopify_icon.webp"
                                  alt="Shopify Icon"
                                /> */}

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/images/shopify_icon.webp"
                                        alt="Shopify Icon"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">Shopify</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/web-solutions/#wordpress">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/icons/wordpress.webp"
                                  alt="Wordpress Icon"
                                /> */}

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/wordpress.webp"
                                        alt="Wordpress Icon"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Wordpress
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            {/* <Slider {...servicesSettings}>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/ror1.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Ruby on Rails Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/react_3.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">React / Next.js Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/vuejs.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Vue.js / NuxtJs Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/node_2.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Node.js Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/laravel.webp" alt="Laravel PNG Image" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Laravel Development</div>
                                                                </div>
                                                            </div>
                                                        </div> */}

                            {/* <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/computer-front-color.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Web App Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/mobile-front-color.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Mobile App Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/bag-front-color.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">E - commerce</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/blockchain.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">BlockChain/Cryptocurrency</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/crm.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">CRM/CMS/ERP Systems</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/digitalMarketing.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Digital Marketing</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/smart_gadgets.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Smart Gadget Apps</div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                            {/* </Slider> */}
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          <div
                            className={`header__category cursor_pointer ${
                              serviceMenu
                                ? 'service-menu-header-item service-menu-header-category'
                                : ''
                            }`}
                          >
                            <Link
                              href="/services/mobile-solutions"
                              legacyBehavior={true}
                            >
                              <div onClick={handleSidebar}>
                                Mobile Solutions
                              </div>
                            </Link>
                          </div>
                          <div className="row ">
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/mobile-solutions/#android">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/icons/android_2.webp"
                                  alt="Android PNG Image"
                                /> */}

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/android_2.webp"
                                        alt="Android PNG Image"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Android App Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/mobile-solutions/#ios">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/images/ios.webp"
                                  alt="iOS PNG Image"
                                /> */}

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/ios.webp"
                                        alt="iOS PNG Image"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      IOS App Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/mobile-solutions/#mobile_react">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/images/react_native.webp"
                                  alt="React Native PNG Image"
                                /> */}

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/react_native.webp"
                                        alt="iOS PNG Image"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      React Native Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/mobile-solutions/#flutter">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/images/flutter.webp"
                                  alt="Flutter PNG Image"
                                /> */}
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/images/flutter.webp"
                                        alt="Flutter PNG Image"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">Flutter</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            {/* <div className="col-lg-12 header-solutions-outer" >
                                                        <div className="row" >
                                                            <div className=".col-xl-2 col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center" >
                                                                <img className="header-solutions-icon" src="icons/ionic.webp" alt="" />
                                                            </div>
                                                            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 ps-0 ms-0" >
                                                                <div className="header__info">Ionic</div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                            {/* <Slider {...technologiesSettings}>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/icons/android_2.webp" alt="Android PNG Image" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Android App Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/ios.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">IOS App Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/icons/android_2.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">React Native Development</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/flutter.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Flutter</div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                            {/* <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/javascript.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Javascript</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/tizen-512.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Tizen</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/php1.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">PHP</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/python_2.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Python</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/FIGMA.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Figma</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/MongoDB.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">MongoDB</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 header-solutions-outer" >
                                                            <div className="row" >
                                                                <div className="col-lg-3" >
                                                                    <img className="header-solutions-icon" src="/images/swift.webp" alt="" />
                                                                </div>
                                                                <div className="col-lg-9" >
                                                                    <div className="header__info">Swift</div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                            {/* </Slider> */}
                          </div>
                          <div
                            className={`header__category cursor_pointer mt-3 ${
                              serviceMenu ? 'service-menu-header-item' : ''
                            }`}
                          >
                            <Link href="/services/devops" legacyBehavior={true}>
                              <div onClick={handleSidebar}>DevOps</div>
                            </Link>
                          </div>
                          <div className="row ">
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/devops/#automation">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/icons/android_2.webp"
                                  alt="Android PNG Image"
                                /> */}

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/Unionautomation.svg"
                                        alt="automatin PNG Image"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Automation
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/devops/#ci/cd">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/icons/android_2.webp"
                                  alt="Android PNG Image"
                                /> */}

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/VectorCICD.svg"
                                        alt="cicd PNG Image"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">CI/CD</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/devops/#cloud">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/img/cloud.webp"
                                  alt="3D Cloud"
                                /> */}

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/img/cloud.webp"
                                        alt="3D Cloud"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Cloud Engineering
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          <div
                            className={`header__category ${
                              serviceMenu &&
                              'service-menu-header-item service-menu-header-category'
                            }`}
                          >
                            Miscellaneous
                          </div>

                          <div className="row">
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/ui-ux">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/images/content-management-system.webp"
                                  alt="3D Pencil"
                                /> */}

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/content-management-system.webp"
                                        alt="3D Pencil"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">UI / UX</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/ecommerce-solutions">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/images/bag-front-color.webp"
                                  alt="3D Bag"
                                /> */}

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/bag-front-color.webp"
                                        alt="3D Bag"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      E-commerce Solutions
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/content-management-system">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/images/notebook-iso-color.webp"
                                  alt="3D Notebook"
                                /> */}

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/notebook-iso-color.webp"
                                        alt="3D Notebook"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Content Management System
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/customer-relationship-management">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/images/customer-relationship-management.webp"
                                  alt="3D Customer"
                                /> */}

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/customer-relationship-management.webp"
                                        alt="3D Customer"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Customer Relationship Management
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/digital-marketing">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/icons/digital-marketing.webp"
                                  alt="3D Speaker"
                                /> */}
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/digital-marketing.webp"
                                        alt="3D Speaker"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Digital Marketing (PPC, SEO, ORM)
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/deployment-and-host-management">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                  className="header-solutions-icon"
                                  src="/icons/deployment-host-management.webp"
                                  alt="3D Deployment PNG"
                                /> */}
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/deployment-host-management.webp"
                                        alt="3D Deployment PNG"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Deployment and Host Management
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/strapi">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                    className="header-solutions-icon"
                                    src="/icons/strapi-frame.webp"
                                    alt="strapi PNG"
                                  /> */}
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/strapi-frame.webp"
                                        alt="strapi PNG"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">Strapi</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/chatwoot">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                    className="header-solutions-icon"
                                    src="/icons/chatwoot.webp"
                                    alt="chatwoot PNG"
                                  /> */}
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/chatwoot.webp"
                                        alt="chatwoot PNG"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">Chatwoot</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                              <Link href="/services/openAi">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    {/* <img
                                    className="header-solutions-icon"
                                    src="/icons/chatwoot.webp"
                                    alt="chatwoot PNG"
                                  /> */}
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/openai1.svg"
                                        alt="openAI icon svg"
                                        layout="fill"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      OpenAI (ChatGPT)
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/about-us">
                  <div
                    className={
                      currentPath === '/about-us'
                        ? 'cursor_pointer header__item nav-css underline_text '
                        : 'cursor_pointer header__item nav-css blue-underline'
                    }
                    onClick={handleSidebar}
                  >
                    About Us
                  </div>
                </Link>
                <Link href="/careers">
                  <div
                    className={
                      currentPath === '/careers'
                        ? 'cursor_pointer header__item nav-css underline_text'
                        : 'cursor_pointer header__item nav-css blue-underline'
                    }
                    onClick={handleSidebar}
                  >
                    Careers
                  </div>
                </Link>
                <Link href="/caseStudies">
                  <div
                    className={
                      currentPath === '/contact'
                        ? 'cursor_pointer header__item nav-css underline_text'
                        : 'cursor_pointer header__item nav-css blue-underline'
                    }
                    onClick={handleSidebar}
                  >
                    Case Studies
                  </div>
                </Link>
                {/* <Link href="/user-blog-list">
                  <div
                    className={
                      currentPath === '/blog-list'
                        ? 'cursor_pointer header__item nav-css underline_text'
                        : 'cursor_pointer header__item nav-css'
                    }
                    onClick={handleSidebar}
                  >
                    Blogs
                  </div>
                </Link> */}
              </nav>
              <div className="header__photo">
                <div className="header__pic">
                  <div style={{ zIndex: '999' }}>
                    <Image
                      src="/img/menu-pic.webp"
                      alt="3D Computer System"
                      width={350}
                      height={308}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="header__search js-header-search"> */}
            {/* Social Media Icons */}
            {/* <a className="header__open" href="https://www.facebook.com/CodeGarageTech" >
                            <img className="icon icon-header-img" src="/images/fb35.webp" alt="" />
                        </a>
                        <a className="header__open" href="https://twitter.com/CodeGarageTech" >
                            <img className="icon icon-header-img" src="/images/tw35.webp" alt="" />
                        </a>
                        <a className="header__open" href="https://www.linkedin.com/company/codegaragetech" >
                            <img className="icon icon-header-img" src="/images/lin35.webp" alt="" />
                        </a>
                        <a className="header__open" href="https://www.instagram.com/codegaragetech/" >
                            <img className="icon icon-header-img" src="/images/instagram.webp" alt="" />
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
          {/* <a
              href="/contact"
              className="header__btn btn-none btn btn_pink"
              target="_blank"
            >
              Get in Touch
            </a>
          </div> */}
          <div className="header__bg js-header-bg"></div>
        </div>
      </header>
    </>
  )
}

export default Header
