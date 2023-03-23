import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
const BlogList = () => {
  const handleOnClick = () => {
    console.log('------window------', window)
    console.log('------------', window.$chatwoot)
  }
  const blogArray = [
    {
      id: 1,
      title: 'A Complete Guide on How to Enhance the Speed of Your Website',
      desc: "When we talk about a website's performance, page speed is",
      img: '/images/enhance-speed.webp',
      redirect_url: '/blog/speed-up-page',
    },
    {
      id: 2,
      title: 'Cost of Developing a Progressive Web App (PWA) in 2023',
      desc: 'Well, Progressive Web Apps (PWAs) are in trend now and it has attracted',
      img: '/images/cost_pwa.webp',
      redirect_url: '/blog/progressive-web-app',
    },
    {
      id: 3,
      title: 'Ruby Frameworks For Web Development In 2023',
      desc: 'Ruby is one of the most widely used languages as it was designed to',
      img: '/images/ruby-framework.webp',
      redirect_url: '/blog/ruby-framework',
    },
    {
      id: 4,
      title: 'A Complete Guide on Headless Shopify',
      desc: 'Are you wondering what headless shopify actually is?Well, you',
      img: '/images/shopify_guide.webp',
      redirect_url: '/blog/shopify-blog',
    },
    {
      id: 5,
      title: 'A Complete Guide on Node.js',
      desc: 'Do you know that choosing the right tools, platforms, and languages',
      img: '/images/node-guide.webp',
      redirect_url: '/blog/complete-guide-node',
    },
    {
      id: 6,
      title: 'All About React Native',
      desc: 'React Native has been adopted by numerous businesses globally,',
      img: '/images/react-desc.webp',
      redirect_url: '/blog/react-native-blog',
    },
  ]
  return (
    <div className="container blog-list-container">
      <div className="row d-flex justify-content-center">
        <h1 className="text-center p-4">OUR LATEST BLOG</h1>
        {blogArray.map((e) => (
          <div
            className="card m-2 shadow p-3 bg-body-tertiary"
            style={{ width: '350px' }}
            key={e.id}
          >
            <div>
              <img
                src={e.img}
                style={{ width: '100%' }}
                // width={350}
                // height={288}
                alt="a snow-capped mountain range"
              />
            </div>
            <div className="card-body">
              <div className="blog-list-desc">
                <h3 className=" card-title pt-2">{e.title}</h3>
                <p className="card-text pt-2">{e.desc}</p>
              </div>
              <br />
              <a
                className="text-primary fw-bold"
                href={e.redirect_url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="fs-6 fw-semibold ">READ MORE</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogList
