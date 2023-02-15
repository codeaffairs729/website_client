import { useEffect } from 'react'
import AOS from 'aos'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/app.css'
import '../styles/gen-form.css'
import '../styles/globals.css'
import 'aos/dist/aos.css'
// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import '../styles/service.css'
import '../styles/techComponent.css'
import '../styles/hireServiceLayout.css'
import '../styles/assisstanceModel.css'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
    // (function (d, t) {
    //   var BASE_URL = 'http://backend.codegaragetech.com'
    //   var g = d.createElement(t),
    //     s = d.getElementsByTagName(t)[0]
    //   g.src = BASE_URL + '/packs/js/sdk.js'
    //   g.defer = true
    //   g.async = true
    //   s.parentNode.insertBefore(g, s)
    //   g.onload = function () {
    //     window.chatwootSDK.run({
    //       websiteToken: 'pvrMMBqvsmQFw9cv2fYYG1Kt',
    //       baseUrl: BASE_URL,
    //     })
    //   }
    // })(document, 'script')
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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
