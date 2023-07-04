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

  const submitEnquiryForm = (e) => {
    e.preventDefault()
    if (phone == '') {
      return
    }
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
            <div className="mb-4 d-flex justify-content-sm-around justify-content-md-start align-items-center cursor_pointer">
              <img
                src={'/logo/cgt_new_favicon.webp'}
                style={{ width: '42px', padding: '4px' }}
                alt="codegarage logo"
              />

              <Link href="/">
                <h1 className="text-start">Request A Quote</h1>
              </Link>
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
                  required
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
            <img
              src="/logo/cgt_new_logo_alt.webp"
              style={{ width: '206px' }}
              alt="codegarage logo"
            />
          </div>
          <div className="w-100 flex flex-col justify-content-center">
            <p>Simplifying Processes</p>
            <p>With Scalable Solutions!</p>
          </div>
          <div className={`${styles.tech_container}`}>
            <div className={`p-lg-2`}>
              <div className="row">
                <div className="col p-lg-4">Devops</div>
                <div className="col p-lg-4">Cloud</div>
              </div>
              <div className="row">
                <div className="col p-lg-4">Mobile</div>
                <div className="col p-lg-4">Design</div>
              </div>
            </div>
          </div>
          <div className={`${styles.live_btn_container}`}>
            <button
              className={`${styles.live_btn} w-100`}
              onClick={openChatwoot}
            >
              Live Chat With Us
              <HiOutlineArrowNarrowRight />
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RequestCallBack
