import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from './main'
import Features from './features'
import Access from './access'
import Layouts from './layouts'
import Like from './like'
import Plan from './plan'
import Teams from './teams'
import Design from './design'
import Package from './package'

import Footer from './includes/footer'
import AOS from "aos";
// import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="page">
        <Main />
        <Features />
        <Access />
        <Layouts />
        <Like />
        <Plan />






        
        
        
        <div className="work">
          <div className="work__center center">
            <div className="work__head">
              <div className="work__stage stage">Collaboration Redefined</div>
              <h2 className="work__title title"><span className="title__color">Get Work<br/> Done</span> together</h2>
            </div>
            <div className="work__details" data-aos="animation-translate-y" data-aos-duration="800">
              <div className="work__icon">
                <img className="work__pic" src="img/balls.svg" alt="" />
              </div>
              <div className="work__text">Let your personalized Collab assistant do the heavy lifting while you focus on creating.</div><a className="work__link" href="#">Find out more</a>
            </div>
          </div>
          <div className="work__hands">
            <div className="work__hand" data-aos data-aos-duration="800" data-aos-offset="0">
              <img className="work__pic js-parallax" data-scale="1.2" data-orientation="down" src="img/hand-2.png" alt="" />
            </div>
            <div className="work__hand" data-aos data-aos-duration="800" data-aos-offset="0">
              <img className="work__pic js-parallax" data-scale="1.3" data-orientation="up" src="img/hand-3.png" alt="" />
            </div>
          </div>
          <div className="work__wave">
            <img className="work__pic" src="img/wave.svg" alt="" />
          </div>
          <div className="work__preview" data-aos data-aos-duration="600">
            <img className="work__pic" src="img/work-pic.png" alt="" />
          </div>
          <div className="work__circles">
            <div className="work__circle js-rellax" data-rellax-speed="1"></div>
            <div className="work__circle"></div>
            <div className="work__circle js-rellax" data-rellax-speed="-1"></div>
            <div className="work__circle"></div>
            <div className="work__circle"></div>
          </div>
          <div className="work__cursor" data-aos>
            <img className="work__pic" src="img/cursor.png" alt="" />
          </div>
        </div>

        <Teams />

        <div className="speed">
          <div className="speed__center center">
            <div className="speed__wrap">
              <div className="speed__head" data-aos="animation-scale-y">
                <div className="speed__stage stage">Collab is fast, super fast.</div>
                <h2 className="speed__title title">Speed up <br/>your <br/>workflow<span className="title__color">.</span></h2>
                <div className="speed__text">Essentially no lag, no matter the size of the file, even on mobile devices.</div>
              </div>
              <div className="speed__number" data-aos="animation-scale-y"><span>8.1</span>x</div>
            </div>
          </div>
          <div className="speed__line">
            <img className="speed__pic" src="img/line.svg" alt="" />
          </div>
          <div className="speed__preview" data-aos>
            <div className="speed__graphic">
              <img className="speed__pic" src="img/graphic.png" alt=""/>
            </div>
            <div className="speed__plant">
              <img className="speed__pic js-parallax" data-scale="1.3" data-orientation="left" src="img/plant.png" alt="" />
            </div>
          </div>
          <div className="speed__circles">
            <div className="speed__circle js-rellax" data-rellax-speed="-1"></div>
            <div className="speed__circle js-rellax" data-rellax-speed="1"></div>
            <div className="speed__circle"></div>
          </div>
        </div>

        <Package />

        <div className="demo">
          <div className="demo__center center">
            <div className="demo__head" data-aos="animation-scale-y">
              <div className="demo__icon">🔥</div>
              <div className="demo__info">We offer flexible pricing options for freelancers and design teams.</div>
            </div>
            <div className="demo__list">
              <div className="demo__item" data-aos="animation-translate-y">
                <h3 className="demo__title title title_sm">Schedule <br/>Product <br/>Demo</h3>
                <div className="demo__text">Still not sure? Schedule a demo to see how Collab can help you get more done.</div><a className="demo__btn btn btn_purple js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Schedule a Demo</a>
              </div>
              <div className="demo__item" data-aos="animation-translate-y" data-aos-delay="200">
                <h3 className="demo__title title title_sm">Get <br/>Started <br/>Now</h3>
                <div className="demo__text">Ready to revolutionize your design workflow? Try Collab for free for 30 days.</div><a className="demo__btn btn btn_white js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try free for 30 days</a>
              </div>
            </div>
          </div>
          <div className="demo__circle js-rellax" data-rellax-speed="1"></div>
        </div>

        <Design />


        <div className="details">
          <div className="details__center center">
            <div className="details__head" data-aos="animation-scale-y">
              <h2 className="details__title title">Research & <br/>background, summary<span className="title__color">.</span></h2>
              <div className="details__info info">Collab is fast. Files are always up to date and ready for production</div>
            </div>
            <div className="details__row">
              <div className="details__container">
                <div className="details__slider js-details-slider">
                  <div className="details__slide">
                    <div className="details__counter"><span className="details__number">16</span> m</div>
                    <div className="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                    <div className="details__control"><button className="details__play">Play</button><a className="details__link" href="#">Find out more</a></div>
                  </div>
                  <div className="details__slide">
                    <div className="details__counter"><span className="details__number">16</span> m</div>
                    <div className="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                    <div className="details__control"><button className="details__play">Play</button><a className="details__link" href="#">Find out more</a></div>
                  </div>
                  <div className="details__slide">
                    <div className="details__counter"><span className="details__number">16</span> m</div>
                    <div className="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                    <div className="details__control"><button className="details__play">Play</button><a className="details__link" href="#">Find out more</a></div>
                  </div>
                  <div className="details__slide">
                    <div className="details__counter"><span className="details__number">16</span> m</div>
                    <div className="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                    <div className="details__control"><button className="details__play">Play</button><a className="details__link" href="#">Find out more</a></div>
                  </div>
                </div>
              </div>
              <div className="details__graphic">
                <div className="details__mobile">
                  <img className="details__pic" src="img/mobile.svg" alt="" />
                  <div className="details__box">
                    <div className="details__chart" data-aos data-aos-offset="0" data-aos-delay="300" data-aos-duration="1000">
                      <img className="details__pic" src="img/chart.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="details__hand">
              <img className="details__pic js-parallax" data-scale="1.2" data-orientation="up" src="img/hand-5.png" alt="" />
            </div>
            <div className="details__line">
              <img className="details__pic" src="img/line-2.svg" alt="" />
            </div>
            <div className="details__circles">
              <div className="details__circle"></div>
              <div className="details__circle js-rellax" data-rellax-speed="-.5"></div>
            </div>
          </div>
        </div>
        <div className="tool">
          <div className="tool__center center">
            <div className="tool__container">
              <div className="tool__wrap">
                <h2 className="tool__title title" data-aos="animation-scale-y">Ready to use the smartest design tool?</h2>
                <div className="tool__info info" data-aos="animation-scale-y" data-aos-delay="150">We offer flexible pricing options for freelancers and design teams. </div>
                <div className="tool__btn" data-aos="animation-scale-y" data-aos-delay="300"><a className="btn btn_white js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try free for 30 days</a></div>
              </div>
              <div className="tool__cloud">
                <img className="tool__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.png" alt="" />
              </div>
            </div>
          </div>
        </div>
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
        <div className="partners">
          <div className="partners__center center">
            <div className="partners__head" data-aos="animation-scale-y">
              <div className="partners__stage stage">Clients</div>
              <div className="partners__details">
                <h2 className="partners__title title">More than 68,219 designers use Collab.</h2>
                <div className="partners__info info">Design anything from simple icons to fully featured websites and applications.</div>
              </div>
            </div>
            <div className="partners__list">
              <div className="partners__item" data-aos>
                <img className="partners__pic" src="img/waves.svg" alt="" />
              </div>
              <div className="partners__item" data-aos data-aos-delay="150">
                <img className="partners__pic" src="img/goldlines.svg" alt="" />
              </div>
              <div className="partners__item" data-aos data-aos-delay="300">
                <img className="partners__pic" src="img/oliver.svg" alt="" />
              </div>
              <div className="partners__item" data-aos data-aos-delay="450">
                <img className="partners__pic" src="img/duotrip.svg" alt="" />
              </div>
              <div className="partners__item" data-aos>
                <img className="partners__pic" src="img/rota-show.svg" alt="" />
              </div>
              <div className="partners__item" data-aos data-aos-delay="150">
                <img className="partners__pic" src="img/travelers.svg" alt="" />
              </div>
              <div className="partners__item" data-aos data-aos-delay="300">
                <img className="partners__pic" src="img/velocity-9.svg" alt="" />
              </div>
              <div className="partners__item" data-aos data-aos-delay="450">
                <img className="partners__pic" src="img/foxds.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="partners__preview" data-aos data-aos-duration="1000">
            <img className="partners__pic" src="img/partners-pic.svg" alt="" />
          </div>
          <div className="partners__circle js-rellax" data-rellax-speed=".6"></div>
        </div>
        <div className="quality">
          <div className="quality__head">
            <div className="quality__center center">
              <div className="quality__top" data-aos="animation-scale-y">
                <div className="quality__stage stage">Effortless</div>
                <h2 className="quality__title title">Go from ideation to <br/>design and done<span className="title__color">.</span></h2>
              </div>
              <div className="quality__info info" data-aos="animation-scale-y" data-aos-delay="200">Easily create truly responsive components while deploying production-ready code.</div>
            </div>
            <div className="quality__line">
              <img className="quality__pic" src="img/line-3.svg" alt="" />
            </div>
            <div className="quality__preview">
              <img className="quality__pic js-parallax" data-scale="1.2" data-orientation="left" src="img/lamp.png" alt="" />
            </div>
          </div>
          <div className="quality__body">
            <div className="quality__col">
              <div className="quality__item" data-aos="animation-scale-x-left">
                <div className="quality__icon">
                  <img className="quality__pic" src="img/camera-big.png" alt="" />
                </div>
                <div className="quality__details">
                  <div className="quality__category">Assets Library</div>
                  <div className="quality__text">Get access to huge library of ready-made components and illustrations, free to use on all your projects.</div><a className="quality__link" href="#">Learn more<svg className="icon icon-arrow-right">
                      <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="quality__col">
              <div className="quality__item" data-aos="animation-scale-x-right" data-aos-delay="200">
                <div className="quality__icon">
                  <img className="quality__pic" src="img/clock-big.png" alt="" />
                </div>
                <div className="quality__details">
                  <div className="quality__category">Save Time</div>
                  <div className="quality__text">Save tons of time by eliminating repetitive day-to-day tasks and slow load times. </div><a className="quality__link" href="#">Learn more<svg className="icon icon-arrow-right">
                      <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="quality__col">
              <div className="quality__item" data-aos="animation-scale-x-left">
                <div className="quality__icon">
                  <img className="quality__pic" src="img/cup-big.png" alt="" />
                </div>
                <div className="quality__details">
                  <div className="quality__category">Relax</div>
                  <div className="quality__text">Let your personalized Collab assistant do the heavy lifting while you focus on creating.Say good bye to code 👋</div><a className="quality__link" href="#">Learn more<svg className="icon icon-arrow-right">
                      <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="quality__col">
              <div className="quality__item" data-aos="animation-scale-x-right" data-aos-delay="200">
                <div className="quality__icon">
                  <img className="quality__pic" src="img/chatbox-big.png" alt="" />
                </div>
                <div className="quality__details">
                  <div className="quality__category">Support</div>
                  <div className="quality__text">Got stuck or need any help? Our support team is online 24/7 to help assist you with any issues.</div><a className="quality__link" href="#">Learn more<svg className="icon icon-arrow-right">
                      <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                    </svg></a>
                </div>
              </div>
            </div>
          </div>
          <div className="quality__circles">
            <div className="quality__circle"> </div>
            <div className="quality__circle"> </div>
          </div>
        </div>
        <div className="showcase">
          <div className="showcase__center center">
            <div className="showcase__wrap">
              <div className="showcase__top" data-aos="animation-scale-y">
                <div className="showcase__stage stage">Showcase</div>
                <h2 className="showcase__title title">Created with Collab<span className="title__color">.</span></h2>
              </div>
              <div className="showcase__info info" data-aos="animation-scale-y" data-aos-delay="150">See what designers around the world are building with Collab.</div>
              <div className="showcase__btn" data-aos="animation-scale-y" data-aos-delay="300"><button className="btn btn_purple">View More Projects</button></div>
            </div>
          </div>
          <div className="showcase__bg">
            <img className="showcase__pic" src="img/showcase-circle.svg" alt="" />
          </div>
          <div className="showcase__circles">
            <div className="showcase__circle"></div>
            <div className="showcase__circle"></div>
          </div>
          <div className="showcase__list">
            <div className="showcase__preview">
              <img className="showcase__pic js-parallax" data-scale="1.3" data-orientation="right" src="img/group-1.png" alt="" />
            </div>
            <div className="showcase__preview">
              <img className="showcase__pic js-parallax" data-scale="1.3" data-orientation="left" src="img/group-2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="offer">
          <div className="offer__center center">
            <div className="offer__container">
              <div className="offer__head">
                <h2 className="offer__title title" data-aos="animation-scale-y">Ready to use the smartest design tool?</h2>
                <div className="offer__info info" data-aos="animation-scale-y" data-aos-delay="150">We offer flexible pricing options for freelancing and design teams.</div>
                <div className="offer__btn" data-aos="animation-scale-y" data-aos-delay="300"><a className="btn btn_white js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try free for 30 days</a></div>
              </div>
              <div className="offer__circles">
                <div className="offer__circle"></div>
                <div className="offer__circle"></div>
              </div>
            </div>
            <div className="offer__circle"></div>
          </div>
          <div className="offer__view" data-aos data-aos-delay="400" data-aos-offset="0">
            <div className="offer__preview">
              <img className="offer__pic" src="img/offer-pic-1.png" alt="" />
            </div>
            <div className="offer__preview">
              <img className="offer__pic" src="img/offer-pic-2.png" alt="" />
            </div>
            <div className="offer__preview">
              <img className="offer__pic" src="img/offer-pic-3.png" alt="" />
            </div>
            <div className="offer__preview">
              <img className="offer__pic" src="img/offer-pic-4.png" alt="" />
            </div>
            <div className="offer__preview">
              <img className="offer__pic" src="img/offer-pic-5.png" alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
