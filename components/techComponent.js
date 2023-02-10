import { useState } from "react";
import Image from "next/image";
const TechComponent = ({ techList }) => {
  const mobileTech = [
    {
      id: 1,
      name: "Android",
      path: "/icons/service-icon/Android.webp",
      altImg: "Android-png",
      desc: "Our developer provides the best WordPress Web Development to create an efficient website.",
      techWidth: "82",
    },
    {
      id: 2,
      name: "Flutter",
      path: "/icons/service-icon/Flutter.webp",
      altImg: "Flutter-png",
      desc: "Our developer provides the best WordPress Web Development to create an efficient website.",
      techWidth: "83",
    },
    {
      id: 3,
      name: "React Native",
      path: "/icons/service-icon/React Native.webp",
      altImg: "React-Native-png",
      desc: "Our developer provides the best WordPress Web Development to create an efficient website.",
      techWidth: "82",
    },
    {
      id: 4,
      name: "Augmented Reality",
      path: "/icons/service-icon/Augmented Reality.webp",
      altImg: "Augmented-png",
      desc: "Our developer provides the best WordPress Web Development to create an efficient website.",
      techWidth: "77",
    },
    {
      id: 5,
      name: "Virtual Reality",
      path: "/icons/service-icon/Virtual Reality.webp",
      altImg: "Virtual-Reality-png",
      desc: "Our developer provides the best WordPress Web Development to create an efficient website.",
      techWidth: "82",
    },
    {
      id: 6,
      name: "Swift",
      path: "/icons/service-icon/Swift.webp",
      altImg: "Swift Icon",
      desc: "Our developer provides the best WordPress Web Development to create an efficient website.",
      techWidth: "82",
    },
    {
      id: 7,
      name: "ionic",
      path: "/icons/service-icon/ionic.webp",
      altImg: "ionic-png",
      desc: "Our developer provides the best WordPress Web Development to create an efficient website.",
      techWidth: "82",
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
      <div className="tech-component-container">
        <h2 className="hire-h2">
          The Technologies And Services We Use For Website & CMS Development
        </h2>
        <p className="hire-h4">
          Innovative and Advanced Technologies for the Website & CMS Development
        </p>
        {/* {mobileTech.map((element) => (
          <div>
            <img src={element.path} style={{ height: "82px" }} />
          </div>
        ))} */}
        <div className="d-flex flex-column gap-col">
          {mobileTech.map((element,index) => (
            <div className="d-flex flex-column" key={index}>
              <div className="d-flex aling-items-center">
                <Image
                  src={element.path}
                  alt={element.altImg}
                  width={element.techWidth}
                  height={82}
                />
                <h3 className="hire-h3 ms-3 my-auto">{element.name}</h3>
              </div>
              <p className="hire-h4">{element.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechComponent;
