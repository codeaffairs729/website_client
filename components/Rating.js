import Image from 'next/image'

const Rating = () => {
  return (
    <div className="rating">
      <div className="rating-container d-flex flex-column justify-content-between">
        <div className="rating-text fw-bold fs-5">Top Rated On</div>
        <div className="rating-row">
          <div className="d-flex flex-column justify-content-between rating-border-left">
            <div>
              <Image
                src="/img/rating/clutch-sigle.svg"
                alt="clutch-logo"
                width={78}
                height={32}
              />
            </div>
            <div className="rating-img">
              <Image
                src="/img/rating/five-star.svg"
                alt="five-star-img"
                width={143}
                height={20}
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
              />
            </div>
            <div className="rating-img">
              <Image
                src="/img/rating/five-star.full.svg"
                alt="five-full-rating-png"
                width={142}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Rating
