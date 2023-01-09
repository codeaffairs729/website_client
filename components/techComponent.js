import React from 'react'
import Slider from "react-slick";

const TechComponent = ({path}) => {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:true,
        autoplay: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 4,
              slidesToScroll: 1,
              arrows:false,
              autoplay: true,
              initialSlide: 0,
            }
          },
          {
            breakpoint: 600,
            settings: {
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows:false,
              autoplay: true,
              initialSlide: 0,
            }
          },
          {
            breakpoint: 480,
            settings: {
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              autoplay: true,
              initialSlide: 0,
            }
          }
        ]
      };

  return (
    <div className='tech-container'>
         
        {
        path.map((e,i)=>
        // <Slider {...settings}>
            <div className='tech-container-div' key={i}>
                <img className='tech-container-img'  src={e.path}/>
                <p className='tech-container-para' >{e.name}</p>
            </div>
            // </Slider>
        )
        }
        
        
    </div>
)}
export default TechComponent
