import React from 'react'

const SideImages = (props) => {
    const { sideImagesgUrl, id } = props
    return (
        <>
            <div className='col-lg-12 col-md-12 col-2 about-area-4-side-col' >
                <a
                    href={void (0)} onClick={props.SideImagesChangeHandle}
                    style={{ cursor: 'pointer' }}
                >
                    <img className='about-area-4-side-img' id={id} src={sideImagesgUrl} alt='' />
                </a>
            </div>
        </>
    )
}

export default SideImages