import Header from '../pages/includes/header'
// import Footer from '../pages/includes/footer'
import Image from 'next/image'
import styles from '../styles/hireService.module.css'
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
  return (
    <>
      {/* <Header /> */}
      <div className={styles.hirecontainer}>
        {isIconExit && (
          <div>
            {/* <div className="blue-circle"></div> */}
            <div className={styles.bannercloud}>
              <Image
                src="/img/cloud.webp"
                alt="cloud-jpg"
                // width={111}
                // height={82}
                layout="fill"
              />
            </div>

            <div className={styles.bannertype}>
              <Image
                src="/images/type.webp"
                alt="cloud-jpg"
                width={26}
                height={66}
                // layout="fill"
              />
            </div>
          </div>
        )}

        {contentHeader && contentHeader()}
        {contentHeader1 && contentHeader1()}
      </div>
      {bannerComponent()}
      <div className={styles.hirecontainer}></div>
      {content4 && content4()}
      <div className={styles.hirecontainer}></div>
      {content5 && content5()}
      <div
        className={`${styles.hirecontainer} ${styles.hirecontainerbodycontent}`}
      >
        {/* <div className="hire-container hire-container-body-content "> */}
        <div className={styles.hirecontainerbodyleftcontent}>
          <div className="hire-team-c1 hire-container-body-left-content1">
            {content1 && content1()}
          </div>
          <div className="hire-team-c1 hire-container-body-left-content2">
            {content2 && content2()}
          </div>
        </div>

        {content3 && content3()}
      </div>
      <div className={`${styles.hirecontainer} ${styles.marginbottom100}`}>
        {content7 && content7()}
      </div>
      <div>{content6 && content6()}</div>
      {/* <Footer /> */}
    </>
  )
}

export default HireServiceLayout
