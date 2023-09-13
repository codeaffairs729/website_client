import React from 'react'
import style from '../../styles/case-page.module.css'

const About = ({ Casedata }) => {
  return (
    <>
      <div className={style.about}>
        {/* Render about section content */}
        <h2 className="text-center">{Casedata.title}</h2>
        <p>{Casedata.about}</p>
      </div>
      <div className={style.stats}>
        <div className="d-flex justify-content-center align-items-center ">
          <div className={style.stats_div_img}>
            <img src="/case_study/Profile-2.png" />
          </div>
          <div className={`d-flex flex-column ${style.stats_div_info}`}>
            <span>Active Users </span>
            <span>{Casedata.Active}</span>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className={style.stats_div_img}>
            <img src="/case_study/Camera.png" />
          </div>
          <div className={`d-flex flex-column ${style.stats_div_info}`}>
            <span>Logs Created </span>
            <span>{Casedata.Logs}</span>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className={style.stats_div_img}>
            <img src="/case_study/Group.png" />
          </div>
          <div className={`d-flex flex-column ${style.stats_div_info}`}>
            <span>App Downloads </span>
            <span>{Casedata.AppDownloads}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
