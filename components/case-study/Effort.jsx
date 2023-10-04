import Casestudy from '../../pages/test_case_study/[id]'
import style from '../../styles/case-page.module.css'
import Image from 'next/image'
const Effort = ({ Casedata }) => {
  return (
    <>
      <div className={style.case_container}>
        <h1 className={style.challenge_header}>Technology Solutions:</h1>
        <div className={style.effort_div}>
          {Casedata.Solutions.map((item, index) => (
            <div key={index} className={style.effort_section}>
              {index % 2 === 0 ? (
                <>
                  <Image
                    src={item.solimg}
                    height={252}
                    width={422}
                    objectFit="contain"
                  />
                  <p>{item.info}</p>
                </>
              ) : (
                <>
                  <p> {item.info}</p>
                  <Image
                    src={item.solimg}
                    height={202}
                    width={322}
                    objectFit="contain"
                  />
                </>
              )}
            </div>
          ))}
        </div>
        <div className={style.result_section}>
          <div>
            <h1 className={style.challenge_header}>Result</h1>
            <p>{Casedata.Results}</p>
          </div>
          <Image
            src={Casedata.resimg}
            height={302}
            width={322}
            objectFit="contain"
          />
        </div>
      </div>
    </>
  )
}
export default Effort
