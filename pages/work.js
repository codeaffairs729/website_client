import React from 'react'
import Link from 'next/link'

const Work = () => {
  return (
    <>
      <div className="showcase work-process">
        <h2 className='work-text-left-1 ms-5' >Our Approach</h2>
        <h2 className='work-text-left text-center'>From Your Idea<br />To Your Revenue</h2>
        <div className='work-text-right text-center' >
          <h4>Confusion In Your<br />Million Dollar Idea?</h4>
          {/* <div className='work-text-right-btn' >Get Free Consultation</div> */}
          <Link href="/contact">
            <a target="_blank" className="package__btn btn btn_purple text-decoration-none" >
              <button className='btn btn-primary work-text-right-btn ' >Get Free Consultation</button>
            </a>
          </Link>
        </div>
        {/* <div className="work__hand" data-aos="fade-up" data-aos-duration="800" data-aos-offset="0">
          <img className="work__pic js-parallax" data-scale="1.2" data-orientation="down" src="img/hand-2.png" alt="" />
          <div className="work-img-bulb-outer" >
            <img className="work-img-bulb" src="images/bulb-front-color.png" alt="" />
            <p className='work-img-bulb-text' >Your Idea</p>
          </div>
        </div> */}
        {/* <div className='work-arrow-1-outer' data-aos="fade-up" data-aos-duration="800" data-aos-offset="0" >
          <img className='work-arrow-1-img' src='images/work-arrow-1.png' alt='' />
        </div> */}
        {/* <div className='work-connection-line-1-outer' data-aos="fade-up" data-aos-duration="800" data-aos-offset="0" >
          <hr className="work-connection-line-1" />
          <span className='work-link-ball-1 work-link-ball-1-floating' ></span>
        </div> */}
        <div className='work-circle-white' >
          <div className="work__hand" id="show-process" data-aos="fade-up" data-aos-delay="0" data-aos-duration="800" data-aos-offset="0">
            <img className="work__pic js-parallax" data-scale="1.2" data-orientation="down" src="img/hand-2.png" alt="" />
            <div className="work-img-bulb-outer" >
              <img className="work-img-bulb" src="images/bulb-front-color.png" alt="" />
              <p className='work-img-bulb-text' >Your Idea</p>
            </div>
          </div>

          <div className="work-img-msg-outer" data-aos-anchor="#show-process" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800" data-aos-offset="0" >
            <img className="work-img-msg" src="images/chat-text-front-clay.png" alt="" />
            <p className='work-img-bulb-text work-img-msg-text' >Discussion &<br />Consultation</p>
          </div>

          <div className="work-img-Float-outer" data-aos-anchor="#show-process" data-aos="fade-up" data-aos-delay="800" data-aos-duration="800" data-aos-offset="0" >
            <img className="work-img-Float" src="images/Float.png" alt="" />
            <p className='work-img-bulb-text' >UI/UX Design</p>
          </div>

          <div className="work-img-Group-outer" data-aos-anchor="#show-process" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="800" data-aos-offset="0" >
            <img className="work-img-Group" src="images/Group.png" alt="" />
            <p className='work-img-bulb-text work-img-Group-text' >Development</p>
          </div>

          <div className="work-img-rocket-outer" data-aos-anchor="#show-process" data-aos="fade-up" data-aos-delay="1500" data-aos-duration="800" data-aos-offset="0" >
            <img className="work-img-rocket" src="images/rocket-iso-color.png" alt="" />
            <p className='work-img-bulb-text work-img-rocket-text' >Launch</p>
          </div>

          <div className="work-img-chart-outer" data-aos-anchor="#show-process" data-aos-delay="2400" data-aos="fade-up" data-aos-duration="800" data-aos-offset="0" >
            <img className="work-img-chart" src="images/chart-front-color.png" alt="" />
            <p className='work-img-bulb-text work-img-chart-text' >Monitoring</p>
          </div>
          {/* <span className='work-link-ball-3 work-link-ball-3-floating' ></span>
          <span className='work-link-ball-3 work-link-ball-4-floating' ></span>
          <span className='work-link-ball-3 work-link-ball-5-floating' ></span>
          <span className='work-link-ball-3 work-link-ball-6-floating' ></span>
          <span className='work-link-ball-3 work-link-ball-7-floating' ></span> */}
          <img className='work-arrow-1-img' src='images/work-arrow-1.png' alt='' data-aos-anchor="#show-process" data-aos-delay="200" data-aos="zoom-in" data-aos-duration="800" data-aos-offset="0" />
          <img className='work-arrow-2-img' src='images/work-arrow-2.png' alt='' data-aos-anchor="#show-process" data-aos-delay="600" data-aos="zoom-in" data-aos-duration="800" data-aos-offset="0" />
          <img className='work-arrow-3-img' src='images/work-arrow-3.png' alt='' data-aos-anchor="#show-process" data-aos-delay="1000" data-aos="zoom-in" data-aos-duration="800" data-aos-offset="0" />
          <img className='work-arrow-4-img' src='images/work-arrow-4.png' alt='' data-aos-anchor="#show-process" data-aos-delay="1400" data-aos="zoom-in" data-aos-duration="800" data-aos-offset="0" />
          <img className='work-arrow-5-img' src='images/work-arrow-6.png' alt='' data-aos-anchor="#show-process" data-aos-delay="1800" data-aos="zoom-in" data-aos-duration="800" data-aos-offset="0" />
          <img className='work-arrow-6-img' src='images/work-arrow-7.png' alt='' data-aos-anchor="#show-process" data-aos-delay="3000" data-aos="zoom-in" data-aos-duration="800" data-aos-offset="0" />
          <img className='work-arrow-7-img' src='images/work-arrow-5.png' alt='' data-aos-anchor="#show-process" data-aos-delay="1600" data-aos="zoom-in" data-aos-duration="800" data-aos-offset="0" />

          <div className="work-img-money-outer" data-aos-anchor="#show-process" data-aos="fade-up" data-aos-delay="1700" data-aos-duration="800" data-aos-offset="0" >
            <img className="work-img-money" src="images/work-money.png" alt="" />
            <p className='work-img-bulb-text work-img-money-text' >Your Revenue</p>
          </div>
        </div>
        {/* <div className='work-connection-line-2-outer' >
          <hr className="work-connection-line-2" />
          <span className='work-link-ball-2 work-link-ball-2-floating' ></span>
        </div> */}
        {/* <img className="work-img-megaphone" src="images/megaphone-front-color.png" alt="" /> */}
        {/* <div className='work-arrow-7-outer' data-aos="fade-up" data-aos-duration="800" data-aos-offset="0" >
          <img className='work-arrow-7-img' src='images/work-arrow-5.png' alt='' />
        </div> */}
        {/* <div className="work-img-money-outer" data-aos="fade-up" data-aos-duration="800" data-aos-offset="0" >
          <img className="work-img-money" src="images/work-money.png" alt="" />
          <p className='work-img-bulb-text' >Your Revenue</p>
        </div> */}
        {/* <div className="showcase__center center">
          <div className="showcase__wrap">
            <div className="showcase__top" data-aos="animation-scale-y">
              <div className="showcase__stage stage">Showcase</div>
              <h2 className="showcase__title title">Created with Collab<span className="title__color">.</span></h2>
            </div>
            <div className="showcase__info info" data-aos="animation-scale-y" data-aos-delay="150">See what designers around the world are building with Collab.</div>
            <div className="showcase__btn" data-aos="animation-scale-y" data-aos-delay="300"><button className="btn btn_purple">View More Projects</button></div>
          </div>
        </div> */}
        <div className="showcase__bg showcase-big-circle">
          <img className="showcase__pic" src="img/showcase-circle.svg" alt="" />
        </div>
        <div className="showcase__circles">
          <div className="showcase__circle"></div>
          <div className="showcase__circle"></div>
        </div>
      </div>
    </>
  )
}

export default Work