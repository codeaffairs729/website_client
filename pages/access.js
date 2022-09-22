import React, { useCallback, useState } from 'react'
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Access = () => {
  const [email, setEmail] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      // console.log(gReCaptchaToken, "response Google reCaptcha server");
      submitEnquiryForm(gReCaptchaToken);
    });
  };

  const submitEnquiryForm = (gReCaptchaToken) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Anonymous",
        phone: "NA",
        email: email,
        message: "Enquiry",
        gRecaptchaToken: gReCaptchaToken
      }),
    })
    .then((res) => res.json())
    .then((res) => {
      if (res?.status === "success") {
        // console.log(res?.message);
        setEmail("");
        toast.success('Success! Email Sent Successful', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // setNotification(res?.message);
      } else {
        // console.log(res?.message);
        // setNotification(res?.message);
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
      <div className="access">
        <div className="access__center center">
          <div className="access__view connect__view" data-aos data-aos-delay="300">
            <div className="access__preview">
              <img className="access__pic access-main-cloud" src="img/cloud.png" alt="" />
              {/* <img className="access__pic connect__pic" src="images/connect.png" alt="" /> */}
              <img className="access__pic sphere__pic sphere-floating" src="images/Sphere.png" alt="" />
              <img className="access-azure-cloud sphere-floating" src="images/azure.png" alt="" />
              <img className="access-heading" src="images/Cloud_Management.png" alt="" />
              {/* <h2 className="access-heading" >Cloud Services</h2> */}
              {/* <img className="access__pic" src="images/connect.svg" alt="" /> */}
            </div>
            {/* <div className="access__preview">
              <img className="access__pic" src="images/Sphere.png" alt="" />
            </div> */}
          </div>
          <div className="access__wrap" data-aos="animation-scale-y">
            <div className="access__info">
              Ready To Make Your App Live?
            </div>
            <form className="access__form" onSubmit={handleSubmit} >
              <div className="access__field">
                <input className="access__input" type="email" placeholder="Your Email Address" onChange={(e)=> setEmail(e.target.value)} value={email} />
                <div className="access__icon">
                  <img className="access__pic" src="img/sending-mail.svg" alt="" />
                </div>
              </div>
              <button className="access__btn btn btn_purple" type="submit">
                Request
                <br/>
                Contact
              </button>
            </form>
          </div>
        </div>
        <div className="access__circles">
          <div className="access__circle" data-aos data-aos-offset="300"></div>
          <div className="access__circle" data-aos data-aos-delay="100" data-aos-offset="300"></div>
          <div className="access__circle" data-aos data-aos-delay="200" data-aos-offset="300"></div>
        </div>
        <div className="access__clouds">
          <div className="access__cloud access-cloud-1 digitalocean-floating">
            <img className="access__pic js-parallax" data-scale="1.5" data-orientation="left" src="img/cloud.png" alt="" />
            <img className="access-google-cloud" data-scale="1.5" data-orientation="left" src="images/digitalocean.png" alt="" />
          </div>
          <div className="access__cloud gcloud-floating">
            <img className="access__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.png" alt="" />
            <img className="access-google-cloud" data-scale="1.5" data-orientation="right" src="images/google-cloud-1.png" alt="" />
          </div>
          <div className="access__cloud access-aws-cloud-outer aws-floating">
            <img className="access__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.png" alt="" />
            <img className="access-google-cloud" data-scale="1.5" data-orientation="right" src="images/aws.png" alt="" />
          </div>
          <div className="access__cloud access-heroku-cloud-outer heroku-floating">
            <img className="access__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.png" alt="" />
            <img className="access-google-cloud access-heroku-cloud" data-scale="1.5" data-orientation="right" src="images/heroku.png" alt="" />
          </div>
        </div>
        <div className="access__balls">
          <div className="access__ball"></div>
          <div className="access__ball access-ball-white-leftbottom"></div>
          <div className="access__ball"></div>
          <div className="access__ball"></div>
          <div className="access__ball js-rellax access-ball-yellow rackspace-floating" data-rellax-speed="-1">
            <img className="access-google-cloud access-rackspace-cloud" src="images/rackspace.png" alt="" />
          </div>
          <div className="access__ball"></div>
          <div className="access__ball js-rellax" data-rellax-speed="1"></div>
        </div>
        <img className="access-salesforce-cloud salesforce-floating" src="images/salesforce.png" alt="" />
      </div>
    </>
  )
}

export default Access