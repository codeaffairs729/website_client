import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
import Image from 'next/image'
import ScheduleForm from '../../components/schedule'
const techTitle = 'Nuxt.Js Development Services'
import hireService from '../../styles/hireService.module.css'

const contentHeader1 = () => {
  return (
    <>
      <div className={hireService.techservicebody}>
        <div className={hireService.techservicebodyleft}>
          <h1 className={hireService.hireh1}>{techTitle}</h1>
          <ul
            className={`${hireService.hirelisticon} ${hireService.hire_list_items_services} `}
          >
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Open source framework of Vue.js
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Quick to la unch and simple to update
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Develop stunning applications as well as websites
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Integrates the best of server-side and client-side development
                worlds
              </p>
            </li>
          </ul>
        </div>
        <div className={hireService.techservicebodyright}>
          {/* <img src="/icons/service-icon/cloud.webp" alt="3D Cloud" /> */}
          <Image
            src="/icons/service-icon/Frame.webp"
            alt="Frame JPG"
            width={442}
            height={483}
            priority={true}
          />
        </div>
      </div>
    </>
  )
}

const content1 = () => {
  return (
    <>
      {/* Service container body content */}
      <div className="hire-container-body-left-content-1">
        <p className={hireService.hirep}>
          Nuxt.js is an open source framework of Vue.js that helps you develop
          stunning applications as well as websites with ease.
          <br /> <br />
        </p>
        <h2 className={`${hireService.hireh2} ${hireService.marginbottom24px}`}>
          <strong>Web Development Powerful And Simple</strong>
        </h2>
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          NuxtJs development is the latest method of developing web
          applications. It integrates the best of server-side and client-side
          development worlds to build data-driven, SEO friendly, performant
          websites with no configuration. All you require is a couple of
          commands to commence developing your single page app.
        </p>
        {/* content-7 */}
        {/* <h2 className="hire-h2 margin-bottom-24px">
          Advantages of Hiring Ecommerce Experts{' '}
        </h2> */}
        {/* image required */}
        <div className={hireService.shade1}>
          <div className={hireService.greyshade}></div>
          <h2
            className={`${hireService.hireh2} ${hireService.marginbottom24px}`}
          >
            We Offer A Wide Range Of Nuxt.Js Development Services.
          </h2>

          <p className={hireService.hirep}>
            As a Nuxt.Js expert agency, we provide high-quality and professional
            application development services utilizing Nuxt.Js which serve the
            various requirements of clients globally.
          </p>

          <h3 className={hireService.hireh3}>
            <b>Web Development</b>{' '}
          </h3>
          <p className={hireService.hirep}>
            Our clients rely on our expertise to build static as well as dynamic
            web apps with Nuxt.js framework. We create applications that are
            quick to launch and simple to update in the shortest amount of time.
          </p>

          <h3 className={hireService.hireh3}>
            <b>Application Upgrade Solutions</b>
          </h3>
          <p className={hireService.hirep}>
            Our application upgrade solutions aid you update an application
            developed on Nuxt.js framework to the newest version. Our services
            are designed to make your business a success.
          </p>

          <h3 className={hireService.hireh3}>
            <b>Plugin Development </b>
          </h3>
          <p className={hireService.hirep}>
            We have a vast experience in creating a range of plugins as per
            business requirements. At Code Garage, we have created numerous
            customized plugins to meet the demands of clients.
          </p>

          <h3 className={hireService.hireh3}>
            <b>SSR Development Services</b>
          </h3>
          <p className={hireService.hirep}>
            We support our Nuxt.js development solutions, with solid SSR
            development solutions. Banking on these solutions, our clients can
            escalate conversion rates and optimize user engagement.
          </p>
          <h3 className={hireService.hireh3}>
            <b>Maintenance and Support</b>
          </h3>
          <p className={hireService.hirep}>
            At Code Garage, our maintenance and support solutions for Nuxt.js
            development include 24*7 support for application performance
            requirements.
          </p>
        </div>
        {/* <h2 className="hire-h2 margin-bottom-24px">
          Nuxt.Js Development Procedure
          </h2> */}
        {/* Image required */}
        <h2 className={`${hireService.hireh2} ${hireService.marginbottom24px}`}>
          Why Choose Us?
        </h2>

        <h3 className={hireService.hireh3}>
          <b>Highest Quality Development</b>{' '}
        </h3>
        <p className={hireService.hirep}>
          As a professional Nuxt.js focused agency, you can rely on us as we
          follow meticulous development standards and provide services of the
          greatest professional quality.
        </p>
        <h3 className={hireService.hireh3}>
          <b>Full-Stack Development Capabilities </b>{' '}
        </h3>
        <p className={hireService.hirep}>
          Nuxt.js requires a back-end stack that is worth of its flexibility and
          speed. Our team of professional developers develop superior
          applications that span the full stack.
        </p>
      </div>
    </>
  )
}

const content3 = () => (
  <div className={hireService.formservice}>
    <ScheduleForm
      title={'Schedule a Meeting'}
      requestOrigin={'Request generated from vue next page'}
    />
  </div>
)
const NuxtjsServices = () => {
  return (
    <>
      <Head>
        <title>NuxtJs Development solutions - Code Garage Tech</title>
        <link
          rel="canonical"
          href="https://codegaragetech.com/services/vuejs-nuxtjs"
        />
        <meta
          name="description"
          content="
          Code Garage Tech’s team has a wide experience in creating apps using Nuxt.js framework. We help you build amazing apps and websites with ease. Contact us now!


          "
        />
      </Head>
      <HireServiceLayout
        content1={content1}
        content3={content3}
        isIconExit={true}
        contentHeader1={contentHeader1}
        techTitle={techTitle}
        bannerComponent={Banner}
        requestOrigin={'Requested from Miscellaneous page'}
      />
    </>
  )
}

export default NuxtjsServices
