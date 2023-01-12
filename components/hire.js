import React, { useState, useEffect } from "react";
import Footer from "../pages/includes/footer";
import Header from "../pages/includes/header";
import ScheduleForm from "./schedule";
import Banner from "./banner";

const HireForm = ({
  bannerComponent,
  contentHeader,
  content1,
  content2,
  content3,
  content4,
  content5,
  bannerImage,
  techTitle,
  techImage,
}) => {
  return (
    <>
      {/* hire body */}
      <Header />
      <div className="hire-container">
        <div className="hire-container-body">
          {contentHeader()}
          <div className="hire-container-body-right">
            <ScheduleForm title={"Schedule Meeting"}/>
          </div>
        </div>
      </div>

      {/* hire navbar */}
      {/* <div className="hire-container-nav-logo"> */}
      {bannerComponent()}
      {/* </div> */}
      <div className="hire-container"></div>
      {content4()}
      <div className="hire-container"></div>
      {content5()}
      <div className="hire-container hire-container-body-content">
        <div className="hire-container-body-left-content">
          <div className="hire-team-c1 hire-container-body-left-content1">
            {content1()}
          </div>
          <div className="hire-team-c1 hire-container-body-left-content2">
            {content2()}
          </div>
        </div>

        {content3()}
      </div>
     
      <Footer />
    </>
  );
};

export default HireForm;
