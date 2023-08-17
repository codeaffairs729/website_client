import style from '../../styles/case-page.module.css'

const About = () => {
  return (
    <>
      <div className={style.about}>
        <img src="/case_study/type_blue.png" className={style.type_blue_img} />
        <h2 className="text-center">About the Project </h2>
        <p>
          This case study focuses on a mobile application specially designed to
          record underwater diving adventures. Through this app, users can
          effortlessly capture underwater photos and create videos. This
          application ensures safety by offering details about pressure,
          temperature, and other factors under water. The app&apos;s safety
          alerts will notify you if you have reached your depth stop, or
          ascending too fast. In the case of an emergency, the app will let you
          know what to do at the current depth to stay safe. It also supports
          free diving mode with features including, a stopwatch for static
          apnea, and boat calling. This application functions without any phone
          signal and displays information, such as dive duration, and
          no-decompression limit (NDL) to prevent accidents and decompression
          sickness.
        </p>
      </div>
      <div className={style.stats}>
        <div className="d-flex justify-content-center align-items-center ">
          <div className={style.stats_div_img}>
            <img src="/case_study/Profile-2.png" />
          </div>
          <div className={`d-flex flex-column ${style.stats_div_info}`}>
            <span>Active Users </span>
            <span>20,000</span>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className={style.stats_div_img}>
            <img src="/case_study/Camera.png" />
          </div>
          <div className={`d-flex flex-column ${style.stats_div_info}`}>
            <span>Logs Created </span>
            <span>10 Lakh</span>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className={style.stats_div_img}>
            <img src="/case_study/Group.png" />
          </div>
          <div className={`d-flex flex-column ${style.stats_div_info}`}>
            <span>App Downloads </span>
            <span>50k, in one year</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
