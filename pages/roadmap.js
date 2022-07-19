import React from 'react'

const Roadmap = () => {
  return (
    <div className="roadmap">
          <div className="roadmap__center center">
            <div className="roadmap__head">
              <div className="roadmap__wrap" data-aos="animation-scale-y">
                <div className="roadmap__stage stage">Roadmap</div>
                <h2 className="roadmap__title title">All systems are a go<span className="title__color">.</span></h2>
                <div className="roadmap__info">Find out where we are on the path to achieving the ultimate design tool.</div><select className="roadmap__select">
                  <option>Current</option>
                  <option>Current</option>
                  <option>Current</option>
                </select>
              </div>
              <div className="roadmap__view" data-aos>
                <div className="roadmap__calendar">
                  <img className="roadmap__pic" src="img/roadmap-pic.png" alt="" />
                </div>
                <div className="roadmap__bg">
                  <img className="roadmap__pic js-parallax" data-scale="1.5" data-orientation="left" src="img/roadmap-pic-1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="roadmap__body">
              <div className="roadmap__category">Earlier</div>
              <div className="roadmap__box">
                <div className="roadmap__top">
                  <div className="roadmap__col">
                    <div className="roadmap__desc">
                      <div className="roadmap__category">Q2</div>
                      <div className="roadmap__year">2020</div>
                    </div>
                  </div>
                  <div className="roadmap__col">
                    <div className="roadmap__desc">
                      <div className="roadmap__category">Q3</div>
                      <div className="roadmap__year">2020</div>
                    </div>
                  </div>
                  <div className="roadmap__col">
                    <div className="roadmap__desc">
                      <div className="roadmap__category">Q4</div>
                      <div className="roadmap__year">2020</div>
                    </div>
                  </div>
                  <div className="roadmap__col">
                    <div className="roadmap__desc">
                      <div className="roadmap__category">Q1</div>
                      <div className="roadmap__year">2021</div>
                    </div>
                  </div>
                </div>
                <div className="roadmap__lines">
                  <div className="roadmap__line">
                    <div className="roadmap__progress" style={{width: "66.66%"}} data-aos>Collab Community</div>
                  </div>
                  <div className="roadmap__line">
                    <div className="roadmap__progress" style={{width: "43%"}} data-aos data-aos-delay="200">Collab Market</div>
                  </div>
                  <div className="roadmap__line">
                    <div className="roadmap__progress" style={{width: "50%"}} data-aos data-aos-delay="400">Collab Cloud</div>
                  </div>
                </div>
              </div>
              <div className="roadmap__category">Later</div>
            </div>
          </div>
          <div className="roadmap__circles">
            <div className="roadmap__circle"></div>
            <div className="roadmap__circle"></div>
          </div>
          <div className="roadmap__preview" data-aos data-aos-duration="1000" data-aos-delay="300">
            <img className="roadmap__pic" src="img/roadmap-pic-2.svg" alt="" />
          </div>
        </div>
  )
}

export default Roadmap