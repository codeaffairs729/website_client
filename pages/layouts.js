import React from 'react'
import Image from 'next/image'

const Layouts = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
  }
  return (
    <>
      <div className="layouts">
        <div className="layouts__center center" id="layouts">
          <div className="layouts__wrap">
            <div className="layouts__head" data-aos="animation-scale-y">
              <div className="layouts__stage stage">
                Our Tools & Technologies
              </div>
              <h2 className="layouts__title title">
                Find Best Fit For Your IT Product
                {/* <span className="title__color">.</span> */}
              </h2>
            </div>
            <div className="layouts__info info" data-aos="animation-scale-y">
              From our software engineering excellence to our top-class design
              practice, we continuously seek out as well as develop optimistic
              modern techniques to handle complex problems.
            </div>
            <div className="layouts__list">
              <div
                className="layouts__item layouts-item"
                data-aos="animation-scale-y"
              >
                <div className="layouts__icon">
                  {/* <img
                    className="layouts__pic"
                    src="img/layout-1.webp"
                    alt="4 Blue & Pink Dots"
                  /> */}
                  <div className="layouts__pic">
                    <Image
                      src="/img/layout-1.webp"
                      alt="4 Blue & Pink Dots"
                      width={56}
                      height={57}
                    />
                  </div>
                </div>
                <div className="layouts__text">
                  We use those technologies that suit the nature of your
                  application.{' '}
                </div>
              </div>
              <div
                className="layouts__item layouts-item"
                data-aos="animation-scale-y"
              >
                <div className="layouts__icon">
                  {/* <img
                    className="layouts__pic"
                    src="img/layout-2.webp"
                    alt="Pink & Blue Circle"
                  /> */}
                  <div className="layouts__icon">
                    <Image
                      src="/img/layout-2.webp"
                      alt="Pink & Blue Circle"
                      width={56}
                      height={57}
                    />
                  </div>
                </div>
                <div className="layouts__text">
                  Get rid of expensive & slow tech stack with fast & advanced
                  technologies.
                </div>
              </div>
              <div
                className="layouts__item layouts-item"
                data-aos="animation-scale-y"
              >
                <div className="layouts__icon">
                  {/* <img
                    className="layouts__pic"
                    src="img/layout-3.webp"
                    alt="2 Blue & Pink Dots"
                  /> */}
                  <div className="layouts__icon">
                    <Image
                      src="/img/layout-3.webp"
                      alt="2 Blue & Pink Dots"
                      width={56}
                      height={57}
                    />
                  </div>
                </div>
                <div className="layouts__text">
                  Keep your application fast, scalable, and reliable with an
                  optimum combination.
                </div>
              </div>
            </div>

            {/* <Slider {...settings}>
              <div>
                <div className="row" >
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                    <img className="layouts__pic" src="/images/react.webp" alt="" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9" >
                    <div className="layouts__text"><h5>React / Redux</h5></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row" >
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                    <img className="layouts__pic" src="/images/andoid1.webp" alt="" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9" >
                    <div className="layouts__text"><h5>Android / Swift</h5></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row" >
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                    <img className="layouts__pic" src="/images/python.webp" alt="" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9" >
                    <div className="layouts__text"><h5>Python / Flask / Django</h5></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row" >
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                    <img className="layouts__pic" src="/images/node.webp" alt="" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9" >
                    <div className="layouts__text"><h5>Node JS</h5></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row" >
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                    <img className="layouts__pic" src="/images/ror1.webp" alt="" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9" >
                    <div className="layouts__text"><h5>Ruby on Rails</h5></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row" >
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                    <img className="layouts__pic" src="/images/php1.webp" alt="" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9" >
                    <div className="layouts__text"><h5>PHP / Wordpress</h5></div>
                  </div>
                </div>
              </div>
            </Slider> */}

            {/* <div className="row" data-aos="animation-scale-y">
              <Slider {...settings}>
                <div className="col-lg-12" >
                  <div className="row mb-5" >
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                      <img className="layouts__pic" src="/images/react.webp" alt="" />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" >
                      <div className="layouts__text"><h5>React / Redux</h5></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12" >
                  <div className="row mb-5" >
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                      <img className="layouts__pic" src="/images/andoid1.webp" alt="" />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" >
                      <div className="layouts__text"><h5>Android / Swift</h5></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12" >
                  <div className="row mb-5" >
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                      <img className="layouts__pic" src="/images/python.webp" alt="" />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" >
                      <div className="layouts__text"><h5>Python / Flask / Django</h5></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12" >
                  <div className="row mb-5" >
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                      <img className="layouts__pic" src="/images/node.webp" alt="" />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" >
                      <div className="layouts__text"><h5>Node JS</h5></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12" >
                  <div className="row mb-5" >
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                      <img className="layouts__pic" src="/images/ror1.webp" alt="" />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" >
                      <div className="layouts__text"><h5>Ruby on Rails</h5></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12" >
                  <div className="row mb-5" >
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                      <img className="layouts__pic" src="/images/php1.webp" alt="" />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" >
                      <div className="layouts__text"><h5>PHP / Wordpress</h5></div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div> */}
            {/* <div className="layouts__list" data-aos="animation-scale-y">
              <Slider {...settings}>
                <div className="layouts__item" >
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="/images/react.webp" alt="" />
                  </div>
                  <div className="layouts__text">React/Redux</div>
                </div>
                <div className="layouts__item" >
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="/images/andoid1.webp" alt="" />
                  </div>
                  <div className="layouts__text">Android/Swift</div>
                </div>
                <div className="layouts__item" >
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="/images/python.webp" alt="" />
                  </div>
                  <div className="layouts__text">Python/Flask/Django</div>
                </div>
                <div className="layouts__item" >
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="/images/node.webp" alt="" />
                  </div>
                  <div className="layouts__text">Node JS</div>
                </div>
                <div className="layouts__item" >
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="/images/ror1.webp" alt="" />
                  </div>
                  <div className="layouts__text">Ruby on Rails</div>
                </div>
                <div className="layouts__item" >
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="/images/php1.webp" alt="" />
                  </div>
                  <div className="layouts__text">PHP/Wordpress</div>
                </div>
              </Slider>

            </div> */}
          </div>
          <div className="layouts__view" data-aos>
            <div className="layouts__preview">
              {/* <img
                className="layouts__pic"
                src="img/layouts-pic-1.webp"
                alt="3D Graphs on Mobile"
              /> */}
              <div className="layouts__pic">
                <Image
                  src="/img/layouts-pic-1.webp"
                  alt="3D Graphs on Mobile"
                  width={786}
                  height={568}
                />
              </div>
              {/* <img
                className="layout-pic-react"
                src="/images/react_3.webp"
                alt="React Icon"
                data-bs-toggle="tooltip"
                title="React"
              /> */}

              <div
                className="layout-pic-react"
                data-bs-toggle="tooltip"
                title="React"
              >
                <Image
                  src="/images/react_3.webp"
                  alt="React Icon"
                  width={57}
                  height={59}
                />
              </div>

              {/* <img
                className="layout-pic-andoid"
                src="/images/node_3.webp"
                alt=""
                data-bs-toggle="tooltip"
                title="NodeJS"
              /> */}
              <div
                className="layout-pic-andoid"
                data-bs-toggle="tooltip"
                title="React"
              >
                <Image
                  src="/images/node_3.webp"
                  alt="layout-react-png"
                  width={30}
                  height={34}
                />
              </div>
              {/* <img
                className="layout-pic-python"
                src="/images/python.webp"
                alt="Python Icon"
                data-bs-toggle="tooltip"
                title="Python"
              /> */}
              <div
                className="layout-pic-python"
                data-bs-toggle="tooltip"
                title="Python"
              >
                <Image
                  src="/images/python.webp"
                  alt="Python Icon"
                  width={40}
                  height={46}
                />
              </div>
              {/* <img
                className="layout-pic-swift"
                src="images/swift_2.webp"
                alt="layout-swift-png"
                data-bs-toggle="tooltip"
                title="Swift"
              /> */}

              <div
                className="layout-pic-swift"
                data-bs-toggle="tooltip"
                title="Swift"
              >
                <Image
                  src="/images/swift_2.webp"
                  alt="layout-swift-png"
                  width={47}
                  height={47}
                />
              </div>
            </div>
            <div className="layouts__preview Play_button_preview">
              {/* <img className="layouts__pic" src="images/layouts-pic-2.webp" alt="" /> */}
              {/* <img
                className="Play_button_img"
                src="images/Play_button.webp"
                alt="Pink Solid Circle"
              /> */}
              <div className="Play_button_img">
                <Image
                  src="/images/Play_button.webp"
                  alt="Pink Solid Circle"
                  width={125}
                  height={125}
                />
              </div>
              <img
                className="layout-pic-MongoDB"
                src="/images/MongoDB.webp"
                alt="MongoDB Icon"
                data-bs-toggle="tooltip"
                title="MongoDB"
              />

              {/* <div
                className="layout-pic-MongoDB"
                data-bs-toggle="tooltip"
                title="MongoDB"
              >
                <Image
                  src="/images/MongoDB.webp"
                  alt="MongoDB Icon"
                  width={45}
                  height={53}
                />
              </div> */}
              {/* <img className="" src="images/layouts-pic-2.webp" alt="" /> */}
              {/* <img
                className="layout-pic-message"
                src="images/Message.webp"
                alt="3D Message Tab"
              /> */}

              <div className="layout-pic-message">
                <Image
                  src="/images/Message.webp"
                  alt="3D Message Tab"
                  width={250}
                  height={152}
                />
              </div>

              {/* <img
                className="layout-pic-android_3"
                src="/images/android_3.webp"
                alt="layout-pic-android-png"
                data-bs-toggle="tooltip"
                title="Android"
              /> */}
              <div
                className="layout-pic-android_3"
                data-bs-toggle="tooltip"
                title="Android"
              >
                <Image
                  src="/images/android_3.webp"
                  alt="layout-pic-android-png"
                  width={42}
                  height={36}
                />
              </div>
            </div>
            <div className="layouts__preview">
              {/* <img
                className="layouts__pic"
                src="img/layouts-pic-3.webp"
                alt="3D Tool Box"
              /> */}

              <div className="layouts__pic">
                <Image
                  src="/img/layouts-pic-3.webp"
                  alt="3D Tool Box"
                  width={51}
                  height={228}
                />
              </div>
            </div>
            <div className="layouts__preview">
              {/* <img
                className="layouts__pic"
                src="img/layouts-pic-4.webp"
                alt="3D Pink Box"
              /> */}

              <div className="layouts__pic">
                <Image
                  src="/img/layouts-pic-4.webp"
                  alt="3D Pink Box"
                  width={218}
                  height={263}
                />
              </div>

              {/* <img
                className="layout-pic-ror_top_2"
                src="/images/ror_top_2.webp"
                alt="ROR Top"
                data-bs-toggle="tooltip"
                title="Ruby On Rails"
              /> */}

              <div
                className="layout-pic-ror_top_2"
                data-bs-toggle="tooltip"
                title="Ruby On Rails"
              >
                <Image
                  src="/images/ror_top_2.webp"
                  alt="ROR Top"
                  width={48}
                  height={47}
                />
              </div>

              {/* <img
                className="layout-pic-ror_bottom_2"
                src="/images/ror_bottom_2.webp"
                alt="ROR Bottom"
                data-bs-toggle="tooltip"
                title="Ruby On Rails"
              /> */}

              <div
                className="layout-pic-ror_bottom_2"
                data-bs-toggle="tooltip"
                title="Ruby On Rails"
              >
                <Image
                  src="/images/ror_bottom_2.webp"
                  alt="ROR Bottom"
                  width={48}
                  height={47}
                />
              </div>
            </div>
            <div className="layouts__preview layouts-preview-figma">
              {/* <img
                className="layouts__pic layouts_pic_figma"
                src="images/figma.webp"
                alt="3D Figma Image"
                data-bs-toggle="tooltip"
                title="Figma"
              /> */}

              <div className="layouts__pic layouts_pic_figma">
                <Image
                  src="/images/FIGMA.webp"
                  alt="3D Pink Box"
                  width={256}
                  height={182}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layouts
