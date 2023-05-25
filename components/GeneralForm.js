import React, { useState, useRef } from 'react'
import styles from '../styles/genform.module.css'

const GenenralForm = ({
  fields,
  title,
  submitFunc,
  buttonText,
  submitButton,
}) => {
  return (
    <>
      <form>
        <div
          className={`d-flex flex-column align-items-center ${styles.genformcontainer}`}
        >
          <div className={styles.inputfield}>
            <h2 className={styles.formcontainerheader}>{title}</h2>
            <div
              className={`d-flex flex-column justify-content-center align-items-center ${styles.formcontainerinput}`}
            >
              {fields.map((e, i) => (
                <div className={styles.forminputdetail} key={i}>
                  <span className={styles.inputicon}>{e.icon}</span>
                  {e.render && e.render()}
                </div>
              ))}
            </div>
            {submitButton()}
          </div>
        </div>
      </form>
    </>
  )
}

export default GenenralForm
