import React from 'react'

const Trophies = () => {
    return (
        <>
            <div className='container-fluid trophies' >
                <div className='container' >
                    <div className='row' >
                        <div className='col-lg-4 col-md-4 trophies-cols' data-aos="animation-scale-x-left">
                            <div className='row' >
                                <div className='col-lg-12 d-flex justify-content-center' >
                                    <img className='trophies-img' src='images/Calendar.png' alt='' />
                                </div>
                                <div className='col-lg-12 text-center trophies-text' >
                                    7+ Years
                                    <br/>
                                    Of Excellence
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 trophies-cols' data-aos="animation-scale-y" >
                            <div className='row' >
                                <div className='col-lg-12 d-flex justify-content-center' >
                                    <img className='trophies-img' src='images/trophy-front-clay.png' alt='' />
                                </div>
                                <div className='col-lg-12 text-center trophies-text' >
                                    150+ Projects
                                    <br/>
                                    Delivered
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4' data-aos="animation-scale-x-right">
                            <div className='row' >
                                <div className='col-lg-12 d-flex justify-content-center' >
                                    <img className='trophies-img' src='images/frame_2.png' alt='' />
                                </div>
                                <div className='col-lg-12 text-center trophies-text' >
                                    120+ International
                                    <br/>
                                    Clients
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='trophies-dark-circle' ></div>
                <div className='trophies-two-colored-circle' ></div>
            </div>
        </>
    )
}

export default Trophies