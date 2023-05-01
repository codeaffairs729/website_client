import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
import Image from 'next/image'
import ScheduleForm from '../../components/schedule'
import styles from '../../styles/Services.module.css'
const techTitle = 'Content Management System'
const contentHeader1 = () => {
  return (
    <>
      <div className="tech-service-body">
        <div className="tech-service-body-left">
          <h1 className="hire-h1">{techTitle}</h1>
          <ul className="hire-list-icon">
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                Open Source Scalable Reliable CMS
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                The Flexible Platform Empowering Website Creators
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                The Platform Millions of Websites Are Built On
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                Create a website you&apos;re proud of
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
        <p className="hire-p">
          Code Garage Tech offers comprehensive web content management system
          solutions. With our supreme and first-class CMS applications you can
          easily manage as well as organize the data of your business. We aid
          you in organizing your crucial business assets with the right
          implementation of our CMS solutions.
          <br /> <br />
          We have more than 7 years of experience in offering web maintenance
          solutions. With our latest management and administrative tools, we at
          Code Garage Tech, are capable of providing cost-effective website
          maintenance services that simplify your work.
          <br /> <br /> Now you can manage as well as deploy the content of your
          website in a seamless and hassle-free way with our effective
          applications such as. Etc. We help you get dynamic outcomes with our
          unique and effective CMS services. Whether it is enterprise content
          management, document content management, portal content management,
          source content management, or web content management, we have reliable
          tools and resources to support several Content Management Systems.
          <br /> <br />
        </p>
        {/* image required */}

        {/* content-7 */}
        <div className="shade-1">
          <div className="grey-shade"></div>

          <div className={`${styles.services_image_container}`}>
            <Image
              src="/services_images/CMS.png"
              alt="content management system"
              width={600}
              height={400}
              priority={true}
              objectFit="contain"
            />
          </div>
          <h2 className="hire-h2 margin-bottom-24px">
            Pertinent CMS Features That We Offer:{' '}
          </h2>
          <h3 className="hire-h3">
            <b>Quality Performance, Flexible & Scalable</b>
          </h3>
          <p className="hire-p margin-bottom-24px">
            We ensure that our CMS solutions offer numerous levels of caching as
            well as cloud based facilities for great performance that is
            scalable as well as supports the seamless performance of websites.
          </p>

          <h3 className="hire-h3">
            <b>Integrable & Extensible </b>
          </h3>
          <p className="hire-p margin-bottom-24px">
            We offer vigorous Content Management Systems that are both
            integrable and compatible with other technologies, platforms, mobile
            applications, social networks, and CRM systems.
          </p>

          <h3 className="hire-h3">
            <b>
              Easy To Adapt & Operate For Content Editors And Site
              Administrators
            </b>
          </h3>
          <p className="hire-p margin-bottom-24px">
            We understand the requirement for a dynamic and intuitive Content
            Management System that can contribute to the online businesses
            that&apos;s why we have convenient to use as well as secure content
            management technology.
          </p>

          <h3 className="hire-h3">
            <b>Advanced & Improved Security Management</b>{' '}
          </h3>
          <p className="hire-p margin-bottom-24px">
            We offer advanced management solutions and with the help of that you
            get numerous pre-built authentication choices for your site that
            works like an advanced security system. We offer features such as
            customized user roles, content permissions, and module permissions
            that contribute to safeguarding the website data.
          </p>

          <h3 className="hire-h3">
            <b>Online Applications & Marketing Tools </b>
          </h3>
          <p className="hire-p margin-bottom-24px">
            Code Garage Tech offers you a range of digital marketing tools that
            are customer-focused and improve marketing by covering numerous
            channels.
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
      requestOrigin={'Request generated from CMS page'}
    />
  </div>
)
const ContentManagementSystem = () => {
  return (
    <>
      <Head>
        <title>Effective Content Management System- Code Garage Tech</title>
        <link
          rel="canonical"
          href="https://codegaragetech.com/services/content-management-system"
        />
        <meta
          name="description"
          content="We streamline your business website using appropriate content management services. CGT company has depth knowledge and expertise in offering CMS solutions. 



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

export default ContentManagementSystem
