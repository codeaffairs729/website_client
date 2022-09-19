import React, { useState } from 'react'
import Header from './includes/header'
import Footer from './includes/footer'
import SideImages from '../components/sideImages'

function AboutUs() {
    const [companyFacesDesc, setCompanyFacesDesc] = useState(0);

    const sideImgArr = [
        ["icons/adobe_xd.png"],
        ["icons/miro.png"],
        ["icons/adobe_xd.png"],
        ["icons/miro.png"],
        ["icons/adobe_xd.png"]
    ]

    const companyFacesDetail = [
        [
            "Mehak Singh",
            "Founder",
            "Mehak",
            "adsks salf ljk s jsndjcsjc;s cc sd;cnsdjc c cjaw mcamcsc s adsks salf ljk s jsndjcsjc;s cc sd;cnsdjc c cjaw mcamcsc s",
            "www.twitter.com",
            "www.instagram.com",
            "icons/adobe_xd.png"
        ],
        [
            "Ankush Gupta",
            "Developer",
            "Ankush",
            "adsks salf ljk s jsndjcsjc;s cc sd;cnsdjc c cjaw mcamcsc s adsks salf ljk s jsndjcsjc;s cc sd;cnsdjc c cjaw mcamcsc s",
            "www.twitter.com",
            "www.instagram.com",
            "icons/miro.png"
        ],
        [
            "Dixit Tiwari",
            "Developer",
            "Dixit",
            "adsks salf ljk s jsndjcsjc;s cc sd;cnsdjc c cjaw mcamcsc s adsks salf ljk s jsndjcsjc;s cc sd;cnsdjc c cjaw mcamcsc s",
            "www.twitter.com",
            "www.instagram.com",
            "icons/adobe_xd.png"
        ],
        [
            "Harsh Tyagi",
            "Developer",
            "Harsh",
            "adsks salf ljk s jsndjcsjc;s cc sd;cnsdjc c cjaw mcamcsc s adsks salf ljk s jsndjcsjc;s cc sd;cnsdjc c cjaw mcamcsc s",
            "www.twitter.com",
            "www.instagram.com",
            "icons/miro.png"
        ],
        [
            "Davinder Singh",
            "Developer",
            "Davinder",
            "adsks salf ljk s jsndjcsjc;s cc sd;cnsdjc c cjaw mcamcsc s adsks salf ljk s jsndjcsjc;s cc sd;cnsdjc c cjaw mcamcsc s",
            "www.twitter.com",
            "www.instagram.com",
            "icons/adobe_xd.png"
        ]
    ]

    const SideImagesChangeHandle = (index) => {
        setCompanyFacesDesc(index.target.id);
    }

    return (
        <>
            <Header />
            <div className='container-fluid about-area-1' >
                <div className='container'>
                    <div className='row about-area-1-outer-row' >
                        <div className='col-lg-7 col-md-7 about-area-1-outer' >
                            <h1>
                                The Team You’re Looking for
                            </h1>
                            <p className='about-area-1-para my-4' >We offer flexible pricing options for freelancers and design teams. </p>
                            <button className='btn btn-primary bg-white about-area-1-btn' >Our Magic Potion</button>
                        </div>
                        <div className='col-lg-5 col-md-5 about-area-1-outer bg-dark' >
                            <img className='' src='' alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid my-5 about-area-2'>
                <div className='container' >
                    <div className='row about-area-2-outer-row'>
                        <div className='col-lg-5 d-flex justify-content-center' >
                            <div className="about-area-2-grey-circle" >
                                <img className="about-area-2-cam-pic" src="images/Camera _.png" alt="" />
                            </div>
                        </div>
                        <div className='col-lg-7' >
                            <h2 className='about-area-2-heading mb-5' >
                                Our Culture Defines Us
                            </h2>
                            <p className='about-area-2-para' >
                                We offer flexible pricing options for freelancers and design teams. sadssafafasasasdjkasdkjasndasndandnasjkdnaksjd asndjkandjkandasndsa dsajd sajd asj das dasd ajdjassdda d asdasj dajs dja dja djas dasjd ahjs d asdjas d asjd asdajd ad
                            </p>
                        </div>
                    </div>
                </div>
                <div className='about-area-2-circle1' ></div>
                <div className='about-area-2-circle2' ></div>
                <img className='about-area-2-cube' src='images/cube.png' alt='' />
            </div>
            <div className='container-fluid px-5 my-5 about-area-3' >
                <div className='row about-area-3-outer-row border-top-5 py-5' >
                    <div className='col-lg-12' >
                        <h2 className='mb-4 about-area-3-heading' >
                            Great Work Is Done
                            <span className="title__color"> Together</span>
                        </h2>
                    </div>
                    <div className='col-lg-6 about-area-3-para' >
                        We truly believe in a quote from the greatest marathon runner ever lived.
                        <br/><br/>
                        <span className='fw-bolder' >“100% of me is less than 1% of the team”</span> - Eliud Kipchoge 
                    </div>
                    <div className='col-lg-6 about-area-3-circle-outer' >
                        {/* <div className='about-area-3-img' ></div> */}
                        {/* <img className='' src='' alt='' /> */}
                        {/* <div className='about-area-circle about-area-3-circle1' ></div>
                        <div className='about-area-circle about-area-3-circle2' ></div> */}
                    </div>
                </div>
                <div className='about-area-circle about-area-3-circle' ></div>
            </div>
            <div className='container my-5' >
                <div className='row' >
                    <div className='col-lg-12 text-center' >
                        <h2 className='mb-5 about-area-4-heading' >
                            People Behind The Magic
                        </h2>
                    </div>
                    <div className='col-lg-2 col-md-2' >
                        <div className='row about-area-4-sideImages-row' >
                            {
                                sideImgArr.map((element, index) => {
                                    return <SideImages
                                        key={index}
                                        id={index}
                                        sideImagesgUrl={element[0]}
                                        SideImagesChangeHandle={SideImagesChangeHandle}
                                    />
                                })
                            }
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5' >
                        <div className='row' >
                            <div className='col-lg-12' >
                                <img className='about-area-4-main-img' src={companyFacesDetail[companyFacesDesc][6]} alt='' />
                            </div>
                            <div className='col-lg-12 text-center' >
                                <h5 className='about-area-4-main-name' >{companyFacesDetail[companyFacesDesc][0]}</h5>
                                <p className='about-area-4-main-designation' >{companyFacesDetail[companyFacesDesc][1]}</p>
                            </div>
                            <div className='col-lg-12 d-flex justify-content-center pt-2' >
                                <a href={companyFacesDetail[companyFacesDesc][4]} >
                                    <img className='about-area-4-main-social-icon me-2' src="icons/twitter_white.png" alt='' />
                                </a>
                                <a href={companyFacesDetail[companyFacesDesc][5]} >
                                    <img className='about-area-4-main-social-icon' src="icons/instagram_white.png" alt='' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 d-flex align-items-center p-5' >
                        <p className='about-area-4-main-para' >
                            <span className='fw-bolder' >About {companyFacesDetail[companyFacesDesc][2]}</span>
                            <br/><br/>
                            {companyFacesDetail[companyFacesDesc][3]}
                        </p>
                    </div>
                </div>
            </div>
            <div className='container-fluid about-area-5' >
                <div className='container about-area-5-container' >
                    <div className='row' >
                        <div className='col-lg-12' >
                            <h2 className='mb-5 about-area-5-heading' >
                                Are you looking for a team just like us?
                            </h2>
                            <p className='about-area-5-para' >
                                Let us know right away
                                <svg width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8621 1L32 13.3636M32 13.3636L19.8621 25.7273M32 13.3636H1.19209e-07" stroke="black" strokeWidth="2"/>
                                </svg>
                            </p>
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
            <Footer />
        </>
    )
}

export default AboutUs