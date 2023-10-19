import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Industries.module.css'
import IndustriesModel from '../components/IndustriesModel'

const data = [
  {
    title: 'E-Commerce',
    heading:
      'Achieve exponential growth in your e-commerce marketplace sales and expand your reach to a vast audience through our intuitive and user-friendly web and app solutions. ',
    points: [
      'User-Friendly Navigation',
      'Page Speed & App Optimizations',
      'SEO Improvements',
      'Shopping Cart and Other Buttons ',
      'Enhanced Checkout',
    ],
    id: '0',
    imgUrl: '/Industries/Ecommerce.jpg',
    img_alt: 'Ecommerce',
  },
  {
    title: 'Healthcare',
    heading:
      'Bringing cutting-edge technology to bridge the gap between medical professionals & patients through our revolutionizing technologies. ',
    points: [
      'Streamlined Workflow',
      'SEO Improvements',
      'Increased Data Security',
      'Enhanced Patient Engagement ',
      'Better Health Tracking and Management',
    ],
    id: '1',
    imgUrl: '/Industries/Healthcare.jpg',
    img_alt: 'HealthCare',
  },

  {
    title: 'Supply Chain Management',
    heading:
      "Elevate each phase of your supply chain's life cycle through the creation of our logistics and transportation applications that enhance the operational efficiency and productivity of your business.",
    points: [
      'Transportation Management',
      'Fleet Management',
      'Optimized Tracking',
      'Distribution Management',
      'Inventory Management',
    ],
    id: '2',
    imgUrl: '/Industries/supply.jpg',
    img_alt: 'supply-chain-management',
  },
  {
    title: 'Internet of Things (IoT)',
    heading:
      'Streamline your business operations through the integration of cutting-edge IoT technologies, dedicated to improving efficiency and accessibility across various industries ',
    points: [
      'Device Integration',
      'Remote Monitoring and Control',
      'IoT Application Development',
      'Cloud IoT Platforms',
      'Ecosystem Management',
    ],
    id: '3',
    imgUrl: '/Industries/iot.jpg',
    img_alt: 'AI_image',
  },
]

const data1 = [
  {
    title: 'Fintech ',
    heading:
      'Encompassing a wide range of technologies & solutions aimed at enhancing efficiency, convenience, and accessibility in the finance sector.',
    points: [
      'Intuitive user interface and usability',
      'Security features',
      'Personalized experiences',
      'Digital payments',
      'Alerts and push notifications',
    ],
    id: '4',
  },
  {
    title: 'Packing & Moving',
    heading:
      'Effortlessly streamline your packaging and moving business operations by integrating high-powered management web and app solutions.',
    points: [
      'Increased Sales',
      'Improved customer service',
      'SEO Improvements',
      'More potential customers',
      'Smooth process',
    ],
    id: '5',
  },
  {
    title: 'Education & E-Learning',
    heading:
      'Empowering Edtech startups by combining comprehensive learning opportunities with effective educational mobility operations.',
    points: [
      'Better Learning Experience',
      'More Cost-Effective',
      'SEO Improvements',
      'High-Quality Student-Tutor Interactions',
      'Convenience And Flexibility ',
    ],
    id: '2',
  },
  {
    title: 'Social Networking',
    heading:
      'Our robust digital solutions and comprehensive tech stack empower and enhance your social networking strategy.',
    points: [
      'Brand awareness',
      'Instant reachability',
      'Business success',
      'SEO Improvements',
      'Increased website traffic',
    ],
    id: '3',
  },
]

const Industries = () => {
  const [item, setItem] = useState(data[0])
  const [selected, setSelected] = useState('0')

  const handleMouseEnter = (item) => {
    console.log('item.id', item.id)
    setItem(item)
    setSelected(item.id)
  }

  const handleMouseLeave = () => {
    setSelected(null)
  }

  return (
    <>
      <div className={`feature-list container ${styles.industries}`}>
        <div className={` row ${styles.main_container}`}>
          <div
            className={`col-lg-7 col-md-12 col-sm-12 ${styles.left_container}`}
          >
            <div className={`${styles.left_upper_container}`}>
              <div
                className={`${styles.left_text_second}`}
                data-aos="fade-right"
                data-aos-delay="150"
              >
                Industries <br /> We Serve{' '}
              </div>
              <div
                className={`${styles.left_text_third}`}
                data-aos="fade-right"
                data-aos-delay="150"
              >
                We provide innovative and valuable digital solutions that cater
                to a wide range of business objectives and niches.{' '}
              </div>
            </div>

            <div className={`${styles.left_lower_container} `}>
              <div className="row" key={1}>
                {data.map((item, index) => {
                  return (
                    <div
                      className={`col ${styles.lower_grid_container} cursor_pointer`}
                      key={item.title}
                      onMouseEnter={() => handleMouseEnter(item)}
                      data-aos="fade-right"
                      data-aos-delay="150"
                      // onMouseLeave={() => handleMouseLeave()}
                    >
                      <div
                        className={`${styles.lower_grid_items_container}`}
                        style={{
                          backgroundColor:
                            selected === item.id && index == item.id
                              ? '#5956e9'
                              : '',
                        }}
                      >
                        <div
                          className={`${styles.lower_title}`}
                          style={{
                            color: selected === item.id ? 'white' : '',
                            opacity: selected === item.id ? 1 : 0.67,
                            fontWeight: selected === item.id ? 700 : 400,
                          }}
                        >
                          {item.title}
                        </div>
                        <div
                          className={`${styles.lower_heading}`}
                          style={{
                            color: selected === item.id ? 'white' : '',
                            opacity: selected === item.id ? 1 : 0.67,
                          }}
                        >
                          {item.heading}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div
            className={`col-lg-5 col-md-12 col-sm-12 ${styles.right_container} `}
          >
            <IndustriesModel item={item} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Industries
