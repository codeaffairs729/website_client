import style from '../../styles/case-page.module.css'
import Image from 'next/image'
import styles from '../../styles/blogStyle.module.css'

const About = ({ Casedata }) => {
  console.log(Casedata)
  const Mobile_divers = Casedata.title === 'Mobile App For Divers'
  const e_commerce = Casedata.title === 'International E-Commerce'

  return (
    <>
      <section>
        <div className="about-section">
          {/* <div className={style.top_circle}>
            <Image
              src="/case_study/circle.png"
              alt="blogimage"
              height={120}
              width={120}
              objectFit="contain"
            />
          </div> */}
          <div className={style.about_section}>
            <div className={style.challengeimg}>
              {Mobile_divers ? (
                <div>
                  <div className={style.challenge_img}>
                    <div className={style.image1}>
                      <img
                        src={Casedata.challengeimg1}
                        height={500}
                        width="auto"
                      />
                    </div>
                    <div className={style.image2}>
                      <img
                        src={Casedata.challengeimg2}
                        height={500}
                        width="auto"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {e_commerce ? (
                    <div className={style.main}>
                      <div className={style.about_img1}>
                        <Image
                          src={Casedata.about_img1}
                          height={247}
                          width={443.433}
                          objectFit="cover"
                        />
                      </div>
                      <div className={style.about_images}>
                        <div className={style.about_image2}>
                          <img
                            src={Casedata.about_img2}
                            height={332}
                            width={156}
                            objectFit="cover"
                          />
                        </div>
                        <div className={style.about_image3}>
                          <img
                            src={Casedata.about_img3}
                            height={223}
                            width={432}
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={Casedata.challengeimg1}
                      height={500}
                      width={640}
                      objectFit="contain"
                    />
                  )}
                </div>
              )}
            </div>

            <div className={`col-12 pt-4 fw-font lead ${style.about_data}`}>
              {Casedata.about.map((item, index) => (
                <div key={index}>
                  <p>{item.short_des}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
