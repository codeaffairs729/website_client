import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
import Image from 'next/image'
import ScheduleForm from '../../components/schedule'
import styles from '../../styles/Services.module.css'
const techTitle = 'E-commerce Solutions'
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
                100% customizable and 3rd party integrations
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                All three module (admin, sellers & buyer)
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Online /offline payment module
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Build your shop, manage your order with e-commerce websites.
              </p>
            </li>
          </ul>
        </div>
        <div className={hireService.techservicebodyright}>
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
        <p className={hireService.hirep}>
          At Code Garage Tech, we combine our expertise and experience for
          developing Ecommerce solutions like Ecommerce design, shopping
          campaigns, Ecommerce SEO, and much more that helps in making your
          Ecommerce business a huge success.
          <br /> <br />
          As a professional Ecommerce service provider, we offer reliable
          customized e-commerce solutions for developing a rewarding online
          e-commerce store that produces more sales as well as profit to your
          business. At Code Garage Tech, we offer custom Ecommerce solutions for
          developing, designing, analytics, marketing, and hosting across
          industry verticals globally.
          <br /> <br /> We have helped our clients in boosting up their business
          scope as well as targeting international and local customers by
          creating effective e-commerce online stores. We want your customers to
          have a convenient online shopping experience.
          <br /> <br />
        </p>

        {/* content-7 */}
        {/* <h2 className="hire-h2 margin-bottom-24px">
          Advantages of Hiring Ecommerce Experts{' '}
        </h2> */}
        {/* image required */}
        <div className={hireService.shade1}>
          <div className={hireService.greyshade}></div>
          <h2
            className={`${hireService.hireh2} ${hireService.marginbottom24px}`}
          >
            Advantages of Hiring Ecommerce Experts
          </h2>
          <div className={`${styles.services_image_container}`}>
            <Image
              src="/services_images/ecommerce.png"
              alt="ecommerce"
              width={600}
              height={400}
              priority={true}
              objectFit="contain"
            />
          </div>
          <h2
            className={`${hireService.hireh2} ${hireService.marginbottom24px}`}
          >
            Boost Your Sales With Our E-Commerce Website Development Solutions{' '}
          </h2>

          <p className={hireService.hirep}>
            Our skilled and experienced developers closely observe your business
            requirements and challenges to create a customized eCommerce website
            and platform. We are a preeminent eCommerce development company
            emphasized on custom eCommerce solutions, including:
          </p>

          <h3 className={hireService.hireh3}>
            <b>Development</b>{' '}
          </h3>
          <p className={hireService.hirep}>
            We are adept in creating smooth payment systems, functional
            features, and exquisite layouts that boost your brand online. Our
            main goal is to make the procedure of buying from your eCommerce
            website seamless and hassle-free.
          </p>

          <h3 className={hireService.hireh3}>
            <b>Strategy</b>
          </h3>
          <p className={hireService.hirep}>
            We craft pleasing designs with the use of contemporary techniques
            lined up with present industry trends. We adopt a long-term strategy
            for your business that make your eCommerce website a huge success.
          </p>

          <h3 className={hireService.hireh3}>
            <b>Consulting </b>
          </h3>
          <p className={hireService.hirep}>
            Our dedicated sales and marketing team will provide you with great
            guidance and tactics on how to boost your eCommerce online store
            sales. We offer effective services and are entirely committed to
            seeing you succeed.
          </p>

          <h3 className={hireService.hireh3}>
            <b>UI/UX </b>
          </h3>
          <p className={hireService.hirep}>
            We aesthetically design your ecommerce store so that your customers
            can easily navigate your site and make a purchase. Our main
            objective is to make your customer&apos;s experience fascinating and
            also encourage them to purchase your product or services again and
            again.
          </p>
          <h3 className={hireService.hireh3}>
            <b>Support</b>
          </h3>
          <p className={hireService.hirep}>
            Being a professional ecommerce development company, we make sure
            that you have our support every time. You can fully rely on us as we
            offer round the clock technical support.
          </p>
        </div>
      </div>
    </>
  )
}

const content3 = () => (
  <div className={hireService.formservice}>
    <ScheduleForm
      title={'Schedule a Meeting'}
      requestOrigin={'Request generated from Ecommerce-Solutions page'}
    />
  </div>
)
const ContentManagementSystem = () => {
  return (
    <>
      <Head>
        <title>Effective E-commerce Solutions- Code Garage Tech</title>
        <link
          rel="canonical"
          href="https://codegaragetech.com/services/ecommerce-solutions"
        />
        <meta
          name="description"
          content="We offer efficacious and reliable E-commerce Solutions that enhance your business visibility globally- Code Garage Tech. Contact Code Garage Tech now! 



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
