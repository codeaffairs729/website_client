import React from 'react'
import styles from '../styles/ShimmerCareers.module.css'

const ShimmerCareers = () => {
  return (
    <div className={`row ${styles.container}`}>
      <div className={`col-lg-4 ${styles.left_container}`}>
        <div className={`${styles.left_container_items}`}></div>
      </div>
      <div className={`col-lg-8 ${styles.right_container}`}>
        <div className={`${styles.right_container_top}`}></div>
        <div className={`${styles.right_container_items}`}></div>
        <div className={`${styles.right_container_items_2}`}></div>
        <div className={`${styles.right_container_items_3}`}></div>
      </div>
    </div>
  )
}

export default ShimmerCareers
