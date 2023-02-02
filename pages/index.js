import dynamic from "next/dynamic";
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Main from "./main";
// import Access from "./access";
// import Layouts from "./layouts";
// import Like from "./like";
// import Work from "./work";
// import Teams from "./teams";
// import Package from "./package";
// import Design from "./design";
// import Partners from "./partners";

const Access = dynamic(() => import("./access"), {});
const Layouts = dynamic(() => import("./layouts"), {});
const Like = dynamic(() => import("./like"), {});
const Work = dynamic(() => import("./work"), {});
const Teams = dynamic(() => import("./teams"), {});

const Package = dynamic(() => import("./package"), {});
const Design = dynamic(() => import("./design"), {});
const Partners = dynamic(() => import("./partners"), {});

const Footer = dynamic(() => import("./includes/footer"), {});

export default function Home() {
  return (
    <>
      <div className="page">
        <a
          href="https://api.whatsapp.com/send?phone=918146394889"
          className="whatsapp-btn-outer"
          title="Contact Us on whatsapp"
        >
          <img
            className="whatsapp-btn"
            src="images/WhatsApp.webp"
            alt="3D Whatsapp Icon"
          />
        </a>

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
