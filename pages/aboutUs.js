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
                        <div className='col-lg-12 about-area-1-outer' >
                            <h1>
                                The Team You’re
                                <br />
                                Looking for
                            </h1>
                            <p className='about-area-1-para my-4' >We offer flexible pricing options for freelancers and design teams. </p>
                            <button className='btn btn-primary bg-white about-area-1-btn' >Our Magic Potion</button>
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
                            <p>
                                We offer flexible pricing options for freelancers and design teams. sadssafafasasasdjkasdkjasndasndandnasjkdnaksjd asndjkandjkandasndsa dsajd sajd asj das dasd ajdjassdda d asdasj dajs dja dja djas dasjd ahjs d asdjas d asjd asdajd ad
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