import Image from 'next/image'

const Rating = () => {
  return (
    <div className="rating">
      <div className="rating-container d-flex flex-column justify-content-between">
        <div
          className="rating-text fw-bold fs-5"
          // data-aos="fade-up"
          // data-aos-delay="200"
          // data-aos-offset="10"
        >
          Top Rated On
        </div>
        <div className="rating-row">
          <div
            className="d-flex flex-column justify-content-between rating-border-left"
            // data-aos="fade-up"
            // data-aos-delay="200"
            // data-aos-offset="10"
          >
            <div>
              <Image
                src="/img/rating/clutch_new.png"
                alt="clutch-logo"
                width={78}
                height={23}
              />
            </div>
            <div className="rating-img">
              <Image
                src="/img/rating/five-star.full.svg"
                alt="five-star-img"
                width={143}
                height={20}
                // data-aos="fade-up"
                // data-aos-delay="200"
                // data-aos-offset="10"
              />
            </div>
          </div>
          <div className="d-flex flex-column justify-content-between">
            <div>
              <Image
                src="/img/rating/goodfirms.svg"
                alt="goodfirm-logo"
                width={142}
                height={22}
                // data-aos="fade-up"
                // data-aos-delay="200"
                // data-aos-offset="10"
              />
            </div>
            <div className="rating-img">
              <Image
                src="/img/rating/five-star.full.svg"
                alt="five-full-rating-png"
                width={142}
                height={20}
                // data-aos="fade-up"
                // data-aos-delay="200"
                // data-aos-offset="10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Rating
