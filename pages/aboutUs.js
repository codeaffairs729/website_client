import React from 'react'
import Header from './includes/header'
import Footer from './includes/footer'

function AboutUs() {
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
                <div className='row about-area-3-outer-row border-top-5 p-5' >
                    <div className='col-lg-12' >
                        <h1 className='mb-4 about-area-3-heading' >
                            Hop on a hyper growth ride &gt;&gt;&gt;
                        </h1>
                    </div>
                    <div className='col-lg-6 about-area-3-para' >
                        We offer flexible pricing options for freelancers and design teams. sadssafafasasasdjkasdkjasndasndandnasjkdnaksjd asndjkandjkandasndsa dsajd sajd asj das dasd ajdjassdda d asdasj dajs dja dja djas dasjd ahjs d asdjas d asjd asdajd ad
                    </div>
                    <div className='col-lg-6 about-area-3-circle-outer' >
                        {/* <div className='about-area-3-img' ></div> */}
                        {/* <img className='' src='' alt='' /> */}
                        <div className='about-area-circle about-area-3-circle1' ></div>
                        <div className='about-area-circle about-area-3-circle2' ></div>
                    </div>
                </div>
            </div>
            <div className='container my-5' >
                <div className='row' >
                    <div className='col-lg-12 text-center' >
                        <h1 className='mb-5' >
                            People Behind The Magic
                        </h1>
                    </div>
                    <div className='col-lg-4 col-md-4 px-5 mb-5' >
                        <img className='about-area-3-images' src='images/test.png' alt='' />
                    </div>
                    <div className='col-lg-4 col-md-4 px-5 mb-5' >
                        <img className='about-area-3-images' src='images/test.png' alt='' />
                    </div>
                    <div className='col-lg-4 col-md-4 px-5 mb-5' >
                        <img className='about-area-3-images' src='images/test.png' alt='' />
                    </div>
                    <div className='col-lg-4 col-md-4 px-5 mb-5' >
                        <img className='about-area-3-images' src='images/test.png' alt='' />
                    </div>
                    <div className='col-lg-4 col-md-4 px-5 mb-5' >
                        <img className='about-area-3-images' src='images/test.png' alt='' />
                    </div>
                    <div className='col-lg-4 col-md-4 px-5 mb-5' >
                        <img className='about-area-3-images' src='images/test.png' alt='' />
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