import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,500;0,700;1,700&family=Poppins:wght@300;400;500;600&display=swap"
          as="style"
        ></link> */}
        {/* woff2 */}
        {/* <link
          rel="preload"
          href="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2"
          as="font"
        ></link> */}
        {/* <link
          rel="preload"
          href="https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2"
          as="font"
        ></link> */}

        {/* <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,500;0,700;1,700&family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        /> */}

<script>
      {/* (function(d,t) {
        var BASE_URL="http://backend.codegaragetech.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.chatwootSDK.run({
            websiteToken: 'pvrMMBqvsmQFw9cv2fYYG1Kt',
            baseUrl: BASE_URL
          })
        }
      })(document,"script"); */}
    </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
