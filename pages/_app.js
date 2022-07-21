import React, { useEffect, useState } from 'react'
import AOS from "aos";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/app.css'
import '../styles/globals.css'
// import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
