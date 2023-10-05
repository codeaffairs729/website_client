import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Link from 'next/link'
import Head from 'next/head'
import ScheduleForm from '../../components/schedule'
const techTitle = 'Customer Relationship Management'
import Image from 'next/image'
import styles from '../../styles/Services.module.css'
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
            Elevate your customer experience with our Customer Relationship
            Management (CRM) services, where we prioritize your unique needs and
            preferences. Our commitment to customization ensures that our
            services align seamlessly with your business objectives. We place a
            strong emphasis on constructing a data-friendly CRM that empowers
            you with valuable insights, helping you forge stronger and more
            meaningful relationships with your customers.
          </p>
        </div>
        <div className={`${hireService.techservicebodyright} text-center`}>
          {/* <img src="/icons/service-icon/mobile-front-color-service.webp" /> */}
          <div>
            <Image
              src="/icons/service-icon/Frame.webp"
              alt="Frame JPG"
              width={442}
              height={483}
              priority={true}
              objectFit="contain"
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
        <h2 className={`${hireService.hireh2}`}>
          <b>Built-in/Loaded with Advanced Feature</b>
        </h2>
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          Our CRM services comprise numerous comprehensive and versatile
          features of rich quality for industries
        </p>
        {/* content-7 */}
        <h3 className={hireService.hireh3}>
          <b>CUSTOMER SUCCESS</b>
        </h3>

        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          We make sure that your business keeps prospering.
        </p>
        <h3 className={hireService.hireh3}>
          <b>LIGHTNING SPEED</b>
        </h3>
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          We are always here to manage your business data and ensure that it
          runs swiftly.{' '}
        </p>
        <h3 className={hireService.hireh3}>
          <b>SEAMLESS USER EXPERIENCE</b>{' '}
        </h3>
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          We make your everyday business more efficient.
        </p>
        <div className={hireService.shade1}>
          <div className={hireService.greyshade}></div>

          <div className={`${styles.services_image_container}`}>
            <Image
              src="/services_images/CRM.png"
              alt="customer relation management"
              width={600}
              height={600}
              priority={true}
              objectFit="contain"
            />
          </div>
          <h2 className={hireService.hireh2}>WE BRIDGE THE FUTURE</h2>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            CRM solutions are the ideal solution if you want to take your
            business to the next level.
          </p>
          <h3 className={hireService.hireh3}>
            <b>SECURITY</b>
          </h3>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            Code Garage&apos;s security model carefully focuses on all facets of
            the field including data transfer, application, and backup security.
          </p>
          <h3 className={hireService.hireh3}>
            <b>CUSTOMER SERVICE</b>{' '}
          </h3>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            Our professionals are available round-the-clock to provide support
            and help you with any kind of matter regarding the CRM system.
          </p>
          <h3 className={hireService.hireh3}>
            <b>GDPR COMPLIANCE</b>
          </h3>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            Our CRM solution system is 100% compliant with the (GDPR) General
            Data Protection Regulation.
          </p>
        </div>
        <h2 className={hireService.hireh2}>
          Our CRM Software Development Procedure
        </h2>
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          We develop CRM that meets the various requirements of businesses. We
          handle every step required to construct a data-friendly CRM software
          app, from conception to final execution and deployment.
        </p>
      </div>
    </>
  )
}

const content7 = () => (
  <>
    <div className="hire-container-body-left-content-2"></div>
    <div className=""></div>
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
      requestOrigin={'Request generated from CRM page'}
    />
  </div>
)
const CustomerRelationshipManager = () => {
  return (
    <>
      <Head>
        <title>Effective Customer Relationship Management Services</title>
        <link
          rel="canonical"
          href="https://codegaragetech.com/services/customer-relationship-management"
        />
        <meta
          name="description"
          content="Code Garage Tech smoothly meets your expanding requirements with greater customizability to support growth for your business. Get started with CGT today!


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
        bannerComponent={<Banner techTitle={heading} />}
      />
    </>
  )
}

export default CustomerRelationshipManager
