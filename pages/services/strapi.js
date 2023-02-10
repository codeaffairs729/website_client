import TechComponent from "../../components/techComponent";
import HireServiceLayout from "../../components/hireServiceLayout";
import Banner from "../../components/banner";
import Head from "next/head";
import ScheduleForm from "../../components/schedule";
import Image from "next/image";
import Link from "next/link";
const techTitle = "Strapi";

const contentHeader = () => <div></div>;
const contentHeaderLeft = () => <div></div>;

const contentHeader1 = () => {
  return (
    <>
      <div className="tech-service-body">
        <div className="tech-service-body-left">
          <h1 className="hire-h1">{techTitle}</h1>
          <p className="hire-desc">
            We develop superior mobile applications that provide users with a
            seamless and lag-free experience on all contemporary platforms and
            devices.- Mobile.
          </p>
          <a
            target="_blank"
            href="/contact"
            className="header__btn btn btn_purple mt-5"
          >
            Get in Touch
          </a>
        </div>
        <div className="tech-service-body-right">
          <Image
            src="/icons/service-icon/strapi-frame.webp"
            alt="strapi-image"
            width={311}
            height={341}
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
        <p className="hire-p">
          Strapi is a preeminent open-source headless Content Management System
          (CMS) of node.js, uses koa as its framework. It’s 100% reliable and
          fully customizable.
        </p>
      </div>
      <div className=" hire-container-body-left-content-2">
        <h3 className="hire-h3">Develop Applications Faster</h3>
        <p className="hire-p">
          Building customizable, performant, and self-hosted content API that
          has never been facile.{" "}
        </p>
        <h3 className="hire-h3">Customizable</h3>
        <p className="hire-p">
          Conveniently customize the API, query resolvers, and admin panel. You
          can extend your CMS (Content Management System) with Strapi plugins,
          in a few seconds. One can also create plugins for Strapi.
        </p>

        <h3 className="hire-h3">GraphQL or RESTful</h3>
        <p className="hire-p">
          Using Strapi GraphQL or RESTful, you can consume API from mobile
          applications, IoT devices, any client(Vue, React, Angular).
        </p>

        <h3 className="hire-h3">Open Source</h3>
        <p className="hire-p">
          The whole codebase is available on GitHub and maintained by many
          contributors.
        </p>
        <h3 className="hire-h3">Self-Hosted </h3>
        <p className="hire-p">
          You can now keep full control of your private data as well as cost
          with the help of Strapi.
        </p>

        {/* CONTENT 7 */}
        <Link href="/hire-team">
          <div className="heading-blue cursor_pointer">
            <h2 className="hire-h2-blue">Hire Adept Strapi Developers</h2>
            <Image
              src="/icons/service-icon/Arrow Right.svg"
              width={16}
              height={16}
            />
          </div>
        </Link>
        <p className="hire-p">
          We create customized Strapi (CMS) Content Management Systems as per
          your business interface. Our skilled team of Strapi developers develop
          the best and reliable softwares for you.{" "}
        </p>
        <div className="grey-shade">
          <h2 className="hire-h2">Strapi- Provides a Range of Benefits! </h2>

          <h3 className="hire-h3">Shorten The Time-To-Deploy</h3>

          <p className="hire-p">
            Build your projects in a few hours instead of weeks with Strapi.
          </p>

          <h3 className="hire-h3">
            Manage Your Content Easily, and Deliver It Anywhere
          </h3>

          <p className="hire-p">
            With matchless customization, ubiquitous connectivity, unstoppable
            productivity, and unbeatable control, you can manage your content
            easily.
          </p>

          <h3 className="hire-h3">A Smooth Multi-Device Experience</h3>

          <p className="hire-p">
            With the help of Strapi you can develop splendid omnichannel digital
            experiences. You can now distribute your content from one Content
            Management System (CMS) to any digital channel, product, or device.
          </p>
        </div>
        <h2 className="hire-h2">Strapi Is A Selected Headless CMS For:</h2>
        <h3 className="hire-h3">Developers</h3>
        <p className="hire-p">
          Strapi CMS helps developers to easily customize as well as extend any
          project with your favorite tool and tech stack.
        </p>

        <h3 className="hire-h3">Product Managers </h3>
        <p className="hire-p">
          Strapi helps Product Managers to develop a customizable and flexible
          delivery pipeline and content architecture, allowing teams to be more
          productive and agile than ever before.
        </p>
        <h3 className="hire-h3">Content Managers </h3>
        <p className="hire-p">
          Strapi helps Content Managers to easily manage the content via a
          user-friendly interface.
        </p>
        <h3 className="hire-h3">Business Leaders </h3>
        <p className="hire-p">
          Strapi helps in boosting up the development as well as delivery of
          contemporary digital experiences.
        </p>
        <h2 className="hire-h2 margin-bottom-8">Why Choose Us?</h2>
        <p className="hire-p">
          We offer effective back-end services with the help of Strapi that can
          provide customization to your application or website as per your
          business requirements.
        </p>
        {/* CONTENT7 END */}
      </div>
    </>
  );
};
const content7 = () => (
  <>
    <div></div>
  </>
);

const bannerComponent = () => <Banner />;

// const content6 = () => <TechComponent />;
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
        <title>Preeminent open-source headless CMS - Strapi</title>
        <link
          rel="canonical"
          href="https://www.codegaragetech.com/services/strapi"
        />
        <meta
          name="description"
          content="At Code Garage Tech, we create customized Strapi (CMS) as per your business interface. Our skilled team of Strapi developers create the best softwares for you. 

          "
        />
      </Head>

      <HireServiceLayout
        content1={content1}
        content2={content2}
        content3={content3}
        content4={content4}
        content5={content5}
        // content6={content6}
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
