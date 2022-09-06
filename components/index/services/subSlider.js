import React from 'react'

const SubSlider = (props) => {
    const { techImage, techName } = props
    return (
        <>
            <div className='row'>
                <div className='col-lg-12 d-flex justify-content-center' >
                    <img className="package-subslider-img" src={techImage} alt={techName} />
                </div>
                <div className='col-lg-12 package-subslider-name' >
                    <h6 className='package-subslider-h6' >{techName}</h6>
                </div>
            </div>
        </>
    )
}

export default SubSlider