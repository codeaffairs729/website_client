import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
import Image from 'next/image'
import ScheduleForm from '../../components/schedule'
import styles from '../../styles/Services.module.css'
import blogstyles from '../../styles/blogStyle.module.css'
import hireService from '../../styles/hireService.module.css'
const heading = 'miscellaneous'
const techTitle = 'UI / UX'
const contentHeader1 = () => {
  return (
    <>
      <div className={`feature-list container ${hireService.techservicebody}`}>
        <div className={hireService.techservicebodyleft}>
          <h1 className={hireService.hireh1}>{techTitle}</h1>
          <p
            className={`${hireService.hireh8}  list-p ${hireService.marginbottom24px}`}
          >
            Embark on a journey of building interactive and captivating
            experiences with our innovative UI/UX Design Services. At the heart
            of our offerings lies the commitment to craft creative, effective,
            and professional UI/UX designs that leave a lasting impact. We
            prioritize delivering designs of the highest quality, ensuring 100%
            satisfaction throughout the process.
          </p>
        </div>
        <div className={hireService.techservicebodyright}>
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
      <div className={hireService.temp}></div>
    </>
  )
}

const content1 = () => {
  return (
    <>
      {/* Service container body content */}
      <div className="hire-container-body-left-content-1">
        <p className={hireService.hirep}>
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
          productivity, providing driven benefits, and achieving business
          goals..
          <br />
          <br />
          With a unique combination of modern tech and an innovative approach,
          our team designs impressive digital products. Being a proficient UI/UX
          design company, we provide extensive UI/UX services, including user
          experience consulting, mobile app design, promotional designs, and
          responsive web design using the latest tools and technologies.
        </p>
        {/* content 7 */}
        <div className={hireService.shade1}>
          {/* <h2 className="hire-h2 margin-bottom-24px text-center">
            Our UI/UX Process
          </h2> */}
          {/* image required */}

          <div className={`${styles.services_image_container}`}>
            <Image
              src="/services_images/uiux.png"
              alt="UIUX"
              width={800}
              height={800}
              priority={true}
              objectFit="contain"
            />
          </div>

          <h2
            className={`${hireService.hireh2} ${hireService.marginbottom24px}`}
          >
            Innovative & Creative User Experience Design Services
          </h2>
          <ul className={hireService.hirelist}>
            <li>
              <h3 className={hireService.hireh3}>
                <b>UX Strategy and Consulting</b>
              </h3>
            </li>
          </ul>
          <p className={`${hireService.hirep}  ${hireService.marginleft22px}`}>
            We believe that the foundation of a successful project lies in
            understanding your business's unique needs. Our entire team starts
            by immersing themselves in your business ecosystem to identify the
            indispensable aspects that will drive the creation of a cohesive and
            integrated UX.
          </p>
          <p className={`${hireService.hirep}  ${hireService.marginleft22px}`}>
            Through collaborative exploration and careful analysis, we not only
            meet your expectations but exceed them. Our goal is not just to
            provide a solution; it's to empower your business with a user
            experience that goes beyond usability – it delivers satisfaction,
            engagement, and growth
          </p>
          <ul className={hireService.hirelist}>
            <li>
              <h3 className={hireService.hireh3}>
                <strong>Website Design</strong>
              </h3>
            </li>
          </ul>
          <p className={`${hireService.hirep}  ${hireService.marginleft22px}`}>
            At the core of our mission is the commitment to crafting
            high-performance websites that propel brands to prosper in the
            digital landscape. We specialize in building websites that are not
            only fast-loading but also free from clutter, ensuring that your
            brand's message shines through with crystal clarity.
          </p>
          <p className={`${hireService.hirep}  ${hireService.marginleft22px}`}>
            Our dedication to responsive design means that your website will
            adapt seamlessly to any device, providing an exceptional user
            experience across the board. With our expertise, your brand doesn't
            just thrive; it excels in the digital realm, making lasting
            connections with your audience and driving business growth
          </p>
          <ul className={hireService.hirelist}>
            <li>
              <h3 className={hireService.hireh3}>
                <strong>Cross Platform Compatibility </strong>
              </h3>
            </li>
          </ul>
          <p className={`${hireService.hirep}  ${hireService.marginleft22px}`}>
            We understand that a great user experience is built upon a strong
            foundation, and consistency is the key to success.
          </p>
          <p className={`${hireService.hirep}  ${hireService.marginleft22px}`}>
            By meticulously adhering to these principles, we ensure that every
            interaction with your digital product is not just good but
            consistently outstanding. Our goal is to make your users feel at
            home within your interface, driving engagement, satisfaction, and
            brand loyalty. With us, your digital presence is elevated to deliver
            an exceptional and enduring experience
          </p>
          <ul className={hireService.hirelist}>
            <li>
              <h3 className={hireService.hireh3}>
                <strong>Mobile App Design </strong>
              </h3>
            </li>
          </ul>
          <p className={`${hireService.hirep}  ${hireService.marginleft22px}`}>
            We believe that every pixel counts and this philosophy drives our
            commitment to delivering effective mobile application design
            solutions. Our approach encompasses various essential aspects,
            including user experience refinement, UI design excellence, and the
            transformation and revitalization of existing mobile applications.
          </p>
          <p className={`${hireService.hirep}  ${hireService.marginleft22px}`}>
            Our dedication to meticulous attention to detail ensures that your
            mobile app isn't just visually appealing but also offers a seamless
            and engaging user experience. Whether it's creating from scratch or
            enhancing existing apps, we're here to make every pixel count and
            drive your mobile app's success to new heights.
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
        bannerComponent={<Banner techTitle={heading} />}
        requestOrigin={'Requested from Miscellaneous page'}
      />
      <div
        className={`container-fluid about-area-5 ${blogstyles.about_area_5} ${blogstyles.contact_us}`}
      >
        <div
          className={`container about-area-5-container ${blogstyles.about_area} ${blogstyles.contact_us}`}
        >
          <div className="row">
            <div className="col-lg-12">
              <h2
                className={`about-area-5-heading ${blogstyles.about_area_5_heading}`}
              >
                Looking for solutions tailored to your needs?
              </h2>
            </div>
          </div>
          <div className="d-flex flex-wrap align-items-content">
            <a
              href="./contact"
              target="_blank"
              className={`btn btn_pink career-area-1-btn px-5" ${blogstyles.btn}`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Miscellaneous
