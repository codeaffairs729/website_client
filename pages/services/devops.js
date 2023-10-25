import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
const techTitle = 'DevOps'
import ScheduleForm from '../../components/schedule'
import Image from 'next/image'
import hireService from '../../styles/hireService.module.css'
const heading = 'miscellaneous'
const contentHeader1 = () => {
  return (
    <>
      <div className={`feature-list container ${hireService.techservicebody}`}>
        <div className={hireService.techservicebodyleft}>
          <h1 className={hireService.hireh1}>{techTitle}</h1>
          <p
            className={`${hireService.hireh8}  list-p ${hireService.marginbottom24px}`}
          >
            Discover our DevOps services that are designed to elevate your
            software development processes to new heights. We offer a wide
            spectrum of DevOps skills and expertise that go beyond the ordinary,
            fostering a culture of collaboration and innovation within your
            organization.
          </p>
        </div>
        <div className={hireService.techservicebodyright}>
          {/* <img src="/icons/service-icon/cloud.webp"  /> */}
          {/* <div> */}
          <Image
            src="/icons/service-icon/cloud.webp"
            alt="3D Cloud"
            width={378}
            height={250}
            priority={true}
          />
          {/* </div> */}
        </div>
      </div>
      <div className={hireService.temp}></div>
    </>
  )
}

const content1 = () => {
  return (
    <>
      {/* Service container body content */}
      <div className="hire-container-body-left-content-1">
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          DevOps represents a powerful approach that harnesses monitoring,
          automation, collaboration, cloud adoption, and robust tool-chain
          pipelines to revolutionize software development and delivery. At Code
          Garage Tech, we offer cutting-edge DevOps services aimed at
          streamlining the onboarding of applications, automating end-to-end
          delivery, and facilitating continuous integration and development on
          leading cloud platforms.
          <br />
          <br />
          Our mission at Code Garage Tech is to empower businesses and
          organizations to align seamlessly with their goals, consistently and
          efficiently producing top-tier software-based products and services.
          With our comprehensive DevOps solutions, you can achieve your business
          objectives by developing applications at the speed of business. <br />
          <br />
          Through our DevOps consulting services, we assist businesses of all
          sizes in achieving enhanced cohesion between Development and
          Operations. Our DevOps engineers are dedicated to crafting a tailored
          DevOps strategy that fosters excellent coordination and ensures the
          delivery of an exceptional user experience.
          <br />
          <br />
        </p>
        {/* content-7 */}
        <div className={hireService.shade1}>
          <div className={hireService.greyshade}></div>
          <h2
            className={`${hireService.hireh2} ${hireService.marginbottom24px}`}
          >
            <b>We attain DevOps success through a structured approach:</b>
          </h2>
          <ul className={`${hireService.hirep}  ${hireService.hirelist}`}>
            <li>
              <h3 className={hireService.hireh3}>
                <strong>Assemble and Planning</strong>
              </h3>
            </li>
          </ul>
          <p
            className={`${hireService.hirep}  ${hireService.listp} ${hireService.marginbottom24px}`}
          >
            {/* <p className="${hireService.hirep}  list-p margin-bottom-24px"> */}
            We kickstart the DevOps journey by conducting a thorough assessment
            and planning phase, envisioning the ideal state, and identifying
            trackable metrics to guide our efforts.{' '}
          </p>
          <ul className={hireService.hirelist}>
            <li>
              <h3 className={hireService.hireh3}>
                <strong>Process Implementation</strong>
              </h3>
            </li>
          </ul>
          <p
            className={`${hireService.hirep}  ${hireService.listp} ${hireService.marginbottom24px}`}
          >
            Our team expedites the DevOps implementation process, encompassing
            design, analysis, automation construction, and implementation in
            identified areas to maximize efficiency and effectiveness.
          </p>
          <ul className={hireService.hirelist}>
            <li>
              <h3 className={hireService.hireh3}>
                <strong>Pilot Framework Creation</strong>
              </h3>
            </li>
          </ul>
          <p
            className={`${hireService.hirep}  list-p ${hireService.marginbottom24px}`}
          >
            We seamlessly integrate your existing tools with our proprietary
            automation solutions to establish a robust pilot framework, setting
            the stage for streamlined operations.
          </p>
          <ul className={hireService.hirelist}>
            <li>
              <h3 className={hireService.hireh3}>
                <strong>CI/CD Pipeline</strong>
              </h3>
            </li>
          </ul>
          <p
            className={`${hireService.hirep}  list-p ${hireService.marginbottom24px}`}
          >
            Bridging the DevOps gap, we establish a continuous integration and
            continuous deployment (CI/CD) pipeline that ensures constant
            development, continuous integration, ongoing testing, and seamless
            deployment.
          </p>
          <p className={`${hireService.hirep} ${hireService.marginbottom24px}`}>
            At Code Garage Tech, we believe that DevOps is not just a
            methodology but a transformative journey that enhances
            collaboration, accelerates innovation, and drives your business
            forward. Partner with us to embark on this journey and experience
            the benefits of DevOps-driven excellence in software development and
            delivery. <br />
          </p>
          <div className="">
            <p
              className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
            >
              Want to develop a DevOps Framework? Talk to an Expert
            </p>
          </div>
        </div>
        <div
          id="automation"
          className={`d-flex align-items-center ${hireService.margintop32px}`}
          // className="d-flex align-items-center margin-top-32px"
        >
          <div className={hireService.headingicon}>
            <Image
              src="/icons/Unionautomation.svg"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className={hireService.hireicontext}>
            <b>Automation</b>
          </h3>
        </div>
        <p className={hireService.hirep}>
          We take pride in delivering dependable DevOps automation testing
          solutions that revolve around a strategy rooted in integration,
          collaboration, and automation. Our approach is aimed at not only
          streamlining your testing processes but also fostering a
          transformative shift in your technology culture and landscape. We
          excel at harnessing the power of collaboration, monitoring,
          automation, cloud adoption, and robust tool-chain pipelines to ensure
          the seamless onboarding of applications.
          <br />
          <br />
          Through our dedicated DevOps consulting services, we extend our
          expertise to businesses and startups, assisting them in aligning their
          operations and development efforts for greater efficiency and
          effectiveness. Our mission is to empower organizations with the tools
          and strategies necessary to thrive in today's fast-paced technology
          landscape, where innovation, speed, and reliability are paramount. By
          embracing DevOps principles, you can not only enhance your testing
          processes but also drive your entire software development lifecycle
          toward excellence
        </p>
        <div
          id="ci/cd"
          className={`d-flex align-items-center ${hireService.margintop32px}`}
        >
          <div className={hireService.headingicon}>
            <Image
              src="/icons/VectorCICD.svg"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className={hireService.hireicontext}>
            <b>CI/CD </b>
          </h3>
        </div>
        <p className={hireService.hirep}>
          In the ever-evolving tech landscape, Continuous Integration and
          Continuous Deployment (CI/CD) have emerged as indispensable pillars
          that have revolutionized the software development process. The
          integration of CI/CD practices brings about a seismic shift, enabling
          swift build cycles and expedited software deliveries without
          compromising quality. At its core, the CI/CD pipeline embodies the
          essence of agility—making incremental code changes, followed by
          seamless development, rigorous testing, and the delivery of highly
          effective software that aligns seamlessly with evolving business
          needs..
          <br />
          <br />
          At Code Garage Tech, we recognize the paramount importance of CI/CD in
          modern software development. Our adept team of developers is
          well-versed in the intricacies of CI/CD and stands ready to provide a
          spectrum of solutions, including CI/CD pipeline design and deployment,
          CI/CD implementation strategies, and the integration of essential
          plug-ins. We believe that the incorporation of CI/CD practices is not
          merely a trend but a fundamental shift that empowers businesses to
          respond swiftly, adapt to change, and consistently deliver software
          solutions that meet and exceed the expectations of a dynamic market.
        </p>
        <div
          id="cloud"
          className={`d-flex align-items-center ${hireService.margintop32px}`}
        >
          <div className={hireService.headingicon}>
            <Image
              src="/img/cloud.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className={hireService.hireicontext}>
            <b>Cloud Engineering </b>
          </h3>
        </div>
        <p className={hireService.hirep}>
          Our team boasts a cadre of highly skilled Cloud Computing engineers
          who excel at navigating the intricacies and challenges inherent in the
          software development process. We are committed to simplifying this
          journey for you, leveraging our expertise to deliver reliable Cloud
          Engineering services tailored to meet your unique business
          requirements. With a deep understanding of the intricate Cloud
          computing ecosystem, we recognize the diverse challenges that
          businesses encounter when adopting and scaling within this dynamic
          landscape.
          <br />
          <br />
          We firmly believe that one size does not fit all in the realm of Cloud
          adoption. Regardless of where you currently stand on the Cloud
          adoption curve, we stand ready to offer customized cloud engineering
          services that precisely align with the evolving needs of your
          business. Our mission is to not only provide solutions but to serve as
          your trusted partner on the journey, ensuring that Cloud computing
          becomes a seamless and integral part of your software development
          strategy. With Code Garage Tech by your side, you can embrace the
          power of the Cloud with confidence, knowing that we are dedicated to
          simplifying complexities and empowering your business for success.
        </p>
      </div>
    </>
  )
}

const content7 = () => <></>

// const content6 = () => <TechComponent />;
const content3 = () => (
  <div className={hireService.formservice}>
    <ScheduleForm
      title={'Schedule a Meeting'}
      requestOrigin={'Request generated from DevOps page'}
    />
  </div>
)
const DevOps = () => {
  return (
    <>
      <Head>
        <title>
          Reliable DevOps Solutions for your business - Code Garage Tech
        </title>
        <link
          rel="canonical"
          href="https://codegaragetech.com/services/devops"
        />
        <meta
          name="description"
          content="Effective DevOps services like Automation CI/CD Cloud Engineering! We ensure swift on-boarding of apps by automating the end-to-end delivery - Code Garage Tech
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
        // techImage={techImage}

        bannerComponent={<Banner techTitle={heading} />}
        requestOrigin={'Requested from devops solution page'}
      />
    </>
  )
}

export default DevOps
