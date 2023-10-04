import React from 'react'
import styles from '../../styles/blogStyle.module.css'
import hireService from '../../styles/hireService.module.css'
import Image from 'next/image'
import About from '../../components/case-study/About'
import { useRouter } from 'next/router'
const Video = ({ Casedata }) => {
  const router = useRouter()
  const id = router.query.id
  console.log(id)
  const alldata = [
    {
      id: '1',
      title: 'Diveroid',
      about:
        'This case study focuses on a mobile application specially designed to record underwater diving adventures. Through this app, users can effortlessly capture underwater photos and create videos. This application ensures safety by offering details about pressure, temperature, and other factors under water. The app safety alerts will notify you if you have reached your depth stop, or ascending too fast. In the case of an emergency, the app will let you know what to do at the current depth to stay safe. It also supports free diving mode with features including, a stopwatch for static apnea, and boat calling. This application functions without any phone signal and displays information, such as dive duration, and no-decompression limit (NDL) to prevent accidents and decompression sickness.',
      Active: '20,000',
      Logs: '10 Lakh',
      AppDownloads: '50k, in one year',
      Challenges: [
        'Underwater image enhancement.',
        'In-app implementation of Buhlmann Decompression.',
        'Complex system design',
        'Synchronization of log data with the cloud, such as Images, Videos, Meta-data information',
        'Complex scientific data analysis and representation',
        'Complex environment simulation for testing',
      ],
      Solutions: [
        {
          info: 'For a real-time image enhancement experience, we integrated an AI model into the mobile application that dynamically refines and enriches the visuals of photos and videos. We also created a logbook within the mobile app (client side) that compiles images, videos, and metadata information. Client-side compilation is vital due to the lack of cellular network availability underwater. Upon the diver return and subsequent reconnection of the app to the internet, a seamless mechanism automatically synchronizes the data with the cloud.',
          solimg: '/case_study/turtle.png',
        },
        {
          info: ' We organized a meeting with Physics Ph.D. holders who helped us in implementing the Buhlmann Decompression. Their expertise provided some insights, and with the help of that, we were able to design complex scientific algorithms to represent gathered data.',
          solimg: '/case_study/effort_pixel_2.png',
        },
        {
          info: 'We acquired the necessary equipment, such as pressure chambers, and established a dark room to simulate a virtual environment for testing purposes. This helped us in conducting controlled experiments and accurately assessing the performance under various conditions. By utilizing pressure chambers and a dark room to simulate a virtual environment, we replicated real-world scenarios of our applications capabilities.',
          solimg: '/case_study/Group_pic_7.png',
        },
      ],
      Results:
        'This innovative mobile application and hardware device have proven invaluable to scuba divers, as it significantly reduces their expenses by eliminating the need to purchase separate types of equipment, such as a Diving computer and GoPro camera. In contrast to other exorbitantly priced diving gears, the hardware device and application serve as a cost-saving measure. Together, the app and device provided a user-friendly diving experience.',
      img: '/blogs/3d-disk.png',
      resimg: '/case_study/result_pixel_1.png',
      challengeimg1: '/case_study/Group_pic_5.png',
      challengeimg2: '/case_study/Group_pic_6.png',
    },
    {
      id: '2',
      title: 'International E-Commerce',
      about:
        'An e-commerce website that enables international buyers to access products from diverse countries, particularly fashion-related items that might not be readily available in their local markets. Here, users can find limited edition items and local trends across the globe. Within this website, users can also customise their products according to their requirements and can directly connect with the seller if they have any queries.To save on international shipping costs, this website offers the option of consolidating multiple items from different orders into a single shipment, helping users save on shipping fees.',
      Active: '20,000',
      Logs: '10 Lakh',
      AppDownloads: '50k, in one year',
      Challenges: [
        'Manage large product catalogs.',
        'Ensuring consistent user experience.',
        'Product customization feature complexity',
        'Implementation of Augmented Reality (AR)',
        'Ensuring security',
        'Manage multiple payment gateways with local banks',
      ],
      Solutions: [
        {
          info: 'To manage large product catalogs, we used AWS services such as Amazon S3 (Simple Storage Service), Amazon RDS (Relational Database Service), and chose multi-tier database architecture to optimize dataset queries and faster retrieval times. Next, we offered a UI through which users can add text or photos to the product. Our frontend architecture is designed to provide a clear and intuitive layout for displaying customization options and previews of products.',
          solimg: '/case_study/byuma_efforts.png',
        },
        {
          info: ' We designed a backend architecture that supports the customization feature.We employed the WebAR framework to implement the Augmented Reality feature on the website. Techniques like LOD (Level of Detail) were employed to manage complex AR models. For enhanced security measures, we integrated a 3D payment gateway to add an additional layer of safety for users during the payment process.',
          solimg: '/case_study/byuma1.png',
        },
        {
          info: 'We integrated multiple payment gateways based on the international target audience, geographical reach, and supported currencies. To streamline the integration process, we implemented an abstraction layer to manage interactions with different gateways.',
          solimg: '/case_study/byuma2.png',
        },
      ],
      Results:
        'The implementation of the solutions mentioned above has resulted in a user-focused, secure, e-commerce website. These outcomes have collectively contributed to increased customer satisfaction, higher conversion rates, and a stronger competitive position in the market, ensuring the ongoing success of the website.',
      img: '/case_study/byuma.png',
      resimg: '/case_study/byuma_results.png',
      challengeimg1: '/case_study/byuma_challenge_1.png',
      challengeimg2: '/case_study/byuma_challenge_2.png',
    },
    {
      id: '3',
      title: 'Logistics Management',
      about:
        'A SAS mobile and web application that is specifically designed for the residential and commercial moving and storage industry. It offers streamlined online transportation services from various providers, with the aim of simplifying the management of moving operations. It has the ability to conduct and create an estimate on-site.The application empowers movers to view their jobs, alert the customer through a GPS when they are en route, access the customer digital invoice, and capture payment once the move is complete. ',
      Active: '20,000',
      Logs: '10 Lakh',
      AppDownloads: '50k, in one year',
      Challenges: [
        'Complex data representation',
        'Scaling for large infrastructure',
        'Complex user interface',
        'Cost-cutting algorithms',
      ],
      Solutions: [
        {
          info: 'The application requires collaboration between different teams, including developers, quality assurance, and operations, so that why we used the DevOps methodology to promote better communication and collaboration between these teams.We used microservices architecture, containerization (e.g., Docker), and serverless computing to decouple components and scale independently. Within this application, AWS services were implemented to make the app performance seamless. We implemented Google Maps functionality into the web application, allowing users to track the real-time location of their trucks.',
          solimg: '/case_study/move_efforts.png',
        },
        {
          info: 'Initially, the user was facing For managing a complex user interface, our UI/UX team strategically incorporated minimal elements and enabled extra features that can only be introduced when needed by the user. To ensure user-friendliness, we integrated instructional tutorials within the app, simplifying its usability and comprehension',
          solimg: '/case_study/move1.png',
        },
      ],
      OfflineOnlineWorkingandSynchronize:
        'Truck drivers often need to operate in remote areas with limited network availability, so we developed a feature that ensures seamless data transfer between the front-end and back-end of the application. While offline, truck drivers can still access essential features, such as tracking shipments and managing orders. Any data entered or actions performed during offline mode are stored locally on the device. When the truck driver switches to online mode, the feature automatically synchronizes the offline data with the backend server. This ensures that all orders, shipment details, and delivery updates are accurately recorded in real-time.',
      Results:
        'Overall, the solutions collectively contribute to a more efficient, reliable, and customer-centric moving and storage application. Despite having a complex infrastructure, the application bridged the operational gaps and set new standards of efficiency, user experience, and technological integration through regular updates. This transformative approach significantly simplifies the management of moving operations..',
      img: '/case_study/move-it-pro.png',
      resimg: '/case_study/move_results.png',
      challengeimg1: '/case_study/move_challenge_1.png',
      challengeimg2: '/case_study/move_challenge_2.png',
    },
    {
      id: '4',
      title: 'Video Call Support',
      about:
        'A web application that allows customers to connect with service providers via video chat. Contractors and technicians specializing in plumbing, HVAC, landscaping, electrical work, appliances, or automotive repair can assist customers instantly through video chat and are available 24/7 to provide guidance on any do-it-yourself repairs or installations. ',
      Active: '20,000',
      Logs: '10 Lakh',
      AppDownloads: '50k, in one year',
      Challenges: [
        'Multi-zone scheduling overlapping',
        'Dynamic Search Engine Optimization',
        'Service Provider/Customer Engagement',
        'Seamless Calling Experience',
        'Heavy loading performance optimization',
        'Large Database/Query optimization',
      ],
      Solutions: [
        {
          info: 'To tackle the issue of overlapping schedules across multiple zones, we developed and implemented an intelligent scheduling algorithm that takes into account the schedules of all zones involved. This algorithm optimized time slots based on availability, priority, and constraints, eliminating the chances of overlapping.',
          solimg: '/case_study/video_efforts.png',
        },
        {
          info: 'For managing dynamic SEO, we took proactive steps by convening a meeting with SEO experts. This collaborative session enabled us to gain invaluable insights into the most effective techniques for optimizing meta tags and implementing best practices for site maps.  We refined our approach to dynamic SEO, ensuring that our meta tags are finely tuned to align with search engine algorithms and user intent.',
          solimg: '/case_study/video1.png',
        },
        {
          info: 'We researched and identified relevant keywords related to their content and industry. For improving your website loading speed by optimizing images, using browser caching, and minimizing code.We implemented technical SEO by ensuring proper indexing of search engines by creating and submitting a sitemap. We used schema markup to provide structured data that search engines can understand. We fixed broken links, eliminated duplicate content, and managed 404 errors. We have implemented a comprehensive system for managing customer engagement and service-provider interactions. This includes the strategic use of reminders and the integration of Google Calendar to streamline and optimize the process. This proactive approach minimizes the chances of missed or delayed interactions, contributing to a smoother and more efficient customer experience. The integration of Google Calendar facilitated smooth communication and streamlined operational processes, ultimately leading to improved customer satisfaction and optimized service delivery.We bridge the gap between user engagement and user calls by implementing the feature of auto-connect. We simplified the process by implementing a feature that enables users to extend their calls with one click and turn off the call by providing an enhanced and user-friendly service environment. We introduced an in-app notifications feature to remind users about their scheduled calls with the service provider.To address the challenge of heavy-loading performance optimization, as well as Large Database/Query optimization, we integrated AWS services such as Amazon S3 (Simple Storage Service), Amazon EC2 (Elastic Compute Cloud), Amazon RDS (Relational Database Service), load balancer, and CDN for the easy implementation of caching and effectively reducing the need for repeated requests to the server. Through Continuous Integration/Continuous Deployment (CI/CD), we have invested in DevOps methodology, reducing the necessity for repetitive testing. Through this, we have integrated Deployment Process Optimization, which leverages automation testing rather than repeatedly conducting manual tests. This approach aims to balance the deployment process, ensuring both efficiency and security',
          solimg: '/case_study/video2.png',
        },
      ],
      Results:
        'The implementation of strategic solutions has provided progressive results to our web application, enabled users to effortlessly extend video chat calls with a single click, and led to a (40%) increase in call duration and user engagement. It also resulted in streamlined the calling process, resulting in a (15%) decrease in call interruptions. ',
      img: '/case_study/Videochat_pro.png',
      resimg: '/case_study/video_results.png',
      challengeimg1: '/case_study/video_challenge_1.png',
      challengeimg2: '/case_study/video_challenge_2.png',
    },
    {
      id: '5',
      title: 'Customer Engagement App',
      about:
        'A SAS web and mobile application that is designed to generate high-quality leads, manage your sales team, and track as well as close deals- all on one platform. It is an open-source, and centralized system named Chatwoot that connects with popular customer communication channels, such as WhatsApp, Email, Website live-chat, Instagram, Facebook, Twitter, Line, etc.',
      Active: '20,000',
      Logs: '10 Lakh',
      AppDownloads: '50k, in one year',
      Challenges: [
        'Modifying existing framework (Overriding)',
        'Mass emails -flagged as spam',
        'Bridging external app to chatbot codebase',
        'Events tracking',
        'AI Integration',
        'Botpress Integration',
        'Complex Monetary Calculations & Reports',
      ],
      Solutions: [
        {
          info: 'When modifying existing frameworks, our approach involved thorough examination and testing of the existing code. Subsequently, our skilled engineers made informed adjustments to the code based on their expertise and implemented the changes accordingly.By developing a batch processing system, we established the capability to send a designated number of emails per day while also setting a limit. This strategic approach has facilitated the scalability of the application.',
          solimg: '/case_study/peasy_efforts.png',
        },
        {
          info: 'We designed a module within Chatwoot and subsequently developed several APIs so an external app can use them securely. We developed an application called Chatwoot that functions similarly to Google Tag Manager. This application made the support and marketing process easy.',
          solimg: '/case_study/peasy1.png',
        },
        {
          info: 'We integrated OpenAI into our customer support system to address inquiries in situations where a support executive is unavailable. When a support executive becomes accessible, the system transfers all data and queries to them for further handling.To provide easy directions to users, we integrated Botpress. The service provider then modifies the direction to provide a predefined answer.To offer easy directions to users, we implemented Botpress. The service provider then customizes the directions to deliver predetermined responses.There were multiple conditions, including the number of messages, messages categorized by country, and message type. Using these criteria, we calculated the cost of the service provider services.',
          solimg: '/case_study/peasy2.png',
        },
      ],
      Results:
        'The SAS web and mobile application, Chatwoot, now offers enhanced lead generation, sales team management, deal tracking, and customer communication capabilities across multiple channels. The challenges were met with comprehensive solutions, empowering businesses to streamline their operations and provide superior customer experiences.',
      img: '/case_study/peasyAI.png',
      resimg: '/case_study/peasy_results.png',
      challengeimg1: '/case_study/peasy_challenge_1.png',
      challengeimg2: '/case_study/peasy_challenge_2.png',
    },
  ]
  const data = alldata.find((item) => item.id === id)
  return (
    <>
      <section className={`case-study-section py-5 ${styles.aboutus}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 ">
              <h5 className="heading-h6 text-color-indigo mb-3 fw-bold">
                Case Study
              </h5>
              <h2 className="display-2 fw-semibold py-2 main-heading">
                {Casedata.title}
              </h2>
              <p className="fw-normal text-muted">
                Find out where we are on the path to{' '}
                <br className="visible-lg" /> achieving the ultimate design
                tool.
              </p>
            </div>
            <div className={`col-12 col-lg-7 ${styles.casestudypage}`}>
              <div className={styles.cube}>
                <Image
                  src="/blogs/cube.png"
                  alt="blogimage"
                  height={81.77}
                  width={111}
                  objectFit="contain"
                />
              </div>
              <div className={styles.ml_5}>
                <Image
                  src={Casedata.img}
                  width={620}
                  height={386}
                  objectFit="cover"
                  className="img-fluid mx-auto"
                  style={{ border: '1px solid #000', borderRadius: '35px' }}
                />
              </div>
              <div className={styles.glass}>
                <Image
                  src="/blogs/glass.png"
                  alt="blognotebook"
                  objectFit="contain"
                  height={179.23}
                  width={200}
                />
              </div>
              <div className={styles.clock}>
                <Image
                  src="/blogs/clock.png"
                  alt="blognotebook"
                  height={100}
                  width={154.72}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          <About Casedata={data} />
        </div>
      </section>
    </>
  )
}

export default Video
