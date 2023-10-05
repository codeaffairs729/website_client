import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import BlogGrid from './BlogGrid'
import DeleteModal from './DeleteModal'
import styles from '../styles/blogStyle.module.css'
import Image from 'next/image'
const BlogList = ({ authorized, blogData, notify, notifyError, db }) => {
  const [data, setData] = useState(blogData)
  const [delId, setDelId] = useState()
  const router = useRouter()

  const handleOnLogout = () => {
    localStorage.clear()
    router.push('/signIn')
  }

  if (typeof window !== 'undefined' && window.localStorage) {
    var token = localStorage.getItem('token')
  }

  const handleOnCreate = () => {
    router.push(
      db === 'blogs' ? '/blogs/create' : db === 'case-study'
      // ? '/case-study/create'
      // : '/case-studies/create'
    )
  }

  const handleOnDelete = async () => {
    const newData = data.filter((e) => e.id != delId)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${db}/${delId}`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json', Authorization: token },
        }
      )
      const json = await response.json()
      notify(json.message)
      setData(newData)
      //   router.push(db === "blogs" ? "/blogs" : "/case-studies");
    } catch (error) {
      notifyError('Internal server error')
    }
  }
  return (
    <>
      <DeleteModal handleOnDelete={handleOnDelete} />
      {authorized && (
        <>
          <div
            className={`cursor_pointer d-flex fs-6 fw-semibold text-primary fw-bold ${styles.controlbtndiv}`}
          >
            {/* <div className="control-btn-div cursor_pointer d-flex fs-6 fw-semibold text-primary fw-bold"> */}
            <div onClick={handleOnCreate}>Create Blog</div>
            <div onClick={handleOnLogout}>Logout</div>
          </div>
        </>
      )}
      {/* <div className={styles.breadcumbarea}>
       
        {db === 'case-study' ? (
          <h1 className="text-center text-light">CASE STUDY</h1>
        ) : (
          <h1 className="text-center text-light">OUR LATEST BLOGS</h1>
        )}
      </div> */}
      <div className={`container information-section py-5 pa-1 ${styles.pa_1}`}>
        <div className="container">
          {db === 'case-study' ? (
            <h1 className="text-center text-light">CASE STUDY</h1>
          ) : (
            <div className=" row mt-5">
              <div className="col12 col-md-5 pt-4 ">
                <h5 className="heading-h6 text-color-pink  fw-bold">
                  Information
                </h5>
                <h2 className="display-2  py-2 main-heading">Our Blogs</h2>
                <p className="fw-normal text-muted">
                  Uncover game-changing insights that fuel innovation in
                  software development. Explore our thoughtfully curated
                  collection of blogs, meticulously designed to empower every
                  step of your IT journey.
                </p>
              </div>
              <div className="col-12 col-md-7 ">
                <div className={styles.blogcontainer}>
                  <Image
                    src="/Newimages/blogimg-01.png"
                    alt=""
                    height={554}
                    width={600}
                    objectFit="contain"
                    className="img-fluid mx-auto"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <BlogGrid
        data={data}
        authorized={authorized}
        setDelId={setDelId}
        db={db}
      />
      <div className={`container-fluid about-area-5 ${styles.about_area_5}`}>
        <div
          className={`container about-area-5-container ${styles.about_area}`}
        >
          <div className="row">
            <div className="col-lg-12">
              <h2
                className={`about-area-5-heading ${styles.about_area_5_heading}`}
              >
                Looking for solutions tailored to your needs?
              </h2>
            </div>
          </div>
          <div className="d-flex flex-wrap align-items-content">
            <a
              href="./contact"
              target="_blank"
              className={`btn btn_pink career-area-1-btn px-5" ${styles.btn}`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogList
