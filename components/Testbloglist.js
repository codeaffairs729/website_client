import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Testbloggrid from './Testbloggrid'
import DeleteModal from './DeleteModal'
import styles from '../styles/blogStyle.module.css'
import Image from 'next/image'

const Testblogist = ({ authorized, blogData, notify, notifyError, db }) => {
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
        <div className="breadcumb-area">
        {db === 'case-study' ? (
          <h1 className="text-center text-light">CASE STUDY</h1>
        ) : (
          <h1 className="text-center text-light">OUR LATEST BLOGS</h1>
        )}
      </div> */}
      <div
        className={`  pt-5 feature-list container ${styles.mainblogcontainer}`}
      >
        {/* <div className={styles.bluecircle}></div> */}
        <div className={styles.blogcontainer}>
          <div className={styles.blogcloud1}>
            <Image
              src="/blogs/blogcloud.png"
              alt="blogimage"
              height={78.34}
              width={106.34}
            />
          </div>
          <div className={styles.blogcloud2}>
            <Image
              src="/blogs/blogcloud.png"
              alt="blogimage"
              height={78.34}
              width={106.34}
            />
          </div>
          <div className={styles.blogcontainerleft}>
            {/* <div className="breadcumb-area"> */}
            <div className={styles.circle} />

            <div className={styles.blogh1}>Information</div>
            <div className={styles.blogcentertext}>Our Blogs</div>
            <div className={styles.text}>
              Uncover game-changing insights that fuel innovation in software
              development. Explore our thoughtfully curated collection of blogs,
              meticulously designed to empower every step of your IT journey.
            </div>
          </div>
          <div className={styles.blogcontainerright}>
            <Image
              src="/blogs/blogs_img.png"
              alt="blogimage"
              height={300}
              width={599.89}
            />
          </div>
        </div>
      </div>
      <Testbloggrid
        data={data}
        authorized={authorized}
        setDelId={setDelId}
        db={db}
      />
    </>
  )
}

export default Testblogist
