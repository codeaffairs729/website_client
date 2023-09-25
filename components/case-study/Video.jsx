import React from 'react'
import styles from '../../styles/blogStyle.module.css'
import hireService from '../../styles/hireService.module.css'
import Image from 'next/image'
const Video = ({ Casedata }) => {
  return (
    <>
      <div className={styles.background}>
        <div
          className={`pt-3 feature-list container ${styles.headingcontainer}`}
        >
          <div className={styles.bg}>
            <h1>Case study</h1>
            <div className={styles.cube}>
              <Image
                src="/blogs/cube.png"
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
            >
              <div className={styles.singleblogleftcontainer}>
                <h5>
                  Find out where we are on the path to achieving the ultimate
                  design tool.
                </h5>
              </div>

              <div className={styles.singleblogrightcontainer}>
                <Image src={Casedata.img} width={480} height={300} />
              </div>
            </div>
            <div className={styles.notebook}>
              <Image
                src="/blogs/glass.png"
                alt="blognotebook"
                height={127}
                width={160}
              />
            </div>
            <div className={styles.disk}>
              <Image
                src="/blogs/clock.png"
                alt="blognotebook"
                height={100}
                width={100.83}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Video
