import React from "react";
import { RxCheck } from "react-icons/rx";
import Slider from "react-slick";
const techTitle = "Hire a Team ";
const techImage = "../../public/icons/hire-icon/Frame.webp";
import HireForm from "../components/hire";
import Head from "next/head";
import ScheduleForm from "../components/schedule";

const contentHeader = () => {
  return (
    <>
      <div className="hire-container-body service-body">
        <div className="hire-team hire-container-body-left">
          <h1 className="hire-team-header">{techTitle}</h1>
          <h2 className="hire-h2">Together We Can Achieve More</h2>
          <p className="hire-p">
            Code Garage Tech has helped numerous businesses envision and also
            implement successful projects in various development frameworks and
            languages since 2015. <br />
            <br />
            We have strong links to the local talent pool, and we have highly
            skilled developers who are eager to add value to your organization.
            Our developers are fully flexible and can meet any requirements,
            including long-term projects to provide vital support during the
            whole process.
          </p>
        </div>
        <div className="hire-container-body-right">
    <ScheduleForm
      title={"Schedule a Meeting"}
      requestOrigin={"Request generated from hire-team page"}
    />
    ;
  </div>
      </div>
    </>
  );
};

const content4 = () => {
  return (
    <div className="hire-container">
      {/* hire container body content */}
      <div className="hire-team hire-container-body-left-content-1">
        <h2 className="hire-h2">We offer Solutions to Scale Any Project</h2>
        <p className="hire-p">
          Whether you need a few developers and the potential to exercise
          complete control over their work or you choose to decentralize
          development throughout the whole product life cycle, Code Garage Tech
          staffs accordingly. To meet distinctive needs, we provide a variety of
          engagement models, and we make the move to a greater level of
          engagement when required.
        </p>
      </div>
      <div className="hire-container-body-left-content-2">
        <p className="hire-p">
          <strong>How Our Experts Handle The Project Efficiently</strong>
        </p>
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
    </div>
  );
};

const content5 = () => (
  <div className="hire-container">
    <div>
      <h2 className="hire-h2 text-center">
        Select From A Variety Of Hiring Models
      </h2>
      <p className="hire-p">
        We offer flexibility to each of our clients to select the engagement
        model that best suits their needs.
      </p>
    </div>
    <div className="hiring-models">
      <div className="hiring-model">
        <h3 className="hire-h3">Adept Team</h3>
        <p className="hire-p">
          Have a project that requires complete attention or needs services like
          software development for the long term, choose our pay-as-you-go
          service model provided by our adept time.{" "}
        </p>
        <ul>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            160 Hours of part & full time{" "}
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            Daily progress updates
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            Monthly billing
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            No hidden costs
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            You need to pay only for measurable work
          </li>
        </ul>
      </div>

      <div className="hiring-model">
        <h3 className="hire-h3">Fixed Price Model </h3>
        <p className="hire-p">
          A fixed-price model would be the best option if your project is well
          planned out. A one-time fixed-price contract is stated below:
        </p>
        <ul>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            No setup fees
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            Daily progress updates
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            No hidden costs
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            Fixed budget & deadlines
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            Milestone based payment{" "}
          </li>
        </ul>
      </div>
      <div className="hiring-model">
        <h3 className="hire-h3">Hourly </h3>
        <p className="hire-p">
          Our hourly pricing model is also here if your business requires
          ongoing work for an unspecified number of projects. It is based on
          hours and you can pay for your work under this hour-wise contract
        </p>
        <ul>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            No hidden costs{" "}
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            Monthly billing
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            Daily progress updates
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            You need to pay only for measurable work
          </li>
          <li>
            <span className="tick">
              <RxCheck />
            </span>
            Requirement-based working hours{" "}
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h2 className="hire-h2 text-center">
        Choosing the Best Model for Your Business
      </h2>
      <p className="hire-p">
        No matter what solution you choose, you can rely on our ability to
        consistently provide high-quality work and adhere to our communication
        standards. With considerable knowledge available in the particular
        technologies, your business depends upon speed and focus, a completed
        project is just around the corner. Learn how we can get you there now.
        <br />
        <br />
        Contact us right now for a thorough discussion regarding Code Garde
        Technologies' and custom software development that help in empowering
        your development procedures. We're always willing to hear your goals and
        find out how we can best support you in achieving them.
      </p>
    </div>
  </div>
);

const bannerComponent = () => (
  <div className="hire-container hire-free-banner">
    <div className="top-rated shadow bg-warning rounded text-dark">
      Top rated on
    </div>
    <img className="hire-logo" src="icons/hire/good-firms-logo.webp" />
    <img
      className="hire-logo"
      src="icons/hire/upwork-logo-png-transparent.webp"
    />
    <img className="hire-logo" src="icons/hire/clutch_logo.webp" />
    <img className="hire-logo" src="icons/hire/PeoplePerHour_logo.webp" />
  </div>
);

const HireTeam = () => {
  return (
    <>
      <Head>
        <title>
          Hire a team of Adept Software Developers - Code Garage Tech
        </title>
        <link rel="canonical" href="https://www.codegaragetech.com/hire-team" />
        <meta
          name="description"
          content="Hire a team of adept and dedicated software developers from Code Garage Tech. We use a result-driven and innovative approach to help your business grow. 
"
        />
      </Head>
      <HireForm
        content4={content4}
        content5={content5}
        techTitle={techTitle}
        techImage={techImage}
        // bannerImage={bannerImage}
        bannerComponent={bannerComponent}
        contentHeader={contentHeader}
        requestOrigin={"Requested from Hire a team page"}
      />
    </>
  );
};

export default HireTeam;
