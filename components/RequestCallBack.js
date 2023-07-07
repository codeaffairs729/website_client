import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ScheduleMeetingForm from './scheduleMeetingForm'
import 'react-datetime/css/react-datetime.css'
import Datetime from 'react-datetime'
// import { BsCalendar2Date } from "react-icons/bs";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ToastContainer, toast } from 'react-toastify'
import styles from '../styles/requestCallBack.module.css'
import Image from 'next/image'
import Link from 'next/link'

import TechSlide from './TechSlide'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
const countryCodes = require('country-codes-list')

const RequestCallBack = ({ closeBtn }) => {
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [buttonText, setButtonText] = useState('Submit')
  const [selectedOption, setSelectedOption] = useState('')
  const submitBtn = useRef(null)
  const [resume, setResume] = useState('')
  const [resumeName, setResumeName] = useState('')
  const [resumeType, setResumeType] = useState('')
  const [resumeBase64, setResumeBase64] = useState('')
  const [createObjectURL, setCreateObjectURL] = useState('')
  const image = useRef(null)

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

  const submitEnquiryForm = (e) => {
    e.preventDefault()

    submitBtn.disabled = true
    submitBtn.innerHTML =
      '<span class="spinner-border spinner-border-sm"></span> Loading...'
    fetch('/api/requestMeeting', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: selectedOption + ' ' + phone,
        message: message,
        resumeName: resumeName,
        resumeType: resumeType,
        resumeBase64: resumeBase64,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.status === 'success') {
          setPhone('')
          setEmail('')
          setName('')
          setMessage('')
          submitBtn.innerHTML = 'Submitted'
          submitBtn.disabled = false
          submitBtn.innerHTML = 'Submitted'
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
        }
      })
  }
  const myCountryCodesObject = countryCodes.customList(
    'countryCode',
    ' +{countryCallingCode}'
  )
  const countryCode = [
    ...new Set(Object.values(myCountryCodesObject).sort((a, b) => a - b)),
  ]

  const openChatwoot = () => {
    window.$chatwoot.toggle('open')
  }
  return (
    <>
      <div className={`${styles.main_container}`}>
        <div className={` ${styles.left_container}`}>
          <form
            className={`flex flex-col justify-content-center`}
            onSubmit={submitEnquiryForm}
          >
            <div className="mb-4 d-flex justify-content-sm-around align-items-center ">
              <img
                src={'/logo/cgt_new_favicon.webp'}
                style={{ width: '42px', padding: '4px' }}
                alt="codegarage logo"
              />

              <h1 className="text-start">Request A Quote</h1>
              {/* {closeBtn()} */}
            </div>
            <div className="mb-4">
              <input
                id="name"
                type="text"
                className="px-2 py-2 border border-1 border-grey w-100 rounded"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                id="email"
                type="email"
                className="px-2 py-2 border border-1 border-grey w-100 rounded"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div
              className={`${styles.phone_input} mb-4 d-flex align-content-center border border-1 border-grey w-100 rounded overflow-hidden`}
            >
              <div className={`${styles.flag_icon_container}`}>
                <select
                  value={selectedOption}
                  className="d-flex align-content-center justify-content-center fs-6 text-black-50 "
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="+91">+91</option>

                  {countryCode.map((el, index) => (
                    <option key={index} value={`${el}`}>
                      {el}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  id="tel"
                  type="tel"
                  className="py-2  rounded"
                  placeholder="Phone Number (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea
                id="Message"
                type="text"
                className={`${styles.request_textarea} px-2 py-2 border border-1 border-grey w-100 rounded`}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div
              className="flex flex-col align-items-center justify-content-center align-content-center border border-1 border-grey w-100 rounded mb-4 px-2 py-1 cursor_pointer"
              onClick={() => image.click()}
            >
              <p className="d-flex align-items-center justify-content-center align-content-center px-2 pb-1 text-black-50">{resumeName}</p>
              <div>
                <div className=" d-flex align-items-center justify-content-center align-content-center text-black-50 py-1">
                  <a className=" text-black-50">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#7f7f7f"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#292930"
                      aria-labelledby="form-imgupload-icon"
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
                          fill="#7f7f7f"
                        />
                      </mask>
                      <g mask="url(#mask0_1102_2677)">
                        <rect width="24" height="24" fill="#7f7f7f" />
                      </g>
                    </svg>
                    <span className="text-black-50">
                      Attachment file <span className="">(optional)</span>
                    </span>
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
              </div>
            </div>
            <div className="">
              <button
                id="submit"
                type="submit"
                className={`${styles.request_btn} border border-2 border-mute w-100 fw-bold`}
                required
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className={`${styles.right_container} `}>
          <div className="mb-4">
            <Link href="/">
              <img
                className="cursor_pointer"
                src="/logo/cgt_new_logo_alt.webp"
                style={{ height: '33px' }}
                alt="codegarage logo"
              />
            </Link>
          </div>
          <div className="">
            <p>Simplifying Processes</p>
            <p>With Scalable Solutions!</p>
          </div>
          <div
            className={`${styles.tech_container} rounded-2`}
            style={{ position: 'relative' }}
          >
            {/* <div className="row">
                <div className="col p-lg-4">Devops</div>
                <div className="col p-lg-4">Cloud</div>
              </div>
              <div className="row">
                <div className="col p-lg-4">Mobile</div>
                <div className="col p-lg-4">Design</div>
              </div> */}
            <TechSlide />
          </div>
          <div className={`${styles.live_btn_container}`}>
            <button
              className={`${styles.live_btn} w-100`}
              onClick={openChatwoot}
            >
              Live Chat With Us
              <HiOutlineArrowNarrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RequestCallBack
