const DeleteModal = ({ handleOnDelete }) => {
  const handleOnPopUp = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="blog-modal-content modal-content">
            <div className="modal-container">
              <h2>Delete Account</h2>
              <p>Are you sure you want to delete your blog?</p>
              <div className="clearfix">
                <button
                  type="button"
                  className={`modal-btn cancelbtn`}
                  data-bs-dismiss="modal"
                  onClick={(event) => handleOnPopUp(event)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className={`modal-btn deletebtn`}
                  data-bs-dismiss="modal"
                  onClick={() => handleOnDelete()}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DeleteModal
