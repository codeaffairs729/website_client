import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import AOS from 'aos'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/app.css'
import '../styles/globals.css'
import 'aos/dist/aos.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
// import '../styles/gen-form.css'
// import '../styles/service.css'
// import '../styles/techComponent.css'
// import '../styles/hireServiceLayout.css'
// import '../styles/assisstanceModel.css'
// import '../styles/blog-style.css'
// import '../styles/Services.module.css'
const Header = dynamic(() => import('./includes/header'), {
  ssr: false,
})
const Footer = dynamic(() => import('../components/Footer'), {
  ssr: true,
})
// const Footer = dynamic(() => import('./includes/footer'), {
//   ssr: true,
// })
const ChatwootWidget = dynamic(() => import('../components/ChatwootWidget'), {
  ssr: false,
})
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  // const [auth, setAuth] = useState(false)

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <Component {...pageProps} />
      {/* <ChatwootWidget /> */}
      <Footer />
    </>
  )
}

export default MyApp
