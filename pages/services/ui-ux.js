import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
import Image from 'next/image'
import ScheduleForm from '../../components/schedule'
const techTitle = 'UI / UX'
const contentHeader1 = () => {
  return (
    <>
      <div className="tech-service-body">
        <div className="tech-service-body-left">
          <h1 className="hire-h1">{techTitle}</h1>
          <ul className="hire-list-icon">
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                Build Interactive Experiences with our innovative UI/UX Design
                Services.
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                We build creative, effective & professionals UI/UX Designs
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                Best Quality design with 100% satisfaction
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                With our vast experience, we bring domain and industry best
                practices.
              </p>
            </li>
          </ul>
        </div>
        <div className="tech-service-body-right">
          {/* <img src="/icons/service-icon/cloud.webp" alt="3D Cloud" /> */}
          <Image
            src="/icons/service-icon/cloud.webp"
            alt="3D Cloud"
            width={378}
            height={280}
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
        <p className="hire-p">
          As you know, a first impression is the last one and when a user visits
          your site or app, the first look, as well as experience, will leave a
          long-lasting impression on the user’s mind. Thus, it is crucial that
          UI and UX should be seamless and appealing enough to attract your
          users to use the site or app for a longer time. <br />
          <br />
          At Code Garage Tech, we have experienced and skilled UI/UX designers
          who have a creative vision to craft as well as implement a flawless
          user experience & interaction to fulfill the requirements of the end
          user. <br />
          <br />
          Our UI/UX developers follow reliable design concepts and practices to
          craft interactive as well as seamless apps by using new tools and
          technologies. We aid in increasing adaptability, improving
          productivity, providing driven benefits, and achieving business goals.
          <br />
          <br />
          With a unique combination of modern tech and an innovative approach,
          our team designs impressive digital products. Being a proficient UI/UX
          design company, we provide extensive UI/UX services, including user
          experience consulting, mobile app design, promotional designs, and
          responsive web design using the latest tools and technologies.
        </p>
        {/* content 7 */}
        <div className="shade-1">
          <div className="grey-shade"></div>
          {/* <h2 className="hire-h2 margin-bottom-24px text-center">
            Our UI/UX Process
          </h2> */}
          {/* image required */}
          <h2 className="hire-h2 margin-bottom-24px">
            Innovative & Creative User Experience Design Services
          </h2>
          <ul className="hire-list">
            <li>
              <h3 className="hire-h3">
                <b>UX Strategy and Consulting</b>
              </h3>
            </li>
          </ul>
          <p className="hire-p margin-left-22px">
            Our entire team initially understands the needs of your business to
            identify indispensable aspects to build an integrated UX.
          </p>
          <ul className="hire-list">
            <li>
              <h3 className="hire-h3">
                <strong>Website Design</strong>
              </h3>
            </li>
          </ul>
          <p className="hire-p margin-left-22px">
            We build fast-loading, clutter-free, and responsive websites for
            brands to prosper business.
          </p>
          <ul className="hire-list">
            <li>
              <h3 className="hire-h3">
                <strong>Cross Platform Compatibility </strong>
              </h3>
            </li>
          </ul>
          <p className="hire-p margin-left-22px">
            We focus on the core principles of UI functionality and design to
            deliver a great and consistent experience.
          </p>
          <ul className="hire-list">
            <li>
              <h3 className="hire-h3">
                <strong>Mobile App Design </strong>
              </h3>
            </li>
          </ul>
          <p className="hire-p margin-left-22px">
            For us, every pixel counts, and our effective Mobile Application
            design solutions cover distinctive aspects like user experience, UI
            design, and revamping of existing mobile applications.
          </p>
        </div>
      </div>
    </>
  )
}

const content3 = () => (
  <div className="form-service">
    <ScheduleForm
      title={'Schedule a Meeting'}
      requestOrigin={'Request generated from ui-ux page'}
    />
  </div>
)
const Miscellaneous = () => {
  return (
    <>
      <Head>
        <title>UI/UX Design Services - Code Garage Tech</title>
        <link
          rel="canonical"
          href="https://codegaragetech.com/services/ui-ux"
        />
        <meta
          name="description"
          content="From research to design to development, we provide a full range of UI/UX design services to bring your ideas to life. Contact us now! 

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

export default Miscellaneous