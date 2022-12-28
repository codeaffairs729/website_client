import React, { useState, useRef } from 'react'
import Header from './includes/header';
import Footer from './includes/footer';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import GenericModal from '../components/genericModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import { AiFillStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'



const Careers = () => {
    const [email, setEmail] = useState("");
    const [jobPosition, setJobPosition] = useState("");
    const [experience, setExperience] = useState("");
    const [resume, setResume] = useState("");
    const [resumeName, setResumeName] = useState("");
    const [resumeType, setResumeType] = useState("");
    const [resumeBase64, setResumeBase64] = useState("");
    const [createObjectURL, setCreateObjectURL] = useState("");
    const [fileAlert, setFileAlert] = useState(false);

    const image = useRef(null);
    const submitBtn = useRef(null);

    const [genModalshow, setGenModalshow] = useState(false);
    const handleModalShow = () => {
        setGenModalshow(true);
    }

    const handleModalClose = () => {
        setGenModalshow(false);
    }

    const uploadToClient = async (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const base64 = await convertBase64(file);

            // setResume(file);
            setResumeName(file.name);
            setResumeType(file.type);
            setResumeBase64(base64.split(",")[1]);
            setCreateObjectURL(URL.createObjectURL(file));
        }
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSubmit = (e) => {
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
        if (resumeName == "") {
            setFileAlert(true);
            return;
        }
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Loading...';
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
                resumeName: resumeName,
                resumeType: resumeType,
                resumeBase64: resumeBase64,
                gRecaptchaToken: gReCaptchaToken
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res?.status === "success") {
                    setEmail("");
                    setJobPosition("");
                    setExperience("");
                    setResumeName("");
                    setResumeType("");
                    setResumeBase64("");
                    setResume("");
                    setCreateObjectURL("");
                    setGenModalshow(false);

                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Send Now';

                    toast.success('Success! Email Sent Successful', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Send Now';

                    toast.error('Error! Email Not Sent', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            });
    };

    const handleCurrentOpenings = (val) => {
        setJobPosition(val);
        handleModalShow();
    }

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }]
    };
    return (
        <>
            <Header />
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
            /><ToastContainer />
            <Head>
                <title>Explore App Development Technology Jobs at Code Garage Tech!</title>
                <meta name="description" content="We at Code Garage Tech offer reliable Web Development Technology jobs and be a part of our innovative and happy work culture! Give new wings to your career now." />
                <meta name="keywords" content="Web Development Technology, App Development Technology"></meta>
            </Head>
            <div className='container-fluid career-area-2' >
                <div className='row' >
                    <div className='col-lg-3 col-md-3' ></div>
                    <div className='col-lg-9 col-md-9 career-area-2-text-outer' >
                        <h2 className='career-area-2-heading' >
                            A Place Where Active Mode Is Always On!
                        </h2>
                        <p className='career-area-2-para' >
                            We are relaxed, energetic, & joyful. We are playful & have fun while doing serious & important work. Join us now!
                        </p>
                    </div>
                </div>
                {/* <div className='rounded-circle career-area-2-circle' ></div> */}
                <img className='career-area-2-img-1' src='/career_images/career-area-2-img-1.png' alt='career-area-2-img-1.png' />
                <img className='career-area-2-img-2' src='/career_images/career-area-2-img-2.png' alt='career-area-2-img-2.png' />
                <img className='career-area-2-img-3' src='/career_images/career-area-2-img-3.png' alt='career-area-2-img-3.png' />
                <img className='career-area-2-img-4' src='/career_images/career-area-2-img-4.png' alt='career-area-2-img-4.png' />
                <img className='career-area-2-typing-icon' src='images/type.png' alt='' />
            </div>

            <div className='container-fluid career-area-1' >
                <div className='row career-area-1-row rounded-pill' >
                    <div className='col-lg-12 career-area-1-col1' >
                        <h1 className='career-area-1-heading' >
                            Extraordinary Problem Require Extraordinary People
                        </h1>
                        <p className='career-area-1-para py-3' >
                            We offer a refreshing ambiance where you can explore your caliber.
                        </p>
                        <button onClick={handleModalShow} className='btn btn_pink career-area-1-btn px-5' >
                            Join The Exceptionals
                        </button>
                    </div>
                    <div className='rounded-circle career-area-1-circle' ></div>
                    <div className='rounded-circle career-area-1-circle-2' ></div>
                </div>
            </div>

            <div className='container-fluid my-5 career-area-3' >
                <div className='row career-area-3-outer-row border-top-5 p-5' >
                    <div className='col-lg-12' >
                        <h1 className='mb-4 career-area-3-heading' >
                            Hop on a Hyper Growth ride
                            {/* &gt;&gt;&gt; */}
                        </h1>
                    </div>
                    <div className='col-lg-6 col-md-6 career-area-3-para d-flex align-items-center' >
                        <p>
                            We Experiment, Adapt & Continually Grow. You won't find a more dedicated, diligent team of professionals anywhere else who utilize Web & App development technology cheerfully. We want to see your career success and we pride ourselves on working hard to make sure it happens.
                            Mark your part as an inclusive, collaborative, diverse, and supportive team. At Code Garage Tech, we push the boundaries to make your career go boom!
                        </p>
                    </div>
                    <div className='col-lg-6 col-md-6 career-area-3-circle-outer text-end' >
                        <img className='career-area-3-img-rocket' src='/career_images/ROCKET.png' alt='ROCKET.png' />
                        {/* <div className='about-area-circle career-area-3-circle1' ></div>
                        <img className='career-area-3-cursor' src='img/cursor.png' alt='' />
                        <div className='about-area-circle career-area-3-circle2' ></div> */}
                    </div>
                    <div className='about-area-circle career-area-3-circle3' ></div>
                    <img className='career-area-3-cursor' src='/img/cursor-1.png' alt='cursor-1.png' />
                    <img className='career-area-3-cloud-1' src='/img/cloud.png' alt='cloud.png' />
                    <img className='career-area-3-cloud-2' src='/img/cloud.png' alt='cloud.png' />
                </div>
                {/* <img className='career-area-3-line-circle' src='images/career-line-circle.png' alt='' /> */}
            </div>

            <div className='container-fluid career-area-4' >
                <div className='row justify-content-center align-items-center career-area-4-row' >
                    <h2 className='career-area-4-heading' >
                        Our Best Perks Are
                        <br />
                        Pe<span className='text-danger' >o</span>ple Themselves
                    </h2>
                    <div className='rounded-circle career-area-4-circle1' ></div>
                    <div className='rounded-circle career-area-4-circle2' ></div>
                    <div className='rounded-circle career-area-4-circle3' ></div>
                    <div className='rounded-circle career-area-4-circle4' ></div>
                </div>
                <div className='rounded-circle career-area-4-circle5' ></div>
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
                            <div className='career-area-5-gray-box py-2' >

                                <div className='rating-container-followers d-flex flex-column align-items-center'>
                                    <p className='rating-container-followers-linkedin-text fs-5'>3000 + Followers</p>
                                    <img src='/icons/Linkedin-Logo.png' />
                                </div>


                            </div>
                        </div>


                        <div className='col-lg-4 col-md-4 px-4 career-area-5-gray-box-outer' >
                            <div className='career-area-5-gray-box py-3' >

                                <div className='rating-container py-3 d-flex justify-content-evenly'>
                                    <div><img src='/icons/google-icon.png' /></div>
                                    <div>
                                        <div className='rating-container-headline fs-5'>Google</div>
                                        <div>
                                            <span className='Warning'><AiFillStar /></span>
                                            <span className='Warning'><AiFillStar /></span>
                                            <span className='Warning'><AiFillStar /></span>
                                            <span className='Warning'><AiFillStar /></span>
                                            <span className='Warning'><BsStarHalf /></span>
                                        </div>
                                    </div>
                                    <div className='mt-3'>4.9/5</div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 px-4 career-area-5-gray-box-outer' >
                            <div className='career-area-5-gray-box py-3' >
                                <div className='rating-container py-3 d-flex justify-content-evenly'>
                                    <div><img src='/icons/glassdoor-icon-48.png' /></div>
                                    <div>
                                        <div className='rating-container-headline fs-5'>glassdoor</div>
                                        <div>
                                            <span className='Warning'><AiFillStar /></span>
                                            <span className='Warning'><AiFillStar /></span>
                                            <span className='Warning'><AiFillStar /></span>
                                            <span className='Warning'><AiFillStar /></span>
                                            <span className='Warning'><BsStarHalf /></span>
                                        </div>
                                    </div>
                                    <div className='mt-3'>4.9/5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                    <img className="career-area-7-cloud-1" src="img/cloud.png" alt="" />
                    <p className='career-area-7-techName-hiring-1' >
                        <span className='d-flex align-items-center' >
                            <img className="career-area-7-tech-img me-2" src="images/fullStack.png" alt="" />
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
                    <img className="career-area-7-cloud-1" src="img/cloud.png" alt="" />
                    <p className='career-area-7-techName-hiring-1' >
                        <span className='d-flex align-items-center' >
                            <img className="career-area-7-tech-img me-2" src="images/shopify_icon.png" alt="" />
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
                    <img className="career-area-7-cloud-1" src="img/cloud.png" alt="" />
                    <p className='career-area-7-techName-hiring-1' >
                        <span className='d-flex align-items-center' >
                            <img className="career-area-7-tech-img me-2" src="images/python_2.png" alt="" />
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
                    <img className="career-area-7-cloud-1" src="img/cloud.png" alt="" />
                    <p className='career-area-7-techName-hiring-1' >
                        <span className='d-flex align-items-center' >
                            <img className="career-area-7-tech-img me-2" src="icons/laravel.png" alt="" />
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
                    <img className="career-area-7-cloud-1" src="img/cloud.png" alt="" />
                    <p className='career-area-7-techName-hiring-1' >
                        <span className='d-flex align-items-center' >
                            <img className="career-area-7-tech-img me-2" src="images/seo-analyst.png" alt="" />
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

            <div className='container-fluid career-area-8' >
                <div className='career-area-8-row row' >
                    <div className='col-lg-6 col-md-6 d-flex align-items-center' >
                        <div className='career-area-8-text-div-1'>
                            <h2 className='career-area-8-heading' >
                                We’re Fun
                            </h2>
                            <p className='career-area-8-para' >
                                Having a friendly workspace is all you need to be more productive and we at Code Garage Tech find fun in little things that make our day full of positive vibes. We Lift Spirits by making our office environment lively with great music. We believe that fun is essential to a good work environment. That's why we offer flexible hours, fun events, and challenging projects. We want you to feel like you're not just working—you're exuberant!
                            </p>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 d-flex justify-content-center' >
                        <img className='career-area-8-img-2' src='/career_images/career-area-8-img-2.png' alt='career-area-8-img-2.png' />
                    </div>
                    <div className='d-flex flex-column-reverse flex-md-row'>
                        <div className='m-2 col-lg-6 col-md-6 d-flex justify-content-center' >
                            <img className='career-area-8-img-2' src='/career_images/career-area-8-img-22.jpg' alt='career-area-8-img-2.png' />
                        </div>
                        <div className='m-2 col-lg-6 col-md-6 d-flex align-items-center' >
                            <div className='career-area-8-text-div-1'>
                                <h2 className='career-area-8-heading' >
                                    We're Process-Oriented
                                </h2>
                                <p className='career-area-8-para' >
                                    One of the most important things about our process is that we're focused on the client. We believe that great work doesn't just happen—it needs to be created by people who are passionate about it and committed to excellence.
                                </p>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

            <div className='container-fluid career-area-9' >

                <div className='container py-5' >
                    <div className='col-lg-12' >
                        <h2 className='career-area-9-heading' >More Reasons To Join Us</h2>
                    </div>
                    <Slider {...settings}>
                        {/* #First Slide */}
                        <div className='col-lg-6 col-md-6'>
                            <div className='p-5 pb-4' >
                                <img className='w-100 career-area-9-img-1' src='/career_images/career-area-9-img-1.jpg' alt='career-area-9-img-1.png' />
                            </div>
                            <div className='p-5 pt-0' >
                                <h3 className='career-area-9-sub-heading mb-3' >
                                    You Get To Work On The Latest Technologies.
                                </h3>
                                <p className='career-area-9-para' >
                                    We don’t limit ourselves to only working on one technology,
                                    we want you to prosper and gain success.

                                </p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6' >
                            <div className='p-5 pb-4' >
                                <img className='w-100 career-area-9-img-2' src='/career_images/career-area-9-img-2.png' alt='career-area-9-img-2.png' />
                            </div>
                            <div className='p-5 pt-0' >
                                <h3 className='career-area-9-sub-heading mb-3' >
                                    Get Surrounded By A Lush Green Environment
                                    For greenery image

                                </h3>
                                <p className='career-area-9-para' >
                                    Our office is situated in-between an opulent greenery so that you take benefit of nature while working with us.
                                </p>
                            </div>
                        </div>
                        {/* #Second Slide */}
                        <div className='col-lg-6 col-md-6' >
                            <div className='p-5 pb-4' >
                                <img className='w-100 career-area-9-img-1' src='/career_images/career-area-9-img-3.png' alt='career-area-9-img-1.png' />
                            </div>
                            <div className='p-5 pt-0' >
                                <h3 className='career-area-9-sub-heading mb-3' >
                                    We Always Have Game Time Friday
                                </h3>
                                <p className='career-area-9-para' >
                                    We make the weekend a blast by playing exciting games every Friday evening.

                                </p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6' >
                            <div className='p-5 pb-4' >
                                <img className='w-100 career-area-9-img-2' src='/career_images/career-area-9-img-4.jpg' alt='career-area-9-img-2.png' />
                            </div>
                            <div className='p-5 pt-0' >
                                <h3 className='career-area-9-sub-heading mb-3' >
                                    Regular Research-Based Seminars On The Latest Tech
                                </h3>
                                <p className='career-area-9-para' >
                                    We don’t want you to lag behind that’s why we conduct monthly seminars to polish your skills on the latest tech & innovation.                                </p>
                            </div>
                        </div>
                        {/* #Third Slide */}
                        <div className='col-lg-6 col-md-6' >
                            <div className='p-5 pb-4 img-fluid' >
                                <img className='w-100 career-area-9-img-1' src='/career_images/career-area-9-img-5.png' alt='career-area-9-img-1.png' />
                            </div>
                            <div className='p-5 pt-0' >
                                <h3 className='career-area-9-sub-heading mb-3' >
                                    We Celebrate Each Occasion With Enthusiasm.
                                </h3>
                                <p className='career-area-9-para' >
                                    Celebrating festivals is our favorite part, whether it is national or international.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6' >
                            <div className='p-5 pb-4' >
                                <img className='w-100 career-area-9-img-2' src='/career_images/explore-destination.jpg' alt='career-area-9-img-2.png' />
                            </div>
                            <div className='p-5 pt-0' >
                                <h3 className='career-area-9-sub-heading mb-3' >
                                    We Explore New Destinations
                                </h3>
                                <p className='career-area-9-para' >
                                    We are spontaneous! We regularly go on exciting trips to make ourselves more productive.
                                </p>
                            </div>
                        </div>
                    </Slider>
                    {/* End two image container */}
                </div>



                <div className='rounded-circle career-area-9-circle-1' ></div>
                <div className='rounded-circle career-area-9-circle-2' ></div>
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
                    <input onChange={(e) => setEmail(e.target.value)} className="form-control contact-field-input mb-4" type="email" name="email" placeholder="Your Email ID" value={email} required />
                    <select className='form-control contact-field-input mb-4' onChange={(e) => setJobPosition(e.target.value)} name="jobPosition" value={jobPosition} required >
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
                        <option value="Content Writer">Content Writer</option>
                        <option value="Video Editor">Video Editor</option>
                        <option value="Laravel/PHP Developer">Laravel/PHP Developer</option>
                        <option value="Shopify Developer">Shopify Developer</option>
                    </select>
                    <select className='form-control contact-field-input mb-4' onChange={(e) => setExperience(e.target.value)} name="experience" value={experience} required >
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
                    <p className={fileAlert ? 'text-danger' : 'd-none'}>Please upload your resume*</p>
                    <div className='job-apply-upImg-text d-flex mb-4' >
                        <a className='job-apply-upImg-link' onClick={() => image.click()} >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1102_2677" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="5" y="3" width="14" height="18">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14 16.2961H10C9.45 16.2961 9 15.8461 9 15.2961V10.2961H7.41C6.52 10.2961 6.08 9.2161 6.71 8.5861L11.3 3.9961C11.4868 3.80885 11.7405 3.70361 12.005 3.70361C12.2695 3.70361 12.5232 3.80885 12.71 3.9961L17.3 8.5861C17.93 9.2161 17.48 10.2961 16.59 10.2961H15V15.2961C15 15.8461 14.55 16.2961 14 16.2961ZM18 18.2961H6C5.45 18.2961 5 18.7461 5 19.2961C5 19.8461 5.45 20.2961 6 20.2961H18C18.55 20.2961 19 19.8461 19 19.2961C19 18.7461 18.55 18.2961 18 18.2961Z" fill="black" />
                                </mask>
                                <g mask="url(#mask0_1102_2677)">
                                    <rect width="24" height="24" fill="#5956E9" />
                                </g>
                            </svg>
                            <span>Upload Resume</span>
                        </a>
                    </div>
                    <input ref={(selectImage) => { image = selectImage }} onChange={uploadToClient} className='d-none' name='resume' id='resume' type='file' value={resume} accept=".doc, .docx, .pdf" />
                    <div className="mb-4 text-end">
                        <button ref={(submitBtnRef) => { submitBtn = submitBtnRef }} className="entry__btn btn btn_purple contact-submit-btn btn-sm mb-3 w-100" type="submit" >Send Now</button>
                    </div>
                </div>}
            />
            <Footer />
        </>
    )
}

export default Careers