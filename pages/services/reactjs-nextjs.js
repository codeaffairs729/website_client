import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
import Image from 'next/image'
import ScheduleForm from '../../components/schedule'
const techTitle = 'Next.Js Development Services'
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
                Headless commerce development solutions.
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Code splitting feature that allows the apps to load swift.
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Allows easy crawling of the particular pages.
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Built-in Saas and CSS support.
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
          Next.js is a framework of react that offers building blocks to build
          contemporary web applications. Code Garage is a “Next.js Expert agency
          as we provide Next. js-based headless commerce development solutions.
          <br /> <br />
        </p>

        {/* content-7 */}
        <div className={hireService.shade1}>
          <div className={hireService.greyshade}></div>
          <h2
            className={`${hireService.hireh2} ${hireService.marginbottom24px}`}
          >
            Why Go for Next.js Development Solutions?
          </h2>
          {/* image required */}
          <h3 className={hireService.hireh3}>
            <b>Multiple Rendering Capabilities</b>
          </h3>

          <p className={hireService.hirep}>
            Next.js offers numerous methods to render the content. It can be SSG
            (Static Site Generation), SSR (Server Side Rendering), or a hybrid
            solution.
          </p>

          <h3 className={hireService.hireh3}>
            <b>TypeScript Support</b>{' '}
          </h3>
          <p className={hireService.hirep}>
            Next.js has an integrated TypeScript support, which offers built-in
            types for Pages, zero-configuration setup, APIs and more.
          </p>

          <h3 className={hireService.hireh3}>
            <b>Auto Code Splitting</b>
          </h3>
          <p className={hireService.hirep}>
            Next.js has a code splitting feature that allows the apps to load
            swift. It is based on a request that it has to run the needed bundle
            of the code.
          </p>

          <h3 className={hireService.hireh3}>
            <b>Improved SEO</b>
          </h3>
          <p className={hireService.hirep}>
            Next.js has the support of SSR (Server Side Rendering), it can
            return HTML pages, that allows easy crawling of the particular pages
            by the search engines.
          </p>

          <h3 className={hireService.hireh3}>
            <b>Component Reusability</b>
          </h3>
          <p className={hireService.hirep}>
            Next.js is based on React. Thus, it allows you to reuse the
            components. Moreover, according to the requirement of developing
            more UI instances, next.js allows utilizing a component numerous
            times.
          </p>
          <h3 className={hireService.hireh3}>
            <b>Built-in CSS Support</b>
          </h3>
          <p className={hireService.hirep}>
            Next.js offer built-in Saas and CSS support. Therefore, it allows
            importing of CSS files from JavaScript files by lengthening the
            import beyond JavaScript.
          </p>
          <h3 className={hireService.hireh3}>
            <b>Easy to Integrate</b>
          </h3>
          <p className={hireService.hirep}>
            Next.js is based on React that allows convenient integration as well
            as deployment. Moreover, it has a significant community to back the
            same.
          </p>
        </div>
        {/* <h2 className="hire-h2 margin-bottom-24px">
          Next.js Headless Development Process
        </h2> */}
        {/* image required */}
        <h2
          className={`${hireService.hireh2} ${hireService.marginbottom24px} ${hireService.margintop32px}`}
        >
          {/* <h2 className="hire-h2 margin-bottom-24px margin-top-32px"> */}
          Why Choose Us?
        </h2>
        <h3 className={`${hireService.hireh3} ${hireService.marginbottom24px}`}>
          <b>Ease of Use & Simplicity </b>
        </h3>

        <p className={hireService.hirep}>
          Simplicity is the major feature of Next.js. Code Garage’s developers
          as well as designers have thorough understanding and knowledge of JS &
          HTML, we can start the Next.js development conveniently and implement
          it to your project.
        </p>
        <h3
          className={`${hireService.hireh3}  ${hireService.marginbottom24px}`}
        >
          <b>High Quality UI/UX </b>
        </h3>

        <p className={hireService.hirep}>
          Our Next.js developers aid to develop superior quality UI/UX design
          trends that are panoramic, highly aesthetic, and are easy to use.
        </p>
      </div>
    </>
  )
}

const content3 = () => (
  <div className={hireService.formservice}>
    <ScheduleForm
      title={'Schedule a Meeting'}
      requestOrigin={'Request generated from Nextjs page'}
    />
  </div>
)
const NextjsPage = () => {
  return (
    <>
      <Head>
        <title>NextJs Development solutions - Code Garage Tech</title>
        <link
          rel="canonical"
          href="https://codegaragetech.com/services/reactjs-nextjs"
        />
        <meta
          name="description"
          content="
          Enhance your Web App with Next.js solutions. We have an adept team of Next.js Developers who are experienced in creating high-performance mobile apps.
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

export default NextjsPage
