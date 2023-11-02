import React, { useState } from 'react'
import style from '../styles/about.module.css'

const SideImages = (props) => {
  const { sideImagesgUrl, id, altImg, SideImagesChangeHandle, selected } = props

  const handleClick = () => {
    SideImagesChangeHandle(id)
  }

  return (
    <div
      className={`col-lg-12 col-md-12 col-2 about-area-4-side-col ${style.about_area_4_side_face}`}
    >
      <a href={void 0} onClick={handleClick} className={`cursor_pointer`}>
        <img
          className={`about-area-4-side-img ${selected ? style.selected : ''}`}
          id={id}
          src={sideImagesgUrl}glob
          alt={altImg}
        />
      </a>
    </div>
  )
}

export default SideImages
