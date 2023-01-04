import React from 'react'

const GenForm = ({ fields, title, submitFunc }) => {
    return (
        <>
        <div className='container '>
        <h2>{title}</h2>
            {
                fields.map(e =>
                    <input type="text" placeholder={e.placeholder} />
                    )
            }
            </div>
        </>
    )
}

export default GenForm