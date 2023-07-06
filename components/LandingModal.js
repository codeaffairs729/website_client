import styles from '../styles/landingStyle.module.css'
// import LandingPage from './LandingPage'
import RequestCallBack from './RequestCallBack'
import { GrFormClose } from 'react-icons/gr'

const LandingModal = () => {
  const hideModal = () => {
    console.log('hide modal')
    const modal = document.getElementById('exampleModal')
    modal.classList.remove('show')
    modal.setAttribute('aria-hidden', 'true')
  }
  return (
    <>
      <div
        className="modal fade show"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <GrFormClose
              className="btn-close cursor_pointer"
              data-bs-dismiss="modal"
              size={30}
              onClick={hideModal}
            /> */}

            <div className="modal-body">
              <RequestCallBack />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default LandingModal
