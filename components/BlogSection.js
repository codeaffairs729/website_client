import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/blogStyle.module.css'
import { HiArrowSmRight } from 'react-icons/hi'

export default function BlogSection({ data }) {
  console.log({ data })
  const blogData = data.filter((e, i) => i < 3)
  return (
    <div className="container blog-container">
      <h2>Our Featured Blogs!</h2>
      <div className={`row blog-list ${styles.blog_list}`}>
        {blogData.map((e, i) => (
          <div className={`col-12 col-lg-3 ${styles.customcol}`} key={i}>
            <div className={`card   ${styles.customcard}`}>
              <Link href={`/blogs/${e.slug}`} className="">
                <div
                  className={`card-img text-center cursor_pointer ${styles.card_img}`}
                  style={{ overflow: 'hidden' }}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${e.image}`}
                    width={1600}
                    height={1499}
                    objectFit="cover"
                    // objectPosition="50% 50%"
                    alt="a snow-capped mountain range"
                  />
                </div>
              </Link>
              <div className={`card-body ${styles.cardbody}`}>
                <div className={styles.cardheading}>Technology Insights</div>
                <div className="card-desc   ">
                  <Link href={`/blogs/${e.slug}`}>
                    <h3 className={` cursor_pointer ${styles.cardtitle}`}>
                      {e.title}
                    </h3>
                  </Link>
                </div>
                <Link href={`/blogs/${e.slug}`} className="cursor_pointer">
                  {/* <button type="button" className="blog-btn">
                    READ MORE
                  </button> */}
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
      <div className={`cursor_pointer ${styles.text_end}`}>
        <Link href="/user-blog-list">
          <a className={styles.design}>
            More Blogs
            <svg className={styles.icon} aria-labelledby="fwd-icon">
              <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  )
}
