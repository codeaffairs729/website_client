import Image from 'next/image'
import hireService from '../styles/hireService.module.css'
import { gitlab } from '../utils/data'

const DevOpsStatic = () => {
  return (
    <>
      <div
        className={` feature-list container ${hireService.maindevcontainer}`}
      >
        <div className={hireService.hireh5}>
          Fostering Growth Through<br></br> DevOps Culture
        </div>

        <div
          className={`${hireService.techservicebody} ${hireService.adjustservicebody}`}
        >
          <div className={hireService.devopsservicebodyleft}>
            <ul
              className={`${hireService.listicon} ${hireService.hire_list_items_services}`}
            >
              <li className={hireService.marginebottom16px}>
                <p className={hireService.marginleft25px}>Efficient Scaling</p>
              </li>
              <li className={hireService.marginebottom16px}>
                <p className={hireService.marginleft25px}>Rapid Deployment</p>
              </li>
              <li className={hireService.marginebottom16px}>
                <p className={hireService.marginleft25px}>
                  Business-IT Alignment
                </p>
              </li>
              <li className={hireService.marginebottom16px}>
                <p className={hireService.marginleft25px}>Risk Mitigation</p>
              </li>
              <li className={hireService.marginebottom16px}>
                <p className={hireService.marginleft25px}>
                  Resource Optimization
                </p>
              </li>
              <li className={hireService.marginebottom16px}>
                <p className={hireService.marginleft25px}>24X7 Monitoring</p>
              </li>
            </ul>
          </div>

          <div className={hireService.topImage}>
            <Image
              src="/dev_ops/devops_pic.png"
              alt="bottom image"
              width={884}
              height={548}
              objectFit="fill"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default DevOpsStatic
