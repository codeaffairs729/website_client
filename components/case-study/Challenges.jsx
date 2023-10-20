import listStyle from '../../styles/hireService.module.css'
import style from '../../styles/case-page.module.css'
import Image from 'next/image'
const Challenges = ({ Casedata }) => {
  const isVideoChatPro = Casedata.title === 'Mobile App For Divers'
  const challenges = Casedata.Challenges
  const totalChallenges = challenges.length
  const challengesPerColumn = Math.ceil(totalChallenges / 2)

  // Split the challenges array into two columns
  const leftChallenges = challenges.slice(challengesPerColumn)
  const rightChallenges = challenges.slice(0, challengesPerColumn)
  return (
    <>
      <div className={style.challenge_main}>
        {/* <div className={style.challengeimg}>
          {isVideoChatPro ? (
            <div className={style.challenge_img}>
              <div>
                <img
                  src={Casedata.challengeimg1}
                  height={'600px'}
                  width={'auto'}
                />
              </div>
              <div>
                <img
                  src={Casedata.challengeimg2}
                  height={'600px'}
                  width={'auto'}
                />
              </div>
            </div>
          ) : (
            <>
              <div>
                <Image
                  src={Casedata.challengeimg1}
                  height={401}
                  width={457}
                  objectFit="contain"
                />
              </div>
            </>
          )}
        </div> */}
        <div className="">
          <div className={listStyle.techservicebodyleft}>
            <div className={style.challenge_columns}>
              <div className={style.challenge_column_left}>
                <h1 className={style.challenge_header}>Challenges</h1>
                {leftChallenges.map((challenge, index) => (
                  <div
                    className={`feature-slide-row d-flex align-items-center py-3 ${style.py_3}`}
                    key={index}
                  >
                    <div className={`logo-container ${style.logo}`}>
                      <Image
                        src={challenge.img}
                        alt=""
                        width={56}
                        height={56}
                      />
                    </div>
                    <div className="align-items-center">
                      <h3>{challenge.heading}</h3>
                      <p>{challenge.des}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={style.challenge_column_right}>
                {rightChallenges.map((challenge, index) => (
                  <div
                    className={`feature-slide-row d-flex align-items-center py-3 ${style.py_3}`}
                    key={index}
                  >
                    <div className={`logo-container ${style.logo}`}>
                      <Image
                        src={challenge.img}
                        alt=""
                        width={56}
                        height={56}
                      />
                    </div>
                    <div className="align-items-center">
                      <h3>{challenge.heading}</h3>
                      <p>{challenge.des}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Challenges
