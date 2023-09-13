import listStyle from '../../styles/hireService.module.css'
import style from '../../styles/case-page.module.css'

const Challenges = () => {
  const list = [
    'Underwater image enhancement',
    'In-app implementation of Buhlmann Decompression',
    'Complex system design',
    'Synchronization of log data with the cloud, such as Images, Videos, Meta-data information',
    'Complex scientific data analysis and representation',
    'Complex environment simulation for testing',
  ]
  return (
    <>
      <div className={style.challenge_main}>
        <div className={style.challenge_img}>
          <div>
            <img src="/case_study/Group_pic1.png" />
          </div>
          <div>
            <img src="/case_study/Group_pic2.png" />
          </div>
        </div>
        <div>
          <div className={listStyle.techservicebodyleft}>
            <h1 className={style.challenge_header}>Challenges:</h1>
            <ul
              className={`${listStyle.hirelisticon} ${listStyle.hire_list_items_services} `}
            >
              {list.map((item, index) => (
                <li key={index} className={listStyle.marginebottom16px}>
                  <p className={listStyle.marginleft25px}>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Challenges
