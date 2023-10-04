import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogStyle.module.css'
import hireService from '../../styles/hireService.module.css'
import BlogSection from '../../components/BlogSection'
export default function BlogDetails({ data, blogData }) {
  const router = useRouter()
  const [name, setName] = useState('')
  console.log('blogData', blogData.length, blogData)
  // useEffect used for solving hydration errror because name is not defined at server side

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      setName(localStorage.getItem('name'))
    }
    if (blogData.length === 0) {
      router.push('/404')
    }
  }, [])

  const handleOnBack = () => {
    router.back()
  }
  return (
    <>
      {blogData.map((e, i) => (
        <>
          {/* <div className={styles.background}>
            <div
              className={`pt-3 feature-list container ${styles.headingcontainer}`}
            >
              <div className={styles.bg}>
                <h1>Blog</h1>
                <div className={styles.blogcloud2}>
                  <Image
                    src="/blogs/blogcloud.png"
                    alt="blogimage"
                    height={81.77}
                    width={111}
                  />
                </div>
                <div
                  className={`${styles.background_image_container}`}
                  style={{
                    display: 'flex',
                  }}
                  key={e.id}
                >
                  <div className={styles.singleblogleftcontainer}>
                    <div className={hireService.hireh1}>
                      {blogData[i]?.title}
                    </div>
                    <h5>
                      Find out where we are on the path to achieving the
                      ultimate design tool.
                    </h5>
                  </div>

                  <div className={styles.singleblogrightcontainer}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${e.image}`}
                      width={480}
                      height={317}
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className={styles.notebook}>
                  <Image
                    src="/blogs/blog_notebook.png"
                    alt="blognotebook"
                    height={127}
                    width={160}
                  />
                </div>
                <div className={styles.disk}>
                  <Image
                    src="/blogs/3d-disk.png"
                    alt="blognotebook"
                    height={100}
                    width={100.83}
                  />
                </div> */}
          <section className="blog-section1 py-5 mt-5 ">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6 pt-4">
                  <h5 className="heading-h6 text-color-indigo">Blog</h5>
                  <h2 className="display-5 fw-semibold py-2">
                    {blogData[i]?.title}{' '}
                  </h2>
                  <p className="fw-normal text-muted">
                    Find out where we are on the path to{' '}
                    <br className="visible-lg" /> achieving the ultimate design
                    tool.
                  </p>
                </div>
                <div className={`col-12 col-lg-6 ${styles.blogdiv}`}>
                  <div className={hireService.display_circle}></div>
                  <div className={styles.blogcloud2}>
                    <Image
                      src="/blogs/blogcloud.png"
                      alt="blogimage"
                      height={81.77}
                      width={111}
                      objectFit="cover"
                    />
                  </div>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${e.image}`}
                    width={320}
                    height={310}
                    objectFit="cover"
                  />
                  <div className={styles.notebook}>
                    <Image
                      src="/blogs/blog_notebook.png"
                      alt="blognotebook"
                      height={127}
                      width={160}
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.disk}>
                    <Image
                      src="/blogs/3d-disk.png"
                      alt="blognotebook"
                      height={100}
                      width={110.83}
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <div className={` ${styles.blogpagecontainer} `} key={i}>
              <div className="row">
                <div className="col-12 lead">
                  <div className={styles.blogshades}>
                    <div className={styles.htmlContent}>
                      <div dangerouslySetInnerHTML={{ __html: e.content }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BlogSection data={data} linktext="All Blogs" />
          </div>
        </>
      ))}
    </>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/slug/${params.id}`
  )
  const blogData = await res.json()
  const data = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`)
  ).json()

  if (res.status === 200) {
    return {
      props: {
        blogData,
        data,
      },
    }
  } else {
    return {
      notFound: true,
    }
  }
}
