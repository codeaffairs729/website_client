import React, { useState, useEffect } from 'react'
import BuildingPicsSlider from './buildingPicsSlider'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../styles/about.module.css'
import style from '../styles/Shimmer.module.css'
const Shimmer = dynamic(() => import('../components/ShimmerEffect'), {
  ssr: false,
})
const Companyfaces = dynamic(() => import('../components/Companyfaces'), {
  ssr: false,
})
const Company_highlights = dynamic(
  () => import('../components/Company_highlights'),
  {
    ssr: false,
  }
)
// const Vision = dynamic(() => import('../components/Vision'), {
//   ssr: false,
// })
const Company_teams = dynamic(() => import('../components/Teams'), {
  ssr: false,
})
const History = dynamic(() => import('../components/History'), {
  ssr: false,
})
const Teams = dynamic(() => import('./teams'), {
  ssr: false,
})


function AboutUs() {
  const [loaded, setLoaded] = useState(false)
  const [shimmer, setShimmer] = useState(true)
  setTimeout(() => {
    setShimmer(false)
  }, '500')

  return (
    <>
      <div className={shimmer ? `${style.shimmer}` : `${style.display_None}`}>
        <Shimmer />
      </div>
      <div className={shimmer ? `${style.display_None}` : ``}>
        {/* <Header /> */}

        <Head>
          <title>We are a preeminent Web Design And Development firm!</title>
          <link rel="canonical" href="https://codegaragetech.com/about-us" />
          <meta
            name="description"
            content="Code Garage Tech is the leading Custom Web App Development Company in India, providing you with world-class software solutions. Get in touch with us now!"
          />
          <meta
            name="keywords"
            content="Custom Web App Development Company, Web Design And Development"
          ></meta>
        </Head>
        <div className={styles.main_div}>
          <Company_teams />
          {/* <Vision /> */}
          {/* <History /> */}
          <Companyfaces />
          <Teams />
          {/* <BuildingPicsSlider /> */}
          <Company_highlights />
        </div>
      </div>
    </>
  )
}

export default AboutUs
