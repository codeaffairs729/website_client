import TechComponent from "../../components/techComponent";
import HireServiceLayout from "../../components/hireServiceLayout";
import Banner from "../../components/banner";
import Head from "next/head";
import ScheduleForm from "../../components/schedule";
import Image from "next/image";
const techTitle = "Chatwoot";

const contentHeader = () => <div></div>;
const contentHeaderLeft = () => <div></div>;

const contentHeader1 = () => {
  return (
    <>
      <div className=" tech-service-body">
        <div className="tech-service-body-left">
          <h1 className="hire-team-header">{techTitle}</h1>
          <p className="text-danger mt-2"></p>
          <a
            target="_blank"
            href="/contact"
            className="header__btn btn btn_purple mt-5"
          >
            Get in Touch
          </a>
        </div>
        <div className="tech-service-body-left-right">
          {/* <img src="/icons/service-icon/chatwoot.webp" alt="chatwoot-image"/> */}
          <Image
              src="/icons/service-icon/chatwoot.webp"
              alt="chatwoot-image"
              width={280}
              height={280}
              />
        </div>
      </div>
    </>
  );
};

const content1 = () => {
  return (
    <>
      {/* Service container body content */}
      <div className="hire-container-body-left-content-1">
        <h2 className="hire-h2">All-In-One Communication Channel!</h2>
        <h3 className="hire-h3">Connect & Convert </h3>
        <p className="hire-p">
          Engage your customer in smooth conversational experiences that help to
          drive high-quality conversions and leads.
        </p>
        <h3 className="hire-h3">Offer Enriched Customer Experience </h3>
        <p className="hire-p">
          Communicate easily with your customers in more than 100 languages.
        </p>
        <h3 className="hire-h3">Offer Enriched Customer Experience </h3>
        <p className="hire-p">
          Communicate easily with your customers in more than 100 languages.
        </p>

        <h3 className="hire-h3">Proactive Customer Outreach </h3>
        <p className="hire-p">
          Solve your customer issues immediately as you will be notified
          instantly after receiving a message.
        </p>
      </div>
    </>
  );
};

const content7 = () => (
  <>
    <h2 className="hire-h2">Omnichannel Support Center</h2>
    <p className="hire-p">
      Chatwoot allows you to connect with eminent customer communication
      platforms such as Website live chat, Email, WhatsApp, Facebook, Instagram,
      Twitter, etc. This aids you deliver a reliable CX across various
      platforms- from a sole dashboard. <br />
      <br />
      At Code Garage Tech, we offer good customer service by providing a
      Chatwoot framework that helps your business achieve new heights of
      success.
    </p>
    <h2 className="hire-h2">Connect With Customers To Grow Your Business</h2>
    <p className="hire-p">
      Chatwoot supports self-hosted installations by default and you can easily
      own your customer data. The framework offers a wonderful experience to
      everyone, including your employees, partners, and customers.{" "}
    </p>
    <h3 className="hire-h3">Privacy Compliant, Open-source, and Self-hosted</h3>
    <div>TechComponent</div>
    <h3 className="hire-h3">Build End-To-End Engagement From Anywhere</h3>
    <div>
      <img src="" alt="Build End-To-End" />
    </div>
    <div>
      <h3 className="hire-h3">Communication, On The Go</h3>
      <p className="hire-p">
        We offer a Chatwoot framework that allows you to communicate, reply to
        messages, as well as collaborate with your customers instantly.{" "}
      </p>
      <img src="" alt="chat-app-images" />
    </div>
  </>
);

const bannerComponent = () => <Banner />;

const content6 = () => <TechComponent />;
const content4 = () => <div></div>;
const content5 = () => <div></div>;
const content2 = () => <div></div>;
const content3 = () => (
  <div className="form-service">
    <ScheduleForm
      title={"Schedule a Meeting"}
      requestOrigin={"Request generated from hire-team page"}
    />
  </div>
);
const Strapi = () => {
  return (
    <>
      <Head>
        <title>All-In-One Communication Channel - Chatwoot</title>

        <link
          rel="canonical"
          href="https://www.codegaragetech.com/services/chat-woot"
        />
        <meta
          name="description"
          content="Code Garage Tech provides a platform that helps you to engage with your customer in smooth conversational experiences. 
          "
        />
      </Head>

      <HireServiceLayout
        content1={content1}
        content2={content2}
        content3={content3}
        content4={content4}
        content5={content5}
        content6={content6}
        content7={content7}
        contentHeader1={contentHeader1}
        contentHeaderLeft={contentHeaderLeft}
        techTitle={techTitle}
        // techImage={techImage}
        bannerComponent={bannerComponent}
        contentHeader={contentHeader}
        requestOrigin={"Requested from Mobile solution page"}
      />
    </>
  );
};

export default Strapi;
