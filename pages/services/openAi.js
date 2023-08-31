import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
import Image from 'next/image'
import ScheduleForm from '../../components/schedule'
import styles from '../../styles/Services.module.css'
import hireService from '../../styles/hireService.module.css'

const techTitle = 'Open AI Services Provider'
const contentHeader1 = () => {
  return (
    <>
      <div className={hireService.techservicebody}>
        <div className={hireService.techservicebodyleft}>
          <h1 className={hireService.hireh1}>{techTitle}</h1>
          <ul
            className={`${hireService.hirelisticon} ${hireService.hire_list_items_services} `}
          >
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Dedicated & Adept team of AI App Developers
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Well-versed with OpenAI APIs such as GPT
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Best and reliable coding practices
              </p>
            </li>
            <li className={hireService.marginebottom16px}>
              <p className={hireService.marginleft25px}>
                Highly safe and secure app solutions
              </p>
            </li>
          </ul>
        </div>
        <div className={hireService.techservicebodyright}>
          {/* <img src="/icons/service-icon/cloud.webp" alt="3D Cloud" /> */}
          <Image
            src="/icons/openai1.svg"
            alt="3D Cloud"
            width={378}
            height={280}
            priority={true}
          />
        </div>
      </div>
    </>
  )
}

const content1 = () => {
  return (
    <>
      {/* Service container body content */}
      <div className="hire-container-body-left-content-1">
        <p className={hireService.hirep}>
          Do you want to leverage the power of OpenAI to develop powerful mobile
          apps for your business? CodeGarage is a top-notch AI application
          development company as we design, build, and deliver custom AI app
          development solutions using OpenAPIs such as Chat GPT. <br />
          <br />
          OpenAI offers robust APIs that assist developers to create intelligent
          and excellent mobile app solutions. The mobile applications developed
          using Artificial Intelligence (AI) assist many enterprises to automate
          operations as well as tasks. Hence, it aids to improve staff
          efficiency, and productivity, saving efforts and time. <br />
          <br />
        </p>
        <a
          href="/contact"
          className="header__btn btn-none btn btn_pink"
          target="_blank"
        >
          Get a Free Quote
        </a>
        {/* <h2 className={`${hireService.hireh2} ${hireService.marginbottom24px}`}>
          Our Process of Building AI Apps Using Open AI
        </h2> */}
        <div
          className={`${styles.services_image_container} ${styles.openai_image} `}
        >
          <Image
            src="/services_images/openai.png"
            alt="OpenAI Processes"
            width={800}
            height={800}
            priority={true}
            objectFit="contain"
          />
        </div>
        <h2 className={`${hireService.hireh2} ${hireService.marginbottom24px}`}>
          Out-of-the-box Open AI App Development Solutions
        </h2>
        <p>
          The world is thrilled by the intelligence of Chat GPT and everyone is
          talking about its distinctive implications. ChatGPT is an ideal
          example of a robust OpenAI application.
          <br />
          <br />
          Do you want to develop an OpenAI application ChatGPT? Want to know
          about the capabilities of Artificial Intelligence (AI) for your
          upcoming big project and want to make it a huge success?
          CodeGarageTech can help, we provide custom AI application development
          solutions. Our team of developers has thorough knowledge and
          experience in using AI to develop outstanding applications for
          numerous industries.
          <br />
          <br />
          Well, OpenAI seems like the latest innovation, but at Code Garage we
          have built simple to complex solutions using OpenAI. Hence, you can
          choose us and relish the perks of collaborating with a reliable AI
          development Company.
        </p>
        {/* content 7 */}
        <div className={hireService.shade1}>
          <div className={hireService.greyshade}></div>
          {/* <h2 className="hire-h2 margin-bottom-24px text-center">
            Our UI/UX Process
          </h2> */}
          {/* image required */}
          <h2
            className={`${hireService.hireh2} ${hireService.marginbottom24px}`}
          >
            Artificial App Development Solutions Using OpenAI
          </h2>
          <ul className={hireService.hirelist}>
            <li>
              <h3 className={hireService.hireh3}>
                <b>AI Consulting </b>
              </h3>
            </li>
          </ul>
          <p className={`${hireService.hirep}  ${hireService.marginleft22px}`}>
            {/* <p className="hire-p margin-left-22px"> */}
            Do you want to clear your doubts regarding OpenAI technology? Our
            adept AI consultants can solve all your doubts and queries related
            to using OpenAI to build mobile applications for your project.
            Contact us now!
          </p>
          <ul className={hireService.hirelist}>
            <li>
              <h3 className={hireService.hireh3}>AI & ML App Development</h3>
            </li>
          </ul>
          <p className={`${hireService.hirep}  ${hireService.marginleft22px}`}>
            Wondering to build a powerful mobile application using ML and AI?
            Code Garage, as one of the top-notch AI application development
            companies, can provide you with reliable app solutions.
          </p>
          <ul className={hireService.hirelist}>
            <li>
              <h3 className={hireService.hireh3}>DevOps Development</h3>
            </li>
          </ul>
          <p className={`${hireService.hirep}  ${hireService.marginleft22px}`}>
            Do you want to know how AI can help streamline the application
            development and delivery procedure? We at Code Garage can assist you
            in enhancing the efficiency of your mobile application development
            process using ML and AI.
          </p>
          <ul className={hireService.hirelist}>
            <li>
              <h3 className={hireService.hireh3}>
                API Development & Integration
              </h3>
            </li>
          </ul>
          <p className={`${hireService.hirep}  ${hireService.marginleft22px}`}>
            Do you want some help developing reliable and scalable APIs? Code
            Garage, design, build, and implement custom APIs that can
            conveniently manage huge data as well as user requests that are
            needed to smoothly integrate with the backend of your mobile app.
          </p>
          <ul className={hireService.hirelist}>
            <li>
              <h3 className={hireService.hireh3}>
                Chatbot Application Development
              </h3>
            </li>
          </ul>
          <p className={`${hireService.hirep}  ${hireService.marginleft22px}`}>
            Do you want to escalate your user engagement and want to deliver
            magnified user experiences? We can assist you to stay in touch with
            your customers by offering reliable Chatbot app development
            solutions.
          </p>
          <ul className={hireService.hirelist}>
            <li>
              <h3 className={hireService.hireh3}>Testing & Debugging</h3>
            </li>
          </ul>
          <p className={`${hireService.hirep}  ${hireService.marginleft22px}`}>
            We make sure to offer custom mobile apps that are free from bugs,
            secure, and compatible with every device as well as the environment.
            Our team of AI application developers test the mobile app thoroughly
            and do various arduous manual as well as automated tests just to
            deliver the best and most reliable quality services.
          </p>
          <h2
            className={`${hireService.hireh2} ${hireService.marginbottom24px}`}
          >
            Looking for a top-notch OpenAI application development company?
            <br />
            <br />
            <a
              href="/contact"
              className="header__btn btn-none btn btn_pink"
              target="_blank"
            >
              Contact us Now
            </a>
          </h2>
        </div>
      </div>
    </>
  )
}

const content3 = () => (
  <div className={hireService.formservice}>
    <ScheduleForm
      title={'Schedule a Meeting'}
      requestOrigin={'Request generated from openAi page'}
    />
  </div>
)
const OpenAI = () => {
  return (
    <>
      <Head>
        <title>OpenAI (ChatGPT) - </title>
        <link
          rel="canonical"
          href="https://codegaragetech.com/services/openAi"
        />
        <meta name="description" content="Open AI Chat GPT " />
      </Head>
      <HireServiceLayout
        content1={content1}
        content3={content3}
        isIconExit={true}
        contentHeader1={contentHeader1}
        techTitle={techTitle}
        bannerComponent={Banner}
        requestOrigin={'Requested from Miscellaneous page'}
      />
    </>
  )
}

export default OpenAI
