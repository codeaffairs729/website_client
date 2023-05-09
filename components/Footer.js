import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import FooterCss from '../styles/Footer.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Footer = () => {
  const size = useWindowSize()
  const router = useRouter()
  const currentPath = router.pathname
  const [areaExapand, setAriaExpand] = useState(false)
  const [areaExapandIndustries1, setAriaExpandIndustries1] = useState(false)
  const [areaExapandIndustries2, setAriaExpandIndustries2] = useState(false)

  const handleAreaExpand = () => {
    setTimeout(() => {
      setAriaExpand(!areaExapand)
    }, '100')
  }
  const handleAreaExpandIndustries1 = () => {
    setTimeout(() => {
      setAriaExpandIndustries1(!areaExapandIndustries1)
    }, '100')
  }
  const handleAreaExpandIndustries2 = () => {
    setTimeout(() => {
      setAriaExpandIndustries2(!areaExapandIndustries2)
    }, '100')
  }

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    })
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener('resize', handleResize)

      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }, [])
    return windowSize
  }
  const width = size.width
  const height = size.height
  let isShort = false

  if (width <= 775) {
    isShort = true
  } else {
    isShort = false
  }

  return (
    <div className="col">
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
              {/* <div style={{ margin: 0 }} className="freelancer-btn">
                <a
                  href="/hire-freelancer"
                  target="_blank"
                  className="freelancer-main__btn"
                >
                  Hire a freelancer
                </a>
                <a
                  href="/hire-team"
                  target="_blank"
                  className="freelancer-main__btn"
                >
                  Hire a team
                </a>
              </div> */}
              <div className={` ${FooterCss.contact_details_container}`}>
                <div className={`${FooterCss.india_container}`}>
                  <span className="">
                    <Image
                      src="/footer-images/india_logo.svg"
                      width={32}
                      height={24}
                    />
                  </span>
                  <span className={FooterCss.india_text}>
                    &nbsp;&nbsp;+91 758 910 3409
                  </span>
                </div>

                <div className={`${FooterCss.india_container}`}>
                  <span>
                    <Image
                      src="/footer-images/US_logo.svg"
                      width={32}
                      height={24}
                    />
                  </span>
                  <span className={FooterCss.usa_text}>
                    &nbsp;&nbsp;+91 758 910 3409
                  </span>
                </div>
                {/* <div className={` ${FooterCss.email_container} `}>
                  <span>
                    <Image
                      src="/footer-images/Group.svg"
                      width={32}
                      height={24}
                    />
                  </span>

                  <span className={FooterCss.email_text}>
                    &nbsp;&nbsp;hr@codegaragetech.com
                  </span>
                </div> */}
                <div className={` ${FooterCss.email_container} `}>
                  <span>
                    <Image
                      src="/footer-images/Group.svg"
                      width={32}
                      height={24}
                    />
                  </span>

                  <span className={FooterCss.email_text}>
                    &nbsp;&nbsp;sales@codegaragetech.com
                  </span>
                </div>
              </div>
              <div className={` ${FooterCss.address_text}  `}>
                The Atrium Quarkcity, industrial <br />
                area,SAS-Nagar,Mohali,Punjab
                <br />
                -160059
              </div>

              <div className={`${FooterCss.social_links_container}`}>
                <div>
                  <Image
                    src={'/images/LinkedIn3d.webp'}
                    alt="3D LinkedIn Icon"
                    height={35}
                    width={35}
                  />
                </div>
                <div>
                  <Image
                    src={'/images/Facebook3d.webp'}
                    alt="3D Facebook Icon"
                    height={35}
                    width={35}
                  />
                </div>
                <div>
                  <Image
                    src={'/images/Instagram3d.webp'}
                    alt="3D Instagram Icon"
                    height={35}
                    width={35}
                  />
                </div>
                <div>
                  <Image
                    src={'/images/Twitter3d.webp'}
                    alt="3D Twitter Icon"
                    height={35}
                    width={35}
                  />
                </div>
                <div>
                  <Image
                    src={'/images/skype3d.webp'}
                    alt="3D Skype Icon"
                    height={35}
                    width={35}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-md-6 col-sm-12 ${FooterCss.right}`}>
          <div
            id="accordionExample"
            className={`accordian col-md-6 col-sm-12 p-3 ${FooterCss.right_container}`}
          >
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
                <div className={`${FooterCss.stack_items}`}>
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
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/Node.svg'}
                    alt="Node Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>Node.js</div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/Javascript.svg'}
                    alt="Java script Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Javascript
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/Php.svg'}
                    alt="Php Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>PHP</div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/Android.svg'}
                    alt="Android Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>Android</div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/React.svg'}
                    alt="React Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>React</div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/Python.svg'}
                    alt="Python Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>Python</div>
                </div>
                {/* <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/Tizen.svg'}
                    alt="Tizen Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>Tizen</div>
                </div> */}
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
                    Industries
                  </button>
                  {areaExapandIndustries1 ? (
                    <Image src="/footer-images/up.png" width={16} height={16} />
                  ) : (
                    <Image
                      src="/footer-images/down.png"
                      width={16}
                      height={16}
                    />
                  )}
                </div>
              ) : (
                <span className={`${FooterCss.stack_text}`}>Industries</span>
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
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/commerce.png'}
                    alt="Ruby Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    E-commerce
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/healthcare.png'}
                    alt="Node Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Healthcare
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/logistics.png'}
                    alt="Java script Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Logistics
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/education.png'}
                    alt="Php Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Education
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/social.png'}
                    alt="Android Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Social Networking
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/video.png'}
                    alt="React Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Video Streaming
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/fitness.png'}
                    alt="Python Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>Fitness</div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/travel.png'}
                    alt="Tizen Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>Travel</div>
                </div>
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
                    Industries
                  </button>
                  {areaExapandIndustries2 ? (
                    <Image src="/footer-images/up.png" width={16} height={16} />
                  ) : (
                    <Image
                      src="/footer-images/down.png"
                      width={16}
                      height={16}
                    />
                  )}
                </div>
              ) : (
                <span className={`${FooterCss.stack_text}`}>Industries</span>
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
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/dating.png'}
                    alt="Ruby Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>Dating</div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/manufacturing.png'}
                    alt="Node Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Manufacturing
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/estate.png'}
                    alt="Java script Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Real estate
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/grocery.png'}
                    alt="Php Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>Grocery</div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/fintech.png'}
                    alt="Android Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>Fintech</div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/entertainment.png'}
                    alt="React Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Entertainment
                  </div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/retail.png'}
                    alt="Python Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>Retail</div>
                </div>
                <div className={`${FooterCss.stack_items}`}>
                  <Image
                    src={'/footer-images/automotive.png'}
                    alt="Tizen Icon"
                    height={16}
                    width={16}
                  />
                  <div className={`${FooterCss.stack_item_text}`}>
                    Automotive
                  </div>
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
            {/* <Link href="/careers">
              <div
                className="cursor_pointer"
                style={{ color: 'white', fontSize: 16 }}
              >
                <span className={`${FooterCss.footer_links}`}>Careers</span>
              </div>
            </Link>
            <Link href="/user-blog-list">
              <div
                className="cursor_pointer"
                style={{ color: 'white', fontSize: 16 }}
              >
                <span className={`${FooterCss.footer_links}`}>Blogs</span>
              </div>
            </Link>
            <Link href="/contact">
              <div
                className="cursor_pointer"
                style={{ color: 'white', fontSize: 16 }}
              >
                <span className={`${FooterCss.footer_links}`}>Contact Us</span>
              </div>
            </Link> */}
            <div>All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
