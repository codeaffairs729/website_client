import React from 'react'
import CaseStudyModal from './CaseStudyModal'
import LandingModal from './LandingModal'
export default function CaseStudySection() {
  const item = [
    {
      title: 'Dtechtive - Performance Optimization',
      imgUrl: '/case study/Devroid.png',
      slug: '/case-study/case1',
    },
    {
      title: 'DIVEROID presents the beauty of the underwater to the world.',
      imgUrl: '/case study/dtechtive.png',
      slug: '/case-study/case2',
    },
  ]

  return (
    <div className="container">
      <h2>Case Study</h2>
      <div className={`d-flex justify-content-around flex-wrap `}>
        <LandingModal />
        <CaseStudyModal item={item[0]} />
        <CaseStudyModal item={item[1]} />
      </div>
    </div>
  )
}
