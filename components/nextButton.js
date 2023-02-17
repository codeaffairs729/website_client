import React from 'react'

const NextButton = (props) => {
  const { className, style, onClick } = props
  return (
    <button
      type="button"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg className="icon icon-arrow-next" aria-labelledby="arrow-next-icon">
        <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
      </svg>
    </button>
  )
}

export default NextButton
