import React from "react";
import { RxCheck } from "react-icons/rx";
import Slider from "react-slick";
import Head from 'next/head'


const techTitle =
  "Hire Certified and Professional Software Developers or DevOps Engineers";
const techImage = "../../public/icons/hire-icon/Frame.png";
import HireForm from "../components/hire";

const bannerImage = [
  { name: "Ruby on Rails", path: "icons/rails.png" },
  { name: "ReactJs", path: "icons/reactjs.png" },
  { name: "NextJs", path: "icons/nextjs.png" },
  { name: "VueJs", path: "icons/vuejs.png" },
  { name: "NuxtJs", path: "icons/nuxtjs.png" },
  { name: "NodeJs", path: "icons/nodejs.png" },
  { name: "Laravel", path: "icons/laravel.png" },
  { name: "Shopify", path: "images/shopify.png" },
  { name: "Wordpress", path: "icons/wordpress.png" },
  { name: "React Native", path: "icons/reactjs.png" },
  { name: "Ionic", path: "icons/ionic.png" },
  { name: "Flutter", path: "images/flutter.png" },
  { name: "Swift / iOS", path: "icons/swift.png" },
  { name: "Android", path: "images/android_4.png" },
];

// const bannerImage = [
//   {
//     path: "icons/hire/clutch-co-vector-logo.svg",
//   },
//   {
//     path: "icons/hire/goodfirms-logo-vector.svg",
//   },
//   {
//     path: "icons/hire/peopleperhour-logo.svg",
//   },
//   {
//     path: "icons/hire/upwork.svg",
//   },
// ];

const contentHeader = () => {
  return (
    <>
      <div className="hire-container-body-left">
        <h1 className="hire-header">{techTitle}</h1>
        <ul>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            Developing software and using open source codebases
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            Following security and compliance protocols
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            Applying hands-on knowledge of testing automation
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            Conducting agile project planning and management
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            Developing expert competencies in systems analysis
          </li>
        </ul>
      </div>
    </>
  );
};
const content1 = () => {
  return (
    <>
      {/* hire container body content */}

      <div className="hire-container-body-left-content-1">
        <h2 className="hire-h2">
          Sustain, Prosper And Achieve New Heights Of Success.{" "}
        </h2>
        <p className="hire-p">
          A collaboration with Code Garage Tech developers offers access to
          technical expertise as well as comprehensive development solutions.
          Moreover, we offer other benefits to our partners. We understand that
          employing a few developers frequently comes with budget limitations,
          our goal is to generate opportunities for value addition throughout
          the entire process. We offer:
        </p>
      </div>
      <div className="hire-container-body-left-content-2">
        <ul className="body-list">
          <li>
            An uncomplicated way to avoid the "talent war." When you require a
            knowledgeable MySQL architect or experienced C developers to develop
            a new website for your business, hiring in-house depicts competing
            with other businesses in your area for a small or medium talent
            pool. We at Code Garage Tech aid you circumvent the struggle by
            providing instant access to qualified and professional people.
          </li>
          <li>
            Cost reductions across the board, up to 60% when compared to
            traditional in-house as well as centralized development models. At
            Code Garage Tech, we have learned how to lower overhead costs,
            source talent that is within your budget, and produce outcomes on
            time and within your budget in order to help your business better
            focus on attaining those indispensable KPIs.{" "}
          </li>
          <li>
            Dependable outcomes using a "right the first time" philosophy. When
            outcomes do not meet your expectations fully, we are always here to
            talk, learn, and adapt. All of our clients always get exactly what
            they asked for in their initial proposal.
          </li>
        </ul>
        <p className="hire-p">
          Contact us right away to learn more about hiring developers from Code
          Garage Tech to add to your internal efforts.
        </p>
      </div>
    </>
  );
};

const content2 = () => (
  <div>
    <h3 className="hire-h3">
      Why Choose to Hire a Sole Developer from Code Garage Tech for Your
      Company?
    </h3>
    <p className="hire-p">
      We add value to your business by leveraging our professional and
      technological expertise. Hiring a developer is an amazing method to
      prosper your business via technology or to mitigate costs through
      automation. We have carefully created and improved our talent screening
      processes to provide our clients with access to certified and expert
      DevOps engineers and software developers. What else do we have to offer?
    </p>
    <ul className="body-list">
      <li>
        Senior Developers and Engineers with a high level of experience of more
        than 9 years in custom mobile app development.{" "}
      </li>
      <li>
        All of our coders have approximately three years of experience in their
        realm.{" "}
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

    <p className="hire-p">
      Do you want to check our prior work and make sure we do the things that we
      say? Ask our partners from previous projects about their opinions of our
      services. In addition to the caliber of our hand-selected employees, we
      also strive to add value for our clients in other ways as well.
    </p>

    <ul className="body-list">
      <li>
        We offer extensive initial deep discussions and we work together to
        develop an environment where achieving success is our pertinent goal.
        For our potential partners, we've also made it clear and easy to
        comprehend what we can accomplish within any given set of guidelines.
      </li>
      <li>
        You will be offered transparency from the beginning of your involvement
        with our team to the project's conclusion. We are purely committed to
        honesty because we offer real-time tracking of hours worked, timecard
        screenshots, and much more.{" "}
      </li>
      <li>
        We offer a variety of engagement models that make it simple to select
        the hiring method that best fits your business approach.{" "}
      </li>
    </ul>
    <p className="hire-p">
      Discover more about our engagement models and also learn how they assist
      you to make investments that are more profitable. We're always here to
      build a sturdy technological foundation to craft success.
    </p>
  </div>
);

const content3 = () => (
  <>
    <div className="hire-container-body-right-content ">
      <h2 className="hire-h2">Our Domain Expertise</h2>
      <ul>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          DevOps
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          Full cycle Software Product Development
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          Artificial Intelligence
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          JavaScript
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          Python
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          Mobile Application iOS
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          Android development​
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          Angular, React, Bootstrap​
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          Quality Assurance Testing
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          Project Management
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          Node.js
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          Node.js
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          Ruby on Rails
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          Nuxt.js
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          React Native
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          Laravel
        </li>
        <li>
          <span className="tick">
            <RxCheck />
          </span>
          Yii2
        </li>
      </ul>
    </div>
  </>
);

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
};

const bannerComponent = () => (
  <Slider {...settings}>
    {bannerImage.map((e, i) => (
      <div className="nav-logo-slider" key={i}>
        <img src={e.path} alt="" />
        <p className="small-text">{e.name}</p>
      </div>
    ))}
  </Slider>
);

const content4 = () => <div></div>;
const content5 = () => <div></div>;
const HireFreelancer = () => {
  return (
    <HireForm
      content1={content1}
      content2={content2}
      content3={content3}
      content4={content4}
      content5={content5}
      bannerComponent={bannerComponent}
      techTitle={techTitle}
      techImage={techImage}
      contentHeader={contentHeader}
    />
  );
};

export default HireFreelancer;
