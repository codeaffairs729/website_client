import listStyle from '../../styles/hireService.module.css'
import style from '../../styles/case-page.module.css'

const Challenges = ({ Casedata }) => {
  return (
    <>
      <div className={style.challenge_main}>
        <div className={style.challenge_img}>
          <div>
            <img src={Casedata.challengeimg1} height={'600px'} width={'auto'} />
          </div>
          <div>
            <img src={Casedata.challengeimg2} height={'600px'} width={'auto'} />
          </div>
        </div>
        <div>
          <div className={listStyle.techservicebodyleft}>
            <h1 className={style.challenge_header}>Challenges:</h1>
            <ul
              className={`${listStyle.hirelisticon} ${listStyle.challenges} `}
            >
              {Casedata.Challenges.map((challenge, index) => (
                <li key={index} className={listStyle.marginebottom16px}>
                  <p className={listStyle.marginleft25px}>{challenge}</p>
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
