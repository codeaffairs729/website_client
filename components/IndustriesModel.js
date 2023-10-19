import React from 'react'
import styles from '../styles/Industries.module.css'
import Image from 'next/image'

const IndustriesModel = ({ item }) => {
  return (
    <div className={`${styles.right_item_container}`}>
      <div
        className={`${styles.image_container}`}
        data-aos="fade-left"
        data-aos-delay="150"
      >
        <Image
          src={item.imgUrl}
          height={300}
          width={500}
          objectFit="cover"
          alt={item.img_alt}
        />
      </div>
      <div className={`${styles.right_lower_container}`}>
        <div className={`${styles.right_lower_items_container}`}>
          <div
            className={`${styles.right_title}`}
            data-aos="fade-left"
            data-aos-delay="150"
          >
            {item.title}
          </div>
          <div
            className={`${styles.right_heading}`}
            data-aos="fade-left"
            data-aos-delay="150"
          >
            Our Expertise
          </div>
          <div className={`${styles.right_points_container}`}>
            {item.points.map((point, index) => {
              return (
                <div
                  className={`${styles.point_and_check_container}`}
                  key={point}
                  data-aos="fade-left"
                  data-aos-delay="150"
                >
                  <Image
                    src={'/Industries/check_icon.png'}
                    width={24}
                    height={24}
                    alt="check_icon"
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
