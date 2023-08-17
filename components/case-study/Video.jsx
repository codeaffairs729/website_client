import React from 'react'
import styles from '../../styles/case-page.module.css'
import ReactPlayer from 'react-player'

const Video = () => {
  return (
    <div className={styles.videoContainer}>
      {/* <video controls autoplay className={styles.video}>
        <img src="/Industries/AI.webp" />
      </video> */}

      <div className={styles.video}>
        <img src="/case_study/scuba_diving.png" />
        <div className={styles.overlay_text}>
          <p>
            Mobile App <br />
            for Divers
          </p>
        </div>
      </div>
    </div>
  )
}

export default Video
