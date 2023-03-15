import React, { useState, useRef } from 'react'

const GenenralForm = ({
  fields,
  title,
  submitFunc,
  buttonText,
  submitButton,
}) => {
  return (
    <>
      <div className="gen-form-container d-flex flex-column align-items-center">
        <div className="input-field">
          <h2 className="form-container-header">{title}</h2>
          <div className="form-container-input d-flex flex-column justify-content-center align-items-center">
            {fields.map((e, i) => (
              <div className="form-input-detail" key={i}>
                <span className="input-icon">{e.icon}</span>
                {e.render && e.render()}
              </div>
            ))}
          </div>
          {submitButton()}
        </div>
      </div>
    </>
  )
}

export default GenenralForm
