import React from 'react'
import styles from '../styles/Industries.module.css'
import Image from 'next/image'

const IndustriesModel = ({ item }) => {
  return (
    <div className={`${styles.right_item_container}`}>
      <div className={`${styles.image_container}`}>
        <Image src={item.imgUrl} height={300} width={500} objectFit="cover" />
      </div>
      <div className={`${styles.right_lower_container}`}>
        <div className={`${styles.right_lower_items_container}`}>
          <div className={`${styles.right_title}`}>{item.title}</div>
          <div className={`${styles.right_heading}`}>Our Expertise</div>
          <div className={`${styles.right_points_container}`}>
            {item.points.map((point, index) => {
              return (
                <div
                  className={`${styles.point_and_check_container}`}
                  key={point}
                >
                  <Image
                    src={'/Industries/check_icon.png'}
                    width={24}
                    height={24}
                  />
                  <div style={{ paddingLeft: 10, margin: 10 }}>{point}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndustriesModel
