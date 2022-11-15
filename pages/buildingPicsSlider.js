import React, { Component, useState, useRef } from "react";
import Slider from "react-slick";
import PrevButton from "../components/prevButton";
import NextButton from "../components/nextButton";

const BuildingPicsSlider = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const sliderDiv = useRef(null);
    const sliderImages = [
        ["building_images/img_1.jpg"],
        ["building_images/img_2.jpg"],
        ["building_images/img_3.jpg"],
        ["building_images/img_4.jpg"],
        ["building_images/img_5.jpg"],
        ["building_images/img_6.jpg"],
        ["building_images/img_7.jpg"],
        ["building_images/img_8.jpg"],
        ["building_images/img_9.jpg"],
        ["building_images/img_10.jpg"],
        ["building_images/img_11.jpg"],
        ["building_images/img_12.jpg"],
        ["building_images/img_14.jpg"],
        ["building_images/img_15.jpg"],
        ["building_images/img_16.jpg"],
        ["building_images/img_17.jpg"],
        ["building_images/img_18.jpg"],
        ["building_images/img_19.jpg"],
        ["building_images/img_20.jpg"],
        ["building_images/img_21.jpg"],
        ["building_images/img_22.jpg"],
        ["building_images/img_23.jpg"],
        ["building_images/img_24.jpg"],
        ["building_images/img_25.jpg"],
        ["building_images/img_26.jpg"],
        ["building_images/img_27.jpg"],
        ["building_images/img_28.jpg"],
        ["building_images/img_29.jpg"],
    ]

    const previous = () => {
        sliderDiv.slickPrev();
    }

    const next = () => {
        sliderDiv.slickNext();
    }

    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: 0,
        slidesToShow: 3,
        speed: 500,
        arrows: false,
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
                slidesToShow: 3
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
                        <Slider ref={(sliderDivRef) => { sliderDiv = sliderDivRef}} {...settings}>
                            {
                                sliderImages.map((element, index) => {
                                    return <div key={index} className={ imageIndex === index ? "building-slide activeSlide" : "building-slide" } >
                                        <img className='' src={element} alt={element} />
                                    </div>
                                })
                            }
                        </Slider>
                    </div>
                    <div className="col-lg-12 about-area-9-arrow-btn-div d-flex justify-content-center p-5" >
                        <PrevButton onClick={previous} />
                        <NextButton onClick={next} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuildingPicsSlider