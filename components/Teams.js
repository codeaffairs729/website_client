import React, { useState, useEffect } from 'react'

function Teams() {
  const [loaded, setLoaded] = useState(false)
  const handleImageLoad = (origin) => {
    setLoaded(true)
  }

  useEffect(() => {
    handleImageLoad('useEffect')
  }, [loaded])
  return (
    <>
      <div className="container-fluid about-area-6">
        <div className="row">
          <div className="col-lg-12 about-area-6-heading-outer">
            <h1 className="text-center about-area-6-heading">
              We Clear Your Path,
              <br />
              <span className="title__color"> We Help You Succeed,</span>
              <br />
              We Keep You Successful
            </h1>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-12 text-end">
                <img
                  // className="about-area-6-pic-1"
                  className={`about-area-6-pic-1 ${
                    loaded ? 'blur-image-loaded' : 'blur-image'
                  }
                  `}
                  src="aboutUsImages/team_pic_3.webp"
                  alt="Harsh, Dixit & Vishav"
                />
              </div>
              <div className="col-lg-2 col-md-2 col-4">
                <div className="row">
                  <div className="col-lg-12 about-area-6-img-outer">
                    <img
                      // className="about-area-6-pics"
                      className={`about-area-6-pics ${
                        loaded ? 'blur-image-loaded' : 'blur-image'
                      }
                      `}
                      src="aboutUsImages/team_pic_4.webp"
                      alt="Harsh, Abhishek and Vishav"
                    />
                  </div>
                  <div className="col-lg-12 about-area-6-img-outer">
                    <img
                      // className="about-area-6-pics"
                      className={`about-area-6-pics ${
                        loaded ? 'blur-image-loaded' : 'blur-image'
                      }
                      `}
                      src="aboutUsImages/team_pic_2.webp"
                      alt="Tanya"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-8">
                <img
                  // className="about-area-6-pic-1"
                  className={`about-area-6-pic-1 ${
                    loaded ? 'blur-image-loaded' : 'blur-image'
                  }
                  `}
                  src="aboutUsImages/diveroid2.webp"
                  alt="Udham, Ankush & Mehakpal(Boss)"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about-area-6-circle-1"></div>
        <div className="about-area-6-circle-2"></div>
      </div>
    </>
  )
}
export default Teams
