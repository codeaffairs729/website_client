import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Link from 'next/link'
import Head from 'next/head'
import ScheduleForm from '../../components/schedule'
const techTitle = 'Mobile Solutions'
import Image from 'next/image'
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
                Superior Mobile Applications.
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Seamless Experience To Users.
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Develop Custom Android & Ios Applications.
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Niche-Specific, Target-Oriented Applications
              </p>
            </li>
          </ul>
        </div>
        <div className={`${hireService.techservicebodyright} text-center`}>
          {/* <img src="/icons/service-icon/mobile-front-color-service.webp" /> */}
          <div>
            <Image
              src="/icons/service-icon/mobile-front-color-service.webp"
              alt="mobile-front-color-service Image"
              width={159}
              height={280}
              priority={true}
            />
          </div>
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
          Code Garage is a preeminent mobile app development agency that is
          specifically driven by creativity and innovation. We have proved
          ourselves as a customer-trusted and credible company for over 6 years.
          We have delivered 900+ mobile apps with a 98% success rate, and our
          client&apos;s testimonials are evidence of that. <br /> <br />
          We have a team of adept mobile app developers who have expertise in
          developing mobile solutions that meet market requirements, empower the
          brand identity of companies, and inspire business expansion and
          growth.
          <br /> <br />
          From start-ups to enterprises, we have experienced a wide experience
          in providing creative mobile app solutions to a vast number of clients
          across multiple industries.
          <br />
          <br />
        </p>
        {/* content-7 */}
        <h2 className={hireService.hireh2}>
          <strong>
            Our Mobile Application Development Solutions For Various Platforms:
          </strong>
        </h2>
        <ul className={hireService.hirelist}>
          <li>Android App Development</li>
          <li>iOS App Development</li>
          <li>Progressive Web App Development</li>
          <li>Cross-platform App Development</li>
        </ul>

        <h2 className={hireService.hireh2}>
          Partner With Us to Launch, Run & Grow Your Business Worldwide
        </h2>
        <div
          id="android"
          className={`d-flex align-items-center ${hireService.margintop32px}`}
        >
          {/* <div id="android" className="d-flex align-items-center margin-top-32px"> */}
          <div className={hireService.headingicon}>
            <Image
              src="/icons/android.webp"
              alt="android png"
              width={45}
              height={45}
            />
          </div>
          <h3 className={hireService.hireicontext}>Android App Development</h3>
        </div>
        <p className={hireService.hirep}>
          We are a reliable Android app development company, renowned for
          boosting your development strategy, designing smooth experiences,
          build-up viable solutions, and developing applications that add unique
          value to the lives of users. We design as well as develop custom
          Android applications for all sizes of businesses and domains.
        </p>
        <p className={hireService.hirep}>
          <strong>Our Android Development Services: </strong>
        </p>
        <ul className={hireService.hirelist}>
          <li> UI/UX Design</li>
          <li> Universal App Development</li>
          <li>Custom Android App Development</li>
          <li>Android Gaming App Development</li>
          <li>Enterprise Android App</li>
          <li>Android App Testing</li>
          <li>Wearable Apps</li>
          <li>Android App Security</li>
          <li> App Maintenance & Support </li>
        </ul>
        <div
          id="ios"
          className={`d-flex align-items-center ${hireService.margintop32px}`}
        >
          <div className={hireService.headingicon}>
            <Image src="/icons/ios.webp" alt="ios png" width={45} height={45} />
          </div>
          <h3 className={hireService.hireicontext}>iOS App Development</h3>
        </div>
        <p className={hireService.hirep}>
          If you want effective results, it is vital to develop niche-specific,
          feature-rich, adaptable, and target-oriented mobile applications. We
          develop top-quality iOS mobile solutions with a specific blend of
          excellent coding and apparent system architecture. We follow the
          iterative development approach and create applications with a scope
          for improvement as the application runs.
        </p>
        <p className={hireService.hirep}>
          <strong>Our iOS App Development Services:</strong>
        </p>
        <ul className={hireService.hirelist}>
          <li> UI/UX Design</li>
          <li> Universal App Development</li>
          <li>Custom iOS App Development</li>
          <li>iOS Gaming App Development</li>
          <li>Apple Wearable App Development</li>
          <li>iOS App Testing</li>
          <li>Enterprise iOS AppS</li>
          <li>iOS App Security</li>
          <li> App Maintenance & Support</li>
        </ul>
        <div
          id="mobile_react"
          className={`d-flex align-items-center ${hireService.margintop32px}`}
        >
          <div className={hireService.headingicon}>
            <Image
              src="/icons/react_native.webp"
              alt="react png"
              width={45}
              height={45}
            />
          </div>
          <h3 className={hireService.hireicontext}>React Native Development</h3>
        </div>
        <p className={hireService.hirep}>
          React Native is one of the most eminent programming languages these
          days and businesses over the globe are swiftly implementing it to
          develop fully-featured as well as appealing cross-platform apps and
          native user experience. We at Code Garage, have a long history of
          creating feature-rich business applications. We have adept react
          native developers who have wide domain competence to deliver
          end-to-end solutions.
          <br />
          <br />
        </p>
        <p className={hireService.hirep}>
          <strong>Our React Native Development Services:</strong>
        </p>
        <ul className={hireService.hirelist}>
          <li>React Native Application Development</li>
          <li>React Native Android and iOS Applications</li>
          <li> Integration and Migration Services</li>
          <li>React Native Consulting</li>
          <li> UI/UX Design</li>
          <li> Support and Maintenance Services</li>
        </ul>
        <div
          id="flutter"
          className={`d-flex align-items-center ${hireService.margintop32px}`}
        >
          <div className={hireService.headingicon}>
            <Image
              src="/images/flutter.webp"
              alt="flutter png"
              width={45}
              height={45}
            />
          </div>
          <h3 className={hireService.hireicontext}>Flutter Development</h3>
        </div>
        <p className={hireService.hirep}>
          Our Flutter mobile app development services are specifically designed
          to aid you develop a multi-platform existence. We at Code Garage, have
          adept flutter apps developers who create, design, test and launch
          completely developed flutter applications. We develop react native
          applications for businesses of all sizes that are secure, reliable,
          and secure at the same time.
        </p>
        <p className={hireService.hirep}>
          <strong>Our Flutter Development Services:</strong>{' '}
        </p>
        <ul className={hireService.hirelist}>
          <li>Custom Flutter App Development</li>
          <li>Cross-app Flutter App Development</li>
          <li> Support and Maintenance Services</li>
          <li>Flutter App Design Solutions</li>
          <li>Advanced & Native Flutter App Development</li>
          <li>Flutter App Upgrade</li>
        </ul>
      </div>
    </>
  )
}

const content7 = () => (
  <>
    <div className="hire-container-body-left-content-2"></div>
    <div className={hireService.margintop32px}>
      <TechComponent
        techList={'mobileTech'}
        frontActive={false}
        mobileActive={true}
      />
    </div>
  </>
)

// const content6 = () => (
//   <div>

//   </div>
// );
const content3 = () => (
  <div className={hireService.formservice}>
    <ScheduleForm
      title={'Schedule a Meeting'}
      requestOrigin={'Request generated from mobile solution page'}
    />
  </div>
)
const MobileSolutions = () => {
  return (
    <>
      <Head>
        <title>
          Best Mobile Solutions for your business - Code Garage Tech
        </title>
        <link
          rel="canonical"
          href="https://codegaragetech.com/services/mobile-solutions"
        />
        <meta
          name="description"
          content="We offer reliable mobile solutions like Android App Development IOS App Development React Native Development Flutter Development. Contact us now
          "
        />
      </Head>
      <HireServiceLayout
        content1={content1}
        content3={content3}
        // content6={content6}
        isIconExit={true}
        content7={content7}
        contentHeader1={contentHeader1}
        techTitle={techTitle}
        bannerComponent={Banner}
      />
    </>
  )
}

export default MobileSolutions
