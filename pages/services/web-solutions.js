import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
const techTitle = 'Web Solutions'
import ScheduleForm from '../../components/schedule'
import Image from 'next/image'

// const contentHeader=()=><div></div>
const contentHeader1 = () => {
  return (
    <>
      <div className="tech-service-body">
        <div className="tech-service-body-left">
          <h1 className="hire-h1">{techTitle}</h1>
          <ul className="hire-list-icon">
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">Built fully-functional website</p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                Develop Highly Interactive Website
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                We always keep things on the right track
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">Easy-to-customize websites.</p>
            </li>
          </ul>
          {/* <span className="d-flex margine-bottom-16px">
            <Image
              src="/icons/service-icon/check-broken.svg"
              alt="check-broken png"
              width={24}
              height={24}
            />
            <p className="margine-left-8px">
              We built fully-functional website
            </p>
          </span>
          <span className="d-flex margine-bottom-16px">
            <Image
              src="/icons/service-icon/check-broken.svg"
              alt="check-broken png"
              width={24}
              height={24}
            />
            <p className="margine-left-8px">
              We develop Highly interactive website
            </p>
          </span>
          <span className="d-flex margine-bottom-16px">
            <Image
              src="/icons/service-icon/check-broken.svg"
              alt="check-broken png"
              width={24}
              height={24}
            />
            <p className="margine-left-8px">
              We always keep things on the right track
            </p>
          </span>
          <span className="d-flex margine-bottom-16px">
            <Image
              src="/icons/service-icon/check-broken.svg"
              alt="check-broken png"
              width={24}
              height={24}
            />
            <p className="margine-left-8px">
              We offer easy-to-customize websites.
            </p>
          </span> */}
        </div>
        <div className="tech-service-body-right">
          {/* <img src="/icons/service-icon/Frame.webp" alt="" /> */}
          <div>
            <Image
              src="/icons/service-icon/Frame.webp"
              alt="Frame JPG"
              width={442}
              height={483}
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
          At Code Garage Tech, we offer full web development services, from
          initial planning to final delivery and third-party testing. Backed by
          a team of dedicated and skilled developers, we have established
          ourselves as one of the most renowned and trusted custom website
          development companies. We work with you to meet your most challenging
          needs for professional website application development services. Our
          professionals can offer cost-effective end-to-end web development
          services. <br />
          <br />
          Our pertinent goal is to provide easy-to-customize, user-friendly,
          responsive, highly secure, and stable web solutions that are tailored
          according to your business needs. We constantly work to ensure that
          the ideal website of our customers has a top-notch web presence. We
          care for your needs, and hence, offer you complete web development
          solutions.
          <br />
          <br />
        </p>
        {/* content 7 */}
        <h2 className="hire-h2">Our Web Development Step-By-Step Process</h2>
        <h3 className="hire-h3">
          Planning - Design - Development - Testing - Maintenance
        </h3>
        <h2 className="hire-h2 margin-bottom-8">Technologies We Excel At:</h2>
        <div
          id="ruby-rails"
          className="d-flex align-items-center margin-top-32px"
        >
          <div className="heading-icon">
            <Image
              src="/icons/rails.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className="hire-icon-text">Ruby on Rails Development</h3>
        </div>

        <p className="hire-p margin-bottom-24px">
          Code Garage Tech chooses the Ruby on Rails framework for web
          development because we know how to leverage its real power. We have a
          tonne of expertise in creating Ruby on Rails web applications of all
          sizes. <br />
          <br />
          Our developers have deep knowledge of the Ruby on Rails framework and
          can even handle the most complex tasks. We make an effort to bring
          cutting-edge market techniques and expertise to produce powerful Ruby
          on Rails applications.
        </p>

        <h3 className="hire-h3">
          Our Ruby on Rails Development Services Include:
        </h3>
        <ul className="hire-list margin-bottom-24px">
          <li>Enterprise Modernization </li>
          <li>Rails Application Migration</li>
          <li>Legacy Code Audit</li>
          <li>Startup Solutions</li>
          <li>Maintenance and Support</li>
          <li>Third-Party Integration</li>
          <li>Payment Gateway</li>
          <li>Custom API development</li>
        </ul>
        <div
          id="react-nextjs"
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
          <h3 className="hire-icon-text">
            ReactJs Development / NextJs Development
          </h3>
        </div>
        <p className="hire-p margin-bottom-24px">
          We use React/NextJs Development because it is a dynamic and flexible
          web app framework. We can create web as well as mobile applications
          utilizing the same codebase with the help of React/NextJs.
          <br />
          <br />
          We, at Code Garage Tech, completely leverage the real power of
          React/Next Js to develop fully-functional websites and applications
          that suit your particular business requirements. From developing swift
          dynamic and static to future-rich, robust websites and apps, the
          advantages of using React/NextJs. are numerous for developers as well
          as clients.
        </p>
        <h3 className="hire-h3">
          Choose Next.Js development services because it offers:{' '}
        </h3>
        <ul className="hire-list margin-bottom-24px">
          <li>Multiple Rendering Capabilities</li>
          <li>Internationalization routing</li>
          <li>Auto Code Splitting</li>
          <li>TypeScript Support</li>
          <li>Component Reusability</li>
          <li>Built-in CSS Support</li>
          <li>Image Optimization</li>
          <li>Improved SEO</li>
        </ul>
        <div id="vuejs" className="d-flex align-items-center margin-top-32px">
          <div className="heading-icon">
            <Image
              src="/icons/vuejs.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className="hire-icon-text">
            VueJs Development/ NuxtJs Development
          </h3>
        </div>
        <p className="hire-p margin-bottom-24px">
          VueJs/NuxtJs Development is an adaptable, scalable, and responsive web
          application framework that supports functional, beautiful, and fast
          front-end experiences. <br />
          <br />
          We, at Code Garage Tech, leverage the power of VueJs/NuxtJs
          Development fully, and our team carefully follows all development
          standards and also delivers high-quality web applications.
          <br />
          <br />
        </p>
        <h3 className="hire-h3">
          Choose VueJs/NuxtJs development services because:{' '}
        </h3>
        <ul className="hire-list margin-bottom-24px">
          <li>It offers a Performance boost</li>
          <li>It is Easy to Deploy and Use</li>
          <li>It offers Automatic Code Splitting</li>
          <li>TypeScript Support</li>
          <li>Component Reusability</li>
          <li>Built-in CSS Support</li>
          <li>Image Optimization</li>
          <li>Improved SEO</li>
        </ul>
        <div id="nodejs" className="d-flex align-items-center margin-top-32px">
          <div className="heading-icon">
            <Image
              src="/icons/nodejs.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className="hire-icon-text">NodeJs Development</h3>
        </div>
        <p className="hire-p margin-bottom-24px">
          As a preeminent Node.js development company, Code Garage Tech create
          scalable, real-time, and fast applications. Hire our adept and
          dedicated developers to fulfill your Node JS web development
          requirements. <br />
          <br />
          We, at Code Garage Tech, offer Node JS web development services that
          are specifically crafted to add efficiency on both client-side as well
          as server-side. Our developers can harness asynchronous and
          event-driven APIs to develop real-time mobile, desktop, and web
          applications.
        </p>
        <h3 className="hire-h3">Our Node JS Development Services provide: </h3>
        <ul className="hire-list margin-bottom-24px">
          <li>100% Transparency</li>
          <li>Flexible-Engagement-Models</li>
          <li>Timely Delivery</li>
          <li>Experienced Developers</li>
          <li>Technical Support</li>
        </ul>
        <div id="laravel" className="d-flex align-items-center margin-top-32px">
          <div className="heading-icon">
            <Image
              src="/icons/laravel.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className="hire-icon-text">Laravel Development</h3>
        </div>
        <p className="hire-p margin-bottom-24px">
          As a leading Laravel development company, we offer cutting-edge
          services that will help your business to reach new heights of success.
          We offer Laravel development solutions to businesses of all sizes.{' '}
          <br />
          <br />
          We, at Code Garage Tech, have years of experience in providing Laravel
          development services and we effectively execute integration processes
          and customization while developing Laravel applications.
        </p>
        <h3 className="hire-h3">Our Laravel Development Services Include:</h3>
        <ul className="hire-list margin-bottom-24px">
          <li>Customized Laravel Development Services</li>
          <li>Third-Party Integrations</li>
          <li>Laravel Enterprise Solutions</li>
          <li>Data Migration Solutions</li>
          <li>E-Commerce Development Solutions</li>
          <li>CRM Development</li>
          <li>Laravel Extension Development</li>
        </ul>
        <div id="shopify" className="d-flex align-items-center margin-top-32px">
          <div className="heading-icon">
            <Image
              src="/images/shopify_icon.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className="hire-icon-text">Shopify Development </h3>
        </div>
        <p className="hire-p margin-bottom-24px">
          As a preeminent development company, we offer a significant range of
          Shopify services to aid you to build a scalable, robust, highly
          secure, and sales-driven Shopify store. <br />
          <br />
          We, at Code Garage Tech, offer reliable Shopify services to provide
          you with exactly what you need to achieve your business growth
          targets. Our main aim is to bring experience, dedication, and
          expertise with our solutions.
        </p>
        <h3 className="hire-h3">Our Shopify Development Services Include:</h3>
        <ul className="hire-list margin-bottom-24px">
          <li> Theme Design as well as customization</li>
          <li>Shopify Integration</li>
          <li> Setup as well as Configuration</li>
          <li> Migration</li>
          <li>Shopify SEO</li>
          <li> App Development</li>
          <li> Maintenance and Support</li>
        </ul>
        <div
          id="wordpress"
          className="d-flex align-items-center margin-top-32px"
        >
          <div className="heading-icon">
            <Image
              src="/icons/wordpress.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className="hire-icon-text">WordPress Development </h3>
        </div>
        <p className="hire-p margin-bottom-24px">
          WordPress is one of the most powerful and convenient Content
          Management Systems that has umpteen features and makes your experience
          more fascinating as well as pleasing. <br />
          <br />
          We, at Code Garage Tech, always aim to provide out-of-the-box website
          solutions using futuristic WordPress innovation. Our adept team offers
          high-performing digital experiences that take your business to the new
          height of success with WordPress Development Solutions.
        </p>
        <h3 className="hire-h3">
          Our WordPress Development Services Include:{' '}
        </h3>
        <ul className="hire-list margin-bottom-24px">
          <li>WordPress SEO</li>
          <li> Designing</li>
          <li> Customization</li>
          <li> Upgradation Services</li>
          <li> Bug Fixing</li>
          <li> Maintenance and Support</li>
        </ul>
      </div>
    </>
  )
}

const content7 = () => (
  <>
    <div className="margin-top-32px">
      <TechComponent
        techList={'frontTech'}
        frontActive={true}
        mobileActive={false}
      />
    </div>
    <div className="container mt-3">
      <h2>Stacked form</h2>
      <form>
        <div className="mb-3 mt-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
          />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              name="remember"
            />{' '}
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </>
)

// const content6 = () => <TechComponent techList={"frontTech"} />;
const content3 = () => (
  <div className="form-service">
    <ScheduleForm
      title={'Schedule a Meeting'}
      requestOrigin={'Request generated from web services page'}
    />
  </div>
)
const WebSolutions = () => {
  return (
    <>
      <Head>
        <title>
          Effective Web Solutions for your business - Code Garage Tech
        </title>
        <link
          rel="canonical"
          href="https://codegaragetech.com/services/web-solutions"
        />
        <meta
          name="description"
          content="
          At Code Garage Tech, we offer full web development solutions, from initial planning to final delivery and third-party testing. Get in Touch with us now! 

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

export default WebSolutions
