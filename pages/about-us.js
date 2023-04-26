import React, { useState, useEffect } from 'react'
import SideImages from '../components/sideImages'
import BuildingPicsSlider from './buildingPicsSlider'
import Head from 'next/head'
import Image from 'next/image'

function AboutUs() {
  const [companyFacesDesc, setCompanyFacesDesc] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const handleImageLoad = (origin) => {
    setLoaded(true)
  }
  const sideImgArr = [
    ['aboutUsImages/about-img1.webp', 'Mehakpal Singh(Founder)'],
    ['aboutUsImages/about-img2.webp', 'Poonam Thakur(HR Manager)'],
    ['aboutUsImages/about-img4.webp', 'Naresh Bhatia(Chartered Accountant)'],
    ['aboutUsImages/about-img3.webp', 'Kannav Sharma(Lawyer)'],
  ]

  const companyFacesDetail = [
    [
      'Mehakpal Singh',
      'Founder',
      'Mehakpal',
      "The guy, who established Code Garage Tech. He is a computer science engineer and has experience of more than a decade in software development. He encourages conformity with business rules & regulations and also ensures that the company's code of ethics is being followed.",
      'www.twitter.com',
      'www.instagram.com',
      '/aboutUsImages/about-img1.webp',
    ],
    [
      'Poonam Thakur',
      'HR Manager',
      'Poonam',
      'Poonam integrates and implements the technology via improved training, staffing, and communication with all the employees. Moreover, she also recommend approaches, business solutions, and processes to the management.',
      'www.twitter.com',
      'www.instagram.com',
      'aboutUsImages/about-img2.webp',
    ],
    [
      'Naresh Bhatia',
      'Chartered Accountant',
      'Naresh',
      'As a proactive and result-oriented finance professional, he has a strong track record of handling multiple assignments efficiently. He has 15 years of experience and is very diligent in handling Accounts & Finance, Direct & Indirect Tax, Internal Auditing, and Risk Assessment of the company.',
      'www.twitter.com',
      'www.instagram.com',
      'aboutUsImages/about-img4.webp',
    ],
    [
      'Kannav Sharma',
      'Lawyer',
      'Kannav',
      'Proud First generation lawyer. He joined the litigation to make a mark and help as many people as best of his capabilities. Kannav ensures the company’s strategies, actions, and processes comply relevantly with state, local, international, and federal laws.',
      'www.twitter.com',
      'www.instagram.com',
      'aboutUsImages/about-img3.webp',
    ],
  ]

  const SideImagesChangeHandle = (index) => {
    setCompanyFacesDesc(index.target.id)
  }
  useEffect(() => {
    handleImageLoad('useEffect')
  }, [loaded])
  return (
    <>
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
      <div className="container-fluid about-area-6">
        <div className="row">
          <div className="col-lg-12 about-area-6-heading-outer">
            <h1 className="text-center about-area-6-heading">
              We Clear Your Path,
              <br />
              <span className="title__color"> We help you succeed,</span>
              <br />
              We keep you successfull
            </h1>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-12 text-end">
                <img
                  // className="about-area-6-pic-1"
                  className={`about-area-6-pic-1 ${
                    loaded ? 'blur-image-loaded' : 'blur-image'
                  }
                  `}
                  src="aboutUsImages/team_pic_3.webp"
                  alt="Harsh, Dixit & Vishav"
                />
              </div>
              <div className="col-lg-2 col-md-2 col-4">
                <div className="row">
                  <div className="col-lg-12 about-area-6-img-outer">
                    <img
                      // className="about-area-6-pics"
                      className={`about-area-6-pics ${
                        loaded ? 'blur-image-loaded' : 'blur-image'
                      }
                      `}
                      src="aboutUsImages/team_pic_4.webp"
                      alt="Harsh, Abhishek and Vishav"
                    />
                  </div>
                  <div className="col-lg-12 about-area-6-img-outer">
                    <img
                      // className="about-area-6-pics"
                      className={`about-area-6-pics ${
                        loaded ? 'blur-image-loaded' : 'blur-image'
                      }
                      `}
                      src="aboutUsImages/team_pic_2.webp"
                      alt="Tanya"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-8">
                <img
                  // className="about-area-6-pic-1"
                  className={`about-area-6-pic-1 ${
                    loaded ? 'blur-image-loaded' : 'blur-image'
                  }
                  `}
                  src="aboutUsImages/team_pic_1.webp"
                  alt="Udham, Ankush & Mehakpal(Boss)"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about-area-6-circle-1"></div>
        <div className="about-area-6-circle-2"></div>
      </div>

      <div className="container-fluid about-area-7">
        <div className="row about-area-7-row">
          <div className="col-lg-7 col-md-6 about-area-7-left-outer">
            <h2 className="about-area-7-heading mb-5">
              Our
              <span className="title__color about-area-7-heading-span">
                {' '}
                Mission
              </span>
            </h2>
            <p className="about-area-7-para">
              We&apos;re on a mission to make the IT world more process-driven.
              <br />
              <br />
              We believe in empowering entrepreneurs by providing valuable
              software and delivering quality to society.
              <br />
              <br />
              Our IT services emphasize delivering optimal solutions with
              top-notch services in web development, mobile development, and
              digital marketing. Providing overall satisfaction to clients is
              our pertinent priority and we aim to serve them with the best and
              most reliable solutions.
              <br />
              <br />
            </p>
          </div>
          <div className="col-lg-5 col-md-6 about-area-7-pic-1-outer d-flex align-items-center">
            <img
              className="w-100"
              src="aboutUsImages/team_pic_9.webp"
              alt="Aim Board"
            />
          </div>
        </div>
        <div className="about-area-7-circle-1"></div>
      </div>

      <div className="container-fluid my-3 about-area-2">
        <div className="container">
          <div className="row about-area-2-outer-row">
            <div className="col-lg-6 d-flex justify-content-center about-area-2-outer-col">
              <div className="about-area-2-pic-2">
                <Image
                  className="image-radius-50"
                  src="/aboutUsImages/team_pic_6.webp"
                  alt="Old CGT Team Members"
                  layout="fill"
                />
              </div>
              {/* <img
                className="about-area-2-pic-3"
                src="aboutUsImages/team_pic_7.webp"
                alt="Old CGT Team "
              /> */}
              <div className="about-area-2-pic-3">
                <Image
                  className="image-radius-50"
                  src="/aboutUsImages/team_pic_7.webp"
                  alt="Old CGT Team "
                  layout="fill"
                />
              </div>
              {/* <img
                className="about-area-2-pic-4"
                src="aboutUsImages/team_pic_8.webp"
                alt="Vishav, Shubham & Tanya"
              /> */}

              <div className="about-area-2-pic-4">
                <Image
                  className="image-radius-50"
                  src="/aboutUsImages/team_pic_8.webp"
                  alt="Vishav, Shubham & Tanya"
                  layout="fill"
                />
              </div>
            </div>
            <div className="col-lg-6 about-area-2-text-area">
              <h2 className="about-area-2-heading mb-5">Our History</h2>
              <p className="about-area-2-para">
                In 2015, we established our agency to aid a few small
                enterprises to thrive, utilizing information technology. During
                our journey of 7 years, they have grown up with us.
                <br />
                <br />
                We build as well as scale your brand by crafting digital
                experiences that create lasting impact. We want to see your
                business succeed and we pride ourselves on working hard to make
                sure it happens.
                <br />
                <br />
                Code Garage Tech was founded with an apparent idea in mind - to
                make brilliant software that influences and that we can be proud
                of. We offer specialized solutions to support businesses of all
                sizes.
                <br />
                <br />
                By leveraging the power of new technologies, our goal is to
                deliver quality-centered software services to aspiring
                businesses. Our main motto is to deliver value in terms of sales
                and revenue.
                <br />
                <br />
                Our vision is to develop future-oriented solutions to assure
                growth for people seeking technological transition in their
                modern business modules.
              </p>
            </div>
          </div>
        </div>
        <div className="about-area-2-circle1"></div>
        <div className="about-area-2-circle2"></div>
        <div className="about-area-2-circle3"></div>
        <div className="about-area-2-circle4"></div>
        {/* <img
          className="about-area-2-cube"
          src="images/cube.webp"
          alt="3D Cube"
        /> */}

        <div className="about-area-2-cube">
          <Image
            className=""
            src="/images/cube.webp"
            alt="3D Cube"
            layout="fill"
          />
        </div>
      </div>

      <div className="container-fluid mt-5 about-area-8">
        <div className="container about-area-8-container">
          <h2 className="text-center about-area-8-heading">
            We Connect Globally
          </h2>
          <img
            className="w-100"
            src="aboutUsImages/global_connections.webp"
            alt="3D Global Map"
            useMap="#world-map"
          />
          <map name="world-map">
            <area
              shape="rect"
              coords="180,130,200,180"
              alt="North America"
              title="North America"
              className="cursor_pointer"
            />
            <area
              shape="rect"
              coords="480,160,500,210"
              alt="Europe"
              title="Europe"
              className="cursor_pointer"
            />
            <area
              shape="rect"
              coords="500,270,520,320"
              alt="India"
              title="Africa"
              className="cursor_pointer"
            />
            <area
              shape="rect"
              coords="630,170,650,220"
              alt="Asia"
              title="Asia"
              className="cursor_pointer"
            />
            <area
              shape="rect"
              coords="220,320,250,370"
              alt="South America"
              title="South America"
              className="cursor_pointer"
            />
            <area
              shape="rect"
              coords="780,380,810,430"
              alt="Australia"
              title="Australia"
              className="cursor_pointer"
            />
          </map>
        </div>
      </div>

      <div className="container about-area-4">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="mb-5 about-area-4-heading">
              <span className="title__color">Minds </span>
              Behind The Magic
            </h2>
          </div>
        </div>
        <div className="row about-area-4-main-outer">
          <div className="col-lg-1 col-md-2 text-center mt-4 d-flex flex-column justify-content-center">
            <div className="row about-area-4-sideImages-row">
              {sideImgArr.map((element, index) => {
                return (
                  <SideImages
                    key={index}
                    id={index}
                    altImg={element[1]}
                    sideImagesgUrl={element[0]}
                    SideImagesChangeHandle={SideImagesChangeHandle}
                  />
                )
              })}
            </div>
          </div>
          <div className="col-lg-11 col-md-10">
            <div className="row about-area-4-main-data-outer">
              <div className="col-lg-6 col-md-6 d-flex align-items-center about-img-height">
                <div className="row">
                  <div className="col-lg-1 col-md-12 col-1"></div>
                  <div className="col-lg-10 col-md-12 col-10">
                    <div className="about-area-4-main-img-outer">
                      <img
                        className="about-area-4-main-img"
                        src={companyFacesDetail[companyFacesDesc][6]}
                        alt=""
                      />
                      <div className="about-area-4-main-img-shape-1">
                        <div className="text-center about-area-4-main-img-text-area">
                          <div className="about-area-4-main-name margin-bottom-1px">
                            {companyFacesDetail[companyFacesDesc][0]}
                          </div>
                          <p className="about-area-4-main-designation">
                            {companyFacesDetail[companyFacesDesc][1]}
                          </p>
                        </div>
                        <img
                          className="w-100"
                          src="/aboutUsImages/about-area-4-main-img-shape.webp"
                          alt="Background Shape"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-12 col-1"></div>
                </div>
              </div>
              {/* <div className='col-lg-12 text-center' >
                                <h5 className='about-area-4-main-name' >{companyFacesDetail[companyFacesDesc][0]}</h5>
                                <p className='about-area-4-main-designation' >{companyFacesDetail[companyFacesDesc][1]}</p>
                            </div> */}
              {/* <div className='col-lg-12 d-flex justify-content-center pt-2' >
                                <a href={companyFacesDetail[companyFacesDesc][4]} >
                                    <img className='about-area-4-main-social-icon me-2' src="icons/twitter_white.webp" alt='' />
                                </a>
                                <a href={companyFacesDetail[companyFacesDesc][5]} >
                                    <img className='about-area-4-main-social-icon' src="icons/instagram_white.webp" alt='' />
                                </a>
                            </div> */}
              <div className="col-lg-6 col-md-6 d-flex about-area-4-main-desc-outer">
                <div className="row h-100">
                  <div className="col-lg-12">
                    <p className="about-area-4-main-para">
                      <span className="fw-bolder">
                        About {companyFacesDetail[companyFacesDesc][2]}
                      </span>
                      <br />
                      {companyFacesDetail[companyFacesDesc][3]}
                    </p>
                  </div>
                  {/* <div className='col-lg-12 d-flex justify-content-end pt-2' >
                                        <a href={companyFacesDetail[companyFacesDesc][4]} >
                                            <img className='about-area-4-main-social-icon me-2' src="icons/twitter_black.webp" alt='' />
                                        </a>
                                        <a href={companyFacesDetail[companyFacesDesc][5]} >
                                            <img className='about-area-4-main-social-icon' src="icons/instagram_black.webp" alt='' />
                                        </a>
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className='col-lg-5 col-md-5 d-flex p-5' >
                        <div className='row h-100' >
                            <div className='col-lg-12' >
                                <p className='about-area-4-main-para' >
                                    <span className='fw-bolder' >About {companyFacesDetail[companyFacesDesc][2]}</span>
                                    <br/><br/>
                                    {companyFacesDetail[companyFacesDesc][3]}
                                </p>
                            </div>
                            <div className='col-lg-12 d-flex justify-content-end pt-2' >
                                <a href={companyFacesDetail[companyFacesDesc][4]} >
                                    <img className='about-area-4-main-social-icon me-2' src="icons/twitter_black.webp" alt='' />
                                </a>
                                <a href={companyFacesDetail[companyFacesDesc][5]} >
                                    <img className='about-area-4-main-social-icon' src="icons/instagram_black.webp" alt='' />
                                </a>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>

      <div className="container-fluid about-area-1">
        <div className="container">
          <div className="row about-area-1-outer-row">
            <h2 className="col-lg-12 text-center about-area-1-outer pb-5">
              <p>Pillars We Stand Firm At</p>
              {/* <p className='about-area-1-para my-4' >
                                We offer flexible pricing options for freelancers and design teams. This
                                sal kl fkls  klf  fkls fksl sfls fkls fs fs fs fskflsklf slf k fkwl fs fs fsfslkf skflsf s
                                s fsfs fsfklsf kls fkls fkls fkls fkls fds fkls fs fklsd fkls fkl sf skfsdfklsd kf  fsff
                                sl fsfs fksl fksl fkls fskl fs f.
                            </p>
                            <button className='btn btn-primary bg-white about-area-1-btn' >Our Magic Potion</button> */}
            </h2>
            {/* <div className='col-lg-5 col-md-5 about-area-1-outer' >
                            <img className='about-area-1-pic-1' src='aboutUsImages/team_pic_1.webp' alt='' />
                            <img className='about-area-1-pic-2' src='aboutUsImages/team_pic_2.webp' alt='' />
                            <img className='about-area-1-pic-3' src='aboutUsImages/team_pic_3.webp' alt='' />
                            <img className='about-area-1-pic-4' src='aboutUsImages/team_pic_4.webp' alt='' />
                        </div> */}
            <div className="col-lg-12 about-area-1-cols">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-2 text-center">
                      <img
                        className="about-area-1-icon-1 w-100"
                        src="/icons/transparency.webp"
                        alt="Transparency"
                      />
                    </div>
                    <div className="col-lg-10 col-md-10 col-10 d-flex align-items-center">
                      <p className="about-area-1-header-1">Transparency</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-2"></div>
                    <div className="col-lg-10 col-md-10 col-10">
                      <p className="about-area-1-para-1">
                        We believe in transparency, and we want you to feel
                        comfortable with us. We believe that everyone deserves
                        the opportunity to be heard and understood—no matter
                        where they are or what they do and that&apos;s why we
                        work hard every day to make sure our services provide
                        optimum outcomes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6"></div>
              </div>
            </div>
            <div className="col-lg-12 about-area-1-cols">
              <div className="row">
                <div className="col-lg-8 col-md-6"></div>
                <div className="col-lg-4 col-md-6">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-2 text-center">
                      <img
                        className="about-area-1-icon-1 w-100"
                        src="/icons/support.webp"
                        alt="Support"
                      />
                    </div>
                    <div className="col-lg-10 col-md-10 col-10 d-flex align-items-center">
                      <p className="about-area-1-header-1">Support</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-2"></div>
                    <div className="col-lg-10 col-md-10 col-10">
                      <p className="about-area-1-para-1">
                        We provide 24*7 support because we know how important it
                        is to have access to help when you need it. Our team
                        will respond within minutes of receiving your request.
                        We&apos;ll provide you with the information, advice, and
                        support that you need to get back on track. We&apos;re
                        here for you, so let us know if you ever need anything!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 about-area-1-cols">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-2 text-center">
                      <img
                        className="about-area-1-icon-1 w-100"
                        src="/icons/future_ready_tech.webp"
                        alt="Future Ready Tech"
                      />
                    </div>
                    <div className="col-lg-10 col-md-10 col-10 d-flex align-items-center">
                      <p className="about-area-1-header-1">Future Ready Tech</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-2"></div>
                    <div className="col-lg-10 col-md-10 col-10">
                      <p className="about-area-1-para-1">
                        Future-ready tech is about taking the best of
                        what&apos;s already out there and combining it with the
                        next wave of innovation. We help businesses to
                        understand the new tech landscape by offering guidance,
                        consultancy, and support.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6"></div>
              </div>
            </div>
            <div className="col-lg-12 about-area-1-cols">
              <div className="row">
                <div className="col-lg-8 col-md-6"></div>
                <div className="col-lg-4 col-md-6">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-2 text-center">
                      <img
                        className="about-area-1-icon-1 w-100"
                        src="/icons/process_oriented_work.webp"
                        alt="Process Oriented Work"
                      />
                    </div>
                    <div className="col-lg-10 col-md-10 col-10 d-flex align-items-center">
                      <p className="about-area-1-header-1">
                        Process Oriented Work
                      </p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-2"></div>
                    <div className="col-lg-10 col-md-10 col-10">
                      <p className="about-area-1-para-1">
                        We only focus on getting the job done. We&apos;re built
                        on a system of processes, which means that each part of
                        our business has its own defined role to play in helping
                        us achieve our goals.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 about-area-1-cols">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-2 text-center">
                      <img
                        className="about-area-1-icon-1 w-100"
                        src="/icons/flexible.webp"
                        alt="Flexible"
                      />
                    </div>
                    <div className="col-lg-10 col-md-10 col-10 d-flex align-items-center">
                      <p className="about-area-1-header-1">Flexible</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-2"></div>
                    <div className="col-lg-10 col-md-10 col-10">
                      <p className="about-area-1-para-1">
                        We know that your business is as unique as you are.
                        We&apos;re committed to helping you build the kind of
                        working relationship that will help you achieve your
                        goals. We love working with you, and we want you to feel
                        like you&apos;re part of the team every step of the way!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="about-area-1-line-circle"
          src="images/career-line-circle.webp"
          alt="Line & Circle"
        />
      </div>

      {/* <div className='container-fluid px-5 mt-5 about-area-3' >
                <div className='row about-area-3-outer-row border-top-5 py-5' >
                    <div className='col-lg-12' >
                        <h2 className='mb-5 about-area-3-heading text-center' >
                            Qualities */}
      {/* <span className="title__color"> Together</span> */}
      {/* </h2>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-5'>
                        <div className='row' >
                            <div className='col-lg-1' ></div>
                            <div className='col-lg-10 text-center' >
                                <img className='about-area-3-pics' src='aboutUsImages/qualities_1.webp' alt='' />
                                <h3 className='text-center about-area-3-h3' >Transparency</h3>
                                <p className='text-start' >
                                    lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah
                                </p>
                            </div>
                            <div className='col-lg-1' ></div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-5'>
                        <div className='row' >
                            <div className='col-lg-1' ></div>
                            <div className='col-lg-10 text-center' >
                                <img className='about-area-3-pics' src='aboutUsImages/qualities_2.webp' alt='' />
                                <h3 className='text-center about-area-3-h3' >Upto Date on Trends</h3>
                                <p className='text-start' >
                                    lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah
                                </p>
                            </div>
                            <div className='col-lg-1' ></div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-5'>
                        <div className='row' >
                            <div className='col-lg-1' ></div>
                            <div className='col-lg-10 text-center' >
                                <img className='about-area-3-pics' src='aboutUsImages/qualities_3.webp' alt='' />
                                <h3 className='text-center about-area-3-h3' >Process Oriented</h3>
                                <p className='text-start' >
                                    lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah
                                </p>
                            </div>
                            <div className='col-lg-1' ></div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-5'>
                        <div className='row' >
                            <div className='col-lg-1' ></div>
                            <div className='col-lg-10 text-center' >
                                <img className='about-area-3-pics' src='aboutUsImages/qualities_4.webp' alt='' />
                                <h3 className='text-center about-area-3-h3' >Flexible</h3>
                                <p className='text-start' >
                                    lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah
                                </p>
                            </div>
                            <div className='col-lg-1' ></div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-5'>
                        <div className='row' >
                            <div className='col-lg-1' ></div>
                            <div className='col-lg-10 text-center' >
                                <img className='about-area-3-pics' src='aboutUsImages/qualities_5.webp' alt='' />
                                <h3 className='text-center about-area-3-h3' >Support</h3>
                                <p className='text-start' >
                                    lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah lah Blah Blah
                                </p>
                            </div>
                            <div className='col-lg-1' ></div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-5'></div> */}
      {/* <div className='col-lg-6 about-area-3-para' >
                        We truly believe in a quote from the greatest marathon runner ever lived.
                        <br/><br/>
                        <span className='fw-bolder' >“100% of me is less than 1% of the team”</span> - Eliud Kipchoge 
                    </div>
                    <div className='col-lg-6 about-area-3-circle-outer' > */}
      {/* <div className='about-area-3-img' ></div> */}
      {/* <img className='' src='' alt='' /> */}
      {/* <div className='about-area-circle about-area-3-circle1' ></div>
                        <div className='about-area-circle about-area-3-circle2' ></div> */}
      {/* </div> */}
      {/* </div>
                <div className='about-area-circle about-area-3-circle' ></div>
            </div> */}

      <BuildingPicsSlider />

      <div className="container-fluid trophies bg-white about-us-trophies">
        <div className="container d-flex flex-column">
          <div className="about-area-headline-container">
            <h2 className="text-center mb-5 about-area-4-heading">
              Highlights
            </h2>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-4 trophies-cols"
              data-aos="animation-scale-x-left"
            >
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <img
                    className="trophies-img"
                    src="images/Calendar.webp"
                    alt="3D Calender"
                  />
                </div>
                <div className="col-lg-12 text-center trophies-text">
                  7+ Years
                  <br />
                  Of Excellence
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 trophies-cols"
              data-aos="animation-scale-y"
            >
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <img
                    className="trophies-img"
                    src="images/trophy-front-clay.webp"
                    alt="3D Trophy Front Clay"
                  />
                </div>
                <div className="col-lg-12 text-center trophies-text">
                  150+ Projects
                  <br />
                  Delivered
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4"
              data-aos="animation-scale-x-right"
            >
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <img
                    className="trophies-img"
                    src="images/frame_2.webp"
                    alt=""
                  />
                </div>
                <div className="col-lg-12 text-center trophies-text">
                  120+ International
                  <br />
                  Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about-area-5">
        <div className="container about-area-5-container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="mb-5 about-area-5-heading">
                Are you looking for a team just like us?
              </h2>
              <div className="d-flex flex-wrap align-items-content">
                <p className="align-self-center about-area-5-para">
                  Let us know right
                </p>
                <span className="d-flex">
                  <p className="align-self-center about-area-5-para">
                    away
                    <svg
                      className="mx-2"
                      width="34"
                      height="27"
                      viewBox="0 0 34 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8621 1L32 13.3636M32 13.3636L19.8621 25.7273M32 13.3636H1.19209e-07"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                  </p>

                  <a
                    href="./contact"
                    target="_blank"
                    className="freelancer-main__btn about_btn my-2"
                  >
                    Get in Touch
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="main">
                <div className="main__center center">
                    <div>
                        <h1>The Team You’re Looking for</h1>
                        <p>We offer flexible pricing options for freelancers and design teams. </p>
                        <button className='btn' >Our Magic Potion</button>
                    </div>
                </div>
            </div> */}
    </>
  )
}

export default AboutUs
