import React from 'react'


const CompanyDescriptionForm = () => {
    return (
        <div>
            <div className='form-container d-flex' >
                <form className='border border-success p-4'>
                    <div className="form-group ">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>

                    <button type="submit" className="form-container-btn btn">Apply Now</button>
                </form>
            </div>
        </div>
    )
}

export default CompanyDescriptionForm