const Rating = () => {
  return (
    <div className="rating">
      <div className="rating-container d-flex flex-column justify-content-between">
        <div className="rating-text">Top Rate Vendor On</div>
        <div className="rating-row">
          <div className="d-flex flex-column justify-content-between">
            <div>
              <img src="/img/rating/clutch-sigle.svg" />
            </div>
            <div className="rating-img">
              <img src="/img/rating/five-star.svg" />
            </div>
          </div>
          <div className="d-flex flex-column justify-content-between">
            <div>
              <img src="/img/rating/goodfirms.svg" />
            </div>
            <div className="rating-img">
              <img src="/img/rating/five-star.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Rating
