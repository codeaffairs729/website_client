import TechComponent from "../../components/techComponent";
import HireServiceLayout from "../../components/hireServiceLayout";
import Banner from "../../components/banner";
import Head from "next/head";
const techTitle = "Web Solutions";
import ScheduleForm from "../../components/schedule";
import Image from "next/image";

// const contentHeader=()=><div></div>
const contentHeader1 = () => {
  return (
    <>
      <div className="tech-service-body">
        <div className="tech-service-body-left">
          <h1 className="hire-h1">{techTitle}</h1>
          <p className="hire-p text-danger mt-2">
            A Roadmap To The Emerging And Effective Web And CMS Development
          </p>
          <a
            target="_blank"
            href="/contact"
            className="header__btn btn btn_purple mt-5"
          >
            Get in Touch
          </a>
        </div>
        <div className="tech-service-body-left-right">
          {/* <img src="/icons/service-icon/Frame.webp" alt="" /> */}
          <div>
          <Image
              src="/icons/service-icon/Frame.webp"
              alt="Frame JPG"
              width={256}
              height={280}
              />
          </div>
        </div>
      </div>
    </>
  );
};

const content1 = () => {
  return (
    <>
      {/* Service container body content */}
      <div className="hire-container-body-left-content-1">
        <p className="hire-p">
          A fully-functional and highly interactive website is required for your
          business to keep things on the right track! <br />
          <br />
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
      </div>
    </>
  );
};

