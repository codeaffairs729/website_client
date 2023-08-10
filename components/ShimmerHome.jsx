import style from './../styles/ShimmerHome.module.css'

const ShimmerHome = () => {
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

export default ShimmerHome
