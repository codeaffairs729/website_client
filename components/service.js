import React, { useState, useEffect } from "react";
import Link from "next/link";
import CompanyDescription from "./company-description";
import TechComponent from "./techComponent";
import Footer from "../pages/includes/footer";
import Header from "../pages/includes/header";
import Slider from "react-slick";


const ServiceForm = ({ content1, content2, techTitle,techImage }) => {
  const [path, setPath] = useState([]);

  const mobileTech = [
    { id:1,name: "Android", path: "icons/service-icon/Android.png" },
    {
      id:2,
      name: "Flutter",
      path: "icons/service-icon/Flutter.png",
    },
    {
      id:3,
      name: "React Native",
      path: "icons/service-icon/React Native.png",
    },
    {
      id:4,
      name: "Augmented Reality",
      path: "icons/service-icon/Augmented Reality.png",
    },
    {
      id:5,
      name: "Virtual Reality",
      path: "icons/service-icon/Virtual Reality.png",
    },
    {
      id:6,
      name: "Swift",
      path: "icons/service-icon/Swift.png",
    },
    {
      id:7,
      name: "ionic",
      path: "icons/service-icon/ionic.png",
    },
  ];

  const handleOnMobile = () => {
    console.log("frontend clickd");
    const mobileTech = [
      { name: "Android", path: "icons/service-icon/Android.png" },
      {
        name: "Flutter",
        path: "icons/service-icon/Flutter.png",
      },
      {
        name: "React Native",
        path: "icons/service-icon/React Native.png",
      },
      {
        name: "Augmented Reality",
        path: "icons/service-icon/Augmented Reality.png",
      },
      {
        name: "Virtual Reality",
        path: "icons/service-icon/Virtual Reality.png",
      },
      {
        name: "Swift",
        path: "icons/service-icon/Swift.png",
      },
      {
        name: "ionic",
        path: "icons/service-icon/ionic.png",
      },
    ];

    setPath(mobileTech);
  };

  const handleOnFrontend = () => {
    const frontTech = [
      {
        name: "ionic",
        path: "icons/service-icon/ionic.png",
      },
      { name: "Android", path: "icons/service-icon/Android.png" },
      {
        name: "Flutter",
        path: "icons/service-icon/Flutter.png",
      },
      {
        name: "React Native",
        path: "icons/service-icon/React Native.png",
      },
      {
        name: "Augmented Reality",
        path: "icons/service-icon/Augmented Reality.png",
      },
      {
        name: "Virtual Reality",
        path: "icons/service-icon/Virtual Reality.png",
      },
      {
        name: "Swift",
        path: "icons/service-icon/Swift.png",
      },
      {
        name: "ionic",
        path: "icons/service-icon/ionic.png",
      },
      {
        name: "ionic",
        path: "icons/service-icon/ionic.png",
      },
    ];
    setPath(frontTech);
  };
  const handleOnBackend = () => {
    const backTech = [
      { name: "Android", path: "icons/service-icon/Android.png" },
      {
        name: "Flutter",
        path: "icons/service-icon/Flutter.png",
      },
      {
        name: "React Native",
        path: "icons/service-icon/React Native.png",
      },

      {
        name: "Virtual Reality",
        path: "icons/service-icon/Virtual Reality.png",
      },
      {
        name: "Swift",
        path: "icons/service-icon/Swift.png",
      },
      {
        name: "ionic",
        path: "icons/service-icon/ionic.png",
      },
      {
        name: "ionic",
        path: "icons/service-icon/ionic.png",
      },
      {
        name: "ionic",
        path: "icons/service-icon/ionic.png",
      },
    ];
    setPath(backTech);
  };

  const handleOnCMS = () => {
    const cmsTech = [
      {
        name: "Flutter",
        path: "icons/service-icon/Flutter.png",
      },
      { name: "Android", path: "icons/service-icon/Android.png" },

      {
        name: "React Native",
        path: "icons/service-icon/React Native.png",
      },
      {
        name: "Augmented Reality",
        path: "icons/service-icon/Augmented Reality.png",
      },
      {
        name: "Virtual Reality",
        path: "icons/service-icon/Virtual Reality.png",
      },
      {
        name: "Swift",
        path: "icons/service-icon/Swift.png",
      },
      {
        name: "ionic",
        path: "icons/service-icon/ionic.png",
      },
      {
        name: "ionic",
        path: "icons/service-icon/ionic.png",
      },
      {
        name: "ionic",
        path: "icons/service-icon/ionic.png",
      },
    ];
    setPath(cmsTech);
  };
  useEffect(() => {
    setPath(mobileTech);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:false,
          autoplay: true,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false,
          autoplay: true,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          autoplay: true,
          initialSlide: 0,
        }
      }
    ]
  };

  return (
    <>
      {/* service body */}
      <Header/>
      <div className="service-container">
      <div className="service-container-body">
        <div className="service-container-body-left">
          <h1 className="service-h1  service-container-body-left-header">{techTitle}</h1>
          <p className="service-p">A Roadmap To The Emerging And Effective Web And CMS Development</p>
          <button className="primary-service-button" type="submit">
            Get a quote
          </button>
        </div>
        <div className="service-container-body-right">
          <img src={"icons/service-icon/Frame.png" }/>
        </div>
      </div>

      </div>

      {/* service navbar */}
      {/* <div className="service-container-nav-logo"> */}
      <Slider {...settings}>

          <div className="nav-logo-slider" >
              <img  src="images/video-chat-a-pro.png" alt="" />
            </div>
            <div className="nav-logo-slider">
              <img src="images/welcomeAi_2.png" alt="" />
            </div>
            <div className="nav-logo-slider" >
              <img src="images/bzigo.png" alt="" />
            </div>
            <div className="nav-logo-slider">
              <img src="images/desmania-design.png" alt="" />
            </div>
            <div className="nav-logo-slider" >
              <img src="images/vaayu.png" alt="" />
            </div>
            <div className="nav-logo-slider"  >
              <img src="images/domino-data-lab.png" alt="" />
            </div>
            <div className="nav-logo-slider">
              <img src="images/ucview_2.png" alt="" />
            </div>
            <div className="nav-logo-slider">
              <img src="images/golden-circle-app.png" alt="" />
            </div>
            </Slider>
      {/* </div> */}
      <div className="service-container service-container-body-content">
        <div className="service-container-body-left-content">{content1()}</div>
        <div className="service-container-body-right-content">
          <CompanyDescription />
        </div>
      </div>
      <div className="service-container service-container-body-content-2">
        {content2()}
      </div>

      <div className="service-footer d-flex flex-column justify-content-center align-items-center">
        <h2 className="service-h2 service-header text-center">Technologies We use</h2>
        <ul className="service-footer-nav-container">
          <li style={{ cursor: "pointer" }} onClick={handleOnMobile}>
            Mobile
          </li>
          <li style={{ cursor: "pointer" }} onClick={handleOnFrontend}>
            Frontend
          </li>
          <li style={{ cursor: "pointer" }} onClick={handleOnBackend}>
            Backend
          </li>
          <li style={{ cursor: "pointer" }} onClick={handleOnCMS}>
            CMS
          </li>
        </ul>
        <div className="service-container service-footer-nav-container-logo">
          <TechComponent path={path} />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ServiceForm;
