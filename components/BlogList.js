import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
const BlogList = () => {
  const blogArray = [
    {
      id: 1,
      title: 'A Complete Guide on How to Enhance the Speed of Your Website',
      desc: "When we talk about a website's performance,",
      img: '/images/SpeedWebsite.webp',
    },
    {
      id: 2,
      title: 'A Complete Guide on Headless Shopify',
      desc: 'Are you wondering what headless shopify actually is?Well, you',
      img: '/images/SpeedWebsite.webp',
    },
    {
      id: 3,
      title: 'All About React Native',
      desc: 'React Native has been adopted by numerous businesses globally,',
    },
    {
      id: 4,
      title: 'A Complete Guide on Headless Shopify',
      desc: 'Are you wondering what headless shopify actually is?Well, you',
      img: '/images/SpeedWebsite.webp',
    },
    {
      id: 5,
      title: 'All About React Native',
      desc: 'React Native has been adopted by numerous businesses globally,',
      img: '/images/SpeedWebsite.webp',
    },
    {
      id: 6,
      title: 'All About React Native',
      desc: 'React Native has been adopted by numerous businesses globally,',
      img: '/images/SpeedWebsite.webp',
    },
  ]
  return (
    <div className="container blog-list-container">
      <div className="row d-flex justify-content-center">
        <h2 className="text-center m-4">OUR LATEST BLOG</h2>
        {blogArray.map((e) => (
          <div
            className="card m-2 shadow p-3 bg-body-tertiary"
            style={{ width: '350px' }}
            key={e.id}
          >
            <div>
              <Image
                src={'/images/SpeedWebsite.webp'}
                width={350}
                height={288}
                alt="a snow-capped mountain range"
              />
            </div>
            <div className="card-body">
              <div className="card-desc">
                <h3 className="card-title pt-2">{e.title}</h3>
                <p className="card-text pt-2">{e.desc}</p>
              </div>
              <Link href="#">
                <span className="fs-6 fw-semibold text-black-50 cursor_pointer ">
                  + READ MORE
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogList
