import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import AOS from 'aos'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/app.css'
import '../styles/gen-form.css'
import '../styles/globals.css'
import 'aos/dist/aos.css'
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import '../styles/service.css'
import '../styles/techComponent.css'
import '../styles/hireServiceLayout.css'
import '../styles/assisstanceModel.css'
import '../styles/blog-style.css'
// import Header from './includes/header'
// import Footer from './includes/footer'
const Header = dynamic(() => import('./includes/header'), {
  ssr: false,
})
const Footer = dynamic(() => import('./includes/footer'), {
  ssr: false,
})
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    // <GoogleReCaptchaProvider
    //   reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    //   scriptProps={{
    //     async: false,
    //     defer: false,
    //     appendTo: "head",
    //     nonce: undefined,
    //   }}
    // >

    // </GoogleReCaptchaProvider>
    <>
      <Header />
      <Component {...pageProps} />
      {/* <button type="button" className="btn btn-primary" onClick={handleOnclick}>
        Chatwoot
      </button> */}
      <Footer />
    </>
  )
}

export default MyApp
