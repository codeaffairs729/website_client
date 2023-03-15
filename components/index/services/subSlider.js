import React from 'react'
import Image from 'next/image'

const SubSlider = (props) => {
  const { techImage, techName, imgWidth, imgHeight } = props
  return (
    <>
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          {/* <img className="package-subslider-img" src={techImage} alt={techName} /> */}
          <Image
            src={techImage}
            alt={techName}
            width={imgWidth}
            height={imgHeight}
          />
        </div>
        {techName}
        <div className="col-lg-12 package-subslider-name">
          <span className="package-subslider-h6">{techName}</span>
        </div>
      </div>
    </>
  )
}

export default SubSlider
