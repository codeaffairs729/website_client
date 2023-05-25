import React from 'react'
import { RxCheck } from 'react-icons/rx'
import Slider from 'react-slick'
import Head from 'next/head'
import ScheduleForm from '../components/schedule'

const techTitle = 'Hire Certified and Professional Software Developers'
import HireServiceLayout from '../components/HireServiceLayout'
import { useRouter } from 'next/router'
import styles from '../styles/hireService.module.css'

const bannerImage = [
  { name: 'Ruby on Rails', path: 'icons/rails.webp', altImg: 'Rails PNG' },
  { name: 'ReactJs', path: 'icons/reactjs.webp', altImg: 'Reactjs Icon' },
  { name: 'NextJs', path: 'icons/nextjs.webp', altImg: 'Nextjs Icon' },
  { name: 'VueJs', path: 'icons/vuejs.webp', altImg: 'Vuejs Icon' },
  { name: 'NuxtJs', path: 'icons/nuxtjs.webp', altImg: 'Nuxtjs Icon' },
  { name: 'NodeJs', path: 'icons/nodejs.webp', altImg: 'Nodejs Icon' },
  { name: 'Laravel', path: 'icons/laravel.webp', altImg: '' },
  { name: 'Shopify', path: 'images/shopify.webp', altImg: 'Shopify PNG Image' },
  { name: 'Wordpress', path: 'icons/wordpress.webp', altImg: 'Wordpress Icon' },
  { name: 'React Native', path: 'icons/reactjs.webp', altImg: 'Reactjs Icon' },
  { name: 'Ionic', path: 'icons/ionic.webp', altImg: 'Ionic Icon' },
  { name: 'Flutter', path: 'images/flutter.webp', altImg: 'Flutter PNG Image' },
  { name: 'Swift / iOS', path: 'icons/swift.webp', altImg: 'Swift Icon' },
  { name: 'Android', path: 'images/android_4.webp', altImg: '' },
]

const contentHeader = () => {
  return (
    <>
      <div className={`${styles.hirecontainerbody} ${styles.servicebody} `}>
        {/* <div className="hire-container-body service-body"> */}
        <div className={styles.hirecontainerbodyleft}>
          <h1 className={styles.hireh1}>{techTitle}</h1>
          <ul
            className={`${styles.hire_list_items} ${styles.marginbottom24px} `}
          >
            <li>
              <span className={styles.tick}>
                <RxCheck />
              </span>
              Adept in creating a MVP/Prototype in initial phase so that you can
              have a demo of your products or services before launch and made
              changes accordingly
            </li>
            <li>
              <span className={styles.tick}>
                <RxCheck />
              </span>
              Build scalable and robust desktop, mobile and web applications
            </li>
            <li>
              <span className={styles.tick}>
                <RxCheck />
              </span>
              Full cycle managed DevOps
            </li>
            <li>
              <span className={styles.tick}>
                <RxCheck />
              </span>
              Use Hassle-free time tracking software with transparent billing
            </li>
          </ul>
        </div>
        <div className={styles.hirecontainerbodyright}>
          <ScheduleForm
            title={'Schedule a Meeting'}
            requestOrigin={'Request generated from hire-freelancer page'}
          />
        </div>
      </div>
    </>
  )
}
const content1 = () => {
  return (
    <>
      {/* hire container body content */}

      <div className="hire-container-body-left-content-1">
        <h2 className={styles.hireh2}>
          Sustain, Prosper And Achieve New Heights Of Success.{' '}
        </h2>
        <p className={styles.hirep}>
          A collaboration with Code Garage Tech developers offers access to
          technical expertise as well as comprehensive development solutions.
          Moreover, we offer other benefits to our partners. We understand that
          employing a few developers frequently comes with budget limitations,
          our goal is to generate opportunities for value addition throughout
          the entire process. We offer:
        </p>
      </div>
      <div className="hire-container-body-left-content-2">
        <ul className={`${styles.hire_list_items} ${styles.bodylist}`}>
          <li>
            An uncomplicated way to avoid the &quot;talent war.&quot; When you
            require a knowledgeable MySQL architect or experienced C developers
            to develop a new website for your business, hiring in-house depicts
            competing with other businesses in your area for a small or medium
            talent pool. We at Code Garage Tech aid you circumvent the struggle
            by providing instant access to qualified and professional people.
          </li>
          <li>
            Cost reductions across the board, up to 60% when compared to
            traditional in-house as well as centralized development models. At
            Code Garage Tech, we have learned how to lower overhead costs,
            source talent that is within your budget, and produce outcomes on
            time and within your budget in order to help your business better
            focus on attaining those indispensable KPIs.{' '}
          </li>
          <li>
            Dependable outcomes using a &quot;right the first time&quot;
            philosophy. When outcomes do not meet your expectations fully, we
            are always here to talk, learn, and adapt. All of our clients always
            get exactly what they asked for in their initial proposal.
          </li>
        </ul>
        <p className={styles.hirep}>
          Contact us right away to learn more about hiring developers from Code
          Garage Tech to add to your internal efforts.
        </p>
      </div>
    </>
  )
}

