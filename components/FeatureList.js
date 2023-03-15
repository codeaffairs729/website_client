import React from 'react'
import Image from 'next/image'
import FeatureSlider from './FeatureSlider'
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
      <div className="row align-items-center gx-5 feature-overflow-hiiden">
        <div className="col-md-12 col-lg-5">
          <div className="feature-small-text">Think No Limits</div>
          <h2 className="mb-4">Leading The Way In Crafting New Innovations</h2>
          <p className="mb-4">
            We understand that your goals are unique and believe that business
            advice and solutions should be tailored accordingly. Allow us to
            assist you with top-notch software development solutions.
          </p>
        </div>
        <div className="col-md-12 col-lg-1"></div>
        <div className="col-md-12 col-lg-6">
          <FeatureSlider />
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
