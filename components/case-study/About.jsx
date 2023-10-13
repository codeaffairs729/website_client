import style from '../../styles/case-page.module.css'
import Image from 'next/image'
const About = ({ Casedata }) => {
  console.log(Casedata)

  return (
    <>
      <section>
        <div className="about-section">
          <div className="row">
            <div className="col-12 pt-4 fw-font lead">
              <p>{Casedata.about} </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center pt-xl-3 attraction">
            <div className={`col-12 col-lg-6 my-3 ${style.col_12}`}>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <img
                    src="/Newimages/color.png"
                    alt="..."
                    height="89"
                    width="8"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h4 className="fw-bold text-color-indigo">Active Users</h4>
                  <h4 className="fw-bold">{Casedata.Active}</h4>
                </div>
              </div>
            </div>
            <div className={`col-12 col-lg-6 col-xl-5 my-3 ${style.col_6}`}>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <img
                    src="/Newimages/Camera.png"
                    alt="..."
                    height="79"
                    width="84"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h4 className="fw-bold text-color-indigo">Logs Created</h4>
                  <h4 className="fw-bold">{Casedata.Logs}</h4>
                </div>
              </div>
            </div>
            <div className={`col-12 col-lg-6 my-3 ${style.col_12}`}>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <img
                    src="/Newimages/file.png"
                    alt="..."
                    height="79"
                    width="84"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h4 className="fw-bold text-color-indigo">App Downloads</h4>
                  <h4 className="fw-bold">{Casedata.AppDownloads}</h4>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="frame">
            <Image
              src="/blogs/Frame.png"
              objectFit="conatin"
              height={130}
              width={101}
            ></Image>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default About
