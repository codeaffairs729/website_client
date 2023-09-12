import React, { useState } from 'react'
// import Header from './includes/header'
import Typewriter from 'typewriter-effect'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Rating from '../components/Rating'
const Header = dynamic(() => import('./includes/header'), {
  ssr: false,
})

import ShimmerEffect from '../components/ShimmerHome'

// const ShimmerEffect = dynamic(() => import('../components/ShimmerHome'), {
//   ssr: false,
// })

const Main = () => {
  const [show, SetShow] = useState(true)

  useState(() => {
    setTimeout(() => {
      SetShow(false)
    }, 500)
  }, [])

  return (
    <>
      {show ? (
        <>{/* <ShimmerEffect /> */}</>
      ) : (
        <div className="main">
          <Head>
            <title>
              Code Garage Tech - Custom Web & App Development Company
            </title>
            <link rel="canonical" href="https://codegaragetech.com/" />

            <meta
              name="description"
              content="Looking for reliable custom web software & app development services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services"
            />
            <meta
              name="keywords"
              content="Software Development Company In India, Custom Web Development Services, Custom Web Development Company"
            ></meta>
          </Head>
          <div className="main__center center">
            <div className="main-big-blue-circle">
              <Image
                src="/icons/Ellipse-blue-full.svg"
                alt=""
                width={600}
                height={600}
              />
            </div>
            <div className="main__wrap">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-7">
                    <div className="">
                      <div className="main__title title title_big">
                        <span className="title__box dev-title mb-3"></span>
                        <h1 className="home-header">
                          Simplifying Processes
                          <br /> Through Scalable IT Solutions!
                        </h1>
                      </div>
                      <div className="main__info info ms-3 main-info">
                        We have extensive experience in developing
                        high-performance, scalable software solutions using
                        full-stack technologies that drive business
                        transformation
                      </div>
                      <Rating />
                      <div className="main__scroll ms-3"></div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-5 col-md-5 d-flex align-items-center justify-content-center desktop_image">
                    <Image
                      src="/images/Desktop Asset Group.png"
                      alt="3D Desktop Assets Group"
                      width={478}
                      height={355}
                      priority={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="main__circles">
              <div className="main__circle"></div>
              <div
                className="main__circle js-rellax"
                data-rellax-speed="2"
              ></div>
              {/* <div className="main__circle js-rellax" data-rellax-speed="1"></div> */}
              {/* <div className="main__circle js-rellax" data-rellax-speed="2"></div> */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Main
