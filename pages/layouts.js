import React from 'react'
import Slider from "react-slick";

const Layouts = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true
  };
  return (
    <>
      <div className="layouts">
        <div className="layouts__center center" id="layouts">
          <div className="layouts__wrap">
            <div className="layouts__head" data-aos="animation-scale-y">
              <div className="layouts__stage stage">Our Tools & Technologies</div>
              <h2 className="layouts__title title">
                Find Best Fit For Your IT Product
                {/* <span className="title__color">.</span> */}
              </h2>
            </div>
            <div className="layouts__info info" data-aos="animation-scale-y">
              From our software engineering excellence to our top-class design practice, we continuously seek out as well as develop optimistic modern techniques to handle complex problems.
            </div>
            <div className="layouts__list">
              <div className="layouts__item layouts-item" data-aos="animation-scale-y">
                <div className="layouts__icon">
                  <img className="layouts__pic" src="img/layout-1.svg" alt="" />
                </div>
                <div className="layouts__text">
                  We implement those technologies that suit the nature of your application.                </div>
              </div>
              <div className="layouts__item layouts-item" data-aos="animation-scale-y">
                <div className="layouts__icon">
                  <img className="layouts__pic" src="img/layout-2.svg" alt="" />
                </div>
                <div className="layouts__text">
                  Get rid of expensive & slow tech stack with fast & advanced technologies.
                </div>
              </div>
              <div className="layouts__item layouts-item" data-aos="animation-scale-y">
                <div className="layouts__icon">
                  <img className="layouts__pic" src="img/layout-3.svg" alt="" />
                </div>
                <div className="layouts__text">
                  Keep your application fast, scalable, and reliable with an optimum combination.
                </div>
              </div>
            </div>

            {/* <Slider {...settings}>
              <div>
                <div className="row" >
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                    <img className="layouts__pic" src="/images/react.png" alt="" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9" style={{margin: "auto 0"}}>
                    <div className="layouts__text"><h5>React / Redux</h5></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row" >
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                    <img className="layouts__pic" src="/images/andoid1.png" alt="" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9" style={{margin: "auto 0"}}>
                    <div className="layouts__text"><h5>Android / Swift</h5></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row" >
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                    <img className="layouts__pic" src="/images/python.png" alt="" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9" style={{margin: "auto 0"}}>
                    <div className="layouts__text"><h5>Python / Flask / Django</h5></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row" >
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                    <img className="layouts__pic" src="/images/node.png" alt="" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9" style={{margin: "auto 0"}}>
                    <div className="layouts__text"><h5>Node JS</h5></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row" >
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                    <img className="layouts__pic" src="/images/ror1.png" alt="" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9" style={{margin: "auto 0"}}>
                    <div className="layouts__text"><h5>Ruby on Rails</h5></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row" >
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                    <img className="layouts__pic" src="/images/php1.png" alt="" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9" style={{margin: "auto 0"}}>
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
                      <img className="layouts__pic" src="/images/react.png" alt="" />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" style={{margin: "auto 0"}}>
                      <div className="layouts__text"><h5>React / Redux</h5></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12" >
                  <div className="row mb-5" >
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                      <img className="layouts__pic" src="/images/andoid1.png" alt="" />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" style={{margin: "auto 0"}}>
                      <div className="layouts__text"><h5>Android / Swift</h5></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12" >
                  <div className="row mb-5" >
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                      <img className="layouts__pic" src="/images/python.png" alt="" />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" style={{margin: "auto 0"}}>
                      <div className="layouts__text"><h5>Python / Flask / Django</h5></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12" >
                  <div className="row mb-5" >
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                      <img className="layouts__pic" src="/images/node.png" alt="" />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" style={{margin: "auto 0"}}>
                      <div className="layouts__text"><h5>Node JS</h5></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12" >
                  <div className="row mb-5" >
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                      <img className="layouts__pic" src="/images/ror1.png" alt="" />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" style={{margin: "auto 0"}}>
                      <div className="layouts__text"><h5>Ruby on Rails</h5></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12" >
                  <div className="row mb-5" >
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3" >
                      <img className="layouts__pic" src="/images/php1.png" alt="" />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" style={{margin: "auto 0"}}>
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
                    <img className="layouts__pic" src="/images/react.png" alt="" />
                  </div>
                  <div className="layouts__text">React/Redux</div>
                </div>
                <div className="layouts__item" >
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="/images/andoid1.png" alt="" />
                  </div>
                  <div className="layouts__text">Android/Swift</div>
                </div>
                <div className="layouts__item" >
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="/images/python.png" alt="" />
                  </div>
                  <div className="layouts__text">Python/Flask/Django</div>
                </div>
                <div className="layouts__item" >
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="/images/node.png" alt="" />
                  </div>
                  <div className="layouts__text">Node JS</div>
                </div>
                <div className="layouts__item" >
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="/images/ror1.png" alt="" />
                  </div>
                  <div className="layouts__text">Ruby on Rails</div>
                </div>
                <div className="layouts__item" >
                  <div className="layouts__icon">
                    <img className="layouts__pic" src="/images/php1.png" alt="" />
                  </div>
                  <div className="layouts__text">PHP/Wordpress</div>
                </div>
              </Slider>

            </div> */}
          </div>
          <div className="layouts__view" data-aos>
            <div className="layouts__preview">
              <img className="layouts__pic" src="img/layouts-pic-1.png" alt="" />
              <img className="layout-pic-react" src="/images/react_3.png" alt="" data-bs-toggle="tooltip" title="React" />
              <img className="layout-pic-andoid" src="/images/node_3.png" alt="" data-bs-toggle="tooltip" title="NodeJS" />
              <img className="layout-pic-python" src="/images/python.png" alt="" data-bs-toggle="tooltip" title="Python" />
              <img className="layout-pic-swift" src="images/swift_2.png" alt="" data-bs-toggle="tooltip" title="Swift" />
            </div>
            <div className="layouts__preview Play_button_preview">
              {/* <img className="layouts__pic" src="images/layouts-pic-2.png" alt="" /> */}
              <img className="Play_button_img" src="images/Play_button.png" alt="" />
              {/* <img className="" src="images/layouts-pic-2.png" alt="" /> */}

              <img className="layout-pic-MongoDB" src="/images/MongoDB.png" alt="" data-bs-toggle="tooltip" title="MongoDB" />

              <img className="layout-pic-message" src="images/Message.png" alt="" />
              <img className="layout-pic-android_3" src="/images/android_3.png" alt="" data-bs-toggle="tooltip" title="Android" />
            </div>
            <div className="layouts__preview">
              <img className="layouts__pic" src="img/layouts-pic-3.png" alt="" />
            </div>
            <div className="layouts__preview">
              <img className="layouts__pic" src="img/layouts-pic-4.png" alt="" />
              <img className="layout-pic-ror_top_2" src="/images/ror_top_2.png" alt="" data-bs-toggle="tooltip" title="Ruby On Rails" />
              <img className="layout-pic-ror_bottom_2" src="/images/ror_bottom_2.png" alt="" data-bs-toggle="tooltip" title="Ruby On Rails" />
            </div>
            <div className="layouts__preview layouts-preview-figma">
              <img className="layouts__pic layouts_pic_figma" src="images/figma.png" alt="" data-bs-toggle="tooltip" title="Figma" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layouts