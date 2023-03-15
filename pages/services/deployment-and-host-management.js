import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
import Image from 'next/image'
import ScheduleForm from '../../components/schedule'
const techTitle = 'Deployment and Host Management'
const contentHeader1 = () => {
  return (
    <>
      <div className="tech-service-body">
        <div className="tech-service-body-left">
          <h1 className="hire-h1">{techTitle}</h1>
          <ul className="hire-list-icon">
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                Re-Engineering your Development & Deployment Process
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                Platform Scalability And Flexibility
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">
                Simple To Use And Contextualize
              </p>
            </li>
            <li className="margine-bottom-16px">
              <p className="margin-left-25px">Easy To Upgrade And Update</p>
            </li>
          </ul>
        </div>
        <div className="tech-service-body-right">
          {/* <img src="/icons/service-icon/cloud.webp" alt="3D Cloud" /> */}
          <Image
            src="/icons/service-icon/Frame.webp"
            alt="Frame JPG"
            width={442}
            height={483}
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
        <h2 className="hire-h2 margin-bottom-24px">
          One-Stop Solution For All Businesses{' '}
        </h2>
        <p className="hire-p">
          We are a team of professionals that are dedicated to the deployment
          and management of systems. We take pride in our work, and we love what
          we do.
          <br /> <br />
          We understand that every company has different needs and goals, so we
          offer a wide range of services to meet those needs. Our team has
          extensive experience working with various types of software,
          including:
        </p>
        <ul className="hire-list margin-bottom-24px">
          <li>Linux and Windows Servers</li>
          <li>Cloud Servers</li>
          <li>Hypervisors (KVM, Xen)</li>
          <li>AWS Elastic Beanstalk</li>
          <li>Google Cloud Platform</li>
          <li>Heroku</li>
          <li>Microsoft Azure</li>
        </ul>
        <div className="shade-1">
          <div className="grey-shade"></div>
          <h2 className="hire-h2 margin-bottom-24px">
            <strong>
              Why Choose Code Garage Tech for Deployment and Host Management
              services
            </strong>
          </h2>

          <ul className="hire-list margin-bottom-24px">
            <li>
              We offer a wide range of services including deployment, hosting
              and maintenance. Our team of experts will take care of everything
              from start to finish so that you don&apos;t have to worry about
              anything.
            </li>
            <li>
              We believe that a company&apos;s IT infrastructure is the heart of
              their business. And we know that it&apos;s important to have an
              organized and reliable deployment process in place.
            </li>
            <li>
              When it comes to deployment and host management services, you
              don&apos;t have to choose between cutting-edge technology and
              cost-effective solutions. That&apos;s why we&apos;re here--to help
              you get the best of both worlds.
            </li>
          </ul>
        </div>
        {/* content-7 */}
        <h2 className="hire-h2">
          <b>Advantages of Deployment and Host Management Services</b>
        </h2>
        <ul className="hire-list">
          <li>
            The ability to test the application before it goes live, which
            improves the overall quality of the product.
          </li>
          <li>
            Reducing downtime. If an application is not properly tested, it can
            be prone to bugs and errors, which can cause problems for customers.
          </li>
          <li>
            Improving customer satisfaction by providing a better user
            experience. For example, if a customer is having issues with your
            website, it is much better than ignoring them or simply telling them
            that everything is working fine.
          </li>
          <li>Easy to test and customize according to your requirements</li>
          <li>Save time on manual tasks like configuration changes/updates</li>
        </ul>

        <p className="hire-p">
          If you&apos;re looking for a deployment and hosting provider that can
          help you get your site off the ground, look no further. We&apos;ve
          been in business since 2015, and we know what it takes to make a
          website run smoothly. <br />
          <br />
          We offer both deployment and hosting services, so whether you need us
          to set up your new website or just host it while you&apos;re building
          it, we can help.
        </p>
      </div>
    </>
  )
}

const content3 = () => (
  <div className="form-service">
    <ScheduleForm
      title={'Schedule a Meeting'}
      requestOrigin={'Request generated from Deployment Host Management page'}
    />
  </div>
)
const DeploymentHostManagement = () => {
  return (
    <>
      <Head>
        <title>Reliable & Best Deployment and Host Management Services </title>
        <link
          rel="canonical"
          href="https://codegaragetech.com/services/deployment-and-host-management"
        />
        <meta
          name="description"
          content="Code Garage Tech’s software deployment tools help IT admins in deployment automation with flexibility and control over the Hosting management process.
          "
        />
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

export default DeploymentHostManagement