import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
const Shimmer = dynamic(() => import('../../components/ShimmerCasestudy'), {
  ssr: false,
})
import Video from '../../components/case-study/Video'
import About from '../../components/case-study/About'
import Effort from '../../components/case-study/Effort'
import Challenges from '../../components/case-study/Challenges'
import style from '../../styles/case-page.module.css'
import styles from '../../styles/blogStyle.module.css'
import design from '../../styles/about.module.css'
import style1 from '../../styles/ShimmerCasestudy.module.css'
const Casestudy = () => {
  const router = useRouter()
  const id = router.query.id
  console.log(id)

  const alldata = [
    {
      id: '1',
      title: 'Mobile App For Divers',
      small_des:
        'Dive into our case study of a mobile app for divers, uncovering how it transformed underwater adventures',
      about: [
        {
          short_des:
            'This case study focuses on a mobile application specially designed to record underwater diving adventures. Through this app, users can effortlessly capture underwater photos and create videos',
        },
        {
          short_des:
            'This application ensures safety by offering details about pressure, temperature, and other factors under water. ',
        },
        {
          short_des:
            'The app’s safety alerts will notify you if you have reached your depth stop, or ascending too fast. In the case of an emergency, the app will let you know what to do at the current depth to stay safe. ',
        },
        {
          short_des:
            'It also supports free diving mode with features including, a stopwatch for static apnea, and boat calling. This application functions without any phone signal and displays information, such as dive duration, and no-decompression limit (NDL) to prevent accidents and decompression sickness.',
        },
      ],
      Active: '20,000',
      Logs: '10 Lakh',
      AppDownloads: '50k, in one year',
      Challenges: [
        {
          heading: 'Underwater Image Enhancement',
          des: 'Enhancing images taken underwater was challenging due to the unique conditions, including low light, water distortion, and color variation. ',
          img: '/icons/Rect-4-circle.svg',
        },
        {
          heading: 'In-App Implementation of Buhlmann Decompression',
          des: 'Implementing the Buhlmann Decompression model within a mobile app was a complex task that involved accurate real-time calculations for diver safety.',
          img: '/icons/Rect-1-circle.svg',
        },
        {
          heading: 'Complex System Design',
          des: "Decompression calculations, data synchronization, scientific analysis, and environment simulation complicates the system's architecture. ",
          img: '/icons/Rect-4-circle.svg',
        },
        {
          heading: 'Synchronization of Log Data with the Cloud',
          des: 'Managing the synchronization of images, & videos, with a cloud server was challenging due to potential issues like data loss, security, and network constraints.',
          img: '/icons/Rect-1-circle.svg',
        },
        {
          heading: 'Complex Scientific Data Analysis and Representation',
          des: 'Representing scientific data in a meaningful and understandable way was challenging, as it involved creating specialized visualization tools.',
          img: '/icons/Rect-4-circle.svg',
        },
        {
          heading: 'Complex Environment Simulation for Testing',
          des: 'Creating an environment that accurately replicates the complexities of underwater scenarios was crucial for evaluating system effectiveness. ',
          img: '/icons/Rect-1-circle.svg',
        },
      ],
      Solutions: [
        {
          info: 'To deliver a captivating real-time image enhancement experience, we seamlessly integrated an AI model into the mobile application. This AI model dynamically refines and enriches the visuals of both photos and videos, ensuring users receive high-quality visuals, even in challenging conditions.',
          solimg: '/case_study/Divers1.png',
        },
        {
          info: 'Recognize the absence of cellular network availability underwater, we designed a client-side logbook within the mobile app. This logbook compiles images, videos, and metadata information locally on the users device during the dive.',
          solimg: '/case_study/Divers2.png',
        },
        {
          info: 'To ensure data integrity, we developed a seamless mechanism that automatically synchronizes the compiled data with the cloud once the diver returns and the app reconnects to the internet. This ensures that the users valuable content and metadata are safely stored and accessible from anywhere.',
          solimg: '/case_study/Divers3.png',
        },
        {
          info: 'Collaborated with Physics Ph.D. holders who provided invaluable insights and expertise, particularly in implementing the Buhlmann Decompression model. Their input enabled us to design complex scientific algorithms that accurately represent the data gathered during dives, enhancing the applications safety and reliability.',
          solimg: '/case_study/Divers4.png',
        },
        {
          info: 'To rigorously test and assess the applications performance under various conditions, we acquired essential equipment such as pressure chambers. Additionally, we established a controlled dark room to simulate a virtual underwater environment, allowing us to conduct precise and controlled experiments.',
          solimg: '/case_study/Divers7.png',
        },
      ],

      Results:
        'This innovative mobile application and hardware device have proven invaluable to scuba divers, as it significantly reduces their expenses by eliminating the need to purchase separate types of equipment, such as a Diving computer and GoPro camera. In contrast to other exorbitantly priced diving gears, the hardware device and application serve as a cost-saving measure. Together, the app and device provided a user-friendly diving experience.',
      img: '/case_study/scuba_diving.png',
      resimg: '/case_study/result_pixel_1.png',
      challengeimg1: '/case_study/Group_pic_5.png',
      challengeimg2: '/case_study/Group_pic_6.png',
    },
    {
      id: '2',
      title: 'International E-Commerce',
      small_des:
        'Discover our case study on international e-commerce, revealing strategies for global market expansion.',
      about: [
        {
          short_des:
            'An e-commerce website that enables international buyers to access products from diverse countries, particularly fashion-related items that might not be readily available in their local markets.',
        },
        {
          short_des:
            'Here, users can find limited edition items and local trends across the globe.',
        },
        {
          short_des:
            'Within this website, users can also customise their products according to their requirements and can directly connect with the seller if they have any queries.',
        },
        {
          short_des:
            'To save on international shipping costs, this website offers the option of consolidating multiple items from different orders into a single shipment, helping users save on shipping fees.',
        },
      ],
      Active: '20,000',
      Logs: '10 Lakh',
      AppDownloads: '50k, in one year',
      Challenges: [
        {
          heading: 'Manage large product catalogs',
          des: 'Managing a large product catalog posed navigation & maintenance challenges. Effective categorization and searchability are vital for a smooth user experience.',
          img: '/icons/Rect-4-circle.svg',
        },
        {
          heading: 'Ensuring Consistent User Experience',
          des: 'Ensuring consistent user experience across platforms was complex. Uniformity in design, functionality, and usability was vital for customer satisfaction.',
          img: '/icons/Rect-1-circle.svg',
        },
        {
          heading: 'Product Customization Feature Complexity',
          des: 'Introducing product customization, such as personalized designs or configurations, was complex. Balancing user-friendliness with backend intricacies posed a challenge.',
          img: '/icons/Rect-4-circle.svg',
        },
        {
          heading: 'Implementation of Augmented Reality (AR)',
          des: 'Integrating Augmented Reality (AR) within the application involves complexities related to software and hardware compatibility, and 3D modeling.',
          img: '/icons/Rect-1-circle.svg',
        },
        {
          heading: 'Ensuring Security',
          des: 'Ensuring data security for user information and transactions is crucial, safeguarding against potential data breaches, fraud, and cyberattacks.',
          img: '/icons/Rect-4-circle.svg',
        },
        {
          heading: 'Managing Multiple Payment Gateways with Local Banks',
          des: 'Integrating and managing multiple payment gateways with local banks was intricate due to variations in systems, regulations, and protocols. ',
          img: '/icons/Rect-1-circle.svg',
        },
      ],
      Solutions: [
        {
          info: 'Maximized efficiency with AWS services such as Amazon S3 and Amazon RDS, implementing a robust multi-tier database architecture. Our approach ensures lightning-fast dataset queries and retrieval, propelling your project to new heights of performance and scalability.',
          solimg: '/case_study/byuma1.png',
        },
        {
          info: "Crafted with the user in mind, we've developed a seamless and user-friendly UI that simplifies the process of adding text or photos to products. Our meticulous design work extends to a clear and intuitive layout for customization options and product previews, ensuring that users can effortlessly bring their ideas to life. We've engineered a robust backend architecture specifically tailored to support this powerful customization feature.",
          solimg: '/case_study/byuma2.png',
        },
        {
          info: "We've seamlessly integrated the WebAR framework for our AR feature. By harnessing the power of WebAR, we've unlocked a world of immersive possibilities, all accessible right from your device.But it doesn't stop there. We've taken it a step further by implementing LOD (Level of Detail) techniques to efficiently manage complex AR models.This ensures that you experience the magic of augmented reality with unparalleled performance and realism.",
          solimg: '/case_study/byuma3.png',
        },
        {
          info: 'We integrated multiple payment gateways based on the international target audience, geographical reach, and supported currencies. To streamline the integration process, we implemented an abstraction layer to manage interactions with different gateways.',
          solimg: '/case_study/byuma4.png',
        },
      ],
      Results:
        'The implementation of the solutions mentioned above has resulted in a user-focused, secure, e-commerce website. These outcomes have collectively contributed to increased customer satisfaction, higher conversion rates, and a stronger competitive position in the market, ensuring the ongoing success of the webs.',
      img: '/case_study/byuma.png',
      resimg: '/case_study/byumachallenge.png',
      challengeimg1: '/case_study/byumachallenge.png',
      about_img1: '/case_study/about1.png',
      about_img2: '/case_study/about2.png',
      about_img3: '/case_study/about3.png',
    },
    {
      id: '3',
      title: 'Logistics Management',
      small_des:
        'Explore our logistics management case study, showcasing efficient supply chain solutions that optimized operations and reduced costs.',
      about: [
        {
          short_des:
            'A SAAS mobile and web application that is specifically designed for the residential and commercial moving and storage industry. ',
        },
        {
          short_des:
            'It offers streamlined online transportation services from various providers, intending to simplify the management of moving operations. It has the ability to conduct and create an estimate on-site.',
        },
        {
          short_des:
            "The application empowers movers to view their jobs, alert the customer through a GPS when they are en route, access the customer's digital invoice, and capture payment once the move is complete.",
        },
      ],
      Active: '100+',
      Logs: '10 Lakh+',
      AppDownloads: '1 lakh',
      Challenges: [
        {
          heading: 'Complex Data Representatio',
          des: 'Effectively conveying complex data to users posed a significant challenge, necessitating user-friendly and informative visualization.',
          img: '/icons/Rect-4-circle.svg',
        },
        {
          heading: 'Scaling for Large Infrastructure',
          des: 'As the infrastructure expands, meeting the demands of a large user base is challenging. This involves server capacity, database performance, and network scalability.',
          img: '/icons/Rect-1-circle.svg',
        },
        {
          heading: 'Complex User Interface',
          des: 'Creating a user-friendly UI was challenging. Balancing complexity with ease of use, intuitive navigation, and visual appeal was crucial for a positive user experience.',
          img: '/icons/Rect-4-circle.svg',
        },
        {
          heading: 'Cost-Cutting Algorithms',
          des: 'Optimizing costs without compromising performance and functionality via algorithms was challenging. They must identify cost-reduction opportunities while maintaining sevice quality.',
          img: '/icons/Rect-1-circle.svg',
        },
      ],
      Solutions: [
        {
          info: "To foster a culture of collaboration and streamline efficiency across the board, we've implemented DevOps practices as a cornerstone of our approach. DevOps bridges the gap between development, quality assurance, and operations teams, enhancing communication and cooperation.",
          solimg: '/case_study/move1.png',
        },
        {
          info: "To harness the power of modern technology, we've adopted a cutting-edge approach by implementing a microservices architecture. This architectural paradigm allows us to break down complex systems into smaller, manageable components, enhancing flexibility and scalability.We've leveraged containerization technologies like Docker and embraced serverless computing to further decouple components and enable independent scaling.",
          solimg: '/case_study/move2.png',
        },
        {
          info: "Within the framework of this application, we've harnessed the capabilities of AWS services to achieve nothing short of seamless performance. AWS's robust infrastructure and cloud solutions have been seamlessly integrated to ensure that your app operates at peak efficiency, without a hitch.",
          solimg: '/case_study/move3.png',
        },
        {
          info: "We've taken real-time tracking to the next level by seamlessly integrating Google Maps functionality into our web application. Now, users can track trucks in real time with precision and ease.",
          solimg: '/case_study/move4.png',
        },
        {
          info: 'Designed a complex user interface with minimal elements, and enabled additional features to appear only when needed. We integrated instructional tutorials to enhance the user-friendliness and usability of the application.',
          solimg: '/case_study/move5.png',
        },
      ],
      OfflineOnlineWorkingandSynchronize: [
        {
          info: 'Truck drivers often need to operate in remote areas with limited network availability, so we developed a feature that ensures seamless data transfer between the front-end and back-end of the application. While offline, truck drivers can still access essential features, such as tracking shipments and managing orders. Any data entered or actions performed during offline mode are stored locally on the device. When the truck driver switches to online mode, the feature automatically synchronizes the offline data with the backend server. This ensures that all orders, shipment details, and delivery updates are accurately recorded in real-time.',
          solimage: '/case_study/move6.png',
        },
      ],
      Results:
        'Overall, the solutions collectively contribute to a more efficient, reliable, and customer-centric moving and storage application. Despite having a complex infrastructure, the application bridged the operational gaps and set new standards of efficiency, user experience, and technological integration through regular updates. This transformative approach significantly simplifies the management of moving operations.',
      img: '/case_study/move-it-pro.png',
      resimg: '/case_study/move_results.png',
      challengeimg1: '/case_study/move7.png',
    },
    {
      id: '4',
      title: 'Video Call Support App',
      small_des:
        'Explore our case study on a video call support app, showcasing how it enhanced customer service and resolved issues in real-time.',
      about: [
        {
          short_des:
            'A web application that allows customers to connect with service providers via video chat.',
        },
        {
          short_des:
            'This platform seamlessly connects you with experts in plumbing, HVAC, landscaping, electrical work, appliances, and automotive repair. Available 24/7, they guide you through DIY projects, enabling you to navigate project categories, select the right technician, read reviews, and easily schedule video chat sessions.',
        },
        {
          short_des:
            'Users can gain the confidence to tackle projects efficiently and become a home improvement pro.',
        },
      ],
      Active: '20,000',
      Logs: '10 Lakh',
      AppDownloads: '50k, in one year',
      Challenges: [
        {
          heading: 'Multi-Zone Scheduling Overlapping',
          des: 'Managing schedules across multiple time zones while preventing overlapping appointments or events was complex.',
          img: '/icons/Rect-4-circle.svg',
        },
        {
          heading: 'Dynamic Search Engine Optimization (SEO)',
          des: 'Adapting SEO strategies to keep up with the dynamic nature of search engine algorithms and user search behavior was a challenge.',
          img: '/icons/Rect-1-circle.svg',
        },
        {
          heading: 'Service Provider/Customer Engagement',
          des: 'This involves real-time communication, appointment management, and feedback collection, requiring meticulous design and implementation.',
          img: '/icons/Rect-4-circle.svg',
        },
        {
          heading: 'Seamless Calling Experience',
          des: 'Providing a seamless calling experience, possibly through voice over IP (VoIP) or similar technologies, was challenging due to network variations.',
          img: '/icons/Rect-1-circle.svg',
        },
        {
          heading: 'Heavy Loading Performance Optimization',
          des: 'Optimizing the performance of the system under heavy loads, such as high user traffic or data processing demands, was a significant challenge.',
          img: '/icons/Rect-4-circle.svg',
        },
        {
          heading: 'Large Database/Query Optimization',
          des: 'Managing a large database and optimizing database queries to ensure fast and efficient data retrieval was comple',
          img: '/icons/Rect-1-circle.svg',
        },
      ],
      Solutions: [
        {
          info: 'To tackle the issue of overlapping schedules across multiple zones, we developed and implemented an intelligent scheduling algorithm that takes into account the schedules of all zones involved. This algorithm optimized time slots based on availability, priority, and constraints, eliminating the chances of overlapping.',
          solimg: '/case_study/video1.png',
        },
        {
          info: 'We collaborated with SEO experts to optimize meta tags and implement best practices for site maps. We refined our approach to dynamic SEO to align with search engine algorithms and user intent. Additionally, we conducted research to identify relevant keywords for our content and industry.',
          solimg: '/case_study/video2.png',
        },
        {
          info: 'We improved the website loading speed by optimizing images, browser caching, and minimizing code. Additionally, we ensured proper indexing of search engines by creating and submitting a sitemap. We implemented schema markup for structured data and fix issues like broken links and duplicate content.',
          solimg: '/case_study/video3.png',
        },
        {
          info: 'Implemented a system for managing customer engagement and service-provider interactions, and integrated Google Calendar to streamline and optimize processes. We also introduced auto-connect and in-app notification features to enhance user experience.',
          solimg: '/case_study/video4.png',
        },
        {
          info: 'Integrated AWS services like Amazon S3, Amazon EC2, Amazon RDS, load balancer, and CDN to optimize performance and database queries. We utilized Continuous Integration/Continuous Deployment (CI/CD) and DevOps methodology to automate testing and deployment processes, ensuring efficiency and security.',
          solimg: '/case_study/video5.png',
        },
      ],
      Results:
        'The implementation of strategic solutions has provided progressive results to our web application, enabled users to effortlessly extend video chat calls with a single click, and led to a (40%) increase in call duration and user engagement. It also resulted in streamlined the calling process, resulting in a (15%) decrease in call interruptions.',
      img: '/case_study/Videochat_pro.png',
      resimg: '/case_study/video6.png',
      challengeimg1: '/case_study/videochatchallenge.png',
    },
    {
      id: '5',
      title: 'Customer Engagement App',
      small_des:
        'Disover our customer engagement app case study, unraveling how it transformed customer interactions and boosted brand loyalty.',
      about: [
        {
          short_des:
            'A SAAS web and mobile application that is designed to generate high-quality leads, manage your sales team, and track as well as close deals- all on one platform named Chatwoot.',
        },
        {
          short_des:
            'This platform analyzes WhatsApp conversations, emails, live chats, and Instagram interactions to significantly improve targeting, resulting in higher-quality leads, and cost savings. ',
        },
        {
          short_des:
            'The user-friendly design of Chatwoot, requiring just three simple steps to launch a lead campaign, further underscores its potential to reshape the way businesses approach customer engagement and sales management.',
        },
      ],
      Active: '20,000',
      Logs: '10 Lakh',
      AppDownloads: '50k, in one year',
      Challenges: [
        {
          heading: 'Modifying Existing Framework (Overriding)',
          des: "Modifying an existing framework by overriding certain functionalities was challenging, as it required a deep understanding of the framework's architecture.",
          img: '/icons/Rect-4-circle.svg',
        },
        {
          heading: 'Mass Emails Flagged as Spam',
          des: 'Sending non-spam mass emails was challenging. Ensuring content and distribution aligned with provider guidelines and recipient expectations was crucial.',
          img: '/icons/Rect-1-circle.svg',
        },
        {
          heading: 'Bridging External App to Chatbot Codebase',
          des: 'Compatibility, data exchange, and data consistency between the app and chatbot posed challenges.',
          img: '/icons/Rect-4-circle.svg',
        },
        {
          heading: 'Events Tracking',
          des: 'Effectively tracking user interactions and system events was vital for analytics and user insights.',
          img: '/icons/Rect-1-circle.svg',
        },
        {
          heading: 'AI Integration',
          des: 'Integrating AI technologies into an existing system requires expertise in AI model development and seamless integration.',
          img: '/icons/Rect-4-circle.svg',
        },
        {
          heading: 'Botpress Integration',
          des: 'Integrating Botpress into an existing system involved the alignment of two systems architectures, data flow, and user experience',
          img: '/icons/Rect-1-circle.svg',
        },
        {
          heading: 'Complex Monetary Calculations & Reports',
          des: 'Ensuring accuracy, compliance with financial regulations, and delivering user-friendly reports posed challenges.',
          img: '/icons/Rect-4-circle.svg',
        },
      ],
      Solutions: [
        {
          info: 'When modifying existing frameworks, our approach involved thorough examination and testing of the existing code. Subsequently, our skilled engineers made informed adjustments to the code based on their expertise and implemented the changes accordingly.',
          solimg: '/case_study/peasy1.png',
        },
        {
          info: "To ensure control, scalability, and a seamless user experience, we've meticulously crafted a robust batch-processing system. This system plays a vital role in managing the number of emails sent per day, allowing us to set precise limits and optimize the application's performance",
          solimg: '/case_study/peasy2.png',
        },
        {
          info: 'Developed multiple APIs for secure external app usage. We created an application similar to Google Tag Manager to simplify support and marketing processes. Moreover, we integrated OpenAI into the customer support system for handling inquiries.',
          solimg: '/case_study/peasy3.png',
        },
        {
          info: "To offer easy directions to users, we've seamlessly integrated Botpress into our system. With this intelligent platform, we not only provide easy-to-follow directions but also customize responses to deliver precise, predetermined information.",
          solimg: '/case_study/peasy4.png',
        },
        {
          info: "We've brought precision and transparency to the service provider's pricing model by implementing a sophisticated cost calculation system. This system takes into account a multitude of factors, including message volume, country categorization, and message type. ",
          solimg: '/case_study/peasy5.png',
        },
      ],
      Results:
        'The SAAS web and mobile application, Chatwoot, now offers enhanced lead generation, sales team management, deal tracking, and customer communication capabilities across multiple channels. The challenges were met with comprehensive solutions, empowering businesses to streamline their operations and provide superior customer experiences.',
      img: '/case_study/peasyAI.png',
      resimg: '/case_study/peasy_results.png',
      challengeimg1: '/case_study/peasychallenge.png',
    },
  ]

  const data = alldata.find((item) => item.id === id)
  console.log(data)
  const [name, setName] = useState('')
  console.log('data', data?.length, data)
  // useEffect used for solving hydration errror because name is not defined at server side
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      setName(localStorage.getItem('name'))
    }
    if (data?.length === 0) {
      router.push('/404')
    }
  }, [])
  const [show, SetShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      SetShow(false)
    }, 500)
  }, [])
  const handleOnBack = () => {
    router.back()
  }
  if (!data) {
    return null
  }
  return (
    <>
      {show ? (
        <>
          <Shimmer Casedata={data} />
        </>
      ) : (
        <div className={style.container}>
          <img
            src="/case_study/Ellipse_blue.png"
            className={style.ellipse_blue_img}
          />
          <img
            src="/case_study/ellipse_black_circle.png"
            className={style.ellipse_blue_circle}
          />
          <img
            src="/case_study/ellipse_blue_circle.png"
            className={style.ellipse_black_circle}
          />
          <Video Casedata={data} />
          <div className={` container ${style.casestudycontainer}`}>
            <About Casedata={data} />
            <Challenges Casedata={data} />
            <Effort Casedata={data} />
          </div>

          <div className="container-fluid about-area-5">
            <div className="container about-area-5-container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="mb-5 about-area-5-heading">
                    Let’s build the future of technology together
                  </h2>
                  <div
                    className={`d-flex flex-wrap align-items-content ${design.link}`}
                  >
                    <Link href="/contact" passHref>
                      <a
                        class={`align-self-center about-area-5-para ${design.link}`}
                      >
                        Initiate a Partnership
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Casestudy
