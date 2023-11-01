import React from 'react'
import style from '../styles/Shimmer.module.css'

const ShimmerEffect = () => {
  return (
    <div className={`${style.container}`}>
      <div className={` ${style.upper_container}`}>
        <div className={`  ${style.upper_container_item}`}></div>
      </div>
      <div className={` ${style.lower_container}`}>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={`${style.lower_container_item_2}`}></div>
    </div>
  )
}

export default ShimmerEffect
