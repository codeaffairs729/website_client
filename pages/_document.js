import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import {
  OrganizationSchema,
  WebsiteSchema,
  LocalBusinessSchema,
  WebServicesSchema,
  MobileServicesSchema,
  DevOpsServicesSchema,
  UIUXServicesSchema,
  EcommerceServicesSchema,
  CMSServicesSchema,
  CRMServicesSchema,
  DigitalMarketingServicesSchema,
  DeploymentHostManagementServicesSchema,
  StrapiServicesSchema,
  ChatwootServicesSchema,
  AboutServicesSchema,
  CareerServicesSchema,
} from '../components/organizationSchema'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="p:domain_verify"
          content="32cbd3add98943d7190bda6e54ab32cb"
        />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
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

        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,500;0,700;1,700&family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-GT3WPQDNTQ"
        /> */}

        <Script id="google-analytics-script" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GT3WPQDNTQ');
    `}
        </Script>
        {/* Add the Twitter conversion tracking code here */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},
                s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
                a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
                twq('config','of7j3');
              `,
          }}
        />

        {/* Add Google Tag Manager script */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GT3WPQDNTQ"
          strategy="afterInteractive"
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-GT3WPQDNTQ');
              `,
          }}
        /> */}
        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
        <WebServicesSchema />
        <MobileServicesSchema />
        <DevOpsServicesSchema />
        <UIUXServicesSchema />
        <EcommerceServicesSchema />
        <CMSServicesSchema />
        <CRMServicesSchema />
        <DigitalMarketingServicesSchema />
        <DeploymentHostManagementServicesSchema />
        <StrapiServicesSchema />
        <ChatwootServicesSchema />
        <AboutServicesSchema />
        <CareerServicesSchema />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
