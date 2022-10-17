import React, { Component } from "react";
import Slider from "react-slick";
import PrevButton from "../components/prevButton";
import NextButton from "../components/nextButton";

const BuildingPicsSlider = () => {
    const settings = {
        className: "center building_slider variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 1,
        speed: 2000,
        arrows: true,
        prevArrow: <PrevButton />,
        nextArrow: <NextButton />,
        autoplay: true,
        variableWidth: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                dots: false,
                arrows: false,
                pauseOnHover: true,
                variableWidth: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: false,
                pauseOnHover: true,
                variableWidth: false,
                slidesToShow: 1,
                centerPadding: "0px"
            }
        }]
    };
    return (
        <>
            <div className='container my-5 about-area-9' >
                <div className='row' >
                    <div className='col-lg-12 text-center' >
                        <h2 className='mb-5 about-area-4-heading' >
                            Place We Work At
                        </h2>
                    </div>
                    <div className="col-lg-12" >
                        <Slider {...settings}>
                            <div className="p-5 building-slide" style={{ width: 500 }}>
                                <img className='w-100' src="aboutUsImages/DSC_0318.JPG" alt='' />
                            </div>
                            <div className="p-5 building-slide" style={{ width: 500 }} >
                                <img className='w-100' src="aboutUsImages/DSC_0319.JPG" alt='' />
                            </div>
                            <div className="p-5 building-slide" style={{ width: 500 }}>
                                <img className='w-100' src="aboutUsImages/DSC_0320.JPG" alt='' />
                            </div>
                            <div className="p-5 building-slide" style={{ width: 500 }}>
                                <img className='w-100' src="aboutUsImages/DSC_0323.JPG" alt='' />
                            </div>
                            <div className="p-5 building-slide" style={{ width: 500 }}>
                                <img className='w-100' src="aboutUsImages/DSC_0324.JPG" alt='' />
                            </div>
                            <div className="p-5 building-slide" style={{ width: 500 }}>
                                <img className='w-100' src="aboutUsImages/DSC_0325.JPG" alt='' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuildingPicsSlider