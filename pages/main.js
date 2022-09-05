import React from 'react'
import Header from './includes/header'
import Typewriter from 'typewriter-effect';

const Main = () => {
    return (
        <>
            <div className="main">
                <Header />
                <div className="main__center center">
                    <div className="main__wrap">
                        <h1 className="main__title title title_big" data-aos>
                            <span className="title__box dev-title mb-3">
                                <span className="title__text">
                                    {/* 'Development', 'Software Engineering', 'Designing', 'App Monitoring', 'Web Solutions', 'Mobile Solutions', 'CRM Solutions', 'CMS Solutions', 'Cloud Services', 'Tech Consulting' */}
                                    <Typewriter
                                        options={{
                                            strings: [
                                                '<span style="color: #5956E9" >Software Engineering</span>',
                                                '<span style="color: #5956E9" >Tech Consultation</span>',
                                                '<span style="color: #5956E9" >Cloud Management</span>',
                                                '<span style="color: #5956E9" >CRM Solutions</span>',
                                                '<span style="color: #5956E9" >CMS Solutions</span>',
                                                '<span style="color: #5956E9" >E-com Solutions</span>',
                                                '<span style="color: #5956E9" >Digital Marketing</span>'
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            cursor: ''
                                        }}
                                    />
                                </span>
                            </span>
                            <span className="title__box">
                                <span className="title__text ms-3" >
                                    <span className="title__line" >
                                        Web <span className='main-subheadings-span' >Solutions</span>
                                    </span>
                                </span>
                            </span>
                            <span className="title__box main-android-title-box">
                                <span className="title__text ms-3 main-android-title-text" >
                                    Android / IOS <span className='main-subheadings-span' >Development</span>
                                </span>
                            </span>
                            <span className="title__box">
                                <span className="title__text ms-3" >
                                    UI / UX <span className='main-subheadings-span' >Designing</span>
                                    <span className="title__color">.</span>
                                </span>
                            </span>
                        </h1>
                        <div className="main__info info ms-3" data-aos="animation-scale-y" data-aos-delay="400">
                            We build valuable solutions with code.
                        </div>
                        <div className="main__control ms-3" data-aos="animation-scale-y" data-aos-delay="550">
                            <a className="main__btn btn btn_purple" href="./login">Get in Touch</a>
                            {/* <a className="main__link" href="#">
                                <div className="main__icon">
                                    <img className="main__pic" src="img/play.svg" alt="" />
                                </div>
                                <div className="main__text">See It In Action!</div>
                            </a> */}
                        </div>
                        <div className="main__scroll ms-3" data-aos="animation-scale-y" data-aos-delay="650">
                            {/* <a className="main__link" href="#">
                                <div className="main__icon">
                                    <img className="main__pic" src="img/scroll.svg" alt="" />
                                </div>
                                <div className="main__text">Scroll to explore</div>
                            </a> */}
                        </div>
                    </div>
                    <div className="main__view" data-aos>
                        <div className="main__preview">
                            <img className="main__pic js-parallax" data-scale="1.5" data-orientation="down" src="img/main-pic-1.png" alt="" />
                        </div>
                        <div className="main__preview">
                            <img className="main__pic js-parallax" data-scale="1.5" data-orientation="up" src="img/main-pic-2.png" alt="" />
                        </div>
                        <div className="main__preview">
                            <img className="main__pic" src="img/mouse.png" alt="" />
                        </div>
                        {/* <div className="main__preview">
                            <img className="main__pic js-parallax" data-scale="1.5" data-orientation="up" src="img/main-pic-2.png" alt="" />
                        </div> */}
                        <div className="main__preview">
                            <img className="main__pic" src="images/desktop-asset.png" alt="" />
                        </div>
                    </div>
                    <div className="main__circles">
                        <div className="main__circle"></div>
                        <div className="main__circle js-rellax" data-rellax-speed="2"></div>
                        <div className="main__circle js-rellax" data-rellax-speed="1"></div>
                        <div className="main__circle js-rellax" data-rellax-speed="2"></div>
                        <div className="main__circle js-rellax" data-rellax-speed=".3"></div>
                        <div className="main__circle"></div>
                        <div className="main__circle js-rellax" data-rellax-speed="1"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main