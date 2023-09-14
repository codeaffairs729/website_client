import React from 'react'
import Image from 'next/image'
// import style from './../styles/devops.module.css'
import hireService from '../styles/hireService.module.css'
const techTitle = 'AI ENHANCED SOLUTIONS'
const Aisolutions = () => {
  return (
    <>
      <div className={` feature-list container ${hireService.mainAIcontainer}`}>
        <div className={hireService.AIcontainer}>
          <div className={hireService.AItopcircle}></div>
          <div className={hireService.hireh6}>{techTitle}</div>
          <div
            className={`${hireService.AIservicebody} ${hireService.adjusAIservicebody}`}
          >
            <div className={hireService.Aiservicebodyleft}>
              <div className={hireService.solutiontext}>
                Experience the fusion of cutting-edge technology and visionary
                thinking as we harness the power of Artificial Intelligence
                (AI). Our expertise lies in crafting seamless solutions that
                drive innovation, provide deep insights, and elevate efficiency.
                With a focus on delivering excellence, we elevate industries
                into a new era of intelligent advancement.
              </div>
              <div className={hireService.Aicontainerleftttext}>
                <ul
                  className={`${hireService.AIlisticon} ${hireService.hire_list_items_services} `}
                >
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft26px}>
                      Image and speech recognitaion
                    </p>
                  </li>
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft26px}>
                      Automation & Optimization
                    </p>
                  </li>
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft26px}>
                      Health and Emotion Analysis
                    </p>
                  </li>
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft26px}>
                      Translation & Energy Efficiency
                    </p>
                  </li>
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft26px}>
                      Autonomous Decision
                    </p>
                  </li>
                </ul>
              </div>
              <div className={hireService.AIbottomcircle2} />
            </div>
            <div className={hireService.Aiconatinerright}>
              <div className={hireService.Aicontainerrighttext}>
                <ul
                  className={`${hireService.AIlisticon} ${hireService.hire_list_items_services} `}
                >
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft26px}>
                      Insight & Analysis Personalization & NLP
                    </p>
                  </li>
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft26px}>
                      Efficiency & Automation
                    </p>
                  </li>
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft26px}>
                      Real-time & Learning
                    </p>
                  </li>
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft26px}>
                      Security & Fraud Detection
                    </p>
                  </li>
                  <li className={hireService.marginebottom16px}>
                    <p className={hireService.marginleft26px}>
                      Recommodation & insights
                    </p>
                  </li>
                </ul>
              </div>

              <div className={hireService.AIimage}>
                <Image
                  src="/dev_ops/AItool_pic.webp"
                  alt="AIimage"
                  height={300}
                  width={340}
                />
              </div>
            </div>
          </div>
          <div className={hireService.AIbottomcircle1} />
        </div>
      </div>
    </>
  )
}
export default Aisolutions
