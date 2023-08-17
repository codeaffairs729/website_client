import style from './../styles/ShimmerHire.module.css'

const ShimmerHire = () => {
  return (
    <>
      <div className={`${style.container}`}>
        <div className={`${style.mainContainer}`}>
          <div className={`${style.leftContainer}`}>
            <div>
              <div></div>
              <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
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

export default ShimmerHire
