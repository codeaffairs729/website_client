import React, { useState, useEffect } from "react";
import TechComponentIcon from "./techComponentIcon";


const TechComponent = ({ content1, content2, techTitle, techImage }) => {
  const mobileTech = [
    { id: 1, name: "Android", path: "/icons/service-icon/Android.webp" },
    {
      id: 2,
      name: "Flutter",
      path: "/icons/service-icon/Flutter.webp",
      altImg: "",
    },
    {
      id: 3,
      name: "React Native",
      path: "/icons/service-icon/React Native.webp",
      altImg: "",
    },
    {
      id: 4,
      name: "Augmented Reality",
      path: "/icons/service-icon/Augmented Reality.webp",
      altImg: "",
    },
    {
      id: 5,
      name: "Virtual Reality",
      path: "/icons/service-icon/Virtual Reality.webp",
      altImg: "",
    },
    {
      id: 6,
      name: "Swift",
      path: "/icons/service-icon/Swift.webp",
      altImg: "Swift Icon",
    },
    {
      id: 7,
      name: "ionic",
      path: "/icons/service-icon/ionic.webp",
      altImg: "",
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
          <li className="cursor_pointer" onClick={handleOnMobile}>
            Mobile
          </li>
          <li className="cursor_pointer" onClick={handleOnFrontend}>
            Frontend
          </li>
          <li className="cursor_pointer" onClick={handleOnBackend}>
            Backend
          </li>
        </ul>
        <div className="service-container service-footer-nav-container-logo">
          <TechComponentIcon path={path} />
        </div>
      </div>
    </>
  );
};

export default TechComponent;
