import React, {useState}from 'react'

const GenForm = ({ fields, title, submitFunc }) => {
    // const [name,setName]=useState('');
    // const [email,setEmail]=useState('');
    // const [phone,setPhone]=useState('');
    console.log();
    return (
        <>
            <div className='form-container d-flex flex-column border border-2 border-grey rounded'>
                <h2 className='form-container-header entry__title title title_sm text-center contact-title'>{title}</h2>
                <div className='form-container-input d-flex flex-column justify-content-center align-items-center'>
                    {
                        fields.map(e =>
                            <div>
                            <span className='input-icon'>{e.icon}</span>
                            {e.render && e.render()}
                            </div>
                        )
                    }
                        <button 
                            className="form-container-input-btn"
                            type="submit"
                            onClick={submitFunc}
                            >Send Now</button>
                </div>

            </div>
        </>
    )
}

export default GenForm