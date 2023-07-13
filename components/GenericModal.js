import React, { useState } from 'react'

const GenericModal = (props) => {
  const {
    genModalshow,
    modalHeaderShow,
    modalBodyShow,
    modalFooterShow,
    modalTitle,
    modalBody,
    source,
  } = props
  return (
    <>
      <div className={`modal fade ${genModalshow && 'show'}`} id="myModal">
        <div
          className={`modal-dialog ${
            source === 'careers' && 'modal-dialog-careers'
          }`}
        >
          <div className="modal-content">
            <div
              className={`modal-header justify-content-center ${
                modalHeaderShow ? 'flex' : 'd-none'
              }`}
            >
              <div className="modal-title mb-4">{modalTitle}</div>
              <button
                type="button"
                className="btn-close genModalCrossBtn"
                onClick={props.handleModalClose}
              ></button>
            </div>
            <div
              className={`modal-body ${modalBodyShow ? 'd-block' : 'd-none'}`}
            >
              <div className="row">
                <div className="col-lg-12 px-5">
                  <form
                    onSubmit={props.handleSubmit}
                    encType="multipart/form-data"
                    method="post"
                  >
                    {modalBody}
                  </form>
                </div>
              </div>
            </div>
            <div
              className={`modal-footer ${
                modalFooterShow ? 'd-block' : 'd-none'
              }`}
            >
              <button
                type="button"
                className="btn btn-danger"
                onClick={props.handleModalClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal-backdrop ${
          genModalshow ? 'd-block opacity-25' : 'd-none'
        }`}
      ></div>
    </>
  )
}

export default GenericModal
