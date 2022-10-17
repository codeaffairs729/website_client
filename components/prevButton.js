import React from 'react'

const PrevButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <button className={className} style={{ ...style }} onClick={onClick} >
      <svg className="icon icon-arrow-prev">
          <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
      </svg>
    </button>
  )
}

export default PrevButton