import style from './../styles/ShimmerService.module.css'

const ShimmerServices = () => {
  return (
    <>
      <div className={`${style.container}`}>
        <div className={`${style.mainContainer}`}>
          <div></div>
          <div className={`${style.leftContainer}`}>
            <div>
              <div></div>
              <div>
                <div></div>
                {/* <div></div>
                <div></div>
                <div></div> */}
              </div>
              <div></div>
            </div>
          </div>
          <div className={`${style.rightContainer}`}>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShimmerServices
