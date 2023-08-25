import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/blogStyle.module.css'
import { HiArrowSmRight } from 'react-icons/hi'

export default function BlogSection({ data }) {
  console.log({ data })
  const blogData = data.filter((e, i) => i < 4)
  return (
    <div className="container justify-content-center blog-container">
      <h2>Our Featured Blogs!</h2>
      <div className="row blog-list">
        {blogData.map((e, i) => (
          <div className="col-12 col-lg-3 p-2" key={i}>
            <div
              className="card  shadow p-4 bg-body-tertiary"
              style={{ borderRadius: '12px' }}
            >
              <Link href={`/blogs/${e.slug}`} className="">
                <div
                  className="card-img text-center cursor_pointer"
                  style={{ borderRadius: '12px', overflow: 'hidden' }}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${e.image}`}
                    width={620}
                    height={350}
                    objectFit=""
                    // objectPosition="50% 50%"
                    alt="a snow-capped mountain range"
                  />
                </div>
              </Link>
              <div className="card-body ">
                <div className="card-desc   ">
                  <Link href={`/blogs/${e.slug}`}>
                    <h3 className="card-title cursor_pointer">{e.title}</h3>
                  </Link>
                  <p
                    className="line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: e.content,
                    }}
                  ></p>
                </div>
                <Link href={`/blogs/${e.slug}`} className="cursor_pointer">
                  <button type="button" className="blog-btn">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-end cursor_pointer">
        <Link href="/user-blog-list">
          <div className="blog-arrow">
            <span className="fw-semibold link-underline-opacity-50 my-4 mx-2 blogs-link ">
              Read other blogs
            </span>
            <svg className="icon icon-arrow-right" aria-labelledby="fwd-icon">
              <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  )
}
