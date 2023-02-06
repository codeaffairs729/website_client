// import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";
// // import Main from "./main";
// import Package from "./package";
// import Work from "./work";
// import Layouts from "./layouts";
// import Access from "./access";
// import Partners from "./partners";
// import Design from "./design";
// import Teams from "./teams";
// import Like from "./like";
// import Footer from "./includes/footer";

const Main = dynamic(() => import("./main"), {
  loading: () => "",
});
const Package = dynamic(() => import("./package"), {
  loading: () => "",
});
const Work = dynamic(() => import("./work"), {
  loading: () => "",
});
const Layouts = dynamic(() => import("./layouts"), {
  loading: () => "",
});
const Access = dynamic(() => import("./access"), {
  loading: () => "",
});
const Partners = dynamic(() => import("./partners"), {
  loading: () => "",
});
const Design = dynamic(() => import("./design"), {
  loading: () => "",
});
const Teams = dynamic(() => import("./teams"), {
  loading: () => "",
});
const Like = dynamic(() => import("./like"), {
  loading: () => "",
});
const Footer = dynamic(() => import("./includes/footer"), {
  loading: () => "",
});

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
