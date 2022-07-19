import React from 'react'

const Accord = () => {
  return (
    <div className="accord js-accord">
          <div className="accord__center center">
            <div className="accord__row">
              <div className="accord__details">
                <div className="accord__top" data-aos="animation-scale-y">
                  <div className="accord__title title title_sm">Technological maturity.</div>
                  <div className="accord__text">Collab is fast. Files are always up to date and ready for production. </div>
                </div>
                <ul className="accord__list" data-aos="animation-scale-y" data-aos-delay="200">
                  <li>Collab Cloud</li>
                  <li>Collab Design</li>
                  <li>Collab Share</li>
                  <li>Collab Code</li>
                </ul>
              </div>
              <div className="accord__wrap">
                <div className="accord__item js-accord-item active" data-aos="animation-scale-y">
                  <div className="accord__head js-accord-head">
                    <div className="accord__icon">
                      <img className="accord__pic" src="img/layout-3.svg" alt="" />
                    </div>
                    <div className="accord__category">In research</div>
                  </div>
                  <div className="accord__body js-accord-body" style={{display: "block", backgroundImage: "url('img/accord-pic.png')"}}>
                    <ul className="accord__desc">
                      <li>3+ user</li>
                      <li>5 TB of secure storage</li>
                      <li>Premium productivity features and simple, secure file sharing</li>
                    </ul>
                  </div>
                </div>
                <div className="accord__item js-accord-item" data-aos="animation-scale-y">
                  <div className="accord__head js-accord-head">
                    <div className="accord__icon">
                      <img className="accord__pic" src="img/layout-3.svg" alt="" />
                    </div>
                    <div className="accord__category">Drafted</div>
                  </div>
                  <div className="accord__body js-accord-body" style={{backgroundImage: "url('img/accord-pic.png')"}}>
                    <ul className="accord__desc">
                      <li>3+ user</li>
                      <li>5 TB of secure storage</li>
                      <li>Premium productivity features and simple, secure file sharing</li>
                    </ul>
                  </div>
                </div>
                <div className="accord__item js-accord-item" data-aos="animation-scale-y">
                  <div className="accord__head js-accord-head">
                    <div className="accord__icon">
                      <img className="accord__pic" src="img/layout-3.svg" alt="" />
                    </div>
                    <div className="accord__category">In development</div>
                  </div>
                  <div className="accord__body js-accord-body" style={{backgroundImage: "url('img/accord-pic.png')"}}>
                    <ul className="accord__desc">
                      <li>3+ user</li>
                      <li>5 TB of secure storage</li>
                      <li>Premium productivity features and simple, secure file sharing</li>
                    </ul>
                  </div>
                </div>
                <div className="accord__item js-accord-item" data-aos="animation-scale-y">
                  <div className="accord__head js-accord-head">
                    <div className="accord__icon">
                      <img className="accord__pic" src="img/layout-3.svg" alt="" />
                    </div>
                    <div className="accord__category">Proposed</div>
                  </div>
                  <div className="accord__body js-accord-body" style={{backgroundImage: "url('img/accord-pic.png')"}}>
                    <ul className="accord__desc">
                      <li>3+ user</li>
                      <li>5 TB of secure storage</li>
                      <li>Premium productivity features and simple, secure file sharing</li>
                    </ul>
                  </div>
                </div>
                <div className="accord__item js-accord-item" data-aos="animation-scale-y">
                  <div className="accord__head js-accord-head">
                    <div className="accord__icon">
                      <img className="accord__pic" src="img/layout-3.svg" alt="" />
                    </div>
                    <div className="accord__category">Completed</div>
                  </div>
                  <div className="accord__body js-accord-body" style={{backgroundImage: "url('img/accord-pic.png')"}}>
                    <ul className="accord__desc">
                      <li>3+ user</li>
                      <li>5 TB of secure storage</li>
                      <li>Premium productivity features and simple, secure file sharing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Accord