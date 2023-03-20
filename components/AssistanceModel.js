import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ScheduleMeetingForm from './scheduleMeetingForm'
import 'react-datetime/css/react-datetime.css'
import Datetime from 'react-datetime'
// import { BsCalendar2Date } from "react-icons/bs";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ToastContainer, toast } from 'react-toastify'

const AssistanceModel = ({ title, requestOrigin }) => {
  const image = useRef(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState(new Date())
  const [query, setQuery] = useState('')
  const [buttonText, setButtonText] = useState('Submit')
  const [resume, setResume] = useState('')
  const [resumeName, setResumeName] = useState('')
  const [resumeType, setResumeType] = useState('')
  const [resumeBase64, setResumeBase64] = useState('')
  const [createObjectURL, setCreateObjectURL] = useState('')

  const submitBtn = useRef(null)

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
    if (name == '' || email == '' || phone == '') {
      // setFileAlert(true);
      return
    }
    submitBtn.disabled = true
    submitBtn.innerHTML =
      '<span class="spinner-border spinner-border-sm"></span> Loading...'
    fetch('/api/scheduleMeeting', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        name: name,
        phone: phone,
        date: date,
        query: query,
        resumeName: resumeName,
        resumeType: resumeType,
        resumeBase64: resumeBase64,
        requestOrigin: requestOrigin,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.status === 'success') {
          setEmail('')
          setName('')
          setPhone('')
          setQuery('')
          setDate('')
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

  const formFields = [
    {
      pattern: '[0-9]{3}[0-9]{3}[0-9]{4}',
      icon: (
        <svg
          className="form-name-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="form-name-icon"
        >
          <path
            opacity="0.3"
            d="M12 11.5C9.79086 11.5 8 9.70914 8 7.5C8 5.29086 9.79086 3.5 12 3.5C14.2091 3.5 16 5.29086 16 7.5C16 9.70914 14.2091 11.5 12 11.5Z"
            fill="black"
          />
          <path
            d="M3.00065 20.6992C3.38826 15.9265 7.26191 13.5 11.9833 13.5C16.7712 13.5 20.7049 15.7932 20.9979 20.7C21.0096 20.8955 20.9979 21.5 20.2467 21.5C16.5411 21.5 11.0347 21.5 3.7275 21.5C3.47671 21.5 2.97954 20.9592 3.00065 20.6992Z"
            fill="black"
          />
        </svg>
      ),
      render: () => {
        return (
          <input
            type="text"
            className="assist-form-container-input-field"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )
      },
    },
    {
      icon: (
        <svg
          className="form-email-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="form-email-icon"
        >
          <g id="Stockholm-icons / Communication / Sending mail">
            <path
              id="Combined Shape"
              opacity="0.3"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 6C2.44772 6 2 6.44772 2 7C2 7.55228 2.44772 8 3 8H5C5.55228 8 6 7.55228 6 7C6 6.44772 5.55228 6 5 6H3ZM0 12C0 11.4477 0.447715 11 1 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H1C0.447715 13 0 12.5523 0 12ZM3 17C3 16.4477 3.44772 16 4 16H5C5.55228 16 6 16.4477 6 17C6 17.5523 5.55228 18 5 18H4C3.44772 18 3 17.5523 3 17Z"
              fill="black"
            />
            <path
              id="Combined Shape_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 6C8.89543 6 8 6.89543 8 8V16C8 17.1046 8.89543 18 10 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H10ZM21.9257 8.31565C21.7632 8.02389 21.3868 7.91473 21.0849 8.07183L16 10.7186L10.9151 8.07183C10.6132 7.91473 10.2368 8.02389 10.0743 8.31565C9.91179 8.6074 10.0247 8.97127 10.3265 9.12837L15.7057 11.9283C15.8894 12.0239 16.1106 12.0239 16.2943 11.9283L21.6735 9.12837C21.9753 8.97127 22.0882 8.6074 21.9257 8.31565Z"
              fill="black"
            />
          </g>
        </svg>
      ),
      render: () => {
        return (
          <input
            id="email"
            name="email"
            type="email"
            className="assist-form-container-input-field form-control"
            placeholder="Your email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        )
      },
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path
            fill="black"
            d="M12.2 10c-1.1-.1-1.7 1.4-2.5 1.8C8.4 12.5 6 10 6 10S3.5 7.6 4.1 6.3c.5-.8 2-1.4 1.9-2.5-.1-1-2.3-4.6-3.4-3.6C.2 2.4 0 3.3 0 5.1c-.1 3.1 3.9 7 3.9 7 .4.4 3.9 4 7 3.9 1.8 0 2.7-.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z"
            aria-labelledby="form-email-icon"
          />
        </svg>
      ),
      render: () => {
        return (
          <input
            type="tel"
            className="assist-form-container-input-field"
            placeholder="Your phone*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        )
      },
    },
    {
      // icon: <BsCalendar2Date />,

      render: () => {
        return (
          <div className="assist-date-time">
            <Datetime
              className="assist-date-value"
              initialValue={'Select a date and time*'}
              selected={date}
              onChange={(date) => setDate(date)}
              required
            />
          </div>
        )
      },
    },
    {
      icon: (
        <svg
          className="assist-text-area-icon"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12L6.5 15M9 17.5H17M2.5 12L12.3595 1.79619C13.4211 0.734605 15.1422 0.734603 16.2038 1.79619C17.2654 2.85777 17.2654 4.57894 16.2038 5.64052L6 15.5L1 17L2.5 12Z"
            stroke="#292930"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),

      render: () => {
        return (
          <textarea
            type="assist-form-text-area"
            className=""
            placeholder="Write your query.."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        )
      },
    },
    {
      icon: <></>,
      render: () => (
        // <input
        // className="form-container-input-field"
        //  type="file" id="myFile" name="filename"/>
        <>
          <div
            className="job-apply-upImg-text d-flex mb-4"
            onClick={() => image.click()}
          >
            <a className="job-apply-upImg-link">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#292930"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#292930"
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
              <span>
                Attachment file{' '}
                <span className="attachment-optional">(optional)</span>
              </span>
            </a>
          </div>
          <input
            ref={(selectImage) => {
              image = selectImage
            }}
            onChange={uploadToClient}
            className="attachment d-none"
            name="resume"
            id="resume"
            type="file"
            value={resume}
            accept=".doc, .docx, .pdf"
          />
        </>
      ),
    },
  ]

  const submitButton = () => (
    <button
      ref={(submitBtnRef) => {
        submitBtn = submitBtnRef
      }}
      className="assist-form-container-input-btn"
      type="submit"
      onClick={submitEnquiryForm}
    >
      Submit
    </button>
  )
  return (
    <ScheduleMeetingForm
      fields={formFields}
      title={title}
      buttonText={buttonText}
      submitFunc={submitEnquiryForm}
      submitButton={submitButton}
    />
  )
}

export default AssistanceModel
