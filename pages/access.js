import React, { useState, useRef } from 'react'
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Image from 'next/image'

const Access = () => {
  const [email, setEmail] = useState('')
  const [notfication, setNotification] = useState('')

  // const { executeRecaptcha } = useGoogleReCaptcha();
  const submitBtn = useRef(null)

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   submitBtn.innerHTML = "Submitted";
  //   submitBtn.className = "access__btn btn btn-success";
  //   // setEmail("");

  //   if (!executeRecaptcha) {
  //     console.log("Execute recaptcha not yet available");

  //     return;
  //   }
  //   executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
  //     // console.log(gReCaptchaToken, "response Google reCaptcha server");
  //     submitEnquiryForm(gReCaptchaToken);
  //   });
  // };

  const submitEnquiryForm = (gReCaptchaToken) => {
    submitBtn.disabled = true
    submitBtn.innerHTML =
      '<span class="spinner-border spinner-border-sm"></span> Loading...'

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Anonymous',
        phone: 'NA',
        email: email,
        message: 'Enquiry',
        // gRecaptchaToken: gReCaptchaToken,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (res?.status === 'success') {
          console.log(res?.message)
          setEmail('')

          submitBtn.disabled = true
          submitBtn.innerHTML = 'Submitted'

          // toast.success('Success! Email Sent Successful', {
          //   position: "top-right",
          //   autoClose: 5000,
          //   hideProgressBar: true,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
          setNotification(res?.message)
        } else {
          console.log(res?.message)
          setNotification(res?.message)
          submitBtn.disabled = false
          submitBtn.innerHTML = 'Request Contact'

          // toast.error('Error! Email Not Sent', {
          //   position: "top-right",
          //   autoClose: 5000,
          //   hideProgressBar: true,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
        }
      })
  }

  return (
    <>
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
      <div className="access">
        <div className="access__center center">
          {/* <h2 className="access-top-heading access-top-heading-text">
            We Simplify and Streamline Each Step In Your App.
          </h2> */}
          <div
            className="access__view connect__view"
            data-aos
            data-aos-delay="300"
          >
            <div className="access__preview">
              {/* <img
                className="access__pic access-main-cloud"
                src="img/cloud.webp"
                alt="3D Cloud"
              /> */}

              <div className="access__pic access-main-cloud">
                <Image
                  src="/img/cloud.webp"
                  alt="3D Cloud"
                  width={317}
                  height={235}
                />
              </div>
              {/* <img className="access__pic connect__pic" src="images/connect.webp" alt="" /> */}
              {/* <img
                className="access__pic sphere__pic sphere-floating"
                src="images/Sphere.webp"
                alt="3D Pnk Ball"
              /> */}
              <div>
                <div className="access__pic sphere__pic azure-floating">
                  <Image
                    src="/images/Sphere.webp"
                    alt="3D Pnk Ball"
                    width={146}
                    height={146}
                  />
                </div>
                {/* <img
                className="access-azure-cloud sphere-floating"
                src="images/azure.webp"
                alt="Azure Image"
              /> */}
                <div className="access-azure-cloud azure-floating">
                  <Image
                    src="/images/azure.webp"
                    alt="Azure Image"
                    width={40}
                    height={38}
                  />
                </div>
              </div>
              {/* <img
                className="access-heading"
                src="images/Cloud_Management.webp"
                alt="Cloud Management"
              /> */}
              <div className="access-heading">
                <Image
                  src="/images/Cloud_Management.webp"
                  alt="Cloud Management"
                  width={180}
                  height={66}
                />
              </div>
              {/* <h2 className="access-heading" >Cloud Services</h2> */}
              {/* <img className="access__pic" src="images/connect.webp" alt="" /> */}
            </div>
            {/* <div className="access__preview">
              <img className="access__pic" src="images/Sphere.webp" alt="" />
            </div> */}
          </div>
          <div className="access__wrap" data-aos="animation-scale-y">
            <div className="access__info">Ready To Make Your App Live?</div>
            <form className="access__form" onSubmit={submitEnquiryForm}>
              <div className="access__field">
                <input
                  className="access__input"
                  type="email"
                  placeholder="Your Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <div className="access__icon">
                  <img
                    className="access__pic"
                    src="img/sending-mail.webp"
                    alt="Sending Mail PNG"
                  />
                </div>
              </div>
              <button
                ref={(submitBtnRef) => {
                  submitBtn = submitBtnRef
                }}
                className="request_connect_btn access__btn btn btn_purple"
                type="submit"
              >
                Request Contact
              </button>
            </form>
          </div>
        </div>
        <div className="access__circles">
          <div className="access__circle" data-aos data-aos-offset="300"></div>
          <div
            className="access__circle"
            data-aos
            data-aos-delay="100"
            data-aos-offset="300"
          ></div>
          <div
            className="access__circle"
            data-aos
            data-aos-delay="200"
            data-aos-offset="300"
          ></div>
        </div>
        <div className="access__clouds">
          <div className="access__cloud access-cloud-1 digitalocean-floating digitalocean-position">
            {/* <img
              className="access__pic js-parallax"
              data-scale="1.5"
              data-orientation="left"
              src="img/cloud.webp"
              alt="3D Cloud"
            /> */}
            <div
              className="access__pic js-parallax"
              data-scale="1.5"
              data-orientation="left"
            >
              <Image
                src="/img/cloud.webp"
                alt="3D Cloud"
                width={114}
                height={85}
              />
            </div>
            {/* <img
              className="access-google-cloud"
              data-scale="1.5"
              data-orientation="left"
              src="images/digitalocean.webp"
              alt="Digital Ocean PNG"
            /> */}

            <div
              className="access-google-cloud"
              data-scale="1.5"
              data-orientation="left"
            >
              <Image
                src="/images/digitalocean.webp"
                alt="Digital Ocean PNG"
                width={46}
                height={46}
              />
            </div>
          </div>
          <div className="access__cloud gcloud-floating">
            {/* <img
              className="access__pic js-parallax"
              data-scale="1.5"
              data-orientation="right"
              src="img/cloud.webp"
              alt="3D Cloud"
            /> */}
            <div
              className="access__pic js-parallax"
              data-scale="1.5"
              data-orientation="right"
            >
              <Image
                src="/img/cloud.webp"
                alt="3D Cloud"
                width={114}
                height={85}
              />
            </div>
            {/* <img
              className="access-google-cloud"
              data-scale="1.5"
              data-orientation="right"
              src="images/google-cloud-1.webp"
              alt="Google Cloud PNG"
            /> */}
            <div
              className="access-google-cloud"
              data-scale="1.5"
              data-orientation="right"
            >
              <Image
                src="/images/google-cloud-1.webp"
                alt="Google Cloud PNG"
                width={46}
                height={37}
              />
            </div>
          </div>
          <div className="access__cloud access-aws-cloud-outer aws-floating">
            {/* <img
              className="access__pic js-parallax"
              data-scale="1.5"
              data-orientation="right"
              src="img/cloud.webp"
              alt="3D Cloud"
            /> */}
            <div
              className="access__pic js-parallax"
              data-scale="1.5"
              data-orientation="right"
            >
              <Image
                src="/img/cloud.webp"
                alt="3D Cloud"
                width={114}
                height={85}
              />
            </div>
            {/* <img
              className="access-google-cloud"
              data-scale="1.5"
              data-orientation="right"
              src="images/aws.webp"
              alt="AWS - Logo"
            /> */}
            <div
              className="access-google-cloud"
              data-scale="1.5"
              data-orientation="right"
            >
              <Image
                src="/images/aws.webp"
                alt="AWS - Logo"
                width={46}
                height={29}
              />
            </div>
          </div>
          <div className="access__cloud access-heroku-cloud-outer heroku-floating">
            {/* <img
              className="access__pic js-parallax"
              data-scale="1.5"
              data-orientation="right"
              src="img/cloud.webp"
              alt="heroku-floating-img"
            /> */}
            <div
              className="access__pic js-parallax"
              data-scale="1.5"
              data-orientation="right"
            >
              <Image
                src="/img/cloud.webp"
                alt="heroku-floating-img"
                width={114}
                height={85}
              />
            </div>
            {/* <img
              className="access-google-cloud access-heroku-cloud"
              data-scale="1.5"
              data-orientation="right"
              src="images/heroku.webp"
              alt="Heroku - Logo"
            /> */}
            <div
              className="access-google-cloud access-heroku-cloud"
              data-scale="1.5"
              data-orientation="right"
            >
              <Image
                src="/images/heroku.webp"
                alt="Heroku - Logo"
                width={80}
                height={40}
              />
            </div>
          </div>
        </div>
        <div className="access__balls">
          <div className="access__ball"></div>
          <div className="access__ball access-ball-white-leftbottom"></div>
          <div className="access__ball"></div>
          <div className="access__ball"></div>
          <div
            className="access__ball js-rellax access-ball-yellow rackspace-floating"
            data-rellax-speed="-1"
          >
            {/* <img
              className="access-google-cloud access-rackspace-cloud"
              src="images/rackspace.webp"
              alt="Rackspace - Logo"
            /> */}
            <div className="access-google-cloud access-rackspace-cloud ">
              <Image
                src="/images/rackspace.webp"
                alt="Rackspace - Logo"
                width={90}
                height={90}
              />
            </div>
          </div>
          <div className="access__ball"></div>
          <div className="access__ball js-rellax" data-rellax-speed="1"></div>
        </div>
        {/* <img
          className="access-salesforce-cloud salesforce-floating"
          src="images/salesforce.webp"
          alt="Salesforce - Logo"
        /> */}
        <div className="access-salesforce-cloud salesforce-floating">
          <Image
            src="/images/salesforce.webp"
            alt="Salesforce - Logo"
            width={100}
            height={71}
          />
        </div>
      </div>
    </>
  )
}

export default Access
