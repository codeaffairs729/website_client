import React from 'react'
import Header from './includes/header'
import Footer from './includes/footer'

const Careers = () => {
  return (
    <>
        <Header />
        <div className='container-fluid career-area-1 px-5' >
            <div className='row career-area-1-row' >
                <div className='col-lg-12 career-area-1-col1' >
                    <h1 className='career-area-1-heading' >
                        Extraordinary Products Require Exceptional People
                    </h1>
                    <p className='career-area-1-para py-3' >
                        We offer flexible pricing options for freelancers and design teams.
                    </p>
                    <button className='btn btn-primary bg-white career-area-1-btn px-5' >
                        Join The Exceptionals
                    </button>
                </div>
            </div>
        </div>
        <div className='container career-outer' >
            <div className='row' >
                <div className='col-lg-6' >
                    <h1>Searching for a Job?</h1>
                </div>
                <div className='col-lg-6' >
                    <h1>Please fill in the following form</h1>
                </div>
                <div className='col-lg-6' >
                    <img className='career-cv-img' src='images/cv1.jpg' alt='' />
                </div>
                <div className='col-lg-6' >
                    <form>
                        <div className='form-group entry__field field' >
                            <input className='form-control contact-field-input' type="text" name="name" placeholder='Name' required />
                        </div>
                        <div className='form-group entry__field field' >
                            <input className='form-control contact-field-input' type="email" name="email" placeholder='Enter Your Email' required />
                        </div>
                        <div className='form-group entry__field field' >
                            <input className='form-control contact-field-input' type="tel" name="phone" placeholder='Enter Phone Number' pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
                        </div>
                        <div className='form-group entry__field field' >
                            <div className="field__label">Please select a job position*</div>
                            <select className='form-control contact-field-input' required >
                                <option value="none"  disabled hidden>--Select--</option>
                                <option value="Ruby on Rails">Ruby on Rails Developer</option>
                                <option value="Python Developer">Python Developer</option>
                                <option value="Python/Django Developer">Python/Django Developer</option>
                                <option value="Python/Flask Developer">Python/Flask Developer</option>
                                <option value="Mern Stack Developer">Mern Stack Developer</option>
                                <option value="Full Stack Developer">Full Stack Developer</option>
                                <option value="React Js Developer">React Js Developer</option>
                                <option value="Node Js Developer">Node Js Developer</option>
                                <option value="Web Developer">Web Developer</option>
                                <option value="Web Designer">Web Designer</option>
                                <option value="Mobile/Web Developer">Mobile/Web Developer</option>
                                <option value="Internet Marketing Expert">Internet Marketing Expert</option>
                                <option value="SEO Analyst">SEO Analyst</option>
                            </select>
                        </div>
                        <div className='form-group entry__field field' >
                            <div className="field__label">Your work experience*</div>
                            <select className='form-control contact-field-input' required >
                                <option value="none"  disabled hidden>--Select--</option>
                                <option value="Internship">Internship</option>
                                <option value="Fresher">Fresher</option>
                                <option value="1 year">1 year</option>
                                <option value="2 years">2 years</option>
                                <option value="3 years">3 years</option>
                                <option value="4 years">4 years</option>
                                <option value="5 years">5 years</option>
                                <option value="5+ years">5+ years</option>
                            </select>
                        </div>
                        <div className='form-group entry__field field' >
                            <div className="field__label">Technologies*</div>
                            <select className='form-control contact-field-input' required >
                                <option value="none"  disabled hidden>--Select--</option>
                                <option value="React/Redux Native"> React/Redux Native</option>
                                <option value="Python/Django/Flask">Python/Django/Flask</option>
                                <option value="Ruby On Rails">Ruby On Rails</option>
                                <option value="WordPress/PHP">WordPress/PHP</option>
                                <option value="Scrapping">Web Scrapping</option>
                                <option value="Automation">Automation</option>
                                <option value="Angular/React/Backbone/Vue">Angular/React/Backbone/Vue</option>
                                <option value="Node/Express Js">Node/Express Js</option>
                                <option value="Multi-Technologies">Multi-Technologies</option>
                                <option value="Android/Ios">Android/Ios</option>
                            </select>
                        </div>
                        <div className='form-group entry__field field' >
                            <input className='form-control contact-field-input' type="file" name="resume" required />
                        </div>
                        <div className='form-group entry__field field' >
                            <button className='btn btn-primary career-submit-btn' >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Careers