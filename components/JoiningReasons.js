import React from 'react'
import Slider from 'react-slick'
const JoiningReasons = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }
  return (
    <>
      <div className="container-fluid career-area-9">
        <div className="container py-5">
          <div className="col-lg-12">
            <h2 className="career-area-9-heading">More Reasons To Join Us</h2>
          </div>
          <Slider {...settings}>
            {/* #First Slide */}
            <div className="col-lg-6 col-md-6">
              <div className="p-5 pb-4">
                <img
                  className="w-100 career-area-9-img-1"
                  src="/career_images/career-area-9-img-1.webp"
                  alt="Vertual Technologies"
                />
              </div>
              <div className="p-5 pt-0">
                <h3 className="career-area-9-sub-heading mb-3">
                  You Get To Work On The Latest Technologies.
                </h3>
                <p className="career-area-9-para">
                  We don&apos;t limit ourselves to only working on one
                  technology, we want you to prosper and gain success.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="p-5 pb-4">
                <img
                  className="w-100 career-area-9-img-2"
                  src="/career_images/career-area-9-img-2.webp"
                  alt="Lush Greenery"
                />
              </div>
              <div className="p-5 pt-0">
                <h3 className="career-area-9-sub-heading mb-3">
                  Get Surrounded By A Lush Green Environment For greenery image
                </h3>
                <p className="career-area-9-para">
                  Our office is situated in-between an opulent greenery and you
                  can take benefit of nature while working with us.
                </p>
              </div>
            </div>
            {/* #Second Slide */}
            <div className="col-lg-6 col-md-6">
              <div className="p-5 pb-4">
                <img
                  className="w-100 career-area-9-img-1"
                  src="/career_images/career-area-9-img-3.webp"
                  alt="Playing Cards"
                />
              </div>
              <div className="p-5 pt-0">
                <h3 className="career-area-9-sub-heading mb-3">
                  We Always Have Game Time
                </h3>
                <p className="career-area-9-para">
                  We make the weekend a blast by playing exciting games every
                  Friday evening.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="p-5 pb-4">
                <img
                  className="w-100 career-area-9-img-2"
                  src="/career_images/career-area-9-img-4.webp"
                  alt="Research Based Saminars"
                />
              </div>
              <div className="p-5 pt-0">
                <h3 className="career-area-9-sub-heading mb-3">
                  Regular Research-Based Seminars On The Latest Tech
                </h3>
                <p className="career-area-9-para">
                  We don&apos;t want you to lag behind that&apos;s why we
                  conduct monthly seminars to polish your skills.
                </p>
              </div>
            </div>
            {/* #Third Slide */}
            <div className="col-lg-6 col-md-6">
              <div className="p-5 pb-4 img-fluid">
                <img
                  className="w-100 career-area-9-img-1"
                  src="/career_images/party.webp"
                  alt="Celebrate Each Occasion"
                />
              </div>
              <div className="p-5 pt-0">
                <h3 className="career-area-9-sub-heading mb-3">
                  We Celebrate Each Occasion With Enthusiasm.
                </h3>
                <p className="career-area-9-para">
                  Celebrating festivals is our favorite part, whether it is
                  national or international.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="p-5 pb-4">
                <img
                  className="w-100 career-area-9-img-2"
                  src="/career_images/explore-destination.webp"
                  alt="Explore Destination"
                />
              </div>
              <div className="p-5 pt-0">
                <h3 className="career-area-9-sub-heading mb-3">
                  We Explore New Destinations
                </h3>
                <p className="career-area-9-para">
                  We are spontaneous! We regularly go on exciting trips to make
                  ourselves more productive.
                </p>
              </div>
            </div>
          </Slider>
          {/* End two image container */}
        </div>
        <div className="rounded-circle career-area-9-circle-1"></div>
        <div className="rounded-circle career-area-9-circle-2"></div>
      </div>
    </>
  )
}

export default JoiningReasons
