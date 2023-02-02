
const ScheduleMeetingForm = ({ fields, title, submitFunc ,buttonText,submitButton}) => {
    
    // const [name,setName]=useState('');
    // const [email,setEmail]=useState('');es
    // const [phone,setPhone]=useState('');
    return (
        <>
            <div className='assist-gen-form-container d-flex flex-column align-items-center'>
                <div className='assist-input-field'>
                <h2 className='assist-form-container-header'>{title}</h2>
                <div className='assist-form-container-input d-flex flex-column justify-content-center align-items-center'>
                    {
                        fields.map((e,i) =>
                            <div className='assist-form-input-detail' key={i}>
                            <span className='assist-input-icon'>{e.icon}</span>
                            {e.render && e.render()}
                            </div>
                        )
                    }
                    </div>
                        {submitButton()}
                </div>

            </div>
        </>
    )
}

export default ScheduleMeetingForm