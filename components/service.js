import React, { useState, useEffect } from "react";
import CompanyDescription from "./company-description";
import TechComponent from "./techComponent";
import Footer from "../pages/includes/footer";
import Header from "../pages/includes/header";
import Banner from "./banner";

const ServiceForm = ({ content1, content2, techTitle, techImage }) => {
  const mobileTech = [
    { id: 1, name: "Android", path: "/icons/service-icon/Android.webp" },
    {
      id: 2,
      name: "Flutter",
      path: "/icons/service-icon/Flutter.webp",
    },
    {
      id: 3,
      name: "React Native",
      path: "/icons/service-icon/React Native.webp",
    },
    {
      id: 4,
      name: "Augmented Reality",
      path: "/icons/service-icon/Augmented Reality.webp",
    },
    {
      id: 5,
      name: "Virtual Reality",
      path: "/icons/service-icon/Virtual Reality.webp",
    },
    {
      id: 6,
      name: "Swift",
      path: "/icons/service-icon/Swift.webp",
    },
    {
      id: 7,
      name: "ionic",
      path: "/icons/service-icon/ionic.webp",
    },
  ];
  const [path, setPath] = useState(mobileTech);

  const handleOnMobile = () => {
    setPath(mobileTech);
  };
  
  const handleOnFrontend = () => {
    const frontTech = [
      // {
      //   name: "ionic",
      //   path: "/icons/service-icon/ionic.webp",
      // },
      // { name: "Android", path: "/icons/service-icon/Android.webp" },
      // {
      //   name: "Flutter",
      //   path: "/icons/service-icon/Flutter.webp",
      // },
      // {
      //   name: "React Native",
      //   path: "/icons/service-icon/React Native.webp",
      // },
      // {
      //   name: "Augmented Reality",
      //   path: "/icons/service-icon/Augmented Reality.webp",
      // },
      // {
      //   name: "Virtual Reality",
      //   path: "/icons/service-icon/Virtual Reality.webp",
      // },
      // {
      //   name: "Swift",
      //   path: "/icons/service-icon/Swift.webp",
      // },
      // {
      //   name: "ionic",
      //   path: "/icons/service-icon/ionic.webp",
      // },
      // {
      //   name: "ionic",
      //   path: "/icons/service-icon/ionic.webp",
      // },
    ];
    setPath(frontTech);
  };
  const handleOnBackend = () => {
    const backTech = [
      // { name: "Android", path: "/icons/service-icon/Android.webp" },
      // {
      //   name: "Flutter",
      //   path: "/icons/service-icon/Flutter.webp",
      // },
      // {
      //   name: "React Native",
      //   path: "/icons/service-icon/React Native.webp",
      // },
      // {
      //   name: "Virtual Reality",
      //   path: "/icons/service-icon/Virtual Reality.webp",
      // },
      // {
      //   name: "Swift",
      //   path: "/icons/service-icon/Swift.webp",
      // },
      // {
      //   name: "ionic",
      //   path: "/icons/service-icon/ionic.webp",
      // },
      // {
      //   name: "ionic",
      //   path: "/icons/service-icon/ionic.webp",
      // },
      // {
      //   name: "ionic",
      //   path: "/icons/service-icon/ionic.webp",
      // },
    ];
    setPath(backTech);
  };

  return (
    <>
      <div className="service-footer d-flex flex-column justify-content-center align-items-center">
        <h2 className="service-h2 service-header text-center">
          Technologies We use
        </h2>
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
        </ul>
        <div className="service-container service-footer-nav-container-logo">
          <TechComponent path={path} />
        </div>
      </div>
    </>
  );
};

export default ServiceForm;