const content7 = () => (
  <>
    <div className="hire-container-body-left-content-2">
      <h3 className="hire-h3">Our Web Development Step-By-Step Process</h3>
      <h3 className="hire-h3">
        Planning - Design - Development - Testing - Maintenance
      </h3>
      <h2 className="hire-h2">Technologies We Excel At:</h2>
      <h3 className="hire-h3">Ruby on Rails Development</h3>
      <p className="hire-p">
        Code Garage Tech chooses the Ruby on Rails framework for web development
        because we know how to leverage its real power. We have a tonne of
        expertise in creating Ruby on Rails web applications of all sizes.{" "}
        <br />
        <br />
        Our developers have deep knowledge of the Ruby on Rails framework and
        can even handle the most complex tasks. We make an effort to bring
        cutting-edge market techniques and expertise to produce powerful Ruby on
        Rails applications.
      </p>
    </div>

    <div className="">
      <p className="hire-p">Our Ruby on Rails Development Services Include:</p>
      <ul className="hire-list">
        <li>Enterprise Modernization </li>
        <li>Rails Application Migration</li>
        <li>Legacy Code Audit</li>
        <li>Startup Solutions</li>
        <li>Maintenance and Support</li>
        <li>Third-Party Integration</li>
        <li>Payment Gateway</li>
        <li>Custom API development</li>
      </ul>
      <h3 className="hire-h3">React / NextJs Development</h3>
      <p className="hire-p">
        We use React/NextJs Development because it is a dynamic and flexible web
        app framework. We can create web as well as mobile applications
        utilizing the same codebase with the help of React/NextJs.
        <br />
        <br />
        We, at Code Garage Tech, completely leverage the real power of
        React/Next Js to develop fully-functional websites and applications that
        suit your particular business requirements. From developing swift
        dynamic and static to future-rich, robust websites and apps, the
        advantages of using React/NextJs. are numerous for developers as well as
        clients.
      </p>
      <p className="hire-p">
        Choose Next.Js development services because it offers:{" "}
      </p>
      <ul className="hire-list">
        <li>Multiple Rendering Capabilities</li>
        <li>Internationalization routing</li>
        <li>Auto Code Splitting</li>
        <li>TypeScript Support</li>
        <li>Component Reusability</li>
        <li>Built-in CSS Support</li>
        <li>Image Optimization</li>
        <li>Improved SEO</li>
      </ul>
      <h3 className="hire-h3">VueJs / NuxtJs Development</h3>
      <p className="hire-p">
        VueJs/NuxtJs Development is an adaptable, scalable, and responsive web
        application framework that supports functional, beautiful, and fast
        front-end experiences. <br />
        <br />
        We, at Code Garage Tech, leverage the power of VueJs/NuxtJs Development
        fully, and our team carefully follows all development standards and also
        delivers high-quality web applications.
        <br />
        <br />
      </p>
      <p className="hire-p">
        Choose VueJs/NuxtJs development services because:{" "}
      </p>
      <ul className="hire-list">
        <li>It offers a Performance boost</li>
        <li>It is Easy to Deploy and Use</li>
        <li>It offers Automatic Code Splitting</li>
        <li>TypeScript Support</li>
        <li>Component Reusability</li>
        <li>Built-in CSS Support</li>
        <li>Image Optimization</li>
        <li>Improved SEO</li>
      </ul>
      <h3 className="hire-h3">NodeJs Development</h3>
      <p className="hire-p">
        As a preeminent Node.js development company, Code Garage Tech create
        scalable, real-time, and fast applications. Hire our adept and dedicated
        developers to fulfill your Node JS web development requirements. <br />
        <br />
        We, at Code Garage Tech, offer Node JS web development services that are
        specifically crafted to add efficiency on both client-side as well as
        server-side. Our developers can harness asynchronous and event-driven
        APIs to develop real-time mobile, desktop, and web applications.
      </p>
      <p className="hire-p">Our Node JS Development Services provide: </p>
      <ul className="hire-list">
        <li>100% Transparency</li>
        <li>Flexible-Engagement-Models</li>
        <li>Timely Delivery</li>
        <li>Experienced Developers</li>
        <li>Technical Support</li>
      </ul>
      <h3 className="hire-h3">Laravel Development</h3>
      <p className="hire-p">
        As a leading Laravel development company, we offer cutting-edge services
        that will help your business to reach new heights of success. We offer
        Laravel development solutions to businesses of all sizes. <br />
        <br />
        We, at Code Garage Tech, have years of experience in providing Laravel
        development services and we effectively execute integration processes
        and customization while developing Laravel applications.
      </p>
      <p className="hire-p">Our Laravel Development Services Include:</p>
      <ul className="hire-list">
        <li>Customized Laravel Development Services</li>
        <li>Third-Party Integrations</li>
        <li>Laravel Enterprise Solutions</li>
        <li>Laravel Data Migration Solutions</li>
        <li>Laravel E-Commerce Development Solutions</li>
        <li>Laravel CRM Development</li>
        <li>Laravel Extension Development</li>
      </ul>
      <h3 className="hire-h3">Shopify Development </h3>
      <p className="hire-p">
        As a preeminent development company, we offer a significant range of
        Shopify services to aid you to build a scalable, robust, highly secure,
        and sales-driven Shopify store. <br />
        <br />
        We, at Code Garage Tech, offer reliable Shopify services to provide you
        with exactly what you need to achieve your business growth targets. Our
        main aim is to bring experience, dedication, and expertise with our
        solutions.
      </p>
      <p className="hire-p">Our Shopify Development Services Include:</p>
      <ul className="hire-list">
        <li>Shopify Theme FDesign as well as customization</li>
        <li>Shopify Integration</li>
        <li>Shopify Setup as well as Configuration</li>
        <li>Shopify Migration</li>
        <li>Shopify SEO</li>
        <li>Shopify App Development</li>
        <li>Shopify Maintenance and Support</li>
      </ul>
      <h3 className="hire-h3">WordPress Development </h3>
      <p className="hire-p">
        WordPress is one of the most powerful and convenient Content Management
        Systems that has umpteen features and makes your experience more
        fascinating as well as pleasing. <br />
        <br />
        We, at Code Garage Tech, always aim to provide out-of-the-box website
        solutions using futuristic WordPress innovation. Our adept team offers
        high-performing digital experiences that take your business to the new
        height of success with WordPress Development Solutions.
      </p>
      <p className="hire-p">Our WordPress Development Services Include: </p>
      <ul className="hire-list">
        <li>WordPress SEO</li>
        <li>WordPress Design</li>
        <li>WordPress Support</li>
        <li>WordPress Customization</li>
        <li>WordPress Upgradation Services</li>
        <li>WordPress Bug Fixing</li>
        <li>WordPress Maintenance and Support</li>
      </ul>
    </div>
  </>
);

const content6 = () => <TechComponent />;
const content3 = () => (
  <div className="form-service">
    <ScheduleForm
      title={"Schedule a Meeting"}
      requestOrigin={"Request generated from web services page"}
    />
  </div>
);
const WebServices = () => {
  return (
    <>
      <Head>
        <title>
          Effective Web Solutions for your business - Code Garage Tech
        </title>
        <link
          rel="canonical"
          href="https://www.codegaragetech.com/services/web-services"
        />
        <meta
          name="description"
          content="At Code Garage Tech, we offer full web development solutions, from initial planning to final delivery and third-party testing. Get in Touch with us now! 

          "
        />
      </Head>
      <HireServiceLayout
        content1={content1}
        content3={content3}
        content6={content6}
        content7={content7}
        contentHeader1={contentHeader1}
        techTitle={techTitle}
        bannerComponent={Banner}
      />
    </>
  );
};

export default WebServices;
