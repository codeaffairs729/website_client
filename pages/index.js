// import styles from '../styles/Home.module.css'
import Main from "./main";
import Package from "./package";
// import Work from "./work";
import Layouts from "./layouts";
// import Access from "./access";
// import Partners from "./partners";
// import Design from "./design";
import Teams from "./teams";
import Like from "./like";
import Footer from "./includes/footer";
import Image from "next/image";
import dynamic from "next/dynamic";

const Work = dynamic(() => import("./work"), {});
const Access = dynamic(() => import("./access"), {});
const Partners = dynamic(() => import("./partners"), {});
const Design = dynamic(() => import("./design"), {});



export default function Home() {
  return (
    <>
      <div className="page">
        <a
          href="https://api.whatsapp.com/send?phone=918146394889"
          className="whatsapp-btn-outer"
          title="Contact Us on whatsapp"
        >
          {/* <img
            className="whatsapp-btn"
            src="images/WhatsApp.webp"
            alt="3D Whatsapp Icon"
          /> */}
          <Image
            className="whatsapp-btn"
            src="/images/WhatsApp.webp"
            alt="3D Whatsapp Icon"
            width={50}
            height={50}
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
