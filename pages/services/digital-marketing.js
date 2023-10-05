import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
import Image from 'next/image'
import ScheduleForm from '../../components/schedule'
import styles from '../../styles/Services.module.css'
import hireService from '../../styles/hireService.module.css'
const heading = 'miscellaneous'
const techTitle = 'Digital Marketing (PPC, SEO, ORM)'
const contentHeader1 = () => {
  return (
    <>
      <div className={`feature-list container ${hireService.techservicebody}`}>
        <div className={hireService.techservicebodyleft}>
          <h1 className={hireService.hireh1}>{techTitle}</h1>
          <p
            className={`${hireService.hireh8}  list-p ${hireService.marginbottom24px}`}
          >
            Discover our Digital Marketing (PPC, SEO, ORM) Services, where we
            excel in the art of digitally transforming your business. Our
            approach begins with the meticulous task of identifying and reaching
            your precise target audience, ensuring that your efforts are
            laser-focused and efficient. We go beyond isolated campaigns,
            working to support your overall business goals by crafting a digital
            strategy that seamlessly aligns with every facet of your enterprise.
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
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          At Code Garage Tech, our unwavering focus is on fostering growth, and
          our dedicated digital marketing team is at the forefront of this
          mission. We specialize in crafting comprehensive paid media strategies
          and SEO initiatives meticulously aligned with the specific goals of
          your business. What sets us apart is our unique skill set, honed
          through experience and innovation, enabling us to not only capture the
          essence of competitive markets but also consistently deliver
          exceptional results. With Code Garage Tech as your digital marketing
          partner, you can count on our expertise to drive your business
          forward, realizing its full potential in the digital landscape.
        </p>

        {/* content-7 */}
        {/* <h2 className="hire-h2 margin-bottom-24px">
          Digital Marketing Process
        </h2> */}
        {/* image required */}
        <div className={hireService.shade1}>
          <div className={hireService.greyshade}></div>
          <h2
            className={`${hireService.hireh2} ${hireService.marginbottom24px}`}
          >
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
          <h2
            className={`${hireService.hireh2} ${hireService.marginbottom24px}`}
          >
            <strong>Our Digital Marketing Services</strong>
          </h2>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            We specialize in creating marketing strategies that deliver tangible
            results, providing steadfast support during the implementation
            phase. Our goal is to not just promote your brand but also enhance
            its overall value in the market.
          </p>

          <h3 className={hireService.hireh3}>
            <b>Search Engine Optimization(SEO):</b>
          </h3>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            If you aspire to secure the top spot on Google's search results,
            look no further. Our unique and ethical SEO strategies are designed
            to boost organic traffic and attract a higher volume of website
            visitors. We're here to help you dominate search engine rankings.
          </p>

          <h3 className={hireService.hireh3}>
            <b>Pay-Per-Click (PPC):</b>
          </h3>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            Need to reach your potential customers directly? Our Pay-per-click
            advertising services are tailored to drive sales, generate
            high-quality leads, and establish a strong brand presence. With
            effective PPC strategies, we guide your business toward success.
          </p>

          <h3 className={hireService.hireh3}>
            <b>Social Media Marketing (SMM):</b>
          </h3>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            Harness the power of social media with our dynamic marketing
            strategies. We strategically enhance your brand's presence across
            various social platforms, making it more appealing to your target
            audience through compelling design aesthetics.
          </p>

          <h3 className={hireService.hireh3}>
            <b>Social Media Optimization (SMO):</b>
          </h3>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            We excel in optimizing your brand's online presence. Our SMO experts
            have a proven track record of helping numerous businesses acquire
            leads and enhance brand visibility through effective social media
            channel management.
          </p>

          <h3 className={hireService.hireh3}>
            <b>Online Reputation Management (ORM):</b>
          </h3>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            Protecting and managing your business's online reputation is
            paramount. Our customized and effective ORM strategies are designed
            to develop, safeguard, and restore your brand's online image. Count
            on us to ensure a positive and enduring reputation for your business
            in the digital realm.
          </p>
        </div>
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          At Code Garage Tech, we're not just a digital marketing agency; we're
          your partners in growth. Our services are geared towards elevating
          your brand, expanding your reach, and fostering a positive online
          reputation. Join us on this journey to unlock the full potential of
          your business in the digital landscape.
        </p>
      </div>
    </>
  )
}

const content3 = () => (
  <div className={hireService.formservice}>
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
        <title>Best and Reliable Digital Marketing Services- Code Garage</title>
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
        bannerComponent={<Banner techTitle={heading} />}
        requestOrigin={'Requested from Miscellaneous page'}
      />
    </>
  )
}

export default DigitalMarketing
