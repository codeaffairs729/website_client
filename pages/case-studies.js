import Video from '../components/case-study/Video'
import About from '../components/case-study/About'
import Challenges from '../components/case-study/Challenges'
import Effort from '../components/case-study/Effort'
import style from '../styles/case-page.module.css'

const CaseStudies = () => {
  return (
    <>
      <div className={style.container}>
        <img
          src="/case_study/Ellipse_blue.png"
          className={style.ellipse_blue_img}
        />
        <img
          src="/case_study/ellipse_black_circle.png"
          className={style.ellipse_blue_circle}
        />
        <img
          src="/case_study/ellipse_blue_circle.png"
          className={style.ellipse_black_circle}
        />
        <Video />
        <About />
        <Challenges />
        <Effort />
      </div>
    </>
  )
}

export default CaseStudies
