import React, { useState, useRef } from 'react'
import Header from './includes/header';
import Footer from './includes/footer';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import GenericModal from '../components/genericModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Careers = () => {
    const [email, setEmail] = useState("");
    const [jobPosition, setJobPosition] = useState("");
    const [experience, setExperience] = useState("");
    // const [resume, setResume] = useState("");

    const image = useRef(null);

    const [genModalshow, setGenModalshow] = useState(false);
    const handleModalShow = () => {
        setGenModalshow(true);
    }

    const handleModalClose = () => {
        setGenModalshow(false);
    }

    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSubmit = (e) => {
        debugger
        e.preventDefault();

        if (!executeRecaptcha) {
            console.log("Execute recaptcha not yet available");
            return;
        }
        executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
            submitEnquiryForm(gReCaptchaToken);
        });
    };

    const submitEnquiryForm = (gReCaptchaToken) => {
        debugger
        fetch("/api/applyForJob", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                jobPosition: jobPosition,
                experience: experience,
                gRecaptchaToken: gReCaptchaToken
            }),
        })
        .then((res) => res.json())
        .then((res) => {
            if (res?.status === "success") {
                setEmail("");
                setJobPosition("");
                setExperience("");
                setGenModalshow(false);
                toast.success('Success! Email Sent Successful', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.error('Error! Email Not Sent', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        });
    };
  return (
    <>
        <Header />
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        /><ToastContainer />
        <div className='container-fluid career-area-1 px-5' >
            <div className='row career-area-1-row rounded-pill' >
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
                <div className='rounded-circle career-area-1-circle' ></div>
            </div>
        </div>

        <div className='container-fluid career-area-2 px-5' >
            <div className='row' >
                <div className='col-lg-4' >
                    <img className='' src='' alt='' />
                </div>
                <div className='col-lg-8' >
                    <div className='row' >
                        <div className='col-lg-1' ></div>
                        <div className='col-lg-9' >
                            <h2 className='career-area-2-heading' >
                                We code & We know things!
                            </h2>
                            <p className='career-area-2-para' >
                                akbddwdkndwn dnajnd jadw dwajd jkdaj da dda dd  da wdwdj d ad awj daw wdwa da dwad ad
                            </p>
                        </div>
                        <div className='col-lg-2' ></div>
                    </div>
                    <div className='row' >
                        <div className='col-lg-5' >
                            <img className='' src='' alt='' />
                        </div>
                        <div className='col-lg-7 career-area-2-img3-outer' >
                            <img className='' src='' alt='' />
                            <img className='career-area-2-typing-icon' src='images/type.png' alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded-circle career-area-2-circle' ></div>
        </div>

        <div className='container-fluid px-5 my-5 career-area-3' >
            <div className='row career-area-3-outer-row border-top-5 p-5' >
                <div className='col-lg-12' >
                    <h1 className='mb-4 career-area-3-heading' >
                        Hop on a hyper growth ride &gt;&gt;&gt;
                    </h1>
                </div>
                <div className='col-lg-6 career-area-3-para' >
                    We offer flexible pricing options for freelancers and design teams. sadssafafasasasdjkasdkjasndasndandnasjkdnaksjd asndjkandjkandasndsa dsajd sajd asj das dasd ajdjassdda d asdasj dajs dja dja djas dasjd ahjs d asdjas d asjd asdajd ad
                </div>
                <div className='col-lg-6 career-area-3-circle-outer' >
                    <div className='about-area-circle career-area-3-circle1' ></div>
                    <img className='career-area-3-cursor' src='img/cursor.png' alt='' />
                    <div className='about-area-circle career-area-3-circle2' ></div>
                </div>
                <div className='about-area-circle career-area-3-circle3' ></div>
            </div>
            <img className='career-area-3-line-circle' src='images/career-line-circle.png' alt='' />
        </div>

        <div className='container-fluid career-area-4 px-5' >
            <div className='row justify-content-center align-items-center career-area-4-row' >
                <h2 className='career-area-4-heading' >
                    Our Best Perks Are
                    <br />
                    People Themselves
                </h2>
                <div className='rounded-circle career-area-4-circle1' ></div>
                <div className='rounded-circle career-area-4-circle2' ></div>
                <div className='rounded-circle career-area-4-circle3' ></div>
                <div className='rounded-circle career-area-4-circle4' ></div>
            </div>
        </div>

        <div className='container-fluid career-area-5' >
            <div className='container career-area-5-container' >
                <div className='row' >
                    <div className='col-lg-12 pb-5'>
                        <h2 className='text-center career-area-5-heading' >
                            Watch Out For
                        </h2>
                    </div>
                </div>
                <div className='row' >
                    <div className='col-lg-4 col-md-4 px-4 career-area-5-gray-box-outer' >
                        <div className='career-area-5-gray-box py-5' >
                            <h2 className='text-center career-area-5-sub-heading mb-3' >
                                6
                            </h2>
                            <p className='text-center career-area-5-para' >best clutch score</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 px-4 career-area-5-gray-box-outer' >
                        <div className='career-area-5-gray-box py-5' >
                            <h2 className='text-center career-area-5-sub-heading mb-3' >
                                80%
                            </h2>
                            <p className='text-center career-area-5-para' >best clutch score</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 px-4 career-area-5-gray-box-outer' >
                        <div className='career-area-5-gray-box py-5' >
                            <h2 className='text-center career-area-5-sub-heading mb-3' >
                                9/10
                            </h2>
                            <p className='text-center career-area-5-para' >best clutch score</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid career-area-6' >
            <div className='row text-center career-area-6-row' >
                <div className='col-lg-12' >
                    <h2 className='career-area-6-heading' >
                        Do You Think this can be
                        <br />
                        the place for you?
                    </h2>
                </div>
                <div className='col-lg-12' >
                    <button className="btn btn_pink mt-5" onClick={handleModalShow} >Apply Now</button>
                </div>
            </div>
        </div>

        <GenericModal
            genModalshow={genModalshow}
            handleModalClose={handleModalClose}
            handleSubmit={handleSubmit}
            modalHeaderShow={true}
            modalBodyShow={true}
            modalFooterShow={false}
            modalTitle={"Enter Your Details Below"}
            modalBody={<div>
                <input onChange={(e)=> setEmail(e.target.value)} className="form-control contact-field-input mb-4" type="email" name="email" placeholder="Your Email ID" required />
                <select className='form-control contact-field-input mb-4' onChange={(e)=> setJobPosition(e.target.value)} name="jobPosition" required >
                    <option value="none" >What job are you applying for?</option>
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
                <select className='form-control contact-field-input mb-4' onChange={(e)=> setExperience(e.target.value)} name="experience" required >
                    <option value="none" >Your Work Experience?</option>
                    <option value="Internship">Internship</option>
                    <option value="Fresher">Fresher</option>
                    <option value="1 year">1 year</option>
                    <option value="2 years">2 years</option>
                    <option value="3 years">3 years</option>
                    <option value="4 years">4 years</option>
                    <option value="5 years">5 years</option>
                    <option value="5+ years">5+ years</option>
                </select>
                <div className='job-apply-upImg-text d-flex mb-4' >
                    <a className='job-apply-upImg-link' onClick={() => image.click()} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1102_2677" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="5" y="3" width="14" height="18">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14 16.2961H10C9.45 16.2961 9 15.8461 9 15.2961V10.2961H7.41C6.52 10.2961 6.08 9.2161 6.71 8.5861L11.3 3.9961C11.4868 3.80885 11.7405 3.70361 12.005 3.70361C12.2695 3.70361 12.5232 3.80885 12.71 3.9961L17.3 8.5861C17.93 9.2161 17.48 10.2961 16.59 10.2961H15V15.2961C15 15.8461 14.55 16.2961 14 16.2961ZM18 18.2961H6C5.45 18.2961 5 18.7461 5 19.2961C5 19.8461 5.45 20.2961 6 20.2961H18C18.55 20.2961 19 19.8461 19 19.2961C19 18.7461 18.55 18.2961 18 18.2961Z" fill="black"/>
                            </mask>
                            <g mask="url(#mask0_1102_2677)">
                            <rect width="24" height="24" fill="#5956E9"/>
                            </g>
                        </svg>
                        <span className='' >Upload Resume</span>
                    </a>
                </div>
                <input ref={(selectImage) => { image = selectImage} } className='d-none' name='resume' id='resume' type='file' />
                <div className="mb-4 text-end">
                    <button className="entry__btn btn btn_purple contact-submit-btn btn-sm mb-3 w-100" type="submit" >Send Now</button>
                </div>
            </div>}
        />
        <Footer />
    </>
  )
}

export default Careers