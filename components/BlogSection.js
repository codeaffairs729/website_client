import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/blogStyle.module.css'
import { HiArrowSmRight } from 'react-icons/hi'

export default function BlogSection({ data, linktext, heading }) {
  const blog_category = [
    {
      category: 'Web Development ',
      heading: 'A Complete Guide on How to Enhance the Speed of Your Website',
      id: '0',
    },
    {
      category: 'Cost Estimation',
      heading: 'What is the Cost of Progressive Web App Development in 2023?',
      id: '1',
    },
    {
      category: 'Technology',
      heading: 'A Complete Guide on Headless Shopify, Including Its Benefits',
      id: '2',
    },
    {
      category: 'Technology',
      heading: 'A Complete Guide on Node.js, Its Features & Advantages',
      id: '3',
    },
    {
      category: 'Technology',
      heading: 'A Comprehensive Guide on React Native with its Benefits',
      id: '4',
    },
    {
      category: 'Technology',
      heading: 'Ruby Frameworks For Web Development In 2023',
      id: '5',
    },
    {
      category: 'Web Development',
      heading: 'Steps To Take For Accelerating A Growing Web Application',
      id: '6',
    },
    {
      category: 'Artificial Intelligence',
      heading: 'A Guide to APIs and Open AI with Their Importance',
      id: '7',
    },
    {
      category: 'Technology',
      heading:
        'Importance of getStaticProps and getServerSideProps to increase your page speed',
      id: '8',
    },
    {
      category: 'Technology',
      heading: 'A Guide to MeteorJS – What it Is, and Its Advantages',
      id: '9',
    },
    {
      category: 'Software Security',
      heading: 'Why Is Mobile App Security Crucial? And Its Typical Threats',
      id: '10',
    },
    {
      category: 'Cloud Technology',
      heading: 'Top 7 Cloud Security Threats to Watch Out for in 2023',
      id: '11',
    },
    {
      category: 'Technology',
      heading: '4 Best Web Development Frameworks Frontend & Backend',
      id: '12',
    },
    {
      category: 'Artificial Intelligence',
      heading:
        'Is ChatGPT Suitable for Building and Scaling a Web & Mobile Application?',
      id: '13',
    },
    {
      category: 'E-Commerce',
      heading:
        'Crafting an E-Commerce Web or Mobile App from Scratch to Success',
      id: '14',
    },
  ]
  const shuffledData = [...data]
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]]
  }
  const randomBlogs = shuffledData.slice(0, 3)

  return (
    <div
      className="container blog-container"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <h2>{heading}</h2>
      <div className={`row blog-list ${styles.blog_list}`}>
        {randomBlogs.map((e, i) => (
          <div
            className={`col-12 col-lg-3 ${styles.customcol}`}
            data-aos="zoom-in"
            data-aos-delay="200"
            key={i}
          >
            <div className={`card   ${styles.customcard}`}>
              <Link href={`/blogs/${e.slug}`} className="">
                <div
                  className={`card-img text-center cursor_pointer ${styles.cardimg}`}
                  style={{ overflow: 'hidden', marginTop: '1rem' }}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${e.image}`}
                    width={1600}
                    height={1499}
                    objectFit="cover"
                    alt="a snow-capped mountain range"
                  />
                </div>
              </Link>
              <div className={`card-body ${styles.cardbody}`}>
                <div className={styles.cardheading}>
                  {getCategoryForBlog(e.title)}
                </div>
                <div className="card-desc   ">
                  <Link href={`/blogs/${e.slug}`}>
                    <h3 className={` cursor_pointer ${styles.cardtitle}`}>
                      {e.title}
                    </h3>
                  </Link>
                </div>
                <Link href={`/blogs/${e.slug}`} className="cursor_pointer">
                  <a className={styles.design__link}>
                    Read
                    <svg className={styles.icon} aria-labelledby="fwd-icon">
                      <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`cursor_pointer ${styles.text_end}`}
        data-aos="fade"
        data-aos-delay="200"
        data-aos-offset="10"
      >
        <Link href="/user-blog-list">
          <a className={styles.design}>
            {linktext}
            <svg className={styles.icon} aria-labelledby="fwd-icon">
              <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  )

  function getCategoryForBlog(title) {
    const blog = blog_category.find((blog) => title.includes(blog.heading))
    return blog ? blog.category : 'Technology'
  }
}
