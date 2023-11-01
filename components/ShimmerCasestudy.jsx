import React from 'react'
import style from '../styles/ShimmerCasestudy.module.css'
const ShimmerCasestudy = ({ Casedata }) => {
  return (
    <>
      <div className={`${style.container}`}>
        <div className={`${style.mainContainer}`}>
          <div className={`${style.leftContainer}`}>
            <div>
              <div></div>
              <br></br>
              <div></div>
              <br></br>
              <div></div>
              <br></br>
            </div>
          </div>
          <div className={`${style.rightContainer}`}>
            <div></div>
          </div>
        </div>
        <div className={`${style.bottomContainer}`}>
          {Casedata.id === '1' ? (
            <div className={`${style.leftContainerbottom}`}>
              <div>
                <div></div>
                <br></br>
                <div></div>
                <br></br>
              </div>
            </div>
          ) : (
            <div className={`${style.simplebottomContainer}`}>
              <div>
                <div></div>
                <br></br>
              </div>
            </div>
          )}
          <div className={`${style.rightContainerbottom}`}>
            <div>
              <div></div>
              <br></br>
              <div></div>
              <br></br>
              <div></div>
              <br></br>
              <div></div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShimmerCasestudy
