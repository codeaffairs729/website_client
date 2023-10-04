import React, { useState, useRef, useEffect } from 'react'
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import GenericModal from '../components/GenericModal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import style from '../styles/ShimmerCareers.module.css'
import JoiningReasons from '../components/JoiningReasons'
const Shimmer = dynamic(() => import('../components/ShimmerCareers'), {
  ssr: false,
})

const Activity = dynamic(() => import('../components/Activity'), {
  ssr: false,
})
const Ratings = dynamic(() => import('../components/Ratings'), {
  ssr: false,
})
const Growth = dynamic(() => import('../components/Growth'), {
  ssr: false,
})
const Funactivity = dynamic(() => import('../components/Funactivity'), {
  ssr: false,
})

const Careers = () => {
  const [loaded, setLoaded] = useState(false)
  const [shimmer, setShimmer] = useState(true)

  const handleImageLoad = (origin) => {
    setLoaded(true)
  }

  setTimeout(() => {
    setShimmer(false)
  }, '500')

  const [email, setEmail] = useState('')
  const [jobPosition, setJobPosition] = useState('')
  const [experience, setExperience] = useState('')
  const [resume, setResume] = useState('')
  const [resumeName, setResumeName] = useState('')
  const [resumeType, setResumeType] = useState('')
  const [resumeBase64, setResumeBase64] = useState('')
  const [createObjectURL, setCreateObjectURL] = useState('')
  const [fileAlert, setFileAlert] = useState(false)

  const image = useRef(null)
  const submitBtn = useRef(null)

  const [genModalshow, setGenModalshow] = useState(false)
  const handleModalShow = () => {
    setGenModalshow(true)
  }
  const handleModalClose = () => {
    setGenModalshow(false)
  }
  const uploadToClient = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      const base64 = await convertBase64(file)

      // setResume(file);
      setResumeName(file.name)
      setResumeType(file.type)
      setResumeBase64(base64.split(',')[1])
      setCreateObjectURL(URL.createObjectURL(file))
    }
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)

      fileReader.onload = () => {
        resolve(fileReader.result)
      }

      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  // const { executeRecaptcha } = useGoogleReCaptcha();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!executeRecaptcha) {
  //     console.log("Execute recaptcha not yet available");
  //     return;
  //   }
  //   executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
  //     submitEnquiryForm(gReCaptchaToken);
  //   });
  // };

  const submitEnquiryForm = (e) => {
    e.preventDefault()
    if (resumeName == '') {
      setFileAlert(true)
      return
    }
    submitBtn.disabled = true
    submitBtn.innerHTML =
      '<span class="spinner-border spinner-border-sm"></span> Loading...'
    fetch('/api/applyForJob', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        jobPosition: jobPosition,
        experience: experience,
        resumeName: resumeName,
        resumeType: resumeType,
        resumeBase64: resumeBase64,
        // gRecaptchaToken: gReCaptchaToken,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.status === 'success') {
          setEmail('')
          setJobPosition('')
          setExperience('')
          setResumeName('')
          setResumeType('')
          setResumeBase64('')
          setResume('')
          setCreateObjectURL('')
          setGenModalshow(false)

          submitBtn.disabled = false
          submitBtn.innerHTML = 'Send Now'

          toast.success('Success! Email Sent Successful', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        } else {
          submitBtn.disabled = false
          submitBtn.innerHTML = 'Send Now'

          toast.error('Error! Email Not Sent', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
      })
  }

  const handleCurrentOpenings = (val) => {
    setJobPosition(val)
    handleModalShow()
  }

  useEffect(() => {
    handleImageLoad('useEffect')
  }, [loaded])
  return (
    <>
      {/* <Header /> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <Head>
        <title>
          Explore App Development Technology Jobs at Code Garage Tech!
        </title>
        <link rel="canonical" href="https://codegaragetech.com/careers" />
        <meta
          name="description"
          content="We at Code Garage Tech offer reliable Web Development Technology jobs and be a part of our innovative and happy work culture! Give new wings to your career now."
        />
        <meta
          name="keywords"
          content="Web Development Technology, App Development Technology"
        ></meta>
      </Head>
      <div className={shimmer ? `` : `${style.display_None}`}>
        <Shimmer />
      </div>
      <div className={shimmer ? `${style.display_None}` : ``}>
        <Funactivity />
        <div className="container-fluid career-area-1">
          <div className={`row career-area-1-row rounded-pill ${style.p0}`}>
            <div className="col-lg-12 career-area-1-col1">
              <h2 className="career-area-1-heading">
                Extraordinary Problem Require Extraordinary People
              </h2>
              <p className="career-area-1-para py-3">
                We offer a refreshing ambiance where you can explore your
                caliber.
              </p>
              <button
                onClick={handleModalShow}
                className="btn btn_pink career-area-1-btn px-5"
              >
                Join The Exceptionals
              </button>
            </div>
            <div className="rounded-circle career-area-1-circle"></div>
            <div className="rounded-circle career-area-1-circle-2"></div>
          </div>
        </div>

        <Growth />

        {/* <div className='container-fluid career-area-7' >
                <div className='container career-area-7-container' >
                    <div className='row' >
                        <div className='col-lg-12'>
                            <h2 className='text-center career-area-7-heading' >
                                Current Openings
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="career-area-7-cloud-1-outer rackspace-floating">
                    <img className="career-area-7-cloud-1" src="img/cloud.webp" alt="" />
                    <p className='career-area-7-techName-hiring-1' >
                        <span className='d-flex align-items-center' >
                            <img className="career-area-7-tech-img me-2" src="images/fullStack.webp" alt="" />
                            <b className='text-start'>
                                Full Stack
                                <br/>
                                Developer
                            </b>
                        </span>
                        <button className='btn btn_yellow career-area-7-techName-hiring-btn-1 mt-2' onClick={() => handleCurrentOpenings('Full Stack Developer')} >Apply</button>
                    </p>
                </div>
                <div className="career-area-7-cloud-2-outer digitalocean-floating">
                    <img className="career-area-7-cloud-1" src="img/cloud.webp" alt="" />
                    <p className='career-area-7-techName-hiring-1' >
                        <span className='d-flex align-items-center' >
                            <img className="career-area-7-tech-img me-2" src="images/shopify_icon.webp" alt="" />
                            <b className='text-start' >
                                Shopify
                                <br/>
                                Developer
                            </b>
                        </span>
                        <button className='btn btn_purple career-area-7-techName-hiring-btn-1 mt-2' onClick={() => handleCurrentOpenings('Shopify Developer')} >Apply</button>
                    </p>
                </div>
                <div className="career-area-7-cloud-3-outer salesforce-floating">
                    <img className="career-area-7-cloud-1" src="img/cloud.webp" alt="" />
                    <p className='career-area-7-techName-hiring-1' >
                        <span className='d-flex align-items-center' >
                            <img className="career-area-7-tech-img me-2" src="images/python_2.webp" alt="" />
                            <b className='text-start' >
                                Python
                                <br/>
                                Developer
                            </b>
                        </span>
                        <button className='btn btn_pink career-area-7-techName-hiring-btn-1 mt-2' onClick={() => handleCurrentOpenings('Python Developer')} >Apply</button>
                    </p>
                </div>
                <div className="career-area-7-cloud-4-outer aws-floating">
                    <img className="career-area-7-cloud-1" src="img/cloud.webp" alt="" />
                    <p className='career-area-7-techName-hiring-1' >
                        <span className='d-flex align-items-center' >
                            <img className="career-area-7-tech-img me-2" src="icons/laravel.webp" alt="" />
                            <b className='text-start' >
                                Laravel, PHP
                                <br/>
                                Developer
                            </b>
                        </span>
                        <button className='btn btn_green career-area-7-techName-hiring-btn-1 mt-2' onClick={() => handleCurrentOpenings('Laravel/PHP Developer')} >Apply</button>
                    </p>
                </div>
                <div className="career-area-7-cloud-5-outer aws-floating">
                    <img className="career-area-7-cloud-1" src="img/cloud.webp" alt="" />
                    <p className='career-area-7-techName-hiring-1' >
                        <span className='d-flex align-items-center' >
                            <img className="career-area-7-tech-img me-2" src="images/seo-analyst.webp" alt="" />
                            <b className='text-start' >
                                SEO
                                <br/>
                                Analyst
                            </b>
                        </span>
                        <button className='btn btn-dark career-area-7-techName-hiring-btn-1 mt-2' onClick={() => handleCurrentOpenings('SEO Analyst')} >Apply</button>
                    </p>
                </div>
            </div> */}
        <Ratings />
        <Activity />
        <JoiningReasons />
        <div className="container-fluid career-area-6">
          <div className="row text-center career-area-6-row">
            <div className="col-lg-12">
              <h2 className="career-area-6-heading">
                Do You Think This Can Be
                <br />
                The Place For You?
              </h2>
            </div>
            <div className="col-lg-12">
              <button className="btn btn_pink mt-5" onClick={handleModalShow}>
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        <GenericModal
          genModalshow={genModalshow}
          handleModalClose={handleModalClose}
          handleSubmit={submitEnquiryForm}
          modalHeaderShow={true}
          modalBodyShow={true}
          modalFooterShow={false}
          modalTitle={'Enter Your Details Below'}
          source={'careers'}
          modalBody={
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="form-control contact-field-input mb-4"
                type="email"
                name="email"
                placeholder="Your Email ID"
                value={email}
                required
              />
              <select
                className="form-control contact-field-input mb-4"
                onChange={(e) => setJobPosition(e.target.value)}
                name="jobPosition"
                value={jobPosition}
                required
              >
                <option value="none">What job are you applying for?</option>
                <option value="Ruby on Rails">Ruby on Rails Developer</option>
                <option value="Python Developer">Python Developer</option>
                <option value="Python/Django Developer">
                  Python/Django Developer
                </option>
                <option value="Python/Flask Developer">
                  Python/Flask Developer
                </option>
                <option value="Mern Stack Developer">
                  Mern Stack Developer
                </option>
                <option value="Full Stack Developer">
                  Full Stack Developer
                </option>
                <option value="React Js Developer">React Js Developer</option>
                <option value="Node Js Developer">Node Js Developer</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Web Designer">Web Designer</option>
                <option value="Mobile/Web Developer">
                  Mobile/Web Developer
                </option>
                <option value="Internet Marketing Expert">
                  Internet Marketing Expert
                </option>
                <option value="SEO Analyst">SEO Analyst</option>
                <option value="Content Writer">Content Writer</option>
                <option value="Video Editor">Video Editor</option>
                <option value="Laravel/PHP Developer">
                  Laravel/PHP Developer
                </option>
                <option value="Sales Executive">Sales Executive</option>
                <option value="Online Bidder/BDE">Online Bidder/BDE</option>
                <option value="Shopify Developer">Shopify Developer</option>
              </select>
              <select
                className="form-control contact-field-input mb-4"
                onChange={(e) => setExperience(e.target.value)}
                name="experience"
                value={experience}
                required
              >
                <option value="none">Your Work Experience?</option>
                <option value="Internship">Internship</option>
                <option value="Fresher">Fresher</option>
                <option value="1 year">1 year</option>
                <option value="2 years">2 years</option>
                <option value="3 years">3 years</option>
                <option value="4 years">4 years</option>
                <option value="5 years">5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
              <p className={fileAlert ? 'text-danger' : 'd-none'}>
                Please upload your resume*
              </p>
              <div className="job-apply-upImg-text d-flex mb-4">
                <a
                  className="job-apply-upImg-link"
                  onClick={() => image.click()}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_1102_2677"
                      className="mask-type-alpha"
                      maskUnits="userSpaceOnUse"
                      x="5"
                      y="3"
                      width="14"
                      height="18"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 16.2961H10C9.45 16.2961 9 15.8461 9 15.2961V10.2961H7.41C6.52 10.2961 6.08 9.2161 6.71 8.5861L11.3 3.9961C11.4868 3.80885 11.7405 3.70361 12.005 3.70361C12.2695 3.70361 12.5232 3.80885 12.71 3.9961L17.3 8.5861C17.93 9.2161 17.48 10.2961 16.59 10.2961H15V15.2961C15 15.8461 14.55 16.2961 14 16.2961ZM18 18.2961H6C5.45 18.2961 5 18.7461 5 19.2961C5 19.8461 5.45 20.2961 6 20.2961H18C18.55 20.2961 19 19.8461 19 19.2961C19 18.7461 18.55 18.2961 18 18.2961Z"
                        fill="black"
                      />
                    </mask>
                    <g mask="url(#mask0_1102_2677)">
                      <rect width="24" height="24" fill="#5956E9" />
                    </g>
                  </svg>
                  <span>Upload Resume</span>
                </a>
              </div>
              <input
                ref={(selectImage) => {
                  image = selectImage
                }}
                onChange={uploadToClient}
                className="d-none"
                name="resume"
                id="resume"
                type="file"
                value={resume}
                accept=".doc, .docx, .pdf"
              />
              <div className="mb-4 text-end">
                <button
                  ref={(submitBtnRef) => {
                    submitBtn = submitBtnRef
                  }}
                  className="entry__btn btn btn_purple contact-submit-btn btn-sm mb-3 w-100"
                  type="submit"
                >
                  Send Now
                </button>
              </div>
            </div>
          }
        />
      </div>
    </>
  )
}

export default Careers
