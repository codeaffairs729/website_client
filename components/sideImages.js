import React from 'react'

const SideImages = (props) => {
  const { sideImagesgUrl, id, altImg } = props
  return (
    <>
      <div className="col-lg-12 col-md-12 col-2 about-area-4-side-col">
        <a
          href={void 0}
          onClick={props.SideImagesChangeHandle}
          className="cursor_pointer"
        >
          <img
            className="about-area-4-side-img"
            id={id}
            src={sideImagesgUrl}
            alt={altImg}
          />
        </a>
      </div>
    </>
  )
}

export default SideImages
