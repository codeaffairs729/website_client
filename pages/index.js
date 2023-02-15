// import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";
import Main from "./main";
// import Package from "./package";
// import Work from "./work";
// import Layouts from "./layouts";
// import Access from "./access";
// import Partners from "./partners";
// import Design from "./design";
// import Teams from "./teams";
// import Like from "./like";
import Footer from "./includes/footer";
import Image from "next/image";

const Package = dynamic(() => import("./package"), {});
const Work = dynamic(() => import("./work"), {});
const Layouts = dynamic(() => import("./layouts"), {});
const Access = dynamic(() => import("./access"), {});
const Partners = dynamic(() => import("./partners"), {});
const Design = dynamic(() => import("./design"), {});
const Teams = dynamic(() => import("./teams"), {});
const Like = dynamic(() => import("./like"), {});

export default function Home() {
  return (
    <>
      <div className="page">
        <a
          href="https://api.whatsapp.com/send?phone=918146394889"
          className="whatsapp-btn-outer"
          title="Contact Us on whatsapp"
        >
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
        <Work />
        <Layouts />
        <Access />
        <Partners />
        <Design />
        <Teams />
        <Like />
        <Footer />
      </div>
    </>
  );
}
