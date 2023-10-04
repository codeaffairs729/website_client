import React from 'react'
import Image from 'next/image'
function Ratings() {
  return (
    <>
      <div className="container-fluid career-area-5">
        <div className="container career-area-5-container">
          <div className="row">
            <div className="col-lg-12 pb-5">
              <h2 className="text-center career-area-5-heading">
                Watch Out For
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 px-4 career-area-5-gray-box-outer">
              <div className="career-area-5-gray-box py-2">
                <div className="rating-container-followers d-flex flex-column align-items-center">
                  <p className="rating-container-followers-linkedin-text fs-5">
                    3000 + Followers
                  </p>
                  <img src="/icons/Linkedin-Logo.webp" alt="LinkedIn - Logo" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 px-4 career-area-5-gray-box-outer">
              <div className="career-area-5-gray-box py-3">
                <div className="rating-container py-3 d-flex justify-content-evenly">
                  <div>
                    <img src="/icons/google-icon.webp" alt="Google Icon" />
                  </div>
                  <div>
                    <div className="rating-container-headline fs-5">Google</div>
                    <div>
                      <span className="Warning">
                        <Image
                          src="/icons/star-full-icon.svg"
                          height={16}
                          width={16}
                        />
                      </span>
                      <span className="Warning">
                        <Image
                          src="/icons/star-full-icon.svg"
                          height={16}
                          width={16}
                        />
                      </span>
                      <span className="Warning">
                        <Image
                          src="/icons/star-full-icon.svg"
                          height={16}
                          width={16}
                        />
                      </span>
                      <span className="Warning">
                        <Image
                          src="/icons/star-full-icon.svg"
                          height={16}
                          width={16}
                        />
                      </span>
                      <span className="Warning pr-2">
                        <Image
                          src="/icons/star-full-icon.svg"
                          height={16}
                          width={16}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">5/5</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 px-4 career-area-5-gray-box-outer">
              <div className="career-area-5-gray-box py-3">
                <div className="rating-container py-3 d-flex justify-content-evenly">
                  <div>
                    <img
                      src="/icons/glassdoor-icon-48.webp"
                      alt="Glassdoor Icon"
                    />
                  </div>
                  <div>
                    <div className="rating-container-headline fs-5">
                      Glassdoor
                    </div>
                    <div>
                      <span className="Warning">
                        <Image
                          src="/icons/star-full-icon.svg"
                          height={16}
                          width={16}
                        />
                      </span>
                      <span className="Warning">
                        <Image
                          src="/icons/star-full-icon.svg"
                          height={16}
                          width={16}
                        />
                      </span>
                      <span className="Warning">
                        <Image
                          src="/icons/star-full-icon.svg"
                          height={16}
                          width={16}
                        />
                      </span>
                      <span className="Warning">
                        <Image
                          src="/icons/star-full-icon.svg"
                          height={16}
                          width={16}
                        />
                      </span>
                      <span className="Warning">
                        <Image
                          src="/icons/star-full-icon.svg"
                          height={16}
                          width={16}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">5/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ratings
