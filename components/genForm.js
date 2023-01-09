import React, {useState}from 'react'

const GenForm = ({ fields, title, submitFunc }) => {
    // const [name,setName]=useState('');
    // const [email,setEmail]=useState('');es
    // const [phone,setPhone]=useState('');
    console.log();
    return (
        <>
            <div className='gen-form-container d-flex flex-column align-items-center'>
                <div className='input-field'>
                <h2 className='form-container-header'>{title}</h2>
                <div className='form-container-input d-flex flex-column justify-content-center align-items-center'>
                    {
                        fields.map((e,i) =>
                            <div key={i}>
                            <span className='input-icon'>{e.icon}</span>
                            {e.render && e.render()}
                            </div>
                        )
                    }
                    </div>
                    <p className='small-para'>We sign NDA for all our projects.</p>
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