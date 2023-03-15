import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Link from 'next/link'
import Head from 'next/head'
import ScheduleForm from '../../components/schedule'
const techTitle = 'Mobile Solutions'
import Image from 'next/image'

const contentHeader1 = () => {
  return (
    <>
      <div className="tech-service-body">
        <div className="tech-service-body-left">
          <h1 className="hire-h1">{techTitle}</h1>
          <ul className="hire-list-icon">
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">Superior Mobile Applications.</p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">Seamless Experience To Users.</p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                Develop Custom Android & Ios Applications.
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                Niche-Specific, Target-Oriented Applications
              </p>
            </li>
          </ul>
        </div>
        <div className="tech-service-body-right text-center">
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
        <p className="hire-p">
          Code Garage Tech is a preeminent mobile app development agency that is
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
        <h2 className="hire-h2">
          <strong>
            Our Mobile Application Development Solutions For Various Platforms:
          </strong>
        </h2>
        <ul className="hire-list">
          <li>Android App Development</li>
          <li>iOS App Development</li>
          <li>Progressive Web App Development</li>
          <li>Cross-platform App Development</li>
        </ul>

        <h2 className="hire-h2">
          Partner With Us to Launch, Run & Grow Your Business Worldwide
        </h2>
        <div id="android" className="d-flex align-items-center margin-top-32px">
          <div className="heading-icon">
            <Image
              src="/icons/android.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className="hire-icon-text">Android App Development</h3>
        </div>
        <p className="hire-p">
          We are a reliable Android app development company, renowned for
          boosting your development strategy, designing smooth experiences,
          build-up viable solutions, and developing applications that add unique
          value to the lives of users. We design as well as develop custom
          Android applications for all sizes of business and domains.
        </p>
        <p className="hire-p">
          <strong>Our Android Development Services: </strong>
        </p>
        <ul className="hire-list">
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
        <div id="ios" className="d-flex align-items-center margin-top-32px">
          <div className="heading-icon">
            <Image
              src="/icons/ios.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className="hire-icon-text">iOS App Development</h3>
        </div>
        <p className="hire-p">
          If you want effective results, it is vital to develop niche-specific,
          feature-rich, adaptable, and target-oriented mobile applications. We
          develop top-quality iOS mobile solutions with a specific blend of
          excellent coding and apparent system architecture. We follow the
          iterative development approach and create applications with a scope
          for improvement as the application runs.
        </p>
        <p className="hire-p">
          <strong>Our iOS App Development Services:</strong>
        </p>
        <ul className="hire-list">
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
          className="d-flex align-items-center margin-top-32px"
        >
          <div className="heading-icon">
            <Image
              src="/icons/react_native.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className="hire-icon-text">React Native Development</h3>
        </div>
        <p className="hire-p">
          React Native is one of the most eminent programming languages these
          days and businesses over the globe are swiftly implementing it to
          develop fully-featured as well as appealing cross-platform apps and
          native user experience. We at Code Garage Tech, have a long history of
          creating feature-rich business applications. We have adept react
          native developers who have wide domain competence to deliver
          end-to-end solutions.
          <br />
          <br />
        </p>
        <p className="hire-p">
          <strong>Our React Native Development Services:</strong>
        </p>
        <ul className="hire-list">
          <li>React Native Application Development</li>
          <li>React Native Android and iOS Applications</li>
          <li> Integration and Migration Services</li>
          <li>React Native Consulting</li>
          <li> UI/UX Design</li>
          <li> Support and Maintenance Services</li>
        </ul>
        <div id="flutter" className="d-flex align-items-center margin-top-32px">
          <div className="heading-icon">
            <Image
              src="/images/flutter.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className="hire-icon-text">Flutter Development</h3>
        </div>
        <p className="hire-p">
          Our Flutter mobile app development services are specifically designed
          to aid you develop a multi-platform existence. We at Code Garage Tech,
          have adept flutter apps developers who create, design, test and launch
          completely developed flutter applications. We develop react native
          applications for businesses of all sizes that are secure, reliable,
          and secure at the same time.
        </p>
        <p className="hire-p">
          <strong>Our Flutter Development Services:</strong>{' '}
        </p>
        <ul className="hire-list">
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
    <div className="margin-top-32px">
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
  <div className="form-service">
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
