import React, { useState, useRef } from 'react'
import Head from 'next/head'
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GenericModal from '../components/genericModal';
import Link from 'next/link'

const Contact = () => {
    const [nameIcon, setNameIcon] = useState(false);
    const [phoneIcon, setPhoneIcon] = useState(false);
    const [emailIcon, setEmailIcon] = useState(false);
    const [messageIcon, setMessageIcon] = useState(false);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitBtn = useRef(null);
    const submitModalBtn = useRef(null);

    const [genModalshow, setGenModalshow] = useState(false);
    const handleModalShow = () => {
        setGenModalshow(true);
    }

    const handleModalClose = () => {
        setGenModalshow(false);
    }

    const { executeRecaptcha } = useGoogleReCaptcha();

    const changeNameIcon = (e) => {
        e == 1 ? setNameIcon(true) : setNameIcon(false);
    }

    const changeEmailIcon = (e) => {
        e == 1 ? setEmailIcon(true) : setEmailIcon(false);
    }

    const changeMessageIcon = (e) => {
        e == 1 ? setMessageIcon(true) : setMessageIcon(false);
    }

    const changePhoneIcon = (e) => {
        e == 1 ? setPhoneIcon(true) : setPhoneIcon(false);
    }

    const handleModalEmail = (e) => {
        setName("Anonymous");
        setPhone("NA");
        setEmail(e.target.value);
        setMessage("Enquiry");
    }

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
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Loading...';

        submitModalBtn.disabled = true;
        submitModalBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Loading...';
        fetch("/api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                email: email,
                message: message,
                gRecaptchaToken: gReCaptchaToken,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res?.status === "success") {
                    setName("");
                    setPhone("");
                    setEmail("");
                    setMessage("");
                    setGenModalshow(false);

                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Send Now';

                    submitModalBtn.disabled = false;
                    submitModalBtn.innerHTML = 'Send Now';

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

                    submitModalBtn.disabled = false;
                    submitModalBtn.innerHTML = 'Send Now';

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
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Have any queries? Get in touch with us now- Code Garage Tech</title>
                <link rel="canonical" href="https://www.codegaragetech.com/contact" />
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
                <meta name="format-detection" content="telephone=no" />
                <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.webp" />
                <link rel="icon" type="image.webp" sizes="32x32" href="/logo/cgt_new_favicon.webp" />
                <link rel="icon" type="image.webp" sizes="16x16" href="/logo/cgt_new_favicon.webp" />
                <link rel="manifest" href="/img/site.webmanifest" />
                <link rel="mask-icon" href="img/safari-pinned-tab.webp" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="description" content="Please fill out the contact form to get in touch with us for your Web and App development needs. Our sales representative will get back to you soon." />

            </Head>
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
            <div className="page">
                <div className="entry entry_solo contact_solo">
                    <div className="entry__center center contact-entry-center">
                        <div className="entry__head contact__head">
                            <Link href="./">
                                <div className="entry__logo contact__logo" >
                                    <img className="entry__pic entry__pic_white entry__pic__entry__pic_white-size" src="logo/cgt_new_logo_alt.webp" alt="Code Garage Tech - Logo" />
                                    <img className="entry__pic entry__pic_black" src="logo/cgt_new_logo_alt2.webp" alt="CodeGarage Tech" />
                                </div>
                            </Link>
                        </div>
                        <div className="entry__body contact_body">
                            <div className="like">
                                <div className="like__center contact__center center p-0">
                                    <div className="like__container like__container__padding">
                                        <div className="entry__row contact__row">
                                            <form className="entry__form d-flex flex-column align-items-center" onSubmit={handleSubmit} >
                                                <div className="entry__title title title_sm text-center contact-title">
                                                    Get in touch
                                                    {/* <span className="title__color">.</span> */}
                                                </div>
                                                <div className="entry__info text-center">Enter your details below</div>
                                                <div className="entry__field field">
                                                    <div className="field__label">Name</div>
                                                    <div className="field__wrap">
                                                        <div className="field__icon contact-field-icon">
                                                            {
                                                                nameIcon
                                                                    ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3" d="M12 11.5C9.79086 11.5 8 9.70914 8 7.5C8 5.29086 9.79086 3.5 12 3.5C14.2091 3.5 16 5.29086 16 7.5C16 9.70914 14.2091 11.5 12 11.5Z" fill="#5956E9" />
                                                                        <path d="M3.00065 20.6992C3.38826 15.9265 7.26191 13.5 11.9833 13.5C16.7712 13.5 20.7049 15.7932 20.9979 20.7C21.0096 20.8955 20.9979 21.5 20.2467 21.5C16.5411 21.5 11.0347 21.5 3.7275 21.5C3.47671 21.5 2.97954 20.9592 3.00065 20.6992Z" fill="#5956E9" />
                                                                    </svg>
                                                                    : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3" d="M12 11.5C9.79086 11.5 8 9.70914 8 7.5C8 5.29086 9.79086 3.5 12 3.5C14.2091 3.5 16 5.29086 16 7.5C16 9.70914 14.2091 11.5 12 11.5Z" fill="black" />
                                                                        <path d="M3.00065 20.6992C3.38826 15.9265 7.26191 13.5 11.9833 13.5C16.7712 13.5 20.7049 15.7932 20.9979 20.7C21.0096 20.8955 20.9979 21.5 20.2467 21.5C16.5411 21.5 11.0347 21.5 3.7275 21.5C3.47671 21.5 2.97954 20.9592 3.00065 20.6992Z" fill="black" />
                                                                    </svg>
                                                            }
                                                        </div>
                                                        <input onFocus={() => changeNameIcon(1)} onBlur={() => changeNameIcon(0)} onChange={(e) => setName(e.target.value)} className="field__input contact-field-input" type="text" name="name" placeholder="Name" value={name} required />
                                                    </div>
                                                </div>
                                                <div className="entry__field field">
                                                    <div className="field__label">Phone Number</div>
                                                    <div className="field__wrap">
                                                        <div className="field__icon contact-field-icon">
                                                            {
                                                                phoneIcon
                                                                    ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#5956E9" d="M12.2 10c-1.1-.1-1.7 1.4-2.5 1.8C8.4 12.5 6 10 6 10S3.5 7.6 4.1 6.3c.5-.8 2-1.4 1.9-2.5-.1-1-2.3-4.6-3.4-3.6C.2 2.4 0 3.3 0 5.1c-.1 3.1 3.9 7 3.9 7 .4.4 3.9 4 7 3.9 1.8 0 2.7-.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z" /></svg>
                                                                    : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#444" d="M12.2 10c-1.1-.1-1.7 1.4-2.5 1.8C8.4 12.5 6 10 6 10S3.5 7.6 4.1 6.3c.5-.8 2-1.4 1.9-2.5-.1-1-2.3-4.6-3.4-3.6C.2 2.4 0 3.3 0 5.1c-.1 3.1 3.9 7 3.9 7 .4.4 3.9 4 7 3.9 1.8 0 2.7-.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z" /></svg>
                                                            }
                                                        </div>
                                                        <input onFocus={() => changePhoneIcon(1)} onBlur={() => changePhoneIcon(0)} onChange={(e) => setPhone(e.target.value)} className="field__input contact-field-input" type="tel" name="phone" placeholder="Phone Number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" value={phone} required />
                                                    </div>
                                                </div>
                                                <div className="entry__field field">
                                                    <div className="field__label">Email</div>
                                                    <div className="field__wrap">
                                                        <div className="field__icon contact-field-icon">
                                                            {
                                                                emailIcon
                                                                    ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Stockholm-icons / Communication / Sending mail">
                                                                            <path id="Combined Shape" opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M3 6C2.44772 6 2 6.44772 2 7C2 7.55228 2.44772 8 3 8H5C5.55228 8 6 7.55228 6 7C6 6.44772 5.55228 6 5 6H3ZM0 12C0 11.4477 0.447715 11 1 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H1C0.447715 13 0 12.5523 0 12ZM3 17C3 16.4477 3.44772 16 4 16H5C5.55228 16 6 16.4477 6 17C6 17.5523 5.55228 18 5 18H4C3.44772 18 3 17.5523 3 17Z" fill="#5956E9" />
                                                                            <path id="Combined Shape_2" fillRule="evenodd" clipRule="evenodd" d="M10 6C8.89543 6 8 6.89543 8 8V16C8 17.1046 8.89543 18 10 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H10ZM21.9257 8.31565C21.7632 8.02389 21.3868 7.91473 21.0849 8.07183L16 10.7186L10.9151 8.07183C10.6132 7.91473 10.2368 8.02389 10.0743 8.31565C9.91179 8.6074 10.0247 8.97127 10.3265 9.12837L15.7057 11.9283C15.8894 12.0239 16.1106 12.0239 16.2943 11.9283L21.6735 9.12837C21.9753 8.97127 22.0882 8.6074 21.9257 8.31565Z" fill="#5956E9" />
                                                                        </g>
                                                                    </svg>
                                                                    : <img className="field__pic" src="img/sending-mail.webp" alt="Sending Mail PNG" />
                                                            }
                                                        </div>
                                                        <input onFocus={() => changeEmailIcon(1)} onBlur={() => changeEmailIcon(0)}
                                                            onChange={(e) => setEmail(e.target.value)} className="field__input contact-field-input" type="email" name="email" placeholder="Email" value={email} required />
                                                    </div>
                                                </div>
                                                <div className="entry__field field">
                                                    <div className="field__line">
                                                        <div className="field__label">Message</div>
                                                    </div>
                                                    <div className="field__wrap">
                                                        <div className="field__icon contact-field-icon">
                                                            {
                                                                messageIcon
                                                                    ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M5 3C3.34315 3 2 4.34315 2 6V15C2 16.6569 3.34315 18 5 18H9.01653L11.0887 21.1255C11.5036 21.7513 12.4344 21.7137 12.7975 21.0566L14.4862 18H19C20.6569 18 22 16.6569 22 15V6C22 4.34315 20.6569 3 19 3H5Z" fill="#5956E9" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H6C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7ZM6 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11Z" fill="#5956E9" />
                                                                    </svg>
                                                                    : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M5 3C3.34315 3 2 4.34315 2 6V15C2 16.6569 3.34315 18 5 18H9.01653L11.0887 21.1255C11.5036 21.7513 12.4344 21.7137 12.7975 21.0566L14.4862 18H19C20.6569 18 22 16.6569 22 15V6C22 4.34315 20.6569 3 19 3H5Z" fill="#27272E" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H6C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7ZM6 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11Z" fill="#27272E" />
                                                                    </svg>
                                                            }
                                                        </div>
                                                        <textarea onFocus={() => changeMessageIcon(1)} onBlur={() => changeMessageIcon(0)} onChange={(e) => setMessage(e.target.value)} className="field__input field_text_area" name="message" placeholder="Message" value={message} required />
                                                    </div>
                                                </div>
                                                <button ref={(submitBtnRef) => { submitBtn = submitBtnRef }} className="entry__btn btn btn_purple contact-submit-btn" type="submit" >Send Now</button>
                                            </form>
                                        </div>
                                        <div className="contact__circles">
                                            <div className="contact__circle"></div>
                                            <div className="contact__circle"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="entry__foot"></div>
                    </div>
                    <div className="entry__bg">
                        <img className="entry__pic" src="img/entry-circle.webp" alt="Background Solid Blue Circle" />
                    </div>
                    <div className="contact__cloud heroku-floating">
                            <a href="https://api.whatsapp.com/send?phone=918146394889" title='Contact Us on whatsapp' className='cursor_pointer'>
                                <img className="tool__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.webp" alt="3D Cloud" />
                                <img className="contact-skype-icon" data-scale="1.5" data-orientation="right" src="icons/whatsapp.webp" alt="WhatsApp Icon" />
                            </a>
                    </div>
                    <div className="contact_cloud_2 salesforce-floating">
                        <a className="cursor_pointer" title='Quick Contact' onClick={handleModalShow} >
                            <img className="tool__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.webp" alt="3D Cloud" />
                            <img className="contact-skype-icon" data-scale="1.5" data-orientation="right" src="icons/gmail.webp" alt="Gmail Icon" />
                        </a>
                    </div>

                    <div className="contact_cloud_3 digitalocean-floating">
                        <a className="cursor_pointer"  href="skype:example123?chat">
                            <div>
                                <img className="tool__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.webp" alt="3D Cloud" />
                                <img className="contact-skype-icon" data-scale="1.5" data-orientation="right" src="icons/skype.webp" alt="Skype Icon" />
                            </div>
                        </a>
                    </div>
                    {/* <div className="contact__bucket" >
                        <img className="contact_bucket_pic" src="img/popup-pic-2.webp" alt="" />
                    </div>
                    <div className="contact__arrow" >
                        <img className="contact_arrow_pic" src="img/cursor-1.webp" alt="" />
                    </div> */}
                    <div className="contact_circles_2">
                        <div className="contact_circle_2"></div>
                        <div className="contact_circle_2"></div>
                        <div className="contact_circle_2"></div>
                        <div className="contact_circle_2"></div>
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
                modalTitle={"Quick Contact"}
                modalBody={<div>
                    <div className="entry__field field quick-contact-field">
                        <div className="field__wrap">
                            <div className="field__icon contact-field-icon">
                                {
                                    emailIcon
                                        ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Stockholm-icons / Communication / Sending mail">
                                                <path id="Combined Shape" opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M3 6C2.44772 6 2 6.44772 2 7C2 7.55228 2.44772 8 3 8H5C5.55228 8 6 7.55228 6 7C6 6.44772 5.55228 6 5 6H3ZM0 12C0 11.4477 0.447715 11 1 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H1C0.447715 13 0 12.5523 0 12ZM3 17C3 16.4477 3.44772 16 4 16H5C5.55228 16 6 16.4477 6 17C6 17.5523 5.55228 18 5 18H4C3.44772 18 3 17.5523 3 17Z" fill="#5956E9" />
                                                <path id="Combined Shape_2" fillRule="evenodd" clipRule="evenodd" d="M10 6C8.89543 6 8 6.89543 8 8V16C8 17.1046 8.89543 18 10 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H10ZM21.9257 8.31565C21.7632 8.02389 21.3868 7.91473 21.0849 8.07183L16 10.7186L10.9151 8.07183C10.6132 7.91473 10.2368 8.02389 10.0743 8.31565C9.91179 8.6074 10.0247 8.97127 10.3265 9.12837L15.7057 11.9283C15.8894 12.0239 16.1106 12.0239 16.2943 11.9283L21.6735 9.12837C21.9753 8.97127 22.0882 8.6074 21.9257 8.31565Z" fill="#5956E9" />
                                            </g>
                                        </svg>
                                        : <img className="field__pic" src="img/sending-mail.webp" alt="Sending Mail PNG" />
                                }
                            </div>
                            <input onFocus={() => changeEmailIcon(1)} onBlur={() => changeEmailIcon(0)}
                                onChange={(e) => handleModalEmail(e)} className="field__input contact-field-input" type="email" name="email" placeholder="Your Email Address" value={email} required />
                        </div>
                    </div>
                    <div className="mb-4 text-end">
                        <button ref={(submitModalBtnRef) => { submitModalBtn = submitModalBtnRef }} className="entry__btn btn btn_purple contact-submit-btn btn-sm mb-3 w-100" type="submit" >Send Now</button>
                    </div>
                </div>}
            />
        </>
    )
}

export default Contact