import React, { Component, useState, useRef } from "react";
import Slider from "react-slick";
import PrevButton from "../components/prevButton";
import NextButton from "../components/nextButton";

const BuildingPicsSlider = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const sliderDiv = useRef(null);
    const sliderImages = [
        ["building_images/img_01.webp","Well Mantained Office"],
        ["building_images/img_02.webp","CGT Team in the Confrence Room"],
        ["building_images/img_03.webp","Quark City Canteen Image"],
        ["building_images/img_04.webp","Quark City Backyard Image"],
        ["building_images/img_05.webp",""],
        ["building_images/img_06.webp","Quark City's Fountain"],
        ["building_images/img_07.webp","Swiming Pool at Quark City"],
        ["building_images/img_08.webp","Inner Beauty of Quark City"],
        ["building_images/img_09.webp","Quark City Outer Image"],
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
        autoplay: true,
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
                        <Slider ref={(sliderDivRef) => { sliderDiv = sliderDivRef }} {...settings}>
                            {
                                sliderImages.map((element, index) => {
                                    return <div key={index} className={imageIndex === index ? "building-slide activeSlide" : "building-slide"} >
                                        <img className='' src={element[0]} alt={element[1]} />
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