import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Form from './GeneralForm'
import styles from '../styles/assisstanceModel.module.css'
const CompanyDescription = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [query, setQuery] = useState('')
  const [buttonText, setButtonText] = useState('Send Now')
  const formFields = [
    {
      pattern: '[0-9]{3}[0-9]{3}[0-9]{4}',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.69922 16.25C3.80373 14.4077 6.22445 13.1468 10.0011 13.1468C13.7778 13.1468 16.1985 14.4077 17.303 16.25M13.0011 6.75C13.0011 8.40685 11.658 9.75 10.0011 9.75C8.34426 9.75 7.00112 8.40685 7.00112 6.75C7.00112 5.09315 8.34426 3.75 10.0011 3.75C11.658 3.75 13.0011 5.09315 13.0011 6.75Z"
            stroke="#292930"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      render: () => {
        return (
          <input
            type="text"
            className={`${styles.formcontainerinputfield} contact-field-input-2`}
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )
      },
    },
    {
      icon: (
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="form-name-icon"
        >
          <path
            d="M2.5 2.5L8.43079 6.60593C8.77323 6.84301 9.22676 6.84301 9.56921 6.60593L15.5 2.5M3 13H15C16.1046 13 17 12.1046 17 11V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V11C1 12.1046 1.89543 13 3 13Z"
            stroke="#292930"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      render: () => {
        return (
          <input
            type="email"
            className={`${styles.formcontainerinputfield} contact-field-input-2`}
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )
      },
    },
    {
      icon: (
        <svg
          className={styles.formphoneicon}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="form-phone-icon"
        >
          <path
            d="M10.7259 5.27161C11.7258 5.43919 12.6341 5.91146 13.3592 6.6351C14.0843 7.35873 14.5538 8.26518 14.7255 9.26304M10.8786 2C12.657 2.30088 14.279 3.14259 15.5689 4.42609C16.8589 5.7134 17.6985 7.33206 18 9.10688M16.6108 16.1681C16.6108 16.1681 15.6452 17.1164 15.4086 17.3944C15.0232 17.8058 14.569 18 13.9737 18C13.9164 18 13.8553 18 13.7981 17.9962C12.6646 17.9238 11.6113 17.482 10.8213 17.105C8.6612 16.0614 6.76445 14.5799 5.18827 12.7022C3.88687 11.1369 3.01673 9.6896 2.44045 8.13568C2.08552 7.18733 1.95576 6.44846 2.01301 5.75148C2.05117 5.30588 2.22291 4.93644 2.53967 4.62033L3.84107 3.32159C4.02808 3.14639 4.22653 3.05118 4.42117 3.05118C4.6616 3.05118 4.85624 3.1959 4.97836 3.31778C4.98218 3.32159 4.986 3.3254 4.98981 3.32921C5.22261 3.5463 5.44397 3.771 5.67677 4.01095C5.79508 4.13282 5.9172 4.2547 6.03933 4.38038L7.08121 5.42014C7.48575 5.82385 7.48575 6.19709 7.08121 6.60081C6.97053 6.71126 6.86367 6.82171 6.753 6.92835C6.43242 7.25589 6.68425 7.00457 6.35222 7.30164C6.34459 7.30926 6.33696 7.31307 6.33314 7.32068C6.00493 7.64823 6.06599 7.96815 6.13469 8.18524C6.1385 8.19667 6.14232 8.20809 6.14614 8.21952C6.4171 8.8746 6.79874 9.49159 7.37884 10.2267L7.38265 10.2305C8.43598 11.5254 9.54656 12.5347 10.7716 13.3078C10.9281 13.4069 11.0884 13.4868 11.241 13.563C11.3784 13.6316 11.5082 13.6963 11.6189 13.7649C11.6341 13.7725 11.6494 13.7839 11.6647 13.7915C11.7944 13.8563 11.9166 13.8867 12.0425 13.8867C12.3593 13.8867 12.5577 13.6887 12.6226 13.6239L13.3707 12.8774C13.5004 12.7479 13.7065 12.5918 13.9469 12.5918C14.1836 12.5918 14.3782 12.7403 14.4965 12.8698C14.5003 12.8736 14.5003 12.8736 14.5041 12.8774L16.607 14.976C17.0001 15.3644 16.6108 16.1681 16.6108 16.1681Z"
            stroke="#292930"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      render: () => {
        return (
          <input
            type="tel"
            className={`${styles.formcontainerinputfield} contact-field-input-2`}
            placeholder="Your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        )
      },
    },
    {
      icon: (
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="form-phone-icon"
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
            type="text"
            className={`${styles.formcontainerinputfield} contact-field-input-2`}
            placeholder="Write your query.."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        )
      },
    },
  ]

  const submitFunc = () => {}
  return (
    <Form
      fields={formFields}
      title="Get Free Quote Now"
      buttonText={buttonText}
      submitFunc={submitFunc}
    />
  )
}

export default CompanyDescription
