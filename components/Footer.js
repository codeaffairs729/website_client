import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import FooterCss from '../styles/Footer.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Footer = () => {
  const size = useWindowSize()
  const router = useRouter()
  const [areaExapand, setAriaExpand] = useState(false)
  const [areaExapandIndustries1, setAriaExpandIndustries1] = useState(false)
  const [areaExapandIndustries2, setAriaExpandIndustries2] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const pathname = router.pathname

  const handleAreaExpand = () => {
    setTimeout(() => {
      setAriaExpand(!areaExapand)
    }, '0')
  }
  const handleAreaExpandIndustries1 = () => {
    setTimeout(() => {
      setAriaExpandIndustries1(!areaExapandIndustries1)
    }, '0')
  }
  const handleAreaExpandIndustries2 = () => {
    setTimeout(() => {
      setAriaExpandIndustries2(!areaExapandIndustries2)
    }, '0')
  }

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
    })

    useEffect(() => {
      setTimeout(() => {
        setIsLoaded(true)
      }, '1000')

      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        })
      }

      window.addEventListener('resize', handleResize)

      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }, [])
    return windowSize
  }
  const width = size.width

  let isShort = false

  if (width <= 800) {
    isShort = true
  } else {
    isShort = false
  }

  return (
    <div
      style={{
        display: isLoaded ? 'block' : 'none',
      }}
    >
      <div className={`row ${FooterCss.footer_container}`}>
        <div className={`col-md-6 col-sm-12 ${FooterCss.left_container} `}>
          <div className={` ${FooterCss.left_footer_details}`}>
            <div className={`${FooterCss.logo_container} `}>
              <Image
                src="/footer-images/Logo__text.svg"
                alt="Code Garage Tech - Logo"
                width={210}
                height={39}
                priority={true}
              />
            </div>
            <div className={`${FooterCss.left_items_container}`}>
              <div className={` ${FooterCss.header_text} `}>
                We ensure the scalability of businesses <br />
                to meet evolving needs with our optimal <br />
                approaches.
              </div>

              <div className={` ${FooterCss.contact_details_container}`}>
                <div className={`${FooterCss.india_container}`}>
                  <span>
                    <Image
                      src="/footer-images/US_logo.svg"
                      alt="us-flag-logo"
                      width={32}
                      height={24}
                    />
                  </span>
                  <span className={FooterCss.usa_text}>
                    &nbsp;&nbsp;+1 760 683 9821
                  </span>
                </div>
                <div className={`${FooterCss.india_container}`}>
                  <span>
                    <Image
                      src="/footer-images/india_logo.svg"
                      alt="india-flag-logo"
                      width={32}
                      height={24}
                    />
                  </span>
                  <span className={FooterCss.india_text}>
                    &nbsp;&nbsp;+91 8146394889
                  </span>
                </div>

                <div className={` ${FooterCss.email_container} `}>
                  <span>
                    <Image
                      src="/footer-images/Group.svg"
                      alt="email-logo"
                      width={32}
                      height={24}
                    />
                  </span>
                  {pathname == '/careers' ? (
                    <span className={FooterCss.email_text}>
                      &nbsp;&nbsp;hr@codegaragetech.com
                    </span>
                  ) : (
                    <span className={FooterCss.email_text}>
                      &nbsp;&nbsp;sales@codegaragetech.com
                    </span>
                  )}
                </div>
              </div>
              <div className={` ${FooterCss.address_text}  `}>
                The Atrium Quarkcity, industrial <br />
                area,SAS-Nagar,Mohali,Punjab
                <br />
                -160059
              </div>

              <div className={`${FooterCss.social_links_container}`}>
                <a
                  href="https://in.linkedin.com/company/codegarage-tech"
                  className="cursor_pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <Image
                      src={'/images/LinkedIn3d.webp'}
                      alt="3D LinkedIn Icon"
                      height={35}
                      width={35}
                    />
                  </div>
                </a>
                <a
                  className="cursor_pointer"
                  href="https://www.facebook.com/codegaragetech/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <Image
                      src={'/images/Facebook3d.webp'}
                      alt="3D Facebook Icon"
                      height={35}
                      width={35}
                    />
                  </div>
                </a>
                <a
                  className="cursor_pointer"
                  href="https://www.instagram.com/codegaragetech/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <Image
                      src={'/images/Instagram3d.webp'}
                      alt="3D Instagram Icon"
                      height={35}
                      width={35}
                    />
                  </div>
                </a>
                <a
                  className="cursor_pointer"
                  href="https://twitter.com/codegaragetech"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <Image
                      src={'/images/Twitter3d.webp'}
                      alt="3D Twitter Icon"
                      height={35}
                      width={35}
                    />
                  </div>
                </a>
                <a
                  className="cursor_pointer"
                  href="https://join.skype.com/invite/sJVyftWdVzOu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <Image
                      src={'/images/skype3d.webp'}
                      alt="3D Skype Icon"
                      height={35}
                      width={35}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-md-6 col-sm-12 ${FooterCss.right}`}>
          <div
            id="accordionExample"
            className={
              isShort
                ? `accordian w-100 col-md-6 col-sm-12 p-3 ${FooterCss.right_container}`
                : `w-100 col-md-6 col-sm-12 p-3 ${FooterCss.right_container}`
            }
          >
            <div
              className={
                isShort
                  ? `accordion-item ${FooterCss.industries_container}`
                  : `${FooterCss.industries_container}`
              }
            >
              {isShort ? (
                <div
                  className={`${FooterCss.btn_container}`}
                  onClick={() => handleAreaExpandIndustries2()}
                >
                  <button
                    id="headingThree"
                    className={` accordion-header accordion-button ${FooterCss.button}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    Quick Links
                  </button>
                  {areaExapandIndustries2 ? (
                    <Image src="/footer-images/up.png" width={16} height={16} />
                  ) : (
                    <Image
                      src="/footer-images/down.png"
                      alt="down-arrow-png"
                      width={16}
                      height={16}
                    />
                  )}
                </div>
              ) : (
                <span className={`${FooterCss.stack_text}`}>Quick Links</span>
              )}

              <div
                id="collapseThree"
                className={
                  isShort
                    ? `accordion-collapse collapse accordion-body   ${FooterCss.our_stack_items_container}`
                    : `${FooterCss.our_stack_items_container}`
                }
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <Link href="/">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <div className={`${FooterCss.stack_item_text}`}>Home</div>
                  </div>
                </Link>
                <Link href="/about-us">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <div className={`${FooterCss.stack_item_text}`}>
                      About Us
                    </div>
                  </div>
                </Link>
                <Link href="/hire-freelancer">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <div className={`${FooterCss.stack_item_text}`}>
                      Hire a Freelancer
                    </div>
                  </div>
                </Link>
                <Link href="/hire-team">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <div className={`${FooterCss.stack_item_text}`}>
                      Hire a Team
                    </div>
                  </div>
                </Link>
                <Link href="/careers">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <div className={`${FooterCss.stack_item_text}`}>Career</div>
                  </div>
                </Link>
                <Link href="/blogs">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <div className={`${FooterCss.stack_item_text}`}>Blogs</div>
                  </div>
                </Link>
                <Link href="/contact">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <div className={`${FooterCss.stack_item_text}`}>
                      Contact Us
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={
                isShort
                  ? `accordion-item ${FooterCss.our_stack_container}`
                  : `${FooterCss.our_stack_container}`
              }
            >
              {isShort ? (
                <div
                  className={` ${FooterCss.btn_container}`}
                  onClick={() => handleAreaExpand()}
                >
                  <button
                    id="headingOne"
                    className={` accordion-header accordion-button ${FooterCss.button}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Our Stack
                  </button>
                  {areaExapand ? (
                    <Image src="/footer-images/up.png" width={16} height={16} />
                  ) : (
                    <Image
                      src="/footer-images/down.png"
                      alt="down-arrow-png"
                      width={16}
                      height={16}
                    />
                  )}
                </div>
              ) : (
                <span className={`${FooterCss.stack_text}`}>Our Stack</span>
              )}

              <div
                id="collapseOne"
                className={
                  isShort
                    ? `accordion-collapse collapse accordion-body ${FooterCss.our_stack_items_container}`
                    : `${FooterCss.our_stack_items_container}`
                }
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <Link href="/services/web-solutions/#ruby-rails">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <Image
                      src={'/footer-images/Ruby.svg'}
                      alt="Ruby Icon"
                      height={16}
                      width={16}
                    />
                    <div className={`${FooterCss.stack_item_text}`}>
                      Ruby on Rails
                    </div>
                  </div>
                </Link>
                <Link href="/services/web-solutions/#laravel">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <Image
                      src={'/icons/laravel.webp'}
                      alt="Node Icon"
                      height={16}
                      width={16}
                    />
                    <div className={`${FooterCss.stack_item_text}`}>
                      Laravel
                    </div>
                  </div>
                </Link>
                <Link href="/services/reactjs-nextjs">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <Image
                      src={'/footer-images/nextjs-white-bg.png'}
                      alt="NextJs Icon"
                      height={16}
                      width={16}
                    />
                    <div className={`${FooterCss.stack_item_text}`}>NextJS</div>
                  </div>
                </Link>
                <Link href="/services/mobile-solutions/#flutter">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <Image
                      src={'/images/flutter.webp'}
                      alt="flutter-Icon"
                      height={16}
                      width={16}
                    />
                    <div className={`${FooterCss.stack_item_text}`}>
                      Flutter
                    </div>
                  </div>
                </Link>
                <Link href="/services/mobile-solutions/#android">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <Image
                      src={'/footer-images/Android_robot.svg.png'}
                      alt="android-Icon"
                      height={16}
                      width={16}
                    />
                    <div className={`${FooterCss.stack_item_text}`}>
                      Android
                    </div>
                  </div>
                </Link>
                <Link href="/services/mobile-solutions/#ios">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <Image
                      src={'/icons/ios.webp'}
                      alt="IOS-Icon"
                      height={16}
                      width={16}
                    />
                    <div className={`${FooterCss.stack_item_text}`}>IOS</div>
                  </div>
                </Link>

                <Link href="/services/devops">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <Image
                      src={'/footer-images/devops.png'}
                      alt="DevOps-icon"
                      height={16}
                      width={16}
                    />
                    <div className={`${FooterCss.stack_item_text}`}>DevOps</div>
                  </div>
                </Link>
                <Link href="/services/web-solutions/#wordpress">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <Image
                      src={'/icons/wordpress.webp'}
                      alt="Wordpress-icon"
                      height={16}
                      width={16}
                    />
                    <div className={`${FooterCss.stack_item_text}`}>
                      Wordpress
                    </div>
                  </div>
                </Link>
                <Link href="/services/mobile-solutions/#mobile_react">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <Image
                      src={'/icons/react_native.webp'}
                      alt="React-Native-icon"
                      height={16}
                      width={16}
                    />
                    <div className={`${FooterCss.stack_item_text}`}>
                      React Native
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={
                isShort
                  ? `accordion-item ${FooterCss.industries_container}`
                  : `${FooterCss.industries_container}`
              }
            >
              {isShort ? (
                <div
                  className={`${FooterCss.btn_container}`}
                  onClick={() => handleAreaExpandIndustries1()}
                >
                  <button
                    id="headingTwo"
                    className={` accordion-header accordion-button ${FooterCss.button}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    Industries We Serve
                  </button>
                  {areaExapandIndustries1 ? (
                    <Image src="/footer-images/up.png" width={16} height={16} />
                  ) : (
                    <Image
                      src="/footer-images/down.png"
                      alt="down-arrow-png"
                      width={16}
                      height={16}
                    />
                  )}
                </div>
              ) : (
                <span className={`${FooterCss.stack_text}`}>
                  Industries We Serve
                </span>
              )}

              <div
                id="collapseTwo"
                className={
                  isShort
                    ? `accordion-collapse collapse accordion-body   ${FooterCss.our_stack_items_container}`
                    : `${FooterCss.our_stack_items_container}`
                }
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <Link href="/services/ecommerce-solutions">
                  <div className={`${FooterCss.stack_items} cursor_pointer`}>
                    <Image
                      src={'/footer-images/commerce.png'}
                      alt="E-commerce-Icon"
                      height={16}
                      width={16}
                    />
                    <div className={`${FooterCss.stack_item_text}`}>
                      E-commerce
                    </div>
                  </div>
                </Link>
                <div className={`${FooterCss.stack_items} cursor_pointer`}>
                  <Image
                    src={'/footer-images/healthcare.png'}
                    alt="Healthcare-Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Healthcare
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/education.png'}
                    alt="education-icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Education & E-Learning
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/social.png'}
                    alt="social-networking-icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Social Networking
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/travel.png'}
                    alt="Packing & Moving"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Packing & Moving
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/building.png'}
                    alt="Real-Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Real Estate
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/fintech.png'}
                    alt="Fintech Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>Fintech</div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/automotive.png'}
                    alt="Automotive Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Automotive
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/ai.png'}
                    alt="AI & ML"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>AI & ML</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`row ${FooterCss.footer_footer_container}`}>
        <div className={`col-lg-8 col-sm-12 ${FooterCss.footer_copyright}`}>
          © Copyright 2022. Code Garage Tech Private Ltd.
        </div>

        <div
          className={`col-lg-4 col-sm-12  ${FooterCss.footer_copyright_right}`}
        >
          <div className={`${FooterCss.right_links_container}`}>
            <div>All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
