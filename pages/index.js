import React, { useEffect, useState } from "react";
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Main from "./main";
import Features from "./features";
import Access from "./access";
import Layouts from "./layouts";
import Like from "./like";
import Plan from "./plan";
import Work from "./work";
import Teams from "./teams";
import Speed from "./speed";
import Package from "./package";
import Demo from "./demo";
import Design from "./design";
import Details from "./details";
import Tool from "./tool";
import Roadmap from "./roadmap";
import Accord from "./accord";
import Partners from "./partners";
import Quality from "./quality";
import Showcase from "./showcase";
import Offer from "./offer";

import Footer from "./includes/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="page">
        <Link href="https://api.whatsapp.com/send?phone=918146394889">
          <a className="whatsapp-btn-outer" title="Contact Us on whatsapp">
            <img className="whatsapp-btn" src="images/WhatsApp.webp" alt="" />
          </a>
        </Link>
        <Main />
        <Package />
        {/* <Features /> */}
        <Work />
        <Layouts />
        <Access />
        <Partners />
        <Design />
        <Teams />
        <Like />

        {/* <Plan />
        <Speed />
        <Demo />
        <Details />
        <Tool />
        <Roadmap />
        <Accord />
        <Quality />
        <Showcase />
        <Offer /> */}
        <Footer />
      </div>
    </>
  );
}
