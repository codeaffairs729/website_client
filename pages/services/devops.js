import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
const techTitle = 'DevOps'
import ScheduleForm from '../../components/schedule'
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
                Devops Culture Out-Of-The-Box
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Wider Variety Of Devops Skills
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Instant Access To High-Level Pool Of Devops Talents
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Configuration Management, Delivery Pipeline And Continuous
                Integration (Ci/Cd)
              </p>
            </li>
          </ul>
        </div>
        <div className={hireService.devopsimage}>
          <div className={hireService.adjustdevopsimg}>
            {/* <img src="/icons/service-icon/cloud.webp"  /> */}
            {/* <div> */}
            <Image
              src="/devops/devops.png"
              alt="devops image"
              width={692}
              height={420}
            />
            {/* </div> */}
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
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          DevOps leverages monitoring, automation, collaboration, Cloud
          adoption, and tool-chain pipelines. <br />
          <br />
          At Code Garage, we offer devops services to ensure swift on-boarding
          of apps by automating the end-to-end delivery and also facilitate
          constant integration as well as development across preeminent cloud
          platforms.
          <br />
          <br />
          We at Code Garage, aim to help business and organizations to line up
          with the goals, reliably and swifty, producing top-quality
          software-based products & services. Achieve your business objectives
          by creating applications at the speed of business with Code
          Garage&apos;s extensive DevOps solutions. <br />
          <br />
          With our DevOps consulting, we aid businesses of all sizes achieve
          elevated coherence in Development as well as Operations. Our DevOps
          engineers create a DevOps strategy that will help you obtain excellent
          coordination and deliver an extraordinary user experience.
          <br />
          <br />
        </p>
        {/* content-7 */}
        <div className={hireService.shade1}>
          <div className={hireService.greyshade}></div>
          <h2
            className={`${hireService.hireh2} ${hireService.marginbottom24px}`}
          >
            <b>We attain DevOps Success through:</b>
          </h2>
          <ul className={`${hireService.hirep}  ${hireService.hirelist}`}>
            <li>
              <h3 className={hireService.hireh3}>
                <strong>Assessment and Planning</strong>
              </h3>
            </li>
          </ul>
          <p
            className={`${hireService.hirep}  ${hireService.listp} ${hireService.marginbottom24px}`}
          >
            {/* <p className="${hireService.hirep}  list-p margin-bottom-24px"> */}
            We develop a DevOps Assessment roadmap just by envisioning the right
            state and also recognizing the trackable metrics.{' '}
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
            We expedite DevOps implementation with design, analysis, automation
            construction, and implementation in the recognized areas.
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
            We use as well as combine your existing tools with our licensed
            automation tools to build a perfect pilot framework.
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
            We bridge the DevOps gap via constant development, constant
            integration, constant testing and constant deployment.
          </p>

          <div className="">
            <p
              className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
            >
              Want to develop a DevOps Framework Talk to an Expert
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
          We at Code Garage offer reliable DevOps automation testing solutions
          by adopting a strategy that emphasizes integration, collaboration,
          automation and collaboration. We aid you incorporate the necessary
          changes in your technology culture and landscape. We effectively
          leverage collaboration, monitoring, automation, cloud adoption, and
          tool-chain pipelines to ensure swift onboarding of apps. Through our
          DevOps consulting services, we assist businesses and startups in
          aligning their operations and development for greater efficiency.
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
          Continuous Integration and Continuous Deployment (CI/CD) are crucial
          in the contemporary era of tech as it revamped the way software used
          to develop. Incorporating CI/CD leads to swiftly build and faster
          deliveries that does not affect the quality of software. The main
          concept of CI/CD pipeline is about making some alterations to code,
          developing, testing and delivering effective softwares responding to
          business needs. We at Code Garage, have an adept team of developers
          who offer CI/CD design and deployment solutions, CI/CD implementation
          solutions, and plug-ins.
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
          At Code Garage, we have skilled Cloud Computing engineers who manage
          your complexities and challenges to simplify your software development
          procedure. Our team ensures to deliver reliable Cloud Engineering
          services in order to meet your business requirements. We thoroughly
          understand the complexity of the Cloud computing ecosystem and also
          know the challenges that most businesses face relating to its adoption
          as well as growth. Regardless of where you are in the Cloud adoption
          curve, we at Code Garage offer customized cloud engineering services
          to match the demand of your business.
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
        content7={content7}
        contentHeader1={contentHeader1}
        techTitle={techTitle}
        // techImage={techImage}
        isIconExit={true}
        bannerComponent={Banner}
        requestOrigin={'Requested from devops solution page'}
      />
    </>
  )
}

export default DevOps
