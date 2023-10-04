import SideImages from './sideImages'
import React, { useState, useEffect } from 'react'

function Companyfaces() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    handleImageLoad('useEffect')
  }, [loaded])
  const [companyFacesDesc, setCompanyFacesDesc] = useState(0)
  const handleImageLoad = (origin) => {
    setLoaded(true)
  }
  const sideImgArr = [
    ['aboutUsImages/about-img1.webp', 'Mehakpal Singh(Founder)'],
    ['/aboutUsImages/about-img6.jpg', , 'Ankush Mahajan(CTO)'],
    ['aboutUsImages/about-img2.jpg', 'Himani Choudhary(HR Manager)'],
    ['aboutUsImages/naresh_pic.jpg', 'Naresh Bhatia(Chartered Accountant)'],
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
      'Ankush Mahajan',
      'CTO',
      'Ankush',
      "The guy, who empowers excellence with technology leadership. With a master's degree in computer science and over 8 years of experience in the software development industry, he possesses a strong academic background and extensive professional expertise. He manages the business procedures of the organization taking into account the crucial requirements and future enhancements.",
      'www.twitter.com',
      'www.instagram.com',
      '/aboutUsImages/about-img6.jpg',
    ],
    [
      'Himani Choudhary',
      'HR Manager',
      'Himani',
      'Himani integrates and implements the technology via improved training, staffing, and communication with all the employees. Moreover, she also recommend approaches, business solutions, and processes to the management.',
      'www.twitter.com',
      'www.instagram.com',
      'aboutUsImages/about-img2.jpg',
    ],
    [
      'Naresh Bhatia',
      'Chartered Accountant',
      'Naresh',
      'As a proactive and result-oriented finance professional, he has a strong track record of handling multiple assignments efficiently. He has 15 years of experience and is very diligent in handling Accounts & Finance, Direct & Indirect Tax, Internal Auditing, and Risk Assessment of the company.',
      'www.twitter.com',
      'www.instagram.com',
      'aboutUsImages/naresh_pic.jpg',
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
    setCompanyFacesDesc(index)
  }

  return (
    <>
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
                  <div className="col-lg-12  d-flex flex-column justify-content-center">
                    <p className="about-area-4-main-para  ">
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
    </>
  )
}

export default Companyfaces
