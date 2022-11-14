import React, { Component, useState } from "react";
import Slider from "react-slick";
import PrevButton from "../components/prevButton";
import NextButton from "../components/nextButton";

const BuildingPicsSlider = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: 0,
        slidesToShow: 3,
        speed: 300,
        prevArrow: <PrevButton />,
        nextArrow: <NextButton />,
        autoplay: false,
        lazyLoad: true,
        beforeChange: (currentSlide, nextSlide) => setImageIndex(nextSlide),
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
                slidesToShow: 1
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
                            <div className={ imageIndex === 0 ? "building-slide activeSlide" : "building-slide" } >
                                <img className='' src="aboutUsImages/DSC_0318.JPG" alt='' />
                            </div>
                            <div className={ imageIndex === 1 ? "building-slide activeSlide" : "building-slide" } >
                                <img className='' src="aboutUsImages/DSC_0319.JPG" alt='' />
                            </div>
                            <div className={ imageIndex === 2 ? "building-slide activeSlide" : "building-slide" } >
                                <img className='' src="aboutUsImages/DSC_0320.JPG" alt='' />
                            </div>
                            <div className={ imageIndex === 3 ? "building-slide activeSlide" : "building-slide" } >
                                <img className='' src="aboutUsImages/DSC_0323.JPG" alt='' />
                            </div>
                            <div className={ imageIndex === 4 ? "building-slide activeSlide" : "building-slide" } >
                                <img className='' src="aboutUsImages/DSC_0324.JPG" alt='' />
                            </div>
                            <div className={ imageIndex === 5 ? "building-slide activeSlide" : "building-slide" } >
                                <img className='' src="aboutUsImages/DSC_0325.JPG" alt='' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuildingPicsSlider