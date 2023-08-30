import React from 'react'
import style from '../../styles/case-page.module.css'

const Effort = ({ Casedata }) => {
  return (
    <>
      <div className={style.case_container}>
        <h1 className={style.challenge_header}>Our Efforts:</h1>
        <div className={style.effort_div}>
          {/* Render effort sections */}
          {Casedata.Solutions.map((item, index) => (
            <div key={index} className={style.effort_section}>
              {index % 2 === 0 ? (
                <>
                  <p>
                    {item.info}
                    {index}
                  </p>

                  <div className={style.Casestudy_img}>
                    <img src={item.solimg} />
                  </div>
                </>
              ) : (
                <>
                  <img src={item.solimg} />
                  <p>{item.info}</p>
                </>
              )}
            </div>
          ))}
        </div>
        {Casedata.OfflineOnlineWorkingandSynchronize && (
          <div className={style.online_section}>
            <div>
              <h1 className={style.challenge_header}>
                Offline Online Working and Synchronize:
              </h1>
              <p>{Casedata.OfflineOnlineWorkingandSynchronize}</p>
            </div>
            <div className={style.Casestudy_img}>
              <img src={'/case_study/move2.png'} alt="effort-jpg" />
            </div>
          </div>
        )}
        <div className={style.result_section}>
          <div className={style.result_img}>
            <img src={'/case_study/result_pixel_1.png'} alt="effort-jpg" />
          </div>
          <div>
            <h1 className={style.challenge_header}>Result</h1>
            <p>{Casedata.Results}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Effort
