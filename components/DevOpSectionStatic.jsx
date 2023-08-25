import Image from 'next/image'
import style from './../styles/devops.module.css'
import hireService from '../styles/hireService.module.css'
const techTitle = 'Our DevOps Culture'
import { gitlab } from '../utils/data'

const DevOpsStatic = () => {
  return (
    <>
      <div className={hireService.maindevcontainer}>
        <div className={hireService.hirecontainer}>
          <div
            className={`${hireService.techservicebody}  ${hireService.adjustservicebody}`}
          >
            <div className={hireService.techservicebodyleft}>
              <h1 className={hireService.hireh2}>{techTitle}</h1>
              <ul
                className={`${hireService.listicon} ${hireService.hire_list_items_services} `}
              >
                <li className={hireService.marginebottom16px}>
                  <p className={hireService.marginleft25px}>
                    Continues Development & Integeration
                  </p>
                </li>
                <li className={hireService.marginebottom16px}>
                  <p className={hireService.marginleft25px}>
                    24 x 7 Monitoring
                  </p>
                </li>
                <li className={hireService.marginebottom16px}>
                  <p className={hireService.marginleft25px}>
                    Systematic Planing
                  </p>
                </li>
                <li className={hireService.marginebottom16px}>
                  <p className={hireService.marginleft25px}>Optimum SEO</p>
                </li>
                <li className={hireService.marginebottom16px}>
                  <p className={hireService.marginleft25px}>
                    Reliable Search Queries
                  </p>
                </li>
              </ul>
            </div>
            <div className={hireService.imageContainer}>
              <div className={hireService.topImage}>
                <Image
                  src="/devops/devops_main_2.webp"
                  alt="bottom image"
                  width={1000}
                  height={607}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DevOpsStatic
