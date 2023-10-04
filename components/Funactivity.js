import React, { useState } from 'react'

function Funactivity() {
  const [loaded, setLoaded] = useState(false)

  const handleImageLoad = (origin) => {
    setLoaded(true)
  }

  return (
    <>
      <div className="container-fluid career-area-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3"></div>
            <div className="col-lg-9 col-md-9 career-area-2-text-outer">
              <h1 className="career-area-2-heading">
                A Place Where Active Mode Is Always On!
              </h1>
              <p className="career-area-2-para">
                We are relaxed, energetic, & joyful. We are playful & have fun
                while doing serious & important work. Join us now!
              </p>
            </div>
          </div>
          {/* <div className='rounded-circle career-area-2-circle' ></div> */}
          <img
            className={`career-area-2-img-1 ${
              loaded ? 'blur-image-loaded' : 'blur-image'
            }
          `}
            src="/career_images/career-area-2-img-1.webp"
            alt="Vishav Playing Chess"
          />
          {/* <div className="career-area-2-img-1">
          <Image
            className="career-area-2-img-1"
            src="/career_images/career-area-2-img-1.webp"
            alt="Vishav Playing Chess"
            width={310}
            height={755}
            blurDataURL="/career_images/career-area-2-img-1.webp"
            placeholder="blur"
          />
        </div> */}
          <img
            className={`career-area-2-img-2 ${
              loaded ? 'blur-image-loaded' : 'blur-image'
            }
          `}
            src="/career_images/career-area-2-img-2.webp"
            alt="CGT - Pool Party"
          />
          {/* <div className="career-area-2-img-2">
          <Image
            src="/career_images/career-area-2-img-2.webp"
            alt="CGT - Pool Party"
            width={120}
            height={197}
            blurDataURL="/career_images/career-area-2-img-2.webp"
            placeholder="blur"
          />
        </div> */}
          <img
            className={`career-area-2-img-3 ${
              loaded ? 'blur-image-loaded' : 'blur-image'
            }
          `}
            src="/career_images/career-area-2-img-3.webp"
            alt="CGT - Old Memories"
          />
          {/* <div>
          <Image
            className="career-area-2-img-3"
            src="/career_images/career-area-2-img-3.webp"
            alt="CGT - Old Memories"
            width={180}
            height={152}
            blurDataURL="/career_images/career-area-2-img-3.webp"
            placeholder="blur"
          />
        </div> */}
          <img
            className={`career-area-2-img-4 ${
              loaded ? 'blur-image-loaded' : 'blur-image'
            }
          `}
            src="/career_images/career-area-2-img-4.webp"
            alt="Some Old Faces of CGT"
            onLoad={handleImageLoad}
          />

          <img
            className="career-area-2-typing-icon"
            src="images/type.webp"
            alt="3D Spanners Tool"
          />
        </div>
      </div>
    </>
  )
}
export default Funactivity
