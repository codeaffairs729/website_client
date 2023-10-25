import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '../styles/hireService.module.css'

const ShimmerServices = dynamic(() => import('./ShimmerService'), {
  ssr: false,
})

const ShimmerHire = dynamic(() =>
  import('./ShimmerHire', {
    ssr: false,
  })
)

const HireServiceLayout = ({
  bannerComponent,
  contentHeader,
  contentHeader1,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
  content7,
  isIconExit,
}) => {
  const [show, setShow] = useState(true)
  const Router = useRouter()
  const path = Router.asPath

  const handleScroll = () => {
    const bannerComponentElement = document.querySelector(
      `.${styles.bannercomponent}`
    )
    const scrollY = window.scrollY
    const initialOffset = 47 * 16
    const threshold = 200 // Adjust this threshold as needed

    if (bannerComponentElement) {
      const newTop = Math.max(initialOffset - scrollY, -threshold)
      bannerComponentElement.style.top = `${newTop}px`
    }
  }

  const onScroll = () => {
    requestAnimationFrame(handleScroll)
  }

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 1000)

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      {show ? (
        path === '/hire-team' || path === '/hire-freelancer' ? (
          <ShimmerHire />
        ) : (
          <ShimmerServices />
        )
      ) : (
        <>
          <div className={styles.hirecontainer}>
            {isIconExit && (
              <div className={styles.bannertype}>
                <Image
                  src="/images/type.webp"
                  alt="cloud-jpg"
                  width={26}
                  height={66}
                />
              </div>
            )}
            {contentHeader && contentHeader()}
            {contentHeader1 && contentHeader1()}
          </div>
          <div className={styles.bannercomponent}>{bannerComponent}</div>
          <div className={styles.hirecontainer}></div>
          {content4 && content4()}
          <div className={styles.hirecontainer}></div>
          {content5 && content5()}
          <div className={styles.maindiv}>
            <div className={styles.blue}></div>
            <div
              className={`feature-list container ${styles.hirecontainer} ${styles.hirecontainerbodycontent}`}
            >
              <div className={styles.hirecontainerbodyleftcontent}>
                <div className="hire-team-c1 hire-container-body-left-content1">
                  {content1 && content1()}
                </div>
                <div className="hire-team-c1 hire-container-body-left-content2">
                  {/* {content2 && content2()} */}
                </div>
              </div>
              <div className={styles.hirecontainerbodyrightcontent}>
                {content3 && content3()}
              </div>
            </div>
          </div>
          <div className={`${styles.hirecontainer} ${styles.marginbottom100}`}>
            {content7 && content7()}
          </div>
          <div>{content6 && content6()}</div>
        </>
      )}
    </>
  )
}

export default HireServiceLayout
