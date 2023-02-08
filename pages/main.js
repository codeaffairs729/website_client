import React from "react";
import Header from "./includes/header";
import Typewriter from "typewriter-effect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Head>
          <title>
            Custom Web Software & Application Development Services
          </title>
          <link rel="canonical" href="https://www.codegaragetech.com/" />

          <meta
            name="description"
            content="Looking for reliable Custom Web Development Services in India? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!
"
          />
          <meta
            name="keywords"
            content="Software Development Company In India, Custom Web Development Services, Custom Web Development Company"
          ></meta>
        </Head>
        <div className="main__center center">
          <div className="main__wrap">
            <div>
              <div className="ms-3 main__title title title_big" data-aos>
                <span className="title__box dev-title mb-3">
                  <span className="title__text ">
                    {/* 'Development', 'Software Engineering', 'Designing', 'App Monitoring', 'Web Solutions', 'Mobile Solutions', 'CRM Solutions', 'CMS Solutions', 'Cloud Services', 'Tech Consulting' */}
                    <Typewriter
                      options={{
                        strings: [
                          '<span style="color: #5956E9" >Software Engineering</span>',
                          '<span style="color: #5956E9" >Tech Consultation</span>',
                          '<span style="color: #5956E9" >Cloud Management</span>',
                          '<span style="color: #5956E9" >CRM Solutions</span>',
                          '<span style="color: #5956E9" >CMS Solutions</span>',
                          '<span style="color: #5956E9" >E-comm Solutions</span>',
                          '<span style="color: #5956E9" >Digital Marketing</span>',
                          '<span style="color: #5956E9" >IT Staffing</span>',
                        ],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                      }}
                    />
                  </span>
                </span>
                <span className="title__box">
                  <span className="title__text">
                    <span className="title__line">
                      Web{" "}
                      <span className="main-subheadings-span">Solutions</span>
                    </span>
                  </span>
                </span>
                <span className="title__box main-android-title-box">
                  <span className="title__text main-android-title-text">
                    Android / IOS{" "}
                    <span className="main-subheadings-span">Development</span>
                  </span>
                </span>
                <span className="title__box">
                  <span className="title__text">
                    UI / UX{" "}
                    <span className="main-subheadings-span">Designing</span>
                    {/* <span className="title__color">.</span> */}
                  </span>
                </span>
              </div>
              {/* <div className="main__info info ms-3 main-info" data-aos="animation-scale-y" data-aos-delay="400"> */}
              <div className="freelancer-btn ms-3">
                <a
                  href="./hire-freelancer"
                  target="_blank"
                  className="freelancer-main__btn"
                >
                  Hire a freelancer
                </a>
                <a
                  href="./hire-team"
                  target="_blank"
                  className="freelancer-main__btn"
                >
                  Hire a team
                </a>
              </div>
              <div className="main__info info ms-3 main-info">
                We deliver result-oriented, customized services with an emphasis
                on providing value. Being a reliable as well as professional
                software development & consulting company, we possess quality
                knowledge and tactics to bring it to life.
              </div>
              {/* <div className="main__control ms-3" data-aos="animation-scale-y" data-aos-delay="550"> */}
              <div
                className="main__scroll ms-3"
                data-aos="animation-scale-y"
                data-aos-delay="650"
              >
                {/* <a className="main__link" href="#">
                                <div className="main__icon">
                                    <img className="main__pic" src="img/scroll.webp" alt="" />
                                </div>
                                <div className="main__text">Scroll to explore</div>
                            </a> */}
              </div>
            </div>
            {/* wrap div */}
          </div>
          <div className="main__view" data-aos>
            <div className="main__preview">
              {/* <img
                className="main__pic js-parallax"
                data-scale="1.5"
                data-orientation="down"
                src="img/main-pic-1.webp"
                alt="3D Video Play Button Image"
              /> */}
              <Image
              src="/img/main-pic-1.webp"
              alt="3D Video Play Button Image"
              width={370}
              height={323}
              />
            </div>
            <div className="main__preview">
              {/* <img
                className="main__pic js-parallax"
                data-scale="1.5"
                data-orientation="up"
                src="img/main-pic-2.webp"
                alt="3D Main Profile PNG"
              /> */}
              <Image
              src="/img/main-pic-2.webp"
              alt="3D Main Profile PNG"
              width={235}
              height={142}
              />
            </div>
            <div className="main__preview">
              <img
                className="main__pic"
                src="img/mouse.webp"
                alt="3D Mouse PNG"
              />
            </div>
            {/* <div className="main__preview">
                            <img className="main__pic js-parallax" data-scale="1.5" data-orientation="up" src="img/main-pic-2.webp" alt="" />
                        </div> */}
            <div className="main__preview">
              {/* <img
                className="main__pic"
                src="images/desktop-asset.webp"
                alt="3D Desktop Assets"
              /> */}
              <div className="main__pic">
                <Image
                  src="/images/desktop-asset.webp"
                  alt="3D Desktop Assets"
                  width={768}
                  height={598}
                />
              </div>
            </div>
          </div>
          <div className="main__circles">
            <div className="main__circle"></div>
            <div className="main__circle js-rellax" data-rellax-speed="2"></div>
            <div className="main__circle js-rellax" data-rellax-speed="1"></div>
            <div className="main__circle js-rellax" data-rellax-speed="2"></div>
            <div
              className="main__circle js-rellax"
              data-rellax-speed=".3"
            ></div>
            <div className="main__circle"></div>
            <div className="main__circle js-rellax" data-rellax-speed="1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
