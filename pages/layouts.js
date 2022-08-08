import React from 'react'

const Layouts = () => {
  return (
    <>
      <div className="layouts">
        <div className="layouts__center center">
          <div className="layouts__wrap">
            <div className="layouts__head" data-aos="animation-scale-y">
              <h2 className="layouts__title title">Technologies We Use<span className="title__color">.</span></h2>
            </div>
            {/* <div className="layouts__info info" data-aos="animation-scale-y">Easily create truly responsive components while deploying production-ready code.</div> */}
            <div className="row" >
              <div className="col-lg-6" >
                <div className="row mb-5" data-aos="animation-scale-y" >
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4" >
                    <img className="layouts__pic" src="/images/react.png" alt="" />
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 col-8" style={{margin: "auto 0"}}>
                    <div className="layouts__text"><h4>React / Redux</h4></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" >
                <div className="row mb-5" data-aos="animation-scale-y">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4" >
                    <img className="layouts__pic" src="/images/andoid1.png" alt="" />
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 col-8" style={{margin: "auto 0"}}>
                    <div className="layouts__text"><h4>Android / Swift</h4></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" >
                <div className="row mb-5" data-aos="animation-scale-y">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4" >
                    <img className="layouts__pic" src="/images/python.png" alt="" />
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 col-8" style={{margin: "auto 0"}}>
                    <div className="layouts__text"><h4>Python / Flask / Django</h4></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" >
                <div className="row mb-5" data-aos="animation-scale-y" >
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4" >
                    <img className="layouts__pic" src="/images/node.png" alt="" />
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 col-8" style={{margin: "auto 0"}}>
                    <div className="layouts__text"><h4>Node JS</h4></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" >
                <div className="row mb-5" data-aos="animation-scale-y">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4" >
                    <img className="layouts__pic" src="/images/ror1.png" alt="" />
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 col-8" style={{margin: "auto 0"}}>
                    <div className="layouts__text"><h4>Ruby on Rails</h4></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" >
                <div className="row mb-5" data-aos="animation-scale-y">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4" >
                    <img className="layouts__pic" src="/images/php1.png" alt="" />
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 col-8" style={{margin: "auto 0"}}>
                    <div className="layouts__text"><h4>PHP / Wordpress</h4></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="layouts__list">
              <div className="layouts__item" data-aos="animation-scale-y">
                <div className="layouts__icon">
                  <img className="layouts__pic" src="/images/react.png" alt="" />
                </div>
                <div className="layouts__text">React/Redux</div>
              </div>
              <div className="layouts__item" data-aos="animation-scale-y">
                <div className="layouts__icon">
                  <img className="layouts__pic" src="/images/andoid1.png" alt="" />
                </div>
                <div className="layouts__text">Android/Swift</div>
              </div>
              <div className="layouts__item" data-aos="animation-scale-y">
                <div className="layouts__icon">
                  <img className="layouts__pic" src="/images/python.png" alt="" />
                </div>
                <div className="layouts__text">Python/Flask/Django</div>
              </div>
              <div className="layouts__item" data-aos="animation-scale-y">
                <div className="layouts__icon">
                  <img className="layouts__pic" src="/images/node.png" alt="" />
                </div>
                <div className="layouts__text">Node JS</div>
              </div>
              <div className="layouts__item" data-aos="animation-scale-y">
                <div className="layouts__icon">
                  <img className="layouts__pic" src="/images/ror1.png" alt="" />
                </div>
                <div className="layouts__text">Ruby on Rails</div>
              </div>
              <div className="layouts__item" data-aos="animation-scale-y">
                <div className="layouts__icon">
                  <img className="layouts__pic" src="/images/php1.png" alt="" />
                </div>
                <div className="layouts__text">PHP/Wordpress</div>
              </div>
            </div> */}
          </div>
          <div className="layouts__view" data-aos>
            <div className="layouts__preview">
              <img className="layouts__pic" src="img/layouts-pic-1.png" alt="" />
              <img className="layout-pic-react" src="/images/react_3.png" alt="" />
              <img className="layout-pic-andoid" src="/images/node_3.png" alt="" />
              <img className="layout-pic-python" src="/images/python.png" alt="" />
              <img className="layout-pic-swift" src="images/swift_2.png" alt="" />
            </div>
            <div className="layouts__preview">
              <img className="layouts__pic" src="images/layouts-pic-2.png" alt="" />

              <img className="layout-pic-php" src="/images/MongoDB.png" alt="" />
              <img className="layout-pic-ror" src="/images/android_3.png" alt="" />
            </div>
            <div className="layouts__preview">
              <img className="layouts__pic" src="img/layouts-pic-3.png" alt="" />
            </div>
            <div className="layouts__preview">
              <img className="layouts__pic" src="img/layouts-pic-4.png" alt="" />
              <img className="layout-pic-ror_top_2" src="/images/ror_top_2.png" alt="" />
              <img className="layout-pic-ror_bottom_2" src="/images/ror_bottom_2.png" alt="" />
            </div>
            <div className="layouts__preview">
              <img className="layouts__pic" src="images/figma.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layouts