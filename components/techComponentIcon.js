import React from "react";
const TechComponentIcon = ({ path }) => {
  return (
    <div className="tech-container">
      {path.map((e, i) => (
        <div className="tech-container-div" key={i}>
          <img className="tech-container-img" src={e.path} alt={e.altImg}/>
          <p className="tech-container-para">{e.name}</p>
        </div>
      ))}
    </div>
  );
};
export default TechComponentIcon;
