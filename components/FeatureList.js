import React from 'react'
import Image from 'next/image'
const FeatureList = () => {
  return (
    <div className="feature-list container">
      <div>
        <Image
          src="/icons/Ellipse-pink-full.svg"
          alt=""
          width={56}
          height={56}
        />
      </div>
      <div className="row align-items-center  gx-5 feature-overflow-hiiden">
        <div className="col-md-12 col-lg-6">
          <div className="feature-small-text">Think No Limits</div>
          <h2 className="mb-4">Leading The Way In Crafting New Innovations</h2>
          <p className="mb-4">
            We understand that your goals are unique and believe that business
            advice and solutions should be tailored accordingly. Allow us to
            assist you with top-notch software development solutions.
          </p>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="feature-list-div-container">
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
                      assess the key features of your product required to
                      achieve your business objectives.
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
                      Craft a distinct and precise visual identity for your
                      brand and product through personalized designs.
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
                    <h3>SCALE AND MARKET</h3>
                    <p>
                      Our goal is to assist your growth by ensuring that your
                      project meets the constantly-evolving market demands.
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
                    <h3>PROCESS OPTIMIZATION</h3>
                    <p>
                      We adopt the systematic approach of identifying,
                      analyzing, and improving business processes to increase
                      efficiency and enhance quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ellipse-blue-full">
        <Image
          src="/icons/Ellipse-blue-full.svg"
          alt=""
          width={56}
          height={56}
        />
      </div>
    </div>
  )
}

export default FeatureList
