import Image from 'next/image'
import hireService from '../styles/hireService.module.css'
import { gitlab } from '../utils/data'

const DevOpsStatic = () => {
  return (
    <>
      <div
        className={` feature-list container ${hireService.maindevcontainer}`}
      >
        <div
          className={hireService.hireh5}
          data-aos="fade-right"
          data-aos-delay="150"
        >
          Fostering Growth Through<br></br> DevOps Culture
        </div>

        <div
          className={`${hireService.techservicebodydev} ${hireService.adjustservicebody}`}
        >
          <div className={hireService.devopsservicebodyleft}>
            <ul className={`${hireService.listicon}`}>
              <li
                className={hireService.marginebottom16px}
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <p className={hireService.marginleft25px}>Efficient Scaling</p>
              </li>
              <li
                className={hireService.marginebottom16px}
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <p className={hireService.marginleft25px}>Rapid Deployment</p>
              </li>
              <li
                className={hireService.marginebottom16px}
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <p className={hireService.marginleft25px}>
                  Business-IT Alignment
                </p>
              </li>
              <li
                className={hireService.marginebottom16px}
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <p className={hireService.marginleft25px}>Risk Mitigation</p>
              </li>
              <li
                className={hireService.marginebottom16px}
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <p className={hireService.marginleft25px}>
                  Resource Optimization
                </p>
              </li>
              <li
                className={hireService.marginebottom16px}
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <p className={hireService.marginleft25px}>24X7 Monitoring</p>
              </li>
            </ul>
          </div>

          <div className={`${hireService.topImage}`}>
            <Image
              src="/dev_ops/main_devops.png"
              alt="bottom image"
              width={1400}
              height={868}
              objectFit="contain"
              data-aos="fade-left"
              data-aos-delay="150"
              data-aos-offset="300"
            />
          </div>
        </div>

        <h5 data-aos="fade-right" data-aos-delay="150">
          Accelerating Progress with DevOps Excellence. Elevating IT to new
          heights, one innovation at a time.
        </h5>
      </div>
    </>
  )
}

export default DevOpsStatic
