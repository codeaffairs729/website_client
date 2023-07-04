import React from 'react'
import styles from '../styles/caseStudy.module.css'
import Image from 'next/image'
import Link from 'next/link'
const CaseStudyModal = ({ item }) => {
  return (
    <div className={`${styles.main_container}`}>
      <div className={`${styles.image_container}`}>
        <Image
          src={item?.imgUrl}
          height={300}
          width={500}
          objectFit="fill"
          className={`${styles.image_container}`}
          // alt={item.img_alt}
        />
      </div>
      <h3 className={`${styles.case_title}`}>{item.title}</h3>
      <Link href={item.slug} className="">
        <button type="button" className="blog-btn">
          READ MORE
        </button>
      </Link>
    </div>
  )
}

export default CaseStudyModal
