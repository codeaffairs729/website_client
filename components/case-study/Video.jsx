import React from 'react'
import styles from '../../styles/case-page.module.css'

const Video = ({ Casedata }) => {
  console.log(Casedata)
  return (
    <div className={styles.videoContainer}>
      {/* Render the image and overlay text */}
      <div className={styles.video}>
        <img src={Casedata.img} />
        <div className={styles.overlay_text}>
          <p>{Casedata.title}</p>
        </div>
      </div>
    </div>
  )
}

export default Video
