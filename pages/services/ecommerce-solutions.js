import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
import Image from 'next/image'
import ScheduleForm from '../../components/schedule'
import styles from '../../styles/Services.module.css'
const techTitle = 'E-commerce Solutions'
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
            Unlock the potential of our E-commerce Solutions, where we offer
            fully customizable options and seamless 3rd party integrations to
            elevate your online business. Our comprehensive platform encompasses
            all three vital modules—Admin, Sellers, and Buyers—ensuring a
            seamless and collaborative experience.
          </p>
        </div>
        <div className={hireService.techservicebodyright}>
          {/* <img src="/icons/service-icon/cloud.webp" alt="3D Cloud" /> */}
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
    </>
  )
}

const content1 = () => {
  return (
    <>
      {/* Service container body content */}
      <div className="hire-container-body-left-content-1">
        <p className={hireService.hirep}>
          At Code Garage Tech, we take pride in our fusion of expertise and
          experience, culminating in the development of comprehensive e-commerce
          solutions that encompass everything from e-commerce design to shopping
          campaigns and e-commerce SEO, all geared toward ensuring the
          resounding success of your e-commerce business.
          <br /> <br />
          As dedicated e-commerce service providers, we understand the
          significance of tailor-made solutions. That's why we offer reliable
          and highly customized e-commerce solutions, designed to create a
          thriving online store that generates not only increased sales but also
          higher profits for your business. At Code Garage Tech, our commitment
          to excellence extends to every facet of e-commerce, including
          development, design, analytics, marketing, and hosting, serving
          diverse industry verticals on a global scale.
          <br /> <br /> Our track record is a testament to our ability to
          empower clients to expand their business horizons and effectively
          target both international and local customers. We are driven by the
          vision of providing your customers with a seamless and convenient
          online shopping experience, ultimately contributing to the growth and
          success of your e-commerce venture.
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
            Advantages of Hiring E-commerce Experts
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
            Our team of skilled and experienced developers operates in close
            alignment with your unique business requirements and challenges to
            craft a customized eCommerce website and platform tailored to your
            specific needs. As a premier eCommerce development company, we place
            a strong emphasis on providing bespoke eCommerce solutions that
            encompass the following key areas:
          </p>

          <h3 className={hireService.hireh3}>
            <b>E-commerce Development:</b>{' '}
          </h3>
          <p className={hireService.hirep}>
            With our expertise, we excel at creating seamless payment systems,
            functional features, and captivating layouts that enhance your
            brand's online presence. Our primary objective is to streamline the
            purchasing process on your eCommerce website, ensuring a hassle-free
            experience for your customers.
          </p>

          <h3 className={hireService.hireh3}>
            <b>E-commerce Strategy:</b>
          </h3>
          <p className={hireService.hirep}>
            We approach e-commerce with a focus on long-term success, utilizing
            contemporary techniques aligned with current industry trends. Our
            strategic approach aims to transform your eCommerce website into a
            resounding success, driving sustained growth for your business.
          </p>

          <h3 className={hireService.hireh3}>
            <b>E-commerce Consulting: </b>
          </h3>
          <p className={hireService.hirep}>
            Count on our dedicated sales and marketing team to offer invaluable
            guidance and tactics for boosting sales on your e-commerce online
            store. Our commitment to your success is unwavering, and we provide
            effective services to help you achieve your goals
          </p>

          <h3 className={hireService.hireh3}>
            <b>E-commerce UI/UX:</b>
          </h3>
          <p className={hireService.hirep}>
            We prioritize the aesthetics and functionality of your e-commerce
            store, ensuring that customers can effortlessly navigate your site
            and make purchases. Our ultimate goal is to create a captivating
            customer experience that not only encourages repeat purchases but
            also strengthens your brand's appeal.
          </p>
          <h3 className={hireService.hireh3}>
            <b>E-commerce Support:</b>
          </h3>
          <p className={hireService.hirep}>
            As a trusted and professional e-commerce development company, we
            understand the importance of ongoing support. You can rely on our
            round-the-clock technical assistance to address any concerns or
            issues, ensuring the continuous and smooth operation of your
            eCommerce platform.
          </p>
        </div>
        <br />
        <p className={hireService.hirep}>
          At Code Garage Tech, we are dedicated to going above and beyond in
          crafting tailored eCommerce solutions that not only meet your
          immediate needs but also position your business for sustained growth
          and success in the dynamic world of online commerce.
        </p>
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
        bannerComponent={<Banner techTitle={heading} />}
        requestOrigin={'Requested from Miscellaneous page'}
      />
    </>
  )
}

export default ContentManagementSystem
