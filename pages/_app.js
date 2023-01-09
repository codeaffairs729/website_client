import React, { useEffect, useState } from 'react'
import AOS from "aos";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/app.css'
import '../styles/gen-form.css'
import '../styles/globals.css'
import "aos/dist/aos.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Link from 'next/link'
import '../styles/service.css'
import '../styles/tech-component.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  )
}

export default MyApp
