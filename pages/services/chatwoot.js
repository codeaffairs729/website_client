import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
import ScheduleForm from '../../components/schedule'
import Image from 'next/image'
const techTitle = 'Chatwoot'

const contentHeader = () => <div></div>
const contentHeaderLeft = () => <div></div>

const contentHeader1 = () => {
  return (
    <>
      <div className="tech-service-body">
        <div className="tech-service-body-left">
          <h1 className="hire-h1">{techTitle}</h1>
          <ul className="hire-list-icon">
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                Seamless Conversational Experience
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                You&apos;ll Get Notified Instantly After Receiving A Message
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">Omnichannel Support Center</p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">Enhanced Customer Experience </p>
            </li>
          </ul>
        </div>
        <div className="tech-service-body-right">
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
        <h2 className="hire-h2 margin-bottom-24px">
          All-In-One Communication Channel!
        </h2>
        <h3 className="hire-h3">
          <b>Connect & Convert</b>{' '}
        </h3>
        <p className="hire-p">
          Engage your customer in smooth conversational experiences that help to
          drive high-quality conversions and leads.
        </p>
        <h3 className="hire-h3">Offer Enriched Customer Experience </h3>
        <p className="hire-p margin-bottom-24px">
          Communicate easily with your customers in more than 100 languages.
        </p>

        <h3 className="hire-h3">
          <b>Proactive Customer Outreach</b>{' '}
        </h3>
        <p className="hire-p">
          Solve your customer issues immediately as you will be notified
          instantly after receiving a message.
        </p>
        {/* content-7 */}
        <div className="shade-1">
          <div className="grey-shade"></div>
          <h2 className="hire-h2 margin-bottom-24px">
            <b>Omnichannel Support Center</b>
          </h2>
          <p className="hire-p margin-bottom-24px">
            Chatwoot allows you to connect with eminent customer communication
            platforms such as Website live chat, Email, WhatsApp, Facebook,
            Instagram, Twitter, etc. This aids you deliver a reliable CX across
            various platforms- from a sole dashboard. <br />
            <br />
            At Code Garage Tech, we offer good customer service by providing a
            Chatwoot framework that helps your business achieve new heights of
            success.
          </p>
        </div>
        <h2 className="hire-h2 margin-bottom-24px">
          <b>Connect With Customers To Grow Your Business</b>
        </h2>
        <p className="hire-p">
          Chatwoot supports self-hosted installations by default and you can
          easily own your customer data. The framework offers a wonderful
          experience to everyone, including your employees, partners, and
          customers.{' '}
        </p>
        <div className="shade-1">
          <div className="grey-shade"></div>
          {/* <h2 className="hire-h2 margin-bottom-24px">
            <b>Privacy Compliant, Open-source, and Self-hosted</b>
          </h2> */}
          {/* <h3 className="hire-h3 ">
            <b>Build End-To-End Engagement From Anywhere</b>
          </h3> */}
          {/* commented above as it required images */}
          <div></div>
          <div>
            <h2 className="hire-h2 margin-bottom-24px">
              <b>Communication, On The Go</b>
            </h2>
            <p className="hire-p">
              We offer a Chatwoot framework that allows you to communicate,
              reply to messages, as well as collaborate with your customers
              instantly.{' '}
            </p>
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
  <div className="form-service">
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
          name="description"
          content="Code Garage Tech provides a platform that helps you to engage with your customer in smooth conversational experiences with the assistance of ChatWoot."
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
        bannerComponent={bannerComponent}
        contentHeader={contentHeader}
        isIconExit={true}
        requestOrigin={'Requested from Mobile solution page'}
      />
    </>
  )
}

export default Chatwoot
