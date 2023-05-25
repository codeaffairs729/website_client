import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/blogStyle.module.css'

export default function BlogSection({ data }) {
  const blogData = data.filter((e, i) => i < 3)
  return (
    <div className="container justify-content-center blog-container">
      <h2>Our Featured Blogs!</h2>
      <div className="row blog-list">
        {blogData.map((e, i) => (
          <div className="col-12 col-lg-4" key={i}>
            <div className="card m-2 shadow p-3 bg-body-tertiary">
              <div className="card-img text-center">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${e.image}`}
                  width={554}
                  height={383}
                  objectFit="contain"
                  objectPosition="50% 50%"
                  alt="a snow-capped mountain range"
                />
              </div>
              <div className="card-body">
                <div className="card-desc">
                  <h3 className="card-title pt-2">{e.title}</h3>
                  {/* <p className="card-text pt-2">
                    When we talk about a website&apos;s performance, page speed
                    is
                  </p> */}
                </div>
                <Link href={`/blogs/${e.slug}`} className="">
                  <button type="button" className="blog-btn">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
