import React from 'react'
import styles from '../styles/techComponent.module.css'
const TechComponentIcon = ({ path }) => {
  return (
    <div className={styles.techcontainer}>
      {path.map((e, i) => (
        <div
          className={`d-flex flex-column justify-content-center align-items-center ${styles.techcontainerdiv}`}
          key={i}
        >
          <img
            className={styles.techcontainerimg}
            src={e.path}
            alt={e.altImg}
          />
          <p className={styles.techcontainerpara}>{e.name}</p>
        </div>
      ))}
    </div>
  )
}
export default TechComponentIcon
