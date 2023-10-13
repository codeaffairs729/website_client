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
                <div className={style.odd}>
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
          <h1 className={style.challenge_header}>Results</h1>
          <div className={style.result_section}>
            <Image
              src={Casedata.resimg}
              height={300}
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
