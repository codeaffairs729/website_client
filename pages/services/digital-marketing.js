import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
import Image from 'next/image'
import ScheduleForm from '../../components/schedule'
import styles from '../../styles/Services.module.css'

const techTitle = 'Digital Marketing (PPC, SEO, ORM)'
const contentHeader1 = () => {
  return (
    <>
      <div className="tech-service-body">
        <div className="tech-service-body-left">
          <h1 className="hire-h1">{techTitle}</h1>
          <ul className="hire-list-icon">
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                Transform Your Business Digitally
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                Identifying & Reaching Your Target Audience
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                Supporting Overall Business Goals
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                Aligning Social Strategy With Other Parts Of The Business
              </p>
            </li>
          </ul>
        </div>
        <div className="tech-service-body-right">
          {/* <img src="/icons/service-icon/cloud.webp" alt="3D Cloud" /> */}
          <Image
            src="/icons/service-icon/Frame.webp"
            alt="Frame JPG"
            width={442}
            height={483}
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
        <p className=" hire-p margin-bottom-24px">
          At Code Garage Tech, we are wholly focused on growth, and our digital
          marketing team creates comprehensive paid media strategies and SEO
          that line up with the goals of your business. We have unique skill
          sets that aid us to capture the ideas of competitive markets and
          achieve the results.
        </p>

        {/* content-7 */}
        {/* <h2 className="hire-h2 margin-bottom-24px">
          Digital Marketing Process
        </h2> */}
        {/* image required */}
        <div className="shade-1">
          <div className="grey-shade"></div>
          <h2 className="hire-h2 margin-bottom-24px">
            Digital Marketing Process
          </h2>
          <div className={`${styles.services_image_container}`}>
            <Image
              src="/services_images/digital.png"
              alt="digital marketing"
              width={600}
              height={400}
              priority={true}
              objectFit="contain"
            />
          </div>
          <h2 className="hire-h2 margin-bottom-24px">
            <strong>Our Digital Marketing Services</strong>
          </h2>
          <p className=" hire-p margin-bottom-24px">
            Creating result oriented marketing strategies and supporting
            implementation. We formulate strategies to build a powerful brand
            and increase high brand value.
          </p>

          <h3 className="hire-h3">
            <b>Search Engine Optimization (SEO)</b>
          </h3>
          <p className=" hire-p margin-bottom-24px">
            Want to rank your website on #1 page of Google? We are here to help
            you! We apply unique strategies and legit methods that help you gain
            organic traffic and more website visitors.
          </p>

          <h3 className="hire-h3">
            <b>Pay-Per-Click (PPC)</b>
          </h3>
          <p className=" hire-p margin-bottom-24px">
            Want to reach your potential customers? You can do it with
            Pay-per-click advertising. We can increase your sales, deliver
            high-quality leads, and develop a solid brand recognition by
            applying effective PPC strategies.
          </p>

          <h3 className="hire-h3">
            <b>Social Media Marketing & (SMM)</b>
          </h3>
          <p className=" hire-p margin-bottom-24px">
            We are here to build a dynamic presence of brand across numerous
            social media platforms with effective social media marketing
            strategies. Our team makes your brand attractive to the audience by
            emphasizing on design aesthetics.
          </p>

          <h3 className="hire-h3">
            <b>Social Media Optimization (SMO)</b>
          </h3>
          <p className=" hire-p margin-bottom-24px">
            We are here to optimize your brand and business. Our social media
            optimization experts have helped more than hundreds of businesses to
            get leads and brand visibility from social media channels.
          </p>

          <h3 className="hire-h3">
            <b>Online Reputation Management (ORM)</b>
          </h3>
          <p className=" hire-p margin-bottom-24px">
            Business reputation management is indispensable to growing a
            business. We develop, protect and restore your business&apos;s
            online reputation through efficacious, and customized strategies.
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
      requestOrigin={'Request generated from Digital Marketing page'}
    />
  </div>
)
const DigitalMarketing = () => {
  return (
    <>
      <Head>
        <title>
          Best and Reliable Digital Marketing Services- Code Garage Tech
        </title>
        <link
          rel="canonical"
          href="https://codegaragetech.com/services/digital-marketing"
        />
        <meta
          name="description"
          content="Code Garage Tech provides digital marketing services that make your business grow organically. Contact us today to grow your business. Contact us now! 



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

export default DigitalMarketing
