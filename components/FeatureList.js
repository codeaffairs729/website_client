import React from 'react'
import Image from 'next/image'
const FeatureList = () => {
  const feature = [
    {
      title: 'RESEARCH & INNOVATION',
      desc: 'Transform your product idea into a reality. Strategize and assess the key features of your product required to achieve your business objectives.',
      img: '/icons/Rect-4-circle.svg',
    },
    {
      title: 'IDEATION AND DESIGN',
      desc: 'Craft a distinct and precise visual identity for your brand and product through personalized designs.',
      img: '/icons/Rect-1-circle.svg',
    },
    {
      title: 'SCALE AND MARKET',
      desc: 'Our goal is to assist your growth by ensuring that your project meets the constantly-evolving market demands.',
      img: '/icons/Rect-1-circle.svg',
    },
    {
      title: 'PROCESS OPTIMIZATION',
      desc: 'We adopt the systematic approach of identifying,analyzing, and improving business processes to increase efficiency and enhance quality.',
      img: '/icons/Rect-4-circle.svg',
    },
  ]

  return (
    <div className="feature-list container">
      <div>
        <Image
          src="/icons/Ellipse-blue-full.svg"
          alt=""
          width={56}
          height={56}
          // data-aos="zoom-in"
          // data-aos-delay="200"
          // data-aos-offset="10"
        />
      </div>

      <div className="row align-items-center  gx-5 feature-overflow-hiiden">
        <div className="col-md-12 col-lg-6">
          <div className="feature-small-text" data-aos="animation-scale-y">
            Definite Process, Remarkable Outcomes
          </div>
          <h2 className="mb-4" data-aos="animation-scale-y">
            Leading The Way In Crafting New Innovations
          </h2>
          <p className="mb-4" data-aos="animation-scale-y">
            We understand that your goals are unique and believe that business
            advice and solutions should be tailored accordingly. Allow us to
            assist you with top-notch software development solutions.
          </p>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="feature-list-div-container">
            {feature.map((e, i) => (
              <div
                className="feature-slide-row d-flex align-items-center py-3"
                key={i}
                data-aos="animation-scale-y"
              >
                <div className="logo-container">
                  <Image src={e.img} alt="" width={56} height={56} />
                </div>
                <div className="align-items-center">
                  <h3>{e.title}</h3>
                  <p>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ellipse-blue-full">
        <Image
          src="/icons/Ellipse-blue-full.svg"
          alt=""
          width={56}
          height={56}
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-offset="10"
        />
      </div>
    </div>
  )
}

export default FeatureList
