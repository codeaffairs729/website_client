import TechComponent from "../../components/techComponent";
import HireServiceLayout from "../../components/hireServiceLayout";
import Banner from "../../components/banner";
import Head from "next/head";
const techTitle = "Dev Ops";
import ScheduleForm from "../../components/schedule";
import Image from "next/image";
const contentHeader1 = () => {
  return (
    <>
    <Head>
        <title>Reliable DevOps Solutions for your business - Code Garage Tech</title>
        <link
          rel="canonical"
          href="https://www.codegaragetech.com/services/dev-ops"
        />
        <meta
          name="description"
          content="Effective DevOps services like Automation CI/CD Cloud Engineering! We ensure swift on-boarding of apps by automating the end-to-end delivery - Code Garage Tech
          "
        />
      </Head>
      <div className="tech-service-body">
        <div className="tech-service-body-left">
          <h1 className="hire-team-header">{techTitle}</h1>
          <p className="text-danger mt-2">
            DevOps leverages monitoring, automation, collaboration, Cloud
            adoption, and tool-chain pipelines.
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
          {/* <img src="/icons/service-icon/cloud.webp"  /> */}
          {/* <div> */}
          <Image
              src="/icons/service-icon/cloud.webp"
              alt="3D Cloud"
              width={378}
              height={280}
              />
          {/* </div> */}
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
          DevOps leverages monitoring, automation, collaboration, Cloud
          adoption, and tool-chain pipelines. At Code Garage Tech, we offer
          dev-ops services to ensure swift on-boarding of apps by automating the
          end-to-end delivery and also facilitate constant integration as well
          as development across preeminent cloud platforms.
          <br />
          <br />
          We at Code Garage Tech, aim to help business and organizations to line
          up with the goals, reliably and swifty, producing top-quality
          software-based products & services. Achieve your business objectives
          by creating applications at the speed of business with Code Garage
          Tech’s extensive DevOps solutions. <br />
          <br />
          With our DevOps consulting, we aid businesses of all sizes achieve
          elevated coherence in Development as well as Operations. Our DevOps
          engineers create a DevOps strategy that will help you obtain excellent
          coordination and deliver an extraordinary user experience.
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
      <h3 className="hire-h3">We attain DevOps Success through:</h3>
      <ul className="hire-p hire-list">
        <li>
          <strong>Assessment and Planning</strong>
        </li>
      </ul>
      <p className="hire-p list-p">
        We develop a DevOps Assessment roadmap just by envisioning the right
        state and also recognizing the trackable metrics.{" "}
      </p>
      <ul className="hire-list">
        <li>
          <strong>Process Implementation</strong>
        </li>
      </ul>
      <p className="hire-p list-p">
        We expedite DevOps implementation with design, analysis, automation
        construction, and implementation in the recognized areas.
      </p>
      <ul className="hire-list">
        <li>
          <strong>Pilot Framework Creation</strong>
        </li>
      </ul>
      <p className="hire-p list-p">
        We use as well as combine your existing tools with our licensed
        automation tools to build a perfect pilot framework.
      </p>
      <ul className="hire-list">
        <li>
          <strong>CI/CD Pipeline</strong>
        </li>
      </ul>
      <p className="hire-p list-p">
        We bridge the DevOps gap via constant development, constant integration,
        constant testing and constant deployment.
      </p>
    </div>
    <div className="">
      <p className="hire-p">
        Want to develop a DevOps Framework Talk to an Expert
      </p>
      <h3 className="hire-h3">Automation</h3>
      <p className="hire-p">
        We at Code Garage Tech offer reliable DevOps automation testing
        solutions by adopting a strategy that emphasizes integration,
        collaboration, automation and collaboration. We aid you incorporate the
        necessary changes in your technology culture and landscape. We
        effectively leverage collaboration, monitoring, automation, cloud
        adoption, and tool-chain pipelines to ensure swift onboarding of apps.
        Through our DevOps consulting services, we assist businesses and
        startups in aligning their operations and development for greater
        efficiency.
      </p>

      <h3 className="hire-h3">CI/CD </h3>
      <p className="hire-p">
      Continuous Integration and Continuous Deployment (CI/CD) are crucial in the contemporary era of tech as it revamped the way software used to develop. Incorporating CI/CD leads to swiftly build and faster deliveries that does not affect the quality of software. The main concept of CI/CD pipeline is about making some alterations to code, developing, testing and delivering effective softwares responding to business needs.  We at Code                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Garage Tech, have an adept team of developers who offer CI/CD design and deployment solutions, CI/CD implementation solutions, and plug-ins. 

      </p>
      <h3 className="hire-h3">Cloud Engineering </h3>
      <p className="hire-p">
        At Code Garage Tech, we have skilled Cloud Computing engineers who
        manage your complexities and challenges to simplify your software
        development procedure. Our team ensures to deliver reliable Cloud
        Engineering services in order to meet your business requirements. We
        thoroughly understand the complexity of the Cloud computing ecosystem
        and also know the challenges that most businesses face relating to its
        adoption as well as growth. Regardless of where you are in the Cloud
        adoption curve, we at Code Garage Tech offer customized cloud
        engineering services to match the demand of your business.
      </p>
    </div>
  </>
);

const content6 = () => <TechComponent />;
const content3 = () => (
  <div className="form-service">
    <ScheduleForm
      title={"Schedule a Meeting"}
      requestOrigin={"Request generated from dev-ops page"}
    />
  </div>
);
const DevOps = () => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.codegaragetech.com/services/dev-ops"
        />
      </Head>
      <HireServiceLayout
        content1={content1}
        content3={content3}
        content6={content6}
        content7={content7}
        contentHeader1={contentHeader1}
        techTitle={techTitle}
        // techImage={techImage}
        bannerComponent={Banner}
        requestOrigin={"Requested from dev-ops solution page"}
      />
    </>
  );
};

export default DevOps;
