import Image from 'next/image'
import hireService from '../styles/hireService.module.css'
import { gitlab } from '../utils/data'

const DevOpsStatic = () => {
  return (
    <>
      <div className={hireService.maindevcontainer}>
        <div className={hireService.adjustmaincontainer}>
          <div className="" data-aos="animation-scale-y">
            <h1 className={hireService.hireh5}>
              FOSTERING GROWTH THROUGH<br></br> DEVOPS CULTURE
            </h1>
          </div>
          <div className="" data-aos="animation-scale-x">
            <div
              className={`${hireService.techAIservicebody} ${hireService.adjustservicebody}`}
            >
              <div className={hireService.devopsservicebodyleft}>
                <ul
                  className={`${hireService.listicon} ${hireService.hire_list_items_services}`}
                >
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft25px}>
                      Efficient Scaling
                    </p>
                  </li>
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft25px}>
                      Rapid Deployment
                    </p>
                  </li>
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft25px}>
                      Business-IT Alignment
                    </p>
                  </li>
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft25px}>
                      Risk Mitigation
                    </p>
                  </li>
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft25px}>
                      Resource Optimization
                    </p>
                  </li>
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft25px}>
                      24X7 Monitoring
                    </p>
                  </li>
                </ul>
              </div>

              <div className={hireService.topImage}>
                <Image
                  src="/devops/devops_main_img.png"
                  alt="bottom image"
                  width={1400}
                  height={867}
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
