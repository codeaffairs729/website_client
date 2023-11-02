import { useRouter } from 'next/router'
import style from '../styles/about.module.css'
import styles from '/styles/qrcode.module.css'
import Image from 'next/image'
import FooterCss from '../styles/Footer.module.css'
const email = 'ceo@codegaragetech.com'
function generateVCFData() {
  const contactName = 'MP Singh (CEO)'
  const phoneNumber = '+1 (437) 662-9166'
  const email = 'ceo@codegaragetech.com'

  return `BEGIN:VCARD
VERSION:3.0
FN:${contactName}
TEL:${phoneNumber}
EMAIL:${email}
END:VCARD`
}

function Qrpm() {
  const router = useRouter()

  const handleWhatsAppClick = () => {
    const vcfData = generateVCFData()
    const blob = new Blob([vcfData], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'mehakpal_contact.vcf'
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
  }
  return (
    <div className={styles.main_div}>
      <div className={`d-flex ${styles.redirect_link_top}`}>
        <div className={`${FooterCss.logo_container} `}>
          <a
            href={'https://codegaragetech.com/'}
            className="footer__link me-3"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/footer-images/Logo__text.svg"
              alt="Code Garage Tech - Logo"
              width={250}
              height={59}
              priority={true}
            />
          </a>
        </div>
      </div>
      <div className={`container about-area-4 ${styles.about_area_outer}`}>
        <div className={`col-lg-11 col-md-10 ${style.col_md_10}`}>
          <div
            className={`row about-area-4-main-data-outer  ${styles.about_area_flex}`}
          >
            <div
              className={`col-lg-6 col-md-6 align-items-center about-img-height  ${styles.left_part}`}
            >
              <div className={styles.img}>
                <Image
                  className="about-area-4-main-img"
                  src="/aboutUsImages/ceo.png"
                  height={400}
                  width={400}
                  objectFit="cover"
                />
              </div>
            </div>
            <div
              className={`col-lg-6 col-md-6 d-flex about-area-4-main-desc-outer  ${styles.right_div}`}
            >
              <div className={`about-area-4-main-para ${styles.main_para} `}>
                <div className={`fw-bolder ${styles.about_faces}`}>
                  <h1> Mehakpal Singh (CEO)</h1>
                  <div className={`d-flex ${styles.social_link}`}>
                    <a
                      href={
                        'https://www.linkedin.com/in/mehakpal-singh-3a9215a5/'
                      }
                      className="footer__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={'/images/LinkedIn3d.webp'}
                        alt="3D LinkedIn Icon"
                        height={50}
                        width={50}
                      />
                    </a>
                    <a
                      href={'https://api.whatsapp.com/send?phone=14376629166'}
                      className="footer__link "
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={'/images/WhatsApp.webp'}
                        alt="WhatsApp Icon"
                        height={50}
                        width={50}
                      />
                    </a>
                    <a
                      href={`mailto:${email}`}
                      className="footer__link "
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/footer-images/email.png"
                        alt="Email Icon"
                        height={50}
                        width={50}
                      />
                    </a>
                  </div>
                  <div className={styles.redirect_link}>
                    <a
                      href={''}
                      target="_blank"
                      onClick={handleWhatsAppClick}
                      className={`btn career-area-1-btn px-5 ${styles.btn}`}
                    >
                      Save Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Qrpm
