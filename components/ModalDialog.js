import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import AssistanceForm from './AssistanceModel'
function ModalDialog() {
  const [modalView, setModalView] = React.useState(false)
  const initModal = () => {
    return setModalView(!modalView)
  }
  return (
    <>
      <button
        type="button"
        className="freelancer-main__btn"
        onClick={initModal}
      >
        Get Assistance
      </button>

      <div onClick={initModal}>
        <Modal show={modalView} onClick={(e) => e.stopPropagation()}>
          <Modal.Header
            className="modal-header"
            closeButton
            onClick={initModal}
          >
            <Modal.Title onClick={(e) => e.stopPropagation()}>
              {' '}
              <h3 className="schedule-form-header text-center">
                Schedule a Meeting
              </h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="schedule-form">
              <AssistanceForm
                requestOrigin={'Requested from get assisstance'}
              />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}
export default ModalDialog