const content2 = () => (
  <div>
    <h2 className={styles.hireh2}>
      Why Choose to Hire a Sole Developer from Code Garage Tech for Your
      Company?
    </h2>
    <p className={styles.hirep}>
      We add value to your business by leveraging our professional and
      technological expertise. Hiring a developer is an amazing method to
      prosper your business via technology or to mitigate costs through
      automation. We have carefully created and improved our talent screening
      processes to provide our clients with access to certified and expert
      DevOps engineers and software developers. What else do we have to offer?
    </p>
    <ul className={`${styles.hire_list_items} ${styles.bodylist}`}>
      <li>
        Senior Developers and Engineers with a high level of experience of more
        than 9 years in custom mobile app development.{' '}
      </li>
      <li>
        All of our coders have approximately three years of experience in their
        realm.{' '}
      </li>
      <li>
        A powerful track record with thousands of completed projects
        successfully.
      </li>
      <li>
        Persistent project management using certified and verified PMI project
        managers.
      </li>
      <li>
        We develop contemporary software for the modern workplace, relying on
        the best practices of established industries while instituting
        innovation to make your company stand out from the competition.
      </li>
      <li>
        Umpteen testimonials from pleased clients who have personally seen the
        difference made by Code Garage Tech developers.
      </li>
    </ul>

    <p className={styles.hirep}>
      Do you want to check our prior work and make sure we do the things that we
      say? Ask our partners from previous projects about their opinions of our
      services. In addition to the caliber of our hand-selected employees, we
      also strive to add value for our clients in other ways as well.
    </p>

    <ul className={`${styles.hire_list_items} ${styles.bodylist}`}>
      <li>
        We offer extensive initial deep discussions and we work together to
        develop an environment where achieving success is our pertinent goal.
        For our potential partners, we&quot;ve also made it clear and easy to
        comprehend what we can accomplish within any given set of guidelines.
      </li>
      <li>
        You will be offered transparency from the beginning of your involvement
        with our team to the project&quot;s conclusion. We are purely committed
        to honesty because we offer real-time tracking of hours worked, timecard
        screenshots, and much more.{' '}
      </li>
      <li>
        We offer a variety of engagement models that make it simple to select
        the hiring method that best fits your business approach.{' '}
      </li>
    </ul>
    <p className={styles.hirep}>
      Discover more about our engagement models and also learn how they assist
      you to make investments that are more profitable. We&quot;re always here
      to build a sturdy technological foundation to craft success.
    </p>
  </div>
)

const content3 = () => (
  <>
    <div className={styles.hirecontainerbodyrightcontent}>
      <h2 className={styles.hireh2}>Our Domain Expertise</h2>
      <ul className={styles.hire_list_items}>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          DevOps
        </li>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          Full cycle Software Product Development
        </li>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          Artificial Intelligence
        </li>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          JavaScript
        </li>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          Python
        </li>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          Mobile Application iOS
        </li>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          Android development​
        </li>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          Angular, React, Bootstrap​
        </li>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          Quality Assurance Testing
        </li>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          Project Management
        </li>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          Node.js
        </li>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          Ruby on Rails
        </li>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          Nuxt.js
        </li>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          React Native
        </li>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          Laravel
        </li>
        <li>
          <span className={styles.tick}>
            <RxCheck />
          </span>
          Yii2
        </li>
      </ul>
    </div>
  </>
)

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        initialSlide: 0,
      },
    },
  ],
}

const bannerComponent = () => (
  <Slider {...settings}>
    {bannerImage.map((e, i) => (
      <div className={styles.navlogoslider} key={i}>
        <img src={e.path} alt={e.altImg} />
        <p className={styles.smalltext}>{e.name}</p>
      </div>
    ))}
  </Slider>
)

const HireFreelancer = () => {
  const router = useRouter()
  const handleOnBack = () => {
    router.push('/')
  }
  return (
    <div className={styles.root}>
      <Head>
        <title>Hire a freelancer software developer - Code Garage Tech</title>
        <link
          rel="canonical"
          href="https://codegaragetech.com/hire-freelancer"
        />

        <meta
          name="description"
          content="Hire a professional and experienced freelancer software developer from Code Garage Tech to take your business to the new heights of success in this digital era!
"
        />
      </Head>
      <div className={`${styles.cursor_pointer} d-flex ${styles.blogbackbtn}`}>
        {/* <div className="blog-back-btn cursor_pointer d-flex "> */}
        <div className="align-self-center">
          <img src="/icons/left-angle.png" style={{ height: '24px' }} />
        </div>
        <div
          className="fs-6  fw-semibold fw-bold"
          style={{ color: '#2522BA' }}
          onClick={handleOnBack}
        >
          &nbsp;&nbsp;Back
        </div>
      </div>

      <HireServiceLayout
        content1={content1}
        content2={content2}
        content3={content3}
        bannerComponent={bannerComponent}
        techTitle={techTitle}
        contentHeader={contentHeader}
        requestOrigin={'Requested from Hire a freelancer page'}
      />
    </div>
  )
}

export default HireFreelancer
