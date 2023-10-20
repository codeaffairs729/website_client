import style from '../../styles/case-page.module.css'
import Image from 'next/image'

const Effort = ({ Casedata }) => {
  return (
    <>
      <div className={style.case_container}>
        <h1 className={style.challenge_header}>Technology Solutions</h1>
        <div className={style.effort_div}>
          {Casedata.Solutions.map((item, index) => (
            <div key={index} className={style.effort_section}>
              {index % 2 === 0 ? (
                <>
                  <div className={style.odd}>
                    <Image
                      src={item.solimg}
                      height={200}
                      width={320}
                      objectFit="contain"
                    />
                    <p>{item.info}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className={style.even}>
                    <p> {item.info}</p>
                    <Image
                      src={item.solimg}
                      height={200}
                      width={320}
                      objectFit="contain"
                    />
                  </div>
                </>
              )}
            </div>
          ))}

          {/* Conditional rendering for "Online/Offline Working and Synchronize" */}
          {Casedata.id === '3' && (
            <div className={style.online}>
              <h4 className={style.challenge_header}>
                Offline/Online Working and Synchronize
              </h4>
              <div className={style.effort_section}>
                <div className={style.extra}>
                  <p>{Casedata.OfflineOnlineWorkingandSynchronize[0].info}</p>
                  <Image
                    src={
                      Casedata.OfflineOnlineWorkingandSynchronize[0].solimage
                    }
                    height={252}
                    width={422}
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={style.results}>
          <div className={` d-flex ${style.result_div}`}>
            <div className={style.result_heading}>
              <h1 className={style.challenge_header}>Results</h1>
            </div>
            <div
              className={`row d-flex justify-content-center pt-xl-3 attraction ${style.logs}`}
            >
              <div className={`col-12 col-lg-6 my-3 ${style.col_12}`}>
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img
                      src="/Newimages/color.png"
                      alt="..."
                      height="84"
                      width="84"
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
          </div>
          <div className={style.result_section}>
            <Image
              src={Casedata.resimg}
              height={250}
              width={322}
              objectFit="contain"
            />
            <div>
              <p>{Casedata.Results}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Effort
