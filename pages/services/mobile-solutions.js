import React, { useState } from "react";
import TechComponent from "../../components/techComponent";
import HireServiceLayout from "../../components/hireServiceLayout";
import Banner from "../../components/banner";
import Link from "next/link";
import Head from "next/head";
import ScheduleForm from "../../components/schedule";

const techTitle = "Mobile Solutions";
const techImage = "/icons/service-icon/Frame.webp";

const contentHeader1 = () => {
  return (
    <>
      <div className="hire-container tech-service-body">
        <div className="tech-service-body-left">
          <h1 className="hire-h1">{techTitle}</h1>
          <p className="text-danger mt-2">
            We develop superior mobile applications that provide users with a
            seamless and lag-free experience on all contemporary platforms and
            devices.- Mobile
          </p>
          <Link href="/contact">
            <a target="_blank" className="header__btn btn btn_purple mt-5">
              Get in Touch
            </a>
          </Link>
        </div>
        <div className="tech-service-body-left-right">
          <img src="/icons/service-icon/mobile-front-color-service.webp" />
        </div>
      </div>
    </>
  );
};

const content1 = () => {
  return (
    <>
      {/* Service container body content */}
      <div className="hire-container hire-container-body-left-content-1">
        <p className="hire-p">
          We develop superior mobile applications that provide users with a
          seamless and lag-free experience on all contemporary platforms and
          devices.
          <br /> <br />
          Code Garage Tech is a preeminent mobile app development agency that is
          specifically driven by creativity and innovation. We have proved
          ourselves as a customer-trusted and credible company for over 6 years.
          We have delivered 900+ mobile apps with a 98% success rate, and our
          client’s testimonials are evidence of that. <br /> <br />
          We have a team of adept mobile app developers who have expertise in
          developing mobile solutions that meet market requirements, empower the
          brand identity of companies, and inspire business expansion and
          growth.
          <br /> <br />
          From start-ups to enterprises, we have experienced a wide experience
          in providing creative mobile app solutions to a vast number of clients
          across multiple industries.
          <br />
          <br />
        </p>
      </div>
    </>
  );
};

const content7 = () => (
  <>
    <div className="hire-container hire-container-body-left-content-2">
      <h3 className="hire-h3">
        Our Mobile Application Development Solutions For Various Platforms:
      </h3>
      <ul className="hire-list">
        <li>Android App Development</li>
        <li>iOS App Development</li>
        <li>Progressive Web App Development</li>
        <li>Cross-platform App Development</li>
      </ul>
    </div>
    <div className="hire-container">
      <h2 className="hire-h3 text-center">
        Partner With Us to Launch, Run & Grow Your Business Worldwide
      </h2>
      <h3 className="hire-h3">Android App Development</h3>
      <p className="hire-p">
        We are a reliable Android app development company, renowned for boosting
        your development strategy, designing smooth experiences, build-up viable
        solutions, and developing applications that add unique value to the
        lives of users. We design as well as develop custom Android applications
        for all sizes of business and domains.
      </p>
      <p className="hire-p">Our Android Development Services: </p>
      <ul className="hire-list">
        <li>Android UI/UX Design</li>
        <li>Android Universal App Development</li>
        <li>Custom Android App Development</li>
        <li>Android Gaming App Development</li>
        <li>Enterprise Android App</li>
        <li>Wearable Apps</li>
        <li>Android App Testing</li>
        <li>Android App Security</li>
        <li>Android App Maintenance & Support </li>
      </ul>
      <h3 className="hire-h3">iOS App Development</h3>
      <p className="hire-p">
        If you want effective results, it is vital to develop niche-specific,
        feature-rich, adaptable, and target-oriented mobile applications. We
        develop top-quality iOS mobile solutions with a specific blend of
        excellent coding and apparent system architecture. We follow the
        iterative development approach and create applications with a scope for
        improvement as the application runs.
      </p>
      <p className="hire-p">Our iOS App Development Services:</p>
      <ul className="hire-list">
        <li>iOS UI/UX Design</li>
        <li>iOS Universal App Development</li>
        <li>Custom iOS App Development</li>
        <li>iOS Gaming App Development</li>
        <li>Apple Wearable App Development</li>
        <li>Enterprise iOS AppS</li>
        <li>iOS App Testing</li>
        <li>iOS App Security</li>
        <li>iOS App Maintenance & Support</li>
      </ul>
      <h3 className="hire-h3">React Native Development</h3>
      <p className="hire-p">
        React Native is one of the most eminent programming languages these days
        and businesses over the globe are swiftly implementing it to develop
        fully-featured as well as appealing cross-platform apps and native user
        experience. We at Code Garage Tech, have a long history of creating
        feature-rich business applications. We have adept react native
        developers who have wide domain competence to deliver end-to-end
        solutions.
        <br />
        <br />
      </p>
      <p className="hire-p">Our React Native Development Services:</p>
      <ul className="hire-list">
        <li>React Native Application Development</li>
        <li>React Native Android and iOS Applications</li>
        <li>React Native Integration and Migration Services</li>
        <li>React Native Consulting</li>
        <li>React Native UI/UX Design</li>
        <li>React Native Support and Maintenance Services</li>
      </ul>
      <h3 className="hire-h3">Flutter Development</h3>
      <p className="hire-p">
        Our Flutter mobile app development services are specifically designed to
        aid you develop a multi-platform existence. We at Code Garage Tech, have
        adept flutter apps developers who create, design, test and launch
        completely developed flutter applications. We develop react native
        applications for businesses of all sizes that are secure, reliable, and
        secure at the same time.
      </p>
      <p className="hire-p">Our Flutter Development Services: </p>
      <ul className="hire-list">
        <li>Custom Flutter App Development</li>
        <li>Cross-app Flutter App Development</li>
        <li>Flutter App Support and Maintenance Services</li>
        <li>Flutter App Design Solutions</li>
        <li>Flutter App Upgrade</li>
        <li>Advanced & Native Flutter App Development</li>
      </ul>
    </div>
  </>
);

const content6 = () => <div ><TechComponent /></div>;
const content3 = () => (
  <div className="form-service">
    <ScheduleForm
      title={"Schedule a Meeting"}
      requestOrigin={"Request generated from mobile solution page"}
    />
  </div>
);
const MobileSolutions = () => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.codegaragetech.com/services/mobile-solutions"
        />
      </Head>
      <HireServiceLayout
        content1={content1}
        content3={content3}
        content6={content6}
        content7={content7}
        contentHeader1={contentHeader1}
        techTitle={techTitle}
        bannerComponent={Banner}
      />
    </>
  );
};

export default MobileSolutions;
