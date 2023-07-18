import React, { useState, useRef, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-datetime/css/react-datetime.css'
import { ToastContainer, toast } from 'react-toastify'
import styles from '../styles/requestCallBack.module.css'
import Link from 'next/link'

import TechSlide from './TechSlide'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const countryCodes = require('country-codes-list')

const RequestCallBack = ({ closeBtn }) => {
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [resume, setResume] = useState('')
  const [resumeName, setResumeName] = useState('')
  const [resumeType, setResumeType] = useState('')
  const [resumeBase64, setResumeBase64] = useState('')
  const [createObjectURL, setCreateObjectURL] = useState('')
  const [stdCodeWidth, setStdCodeWidth] = useState('')
  const [searchText, setSearchText] = useState('+1')
  const [searchList, setSearchList] = useState([])
  const image = useRef(null)
  const submitBtn = useRef(null)
  const selectRef = useRef(null)

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

    submitBtn.current.disabled = true
    submitBtn.current.innerHTML =
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
        phone: searchText + ' ' + phone,
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

          submitBtn.current.innerHTML = 'Submitted'
          submitBtn.current.disabled = false
          submitBtn.current.innerHTML = 'Submitted'
          toast.success('Thanks for contacting!')
        } else {
          submitBtn.current.disabled = false
          submitBtn.current.innerHTML = 'Send Now'
        }
      })
  }
  const myCountryCodesObject = countryCodes.customList(
    'countryCode',
    ' +{countryCallingCode}'
  )
  const countryCodeobj = [
    ...new Set(Object.values(myCountryCodesObject).sort((a, b) => a - b)),
  ]

  const countryCode = countryCodeobj.map((code) => code.trim())

  const openChatwoot = () => {
    window.$chatwoot.toggle('open')
  }

  const handleOnType = (e) => {
    setSearchText(e.target.value)
    const list = countryCode.filter((code) => code.includes(e.target.value))
    setSearchList(list)
    if (e.target.value.length === 0) setSearchList([])
  }

  const handleOnSelect = (el) => {
    setSearchText(el)
    setSearchList([])
  }
  useEffect(() => {
    const width = searchText.length + 'em'

    console.log('width:', width)
    if (width === '7em') {
      width = '4em'
    }
    if (width === '2em') {
      width = '3em'
    }
    if (width === '6em') {
      width = '4em'
    }
    setStdCodeWidth(width)
  }, [searchText])

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
              className={`${styles.phone_input} mb-4  border border-1 border-grey rounded`}
            >
              <div className={`${styles.flag_icon_container}`}>
                <input
                  id="mySelect"
                  value={searchText}
                  className="fs-6 text-black-50 d-flex justify-content-center "
                  onChange={(e) => handleOnType(e)}
                  style={{ width: stdCodeWidth }}
                />
                <ul
                  className={`overflow-auto  ${
                    searchList.length !== 0 && 'border border-secondary-subtle '
                  }`}
                >
                  {searchList.map((el, index) => (
                    <li
                      className="cursor_pointer fs-6"
                      onClick={() => handleOnSelect(el)}
                      key={index}
                    >
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden ">
                <input
                  id="tel"
                  type="tel"
                  className="py-2"
                  placeholder="Phone Number (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    borderLeft: '1px solid lightgrey',
                    padding: '4px 6px',
                    width: '180px',
                  }}
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
              <p className="d-flex align-items-center justify-content-center align-content-center px-2 pb-1 text-black-50">
                {resumeName}
              </p>
              <div>
                <div className=" d-flex align-items-center justify-content-center align-content-center text-black-50 py-1">
                  <a className=" text-black-50 d-flex align-items-center justify-content-center align-content-center">
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
              <p className=" px-2 pb-1 "></p>
            </div>
            <div className="">
              <button
                ref={submitBtn}
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
