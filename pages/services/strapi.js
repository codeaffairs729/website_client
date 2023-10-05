import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
import ScheduleForm from '../../components/schedule'
import Image from 'next/image'
import Link from 'next/link'
const techTitle = 'Strapi'
import hireService from '../../styles/hireService.module.css'
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
            className={`${hireService.hireh8}  list-p ${hireService.marginbottom24px}`}
          >
            Discover our Strapi Services, where we harness the power of the
            leading open-source headless CMS. Our solutions are not only 100%
            reliable but also fully customizable, allowing you to tailor them to
            your specific needs. With our expertise, you can build your projects
            with remarkable speed, ensuring efficient and effective development.
            We are committed to delivering the best and most reliable software,
            enabling you to achieve your goals with confidence and precision.
            When you choose our Strapi Services, you're choosing a partner
            dedicated to providing top-tier solutions that empower your projects
            and enhance your digital presence.
          </p>
        </div>
        <div className={hireService.techservicebodyright}>
          <Image
            src="/icons/service-icon/strapi-frame.webp"
            alt="strapi-image"
            width={311}
            height={341}
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
          Strapi is a preeminent open-source headless Content Management System
          (CMS) of node.js, uses koa as its framework. It’s 100% reliable and
          fully customizable.
        </p>
      </div>
      <div className=" hire-container-body-left-content-2">
        <div className={hireService.shade1}>
          <div className={hireService.greyshade}></div>
          <h2 className={hireService.hireh2}>Develop Applications Faster</h2>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            Building customizable, performant, and self-hosted content API that
            has never been facile.{' '}
          </p>
          <h3 className={hireService.hireh3}>Customizable</h3>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            Conveniently customize the API, query resolvers, and admin panel.
            You can extend your CMS (Content Management System) with Strapi
            plugins, in a few seconds. One can also create plugins for Strapi.
          </p>

          <h3 className={hireService.hireh3}>GraphQL or RESTful</h3>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            Using Strapi GraphQL or RESTful, you can consume API from mobile
            applications, IoT devices, any client(Vue, React, Angular).
          </p>

          <h3 className={hireService.hireh3}>Open Source</h3>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            The whole codebase is available on GitHub and maintained by many
            contributors.
          </p>
          <h3 className={hireService.hireh3}>Self-Hosted </h3>
          <p
            className={`${hireService.hirep}  ${hireService.marginbottom24px}`}
          >
            You can now keep full control of your private data as well as cost
            with the help of Strapi.
          </p>
        </div>

        {/* CONTENT 7 */}
        <Link href="/hire-team">
          <div className={`${hireService.headingblue} cursor_pointer`}>
            <h2 className={hireService.hireh2blue}>
              Hire Adept Strapi Developers
            </h2>
            <Image
              src="/icons/service-icon/Arrow Right.svg"
              width={12}
              height={12}
            />
          </div>
        </Link>
        <p className={hireService.hirep}>
          We create customized Strapi (CMS) Content Management Systems as per
          your business interface. Our skilled team of Strapi developers develop
          the best and reliable softwares for you.{' '}
        </p>

        <div className={hireService.shade1}>
          <div className={hireService.greyshade}></div>
          <h2 className={hireService.hireh2}>
            Strapi- Provides a Range of Benefits!{' '}
          </h2>

          <h3 className={hireService.hireh3}>
            <b>Shorten The Time-To-Deploy</b>
          </h3>

          <p className={hireService.hirep}>
            Build your projects in a few hours instead of weeks with Strapi.
          </p>

          <h3 className={hireService.hireh3}>
            Manage Your Content Easily, and Deliver It Anywhere
          </h3>

          <p className={hireService.hirep}>
            With matchless customization, ubiquitous connectivity, unstoppable
            productivity, and unbeatable control, you can manage your content
            easily.
          </p>

          <h3 className={hireService.hireh3}>
            A Smooth Multi-Device Experience
          </h3>

          <p className={hireService.hirep}>
            With the help of Strapi you can develop splendid omnichannel digital
            experiences. You can now distribute your content from one Content
            Management System (CMS) to any digital channel, product, or device.
          </p>
        </div>
        <h2 className={hireService.hireh2}>
          Strapi Is A Selected Headless CMS For:
        </h2>
        <h3 className={hireService.hireh3}>Developers</h3>
        <p className={hireService.hirep}>
          Strapi CMS helps developers to easily customize as well as extend any
          project with your favorite tool and tech stack.
        </p>

        <h3 className={hireService.hireh3}>Product Managers </h3>
        <p className={hireService.hirep}>
          Strapi helps Product Managers to develop a customizable and flexible
          delivery pipeline and content architecture, allowing teams to be more
          productive and agile than ever before.
        </p>
        <h3 className={hireService.hireh3}>Content Managers </h3>
        <p className={hireService.hirep}>
          Strapi helps Content Managers to easily manage the content via a
          user-friendly interface.
        </p>
        <h3 className={hireService.hireh3}>Business Leaders </h3>
        <p className={hireService.hirep}>
          Strapi helps in boosting up the development as well as delivery of
          contemporary digital experiences.
        </p>
        <div className={hireService.shade1}>
          <div className={hireService.greyshade}></div>
          <h2 className={`${hireService.hireh2} ${hireService.marginbottom8}`}>
            Why Choose Us?
          </h2>
          <p className={hireService.hirep}>
            We offer effective back-end services with the help of Strapi that
            can provide customization to your application or website as per your
            business requirements.
          </p>
        </div>
        {/* CONTENT7 END */}
      </div>
    </>
  )
}
const content7 = () => (
  <>
    <div></div>
  </>
)

const bannerComponent = () => <Banner />

// const content6 = () => <TechComponent />;
const content4 = () => <div></div>
const content5 = () => <div></div>
const content2 = () => <div></div>
const content3 = () => (
  <div className={hireService.formservice}>
    <ScheduleForm
      title={'Schedule a Meeting'}
      requestOrigin={'Request generated from Strapi page'}
    />
  </div>
)
const Strapi = () => {
  return (
    <>
      <Head>
        <title>Preeminent open-source headless CMS - Strapi</title>
        <link
          rel="canonical"
          href="https://codegaragetech.com/services/strapi"
        />
        <meta
          name="title"
          content="Strapi - A Preeminent Open-Source Headless CMS with Graphql"
        />
        <meta
          name="description"
          content="At Code Garage Tech, we create customized Strapi (CMS) as per your business interface. Our skilled team of Strapi Graphql developers create the best softwares for you. "
        />
      </Head>
      <HireServiceLayout
        content1={content1}
        content2={content2}
        content3={content3}
        content4={content4}
        content5={content5}
        isIconExit={true}
        // content6={content6}
        content7={content7}
        contentHeader1={contentHeader1}
        contentHeaderLeft={contentHeaderLeft}
        techTitle={techTitle}
        // techImage={techImage}
        bannerComponent={<Banner techTitle={heading} />}
        contentHeader={contentHeader}
        requestOrigin={'Requested from Mobile solution page'}
      />
    </>
  )
}

export default Strapi
