import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
import ScheduleForm from '../../components/schedule'
import Image from 'next/image'
import styles from '../../styles/Services.module.css'
import hireService from '../../styles/hireService.module.css'
const techTitle = 'Chatwoot'
const heading = 'miscellaneous'

const contentHeader = () => <div></div>
const contentHeaderLeft = () => <div></div>

const contentHeader1 = () => {
  return (
    <>
      <div className={`feature-list container ${hireService.techservicebody}`}>
        <div className={hireService.techservicebodyleft}>
          <h1 className={hireService.hireh1}>{techTitle}</h1>
          <p
            className={`${hireService.hirep}  list-p ${hireService.marginbottom24px}`}
          >
            Experience the pinnacle of seamless conversational interactions with
            Chatwoot Services. With our state-of-the-art platform, you'll
            receive instant notifications as soon as a message reaches you,
            ensuring prompt and efficient responses. Our comprehensive offering
            includes omnichannel support capabilities, enabling you to provide
            an enhanced and holistic customer experience. We are committed to
            empowering businesses with the tools and technology necessary to
            foster meaningful conversations, ultimately elevating customer
            satisfaction and engagement.
          </p>
        </div>
        <div className={hireService.techservicebodyright}>
          {/* <img src="/icons/service-icon/chatwoot.webp" alt="chatwoot-image"/> */}
          <Image
            src="/icons/service-icon/chatwoot.webp"
            alt="chatwoot-image"
            width={280}
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
        <h2 className={`${hireService.hireh2} ${hireService.marginbottom24px}`}>
          {/* <h2 className="hire-h2 margin-bottom-24px"> */}
          All-In-One Communication Channel!
        </h2>
        <h3 className={hireService.hireh3}>
          <b>Connect & Convert</b>{' '}
        </h3>
        <p className={hireService.hirep}>
          Engage your customer in smooth conversational experiences that help to
          drive high-quality conversions and leads.
        </p>
        <h3 className={hireService.hireh3}>
          Offer Enriched Customer Experience{' '}
        </h3>
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          Communicate easily with your customers in more than 100 languages.
        </p>

        <h3 className={hireService.hireh3}>
          <b>Proactive Customer Outreach</b>{' '}
        </h3>
        <p className={hireService.hirep}>
          Solve your customer issues immediately as you will be notified
          instantly after receiving a message.
        </p>
        {/* content-7 */}
        <div className={hireService.shade1}>
          <div className={hireService.greyshade}></div>
          <h2
            className={`${hireService.hireh2} ${hireService.marginbottom24px}`}
          >
            <b>Omnichannel Support Center</b>
          </h2>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            Chatwoot allows you to connect with eminent customer communication
            platforms such as Website live chat, Email, WhatsApp, Facebook,
            Instagram, Twitter, etc. This aids you deliver a reliable CX across
            various platforms- from a sole dashboard. <br />
            <br />
            At Code Garage, we offer good customer service by providing a
            Chatwoot framework that helps your business achieve new heights of
            success.
          </p>
        </div>
        <h2 className={`${hireService.hireh2} ${hireService.marginbottom24px}`}>
          <b>Connect With Customers To Grow Your Business</b>
        </h2>
        <p className={hireService.hirep}>
          Chatwoot supports self-hosted installations by default and you can
          easily own your customer data. The framework offers a wonderful
          experience to everyone, including your employees, partners, and
          customers.{' '}
        </p>
        <h3
          className={`${hireService.hireh3}  ${hireService.marginbottom24px}`}
        >
          <b>Privacy Compliant, Open-source, and Self-hosted</b>
        </h3>
        <div className={`${styles.services_image_container}`}>
          <Image
            src="/services_images/chatwoot_privacy.png"
            alt="CHATWOOT"
            width={700}
            height={700}
            priority={true}
            objectFit="contain"
          />
        </div>
        <h3
          className={`${hireService.hireh3}  ${hireService.marginbottom24px}`}
        >
          <b>Build End-To-End Engagement From Anywhere</b>
        </h3>
        <div className={`${styles.services_image_container}`}>
          <Image
            src="/services_images/chatwoot_image.png"
            alt="CHATWOOT"
            width={800}
            height={800}
            priority={true}
            objectFit="contain"
          />
        </div>
        <div className={hireService.shade1}>
          <div className={hireService.greyshade}></div>
          {/* <h2 className="hire-h2 margin-bottom-24px">
            <b>Privacy Compliant, Open-source, and Self-hosted</b>
          </h2> */}
          {/* <h3 className="hire-h3 ">
            <b>Build End-To-End Engagement From Anywhere</b>
          </h3> */}
          {/* commented above as it required images */}
          <div></div>
          <div>
            <h2
              className={`${hireService.hireh2} ${hireService.marginbottom24px}`}
            >
              <b>Communication, On The Go</b>
            </h2>
            <p className={hireService.hirep}>
              We offer a Chatwoot framework that allows you to communicate,
              reply to messages, as well as collaborate with your customers
              instantly.{' '}
            </p>
            <div className={`${styles.services_image_container}`}>
              <Image
                src="/services_images/chatwoot_communication.png"
                alt="CHATWOOT"
                width={1000}
                height={800}
                priority={true}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const content7 = () => <></>

const bannerComponent = () => <Banner />

// const content6 = () => <TechComponent />;
const content4 = () => <div></div>
const content5 = () => <div></div>
const content2 = () => <div></div>
const content3 = () => (
  <div className={hireService.formservice}>
    <ScheduleForm
      title={'Schedule a Meeting'}
      requestOrigin={'Request generated from Chatwoot page'}
    />
  </div>
)
const Chatwoot = () => {
  return (
    <>
      <Head>
        <title>All-In-One Communication Channel - Chatwoot</title>

        <link
          rel="canonical"
          href="https://codegaragetech.com/services/chatwoot"
        />
        <meta
          name="title"
          content="Chatwoot Developement - All-In-One Communication Channel"
        />
        <meta
          name="description"
          content="Chatwoot is an open-source customer communication platform. Chatwoot development helps you to engage with your customer in smooth conversational experiences."
        />
      </Head>

      <HireServiceLayout
        content1={content1}
        content2={content2}
        content3={content3}
        content4={content4}
        content5={content5}
        // content6={content6}
        content7={content7}
        contentHeader1={contentHeader1}
        contentHeaderLeft={contentHeaderLeft}
        techTitle={techTitle}
        // techImage={techImage}
        bannerComponent={<Banner techTitle={heading} />}
        contentHeader={contentHeader}
        isIconExit={true}
        requestOrigin={'Requested from Mobile solution page'}
      />
    </>
  )
}

export default Chatwoot
