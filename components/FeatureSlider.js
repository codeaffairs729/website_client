import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
const bannerImage = [
  { name: 'Ruby on Rails', path: 'icons/rails.webp', altImg: 'Rails PNG' },
  { name: 'ReactJs', path: 'icons/reactjs.webp', altImg: 'Reactjs Icon' },
  { name: 'NextJs', path: 'icons/nextjs.webp', altImg: 'Nextjs Icon' },
  { name: 'VueJs', path: 'icons/vuejs.webp', altImg: 'Vuejs Icon' },
  { name: 'NuxtJs', path: 'icons/nuxtjs.webp', altImg: 'Nuxtjs Icon' },
  { name: 'NodeJs', path: 'icons/nodejs.webp', altImg: 'Nodejs Icon' },
  { name: 'Laravel', path: 'icons/laravel.webp', altImg: '' },
  { name: 'Shopify', path: 'images/shopify.webp', altImg: 'Shopify PNG Image' },
  { name: 'Wordpress', path: 'icons/wordpress.webp', altImg: 'Wordpress Icon' },
  { name: 'React Native', path: 'icons/reactjs.webp', altImg: 'Reactjs Icon' },
  { name: 'Ionic', path: 'icons/ionic.webp', altImg: 'Ionic Icon' },
  { name: 'Flutter', path: 'images/flutter.webp', altImg: 'Flutter PNG Image' },
  { name: 'Swift / iOS', path: 'icons/swift.webp', altImg: 'Swift Icon' },
  { name: 'Android', path: 'images/android_4.webp', altImg: '' },
]

var settings = {
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  initialSlide: 0,
  vertical: true,
  lazyload: 'progressive',
  responsive: [
    {
      breakpoint: 480,
      settings: {
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
  // rows: 1,
  // slidesPerRow: 1,
  // adaptiveHeight:true
}

const FeatureSlider = () => {
  return (
    <>
      <div className="feature-list-div-container">
        <Slider {...settings}>
          <div className="row feature-slide-row">
            <div className="col-lg-12">
              <div className="row align-items-center py-3">
                <div className="col-3 col-sm-2 align-items-center justify-content-center">
                  <Image
                    src="/icons/Rect-4-circle.svg"
                    alt=""
                    width={56}
                    height={56}
                  />
                </div>
                <div className="col-9 col-sm-10 align-items-center">
                  <h3>RESEARCH & INNOVATION</h3>
                  <p>
                    Transform your product idea into a reality. Strategize and
                    assess the key features of your product required to achieve
                    your business objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row feature-slide-row">
            <div className="col-lg-12">
              <div className="row align-items-center py-3">
                <div className="col-3 col-sm-2 align-items-center justify-content-center">
                  <Image
                    src="/icons/Rect-1-circle.svg"
                    alt=""
                    width={56}
                    height={56}
                  />
                </div>
                <div className="col-9 col-sm-10 align-items-center">
                  <h3>IDEATION AND DESIGN</h3>
                  <p>
                    Craft a distinct and precise visual identity for your brand
                    and product through personalized designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row feature-slide-row">
            <div className="col-lg-12">
              <div className="row align-items-center py-3">
                <div className="col-3 col-sm-2 align-items-center justify-content-center">
                  <Image
                    src="/icons/Rect-4-circle.svg"
                    alt=""
                    width={56}
                    height={56}
                  />
                </div>
                <div className="col-9 col-sm-10 align-items-center">
                  <h3>EEFFICACIOUS SOFT SOLUTIONS</h3>
                  <p>
                    Our adept software developers always deliver highly
                    responsive and interactive user interfaces that offer users
                    a fascinating experience
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row feature-slide-row">
              <div className="col-lg-12">
                <div className="row align-items-center py-3">
                  <div className="col-3 col-sm-2 align-items-center justify-content-center">
                    <Image
                      src="/icons/Rect-1-circle.svg"
                      alt=""
                      width={56}
                      height={56}
                    />
                  </div>
                  <div className="col-9 col-sm-10 align-items-center">
                    <h3>SCALE AND MARKET</h3>
                    <p>
                      Our goal is to assist your growth by ensuring that your
                      project meets the constantly-evolving market demands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row feature-slide-row">
            <div className="col-lg-12">
              <div className="row align-items-center py-3">
                <div className="col-3 col-sm-2 align-items-center justify-content-center">
                  <Image
                    src="/icons/Rect-4-circle.svg"
                    alt=""
                    width={56}
                    height={56}
                  />
                </div>
                <div className="col-9 col-sm-10 align-items-center">
                  <h3>PROCESS OPTIMIZATION</h3>
                  <p>
                    We adopt the systematic approach of identifying, analyzing,
                    and improving business processes to increase efficiency and
                    enhance quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row feature-slide-row">
            <div className="col-lg-12">
              <div className="row align-items-center py-3">
                <div className="col-3 col-sm-2 align-items-center justify-content-center">
                  <Image
                    src="/icons/Rect-1-circle.svg"
                    alt=""
                    width={56}
                    height={56}
                  />
                </div>
                <div className="col-9 col-sm-10 align-items-center">
                  <h3>LIMITLESS THINKING</h3>
                  <p>
                    We ensure a creative and innovative approach to
                    problem-solving that involves thinking beyond conventional
                    and ordinary ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row feature-slide-row">
            <div className="col-lg-12">
              <div className="row align-items-center py-3">
                <div className="col-3 col-sm-2 align-items-center justify-content-center">
                  <Image
                    src="/icons/Rect-4-circle.svg"
                    alt=""
                    width={56}
                    height={56}
                  />
                </div>
                <div className="col-9 col-sm-10 align-items-center">
                  <h3>SYSTEM UPGRADATION</h3>
                  <p>
                    We upgrade the system to increase its functionality,
                    performance, security, usability, and productivity, and
                    enhance user satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default FeatureSlider
