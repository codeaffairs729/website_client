import React from 'react'
import styles from '../../styles/blogStyle.module.css'
import hireService from '../../styles/hireService.module.css'
import Image from 'next/image'
import About from '../../components/case-study/About'
import { useRouter } from 'next/router'
const Video = ({ Casedata }) => {
  return (
    <>
      <section className={`case-study-section py-5 ${styles.aboutus}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 ">
              <h5 className="heading-h6 text-color-indigo mb-3 fw-bold">
                Case Study
              </h5>
              <h2 className="display-2 fw-semibold py-2 main-heading">
                {Casedata.title}
              </h2>
              <p className={`fw-normal text-muted ${styles.para}`}>
                {Casedata.small_des}
              </p>
            </div>
            <div className={`col-12 col-lg-7 ${styles.casestudypage}`}>
              <div className={styles.cube}>
                <Image
                  src="/blogs/Cube.png"
                  alt="blogimage"
                  height={81.77}
                  width={111}
                  objectFit="contain"
                />
              </div>
              <div className={styles.ml_5}>
                <Image
                  src={Casedata.img}
                  width={555}
                  height={360}
                  objectFit="cover"
                  className="img-fluid mx-auto"
                  priority="true"
                  style={{ borderRadius: '30px' }}
                />
              </div>
              <div className={styles.glass}>
                <Image
                  src="/blogs/glass.png"
                  alt="blognotebook"
                  objectFit="contain"
                  height={179.23}
                  width={200}
                />
              </div>
              <div className={styles.clock}>
                <Image
                  src="/blogs/clock2.png"
                  alt="blognotebook"
                  height={100}
                  width={154.72}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          {/* <About Casedata={data} /> */}
        </div>
      </section>
    </>
  )
}

export default Video
