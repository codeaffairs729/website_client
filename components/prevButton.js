import React from 'react'

const PrevButton = (props) => {
  const { className, style, onClick } = props
  return (
    <button
      type="button"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        className="slider-button-place icon icon-arrow-prev"
        aria-labelledby="arrow-prev-icon"
      >
        <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
      </svg>
    </button>
  )
}

export default PrevButton
