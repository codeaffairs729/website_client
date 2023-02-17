const SliderButton = ({ gotoPrev, gotoNext }) => {
  return (
    <div className="d-flex">
      <button aria-label="package-prev" onClick={gotoPrev}>
        <svg
          stroke="#FFFFFF"
          fill="#FAB8C4"
          strokeWidth="1"
          viewBox="0 0 24 24"
          className="p-1 slider-btn-pink rounded-circle"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#FFFFF"
            strokeWidth="1"
            d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8"
            transform="matrix(-1 0 0 1 24 0)"
          ></path>
        </svg>
      </button>

      <button className="mx-3" aria-label="package-next" onClick={gotoNext}>
        <svg
          stroke="#FFFFFF"
          fill="#5956e9"
          strokeWidth="1"
          viewBox="0 0 24 24"
          className="p-1 slider-btn-blueviolet rounded-circle "
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#FFFFF"
            strokeWidth="1"
            d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8"
          ></path>
        </svg>
      </button>
    </div>
  )
}

export default SliderButton
