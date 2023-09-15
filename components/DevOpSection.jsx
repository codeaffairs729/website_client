import Image from 'next/image'
import style from './../styles/devops.module.css'
import { gitlab } from '../utils/data'

const DevOpSection = () => {
  return (
    <div className={style.container}>
      <div className={style.image_container}>
        {/* <h1>Our DevOps Culture</h1> */}
        <img
          src="/dev_ops/devops_main_1.png"
          // height={500}
          // width={500}
          // layout="fill"
          alt="dev-ops-png"
        />
        {/* <div className={style.icons_div}>
          <img src={gitlab} />
          <p>GitLab</p>
        </div> */}
      </div>
    </div>
  )
}

export default DevOpSection
