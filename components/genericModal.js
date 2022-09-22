import React, { useState } from 'react'

const GenericModal = (props) => {
  const { genModalshow, modalHeaderShow, modalBodyShow, modalFooterShow, modalTitle, modalBody } = props
  return (
    <>
      <div className={`modal fade ${ genModalshow ? "show" : "" }`} id="myModal" >
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header justify-content-center" style={ modalHeaderShow ? {display: "flex"} : {display: "none"} } >
                      <h4 className="modal-title">{modalTitle}</h4>
                      <button type="button" className="btn-close genModalCrossBtn" onClick={props.handleModalClose} ></button>
                  </div>
                  <div className="modal-body" style={ modalBodyShow ? {display: "block"} : {display: "none"} } >
                    <div className='row' >
                      <div className='col-lg-12 px-5' >
                          <form onSubmit={props.handleSubmit} encType="multipart/form-data" method="post" >
                            {modalBody}
                          </form>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer" style={ modalFooterShow ? {display: "block"} : {display: "none"} } >
                      <button type="button" className="btn btn-danger" onClick={props.handleModalClose} >Close</button>
                  </div>
              </div>
          </div>
      </div>
      <div className="modal-backdrop" style={ genModalshow ? { display: "block", opacity: "0.5" } : { display: "none" } } ></div>
    </>
  )
}

export default GenericModal