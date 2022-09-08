import React from 'react'
import Slider from "react-slick";
import Typewriter from 'typewriter-effect';

const Teams = () => {
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: <button type="button" className="slick-prev"><svg className="icon icon-arrow-prev"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="img/sprite.svg#icon-arrow-prev"></use></svg></button>,
        nextArrow: <button type="button" className="slick-next"><svg className="icon icon-arrow-next"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="img/sprite.svg#icon-arrow-next"></use></svg></button>,
        speed: 700,
        // autoplay: true,
        rows: 2,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1
            }
        }]
    };

    const settingsRight = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        speed: 700,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 1000
    };

    const settingsUp = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        speed: 700,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        autoplaySpeed: 1500
    };

    const settingsDown = {
        slidesToShow: 1,
        slidesToScroll: -1,
        dots: false,
        arrows: false,
        speed: 700,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        autoplaySpeed: 2000
    };

    const settingsLeft = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2500
    };

    return (
        <>
            <div className="teams">
                <div className="teams__center center">
                    <div className="teams__head" data-aos="animation-scale-y">
                        {/* <div className="teams__stage stage">Team Collaboration Redefined</div> */}
                        <h2 className="teams__title title teams-main-title">
                            We’re Top Ranked
                            Service Provider
                            On
                            <Typewriter
                                options={{
                                    strings: ['Upwork', 'Clutch.co', 'People per Hour'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                    </div>
                    <div className="teams__body">
                        <div className="teams__col" data-aos="animation-scale-y">
                            <h3 className="teams__title title title_sm">What others are&nbsp;saying</h3>
                        </div>
                        <div className="teams__col">
                            <div className="teams__container">
                                <div className='row'>
                                    <div className='col-lg-6' >
                                        <Slider className="teams__slider js-teams-slider" {...settingsRight} >
                                            <div className='row teams-cmnt-row' >
                                                <div className='col-lg-12 mt-5 teams-cmnt-text'>
                                                    Solid work. Can't go wrong.
                                                </div>
                                                <div className='col-lg-12 mb-5 teams-cmnt-author'>
                                                    - Sean Adler
                                                </div>
                                            </div>
                                            <div className='row teams-cmnt-row' >
                                                <div className='col-lg-12 mt-5 teams-cmnt-text'>
                                                    Completed the work as per schedule and demonstrated the approaches while consultation.
                                                </div>
                                                <div className='col-lg-12 mb-5 teams-cmnt-author'>
                                                    - Kiren Sreekumar
                                                </div>
                                            </div>
                                            {/* <div className="teams__slide" data-aos="animation-scale-y" data-aos-delay="200">
                                                <div className="teams__line" style={{backgroundColor: "#FAB8C4"}}></div>
                                                <div className="teams__text">
                                                    Solid work. Can't go wrong.
                                                </div>
                                                <div className="teams__user">
                                                    <div className="teams__box">
                                                        <div className="teams__man">- Sean Adler</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="teams__slide" data-aos="animation-scale-y" data-aos-delay="400">
                                                <div className="teams__line" style={{backgroundColor: "#FAB8C4"}}></div>
                                                <div className="teams__text">
                                                    Completed the work as per schedule and demonstrated the approaches while consultation.
                                                </div>
                                                <div className="teams__user">
                                                    <div className="teams__box">
                                                        <div className="teams__man">- Kiren Sreekumar</div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </Slider>
                                    </div>
                                    <div className='col-lg-6' >
                                        <Slider className="teams__slider js-teams-slider" {...settingsUp} >
                                            <div className='row teams-cmnt-row' >
                                                <div className='col-lg-12 mt-5 teams-cmnt-text'>
                                                    Team did a great job for our front end tasks. They are knowledgeable and worked fast and efficiently in completing the tasks.
                                                </div>
                                                <div className='col-lg-12 mb-5 teams-cmnt-author'>
                                                    - Fran
                                                </div>
                                            </div>
                                            <div className='row teams-cmnt-row' >
                                                <div className='col-lg-12 mt-5 teams-cmnt-text'>
                                                    Team consider many ways to resolve our issues, considering multiple aspects as well (ie. Performance, accuracy, simplicity). Their feedback is documented and easy to understand.
                                                    {/* There appears to be no topics that this team cannot quickly understand and become proficient and provide desired result in a very short time frame.
                                                    They consider many ways to resolve our issues, considering multiple aspects as well (ie. Performance, accuracy, simplicity).
                                                    Their feedback is documented and easy to understand.
                                                    They thoroughly tests all of their work which reduces the amount of time spent by ourselves during acceptance phases.
                                                    They quickly grasps business processes and business issues.
                                                    They provide a close follow-up by directly contacting us which shows that they are dedicated to complete tasks.
                                                    I look forward to work with em on challenging subjects which, for sure, will become successes again. */}
                                                </div>
                                                <div className='col-lg-12 mb-5 teams-cmnt-author'>
                                                    - Samba Thibo
                                                </div>
                                            </div>
                                            <div className='row teams-cmnt-row' >
                                                <div className='col-lg-12 mt-5 teams-cmnt-text'>
                                                    They quickly grasps business processes and business issues. They provide a close follow-up by directly contacting us which shows that they are dedicated to complete tasks.
                                                </div>
                                                <div className='col-lg-12 mb-5 teams-cmnt-author'>
                                                    - Samba Thibo
                                                </div>
                                            </div>

                                            {/* <div className="teams__slide">
                                                <div className="teams__line" style={{backgroundColor: "#5956E9"}}></div>
                                                <div className="teams__text">
                                                    Team did a great job for our front end tasks. They are knowledgeable and worked fast and efficiently in completing the tasks.
                                                </div>
                                                <div className="teams__user">
                                                    <div className="teams__box">
                                                        <div className="teams__man">- Fran</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="teams__slide">
                                                <div className="teams__line" style={{backgroundColor: "#5956E9"}}></div>
                                                <div className="teams__text">
                                                    There appears to be no topics that this team cannot quickly understand and become proficient and provide desired result in a very short time frame.
                                                    They consider many ways to resolve our issues, considering multiple aspects as well (ie. Performance, accuracy, simplicity).
                                                    Their feedback is documented and easy to understand.
                                                    They thoroughly tests all of their work which reduces the amount of time spent by ourselves during acceptance phases.
                                                    They quickly grasps business processes and business issues.
                                                    They provide a close follow-up by directly contacting us which shows that they are dedicated to complete tasks.
                                                    I look forward to work with em on challenging subjects which, for sure, will become successes again.
                                                </div>
                                                <div className="teams__user">
                                                    <div className="teams__box">
                                                        <div className="teams__man">- Samba Thibo</div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </Slider>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6' >
                                        <Slider className="teams__slider js-teams-slider" {...settingsDown} >
                                            <div className='row teams-cmnt-row' >
                                                <div className='col-lg-12 mt-5 teams-cmnt-text'>
                                                    Absolute 5 star experience. These guys are pros - excellent communication, prompt and really competent professionals!
                                                </div>
                                                <div className='col-lg-12 mb-5 teams-cmnt-author'>
                                                    - Jack Fischman
                                                </div>
                                            </div>
                                            <div className='row teams-cmnt-row' >
                                                <div className='col-lg-12 mt-5 teams-cmnt-text'>
                                                    A complete professional team. Ask and you will receive. Excellent communicators. A pleasure to work with.
                                                </div>
                                                <div className='col-lg-12 mb-5 teams-cmnt-author'>
                                                    - Johnny Palomares
                                                </div>
                                            </div>

                                            {/* <div className="teams__slide">
                                                <div className="teams__line" style={{backgroundColor: "#5956E9"}}></div>
                                                <div className="teams__text">
                                                    Absolute 5 star experience. These guys are pros - excellent communication, prompt and really competent professionals!
                                                </div>
                                                <div className="teams__user">
                                                    <div className="teams__box">
                                                        <div className="teams__man">- Jack Fischman</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="teams__slide">
                                                <div className="teams__line" style={{backgroundColor: "#5956E9"}}></div>
                                                <div className="teams__text">
                                                    A complete professional team. Ask and you will receive. Excellent communicators. A pleasure to work with.
                                                </div>
                                                <div className="teams__user">
                                                    <div className="teams__box">
                                                        <div className="teams__man">- Johnny Palomares</div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </Slider>
                                    </div>
                                    <div className='col-lg-6' >
                                        <Slider className="teams__slider js-teams-slider" {...settingsLeft} >
                                            <div className='row teams-cmnt-row' >
                                                <div className='col-lg-12 mt-5 teams-cmnt-text'>
                                                    Excellent work as usual, very friendly and very dedicated in achieving the best result.
                                                </div>
                                                <div className='col-lg-12 mb-5 teams-cmnt-author'>
                                                    - J De Leon
                                                </div>
                                            </div>
                                            <div className='row teams-cmnt-row' >
                                                <div className='col-lg-12 mt-5 teams-cmnt-text'>
                                                    Available on time, delivery on schedule and excellent communication, this is what one will look while working with a professional, team was on top of all these.
                                                </div>
                                                <div className='col-lg-12 mb-5 teams-cmnt-author'>
                                                    - P. Mishra
                                                </div>
                                            </div>

                                            {/* <div className="teams__slide">
                                                <div className="teams__line" style={{backgroundColor: "#FAB8C4"}}></div>
                                                <div className="teams__text">
                                                    Excellent work as usual, very friendly and very dedicated in achieving the best result.
                                                </div>
                                                <div className="teams__user">
                                                    <div className="teams__box">
                                                        <div className="teams__man">- J De Leon</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="teams__slide">
                                                <div className="teams__line" style={{backgroundColor: "#FAB8C4"}}></div>
                                                <div className="teams__text">
                                                    Available on time, delivery on schedule and excellent communication, this is what one will look while working with a professional, team was on top of all these.
                                                </div>
                                                <div className="teams__user">
                                                    <div className="teams__box">
                                                        <div className="teams__man">- P. Mishra</div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </Slider>
                                    </div>
                                </div>
                                {/* <Slider className="teams__slider js-teams-slider" {...settings}>
                                    <div className="teams__slide" data-aos="animation-scale-y" data-aos-delay="200">
                                        <div className="teams__line" style={{backgroundColor: "#5956E9"}}></div> */}
                                        {/* <div className="teams__name" style={{color: "#C75C6F"}}>Website</div> */}
                                        {/* <div className="teams__text">
                                            Team did a great job for our front end tasks. They are knowledgeable and worked fast and efficiently in completing the tasks.
                                        </div>
                                        <div className="teams__user"> */}
                                            {/* <div className="teams__ava">
                                                <img className="teams__pic" src="img/ui8.png" alt="" />
                                            </div> */}
                                            {/* <div className="teams__box">
                                                <div className="teams__man">- Fran</div> */}
                                                {/* <div className="teams__login">Founder Website</div> */}
                                            {/* </div>
                                        </div>
                                    </div>
                                    <div className="teams__slide" data-aos="animation-scale-y" data-aos-delay="400">
                                        <div className="teams__line" style={{backgroundColor: "#FAB8C4"}}></div> */}
                                        {/* <div className="teams__name" style={{color: "#5956E9"}}>Website</div> */}
                                        {/* <div className="teams__text">
                                            Completed the work as per schedule and demonstrated the approaches while consultation.
                                        </div>
                                        <div className="teams__user"> */}
                                            {/* <div className="teams__ava">
                                                <img className="teams__pic" src="img/ava-1.png" alt="" />
                                            </div> */}
                                            {/* <div className="teams__box">
                                                <div className="teams__man">- Kiren Sreekumar</div> */}
                                                {/* <div className="teams__login">Founder Website</div> */}
                                            {/* </div>
                                        </div>
                                    </div>
                                    <div className="teams__slide">
                                        <div className="teams__line" style={{backgroundColor: "#5956E9"}}></div> */}
                                        {/* <div className="teams__name" style={{color: "#C75C6F"}}>Website</div> */}
                                        {/* <div className="teams__text">
                                            Solid work. Can't go wrong.
                                        </div>
                                        <div className="teams__user"> */}
                                            {/* <div className="teams__ava">
                                                <img className="teams__pic" src="img/ui8.png" alt="" />
                                            </div> */}
                                            {/* <div className="teams__box">
                                                <div className="teams__man">- Sean Adler</div> */}
                                                {/* <div className="teams__login">Founder Website</div> */}
                                            {/* </div>
                                        </div>
                                    </div>
                                    <div className="teams__slide">
                                        <div className="teams__line" style={{backgroundColor: "#FAB8C4"}}></div> */}
                                        {/* <div className="teams__name" style={{color: "#5956E9"}}>Website</div> */}
                                        {/* <div className="teams__text">
                                            There appears to be no topics that this team cannot quickly understand and become proficient and provide desired result in a very short time frame.
                                            They consider many ways to resolve our issues, considering multiple aspects as well (ie. Performance, accuracy, simplicity).
                                            Their feedback is documented and easy to understand.
                                            They thoroughly tests all of their work which reduces the amount of time spent by ourselves during acceptance phases.
                                            They quickly grasps business processes and business issues.
                                            They provide a close follow-up by directly contacting us which shows that they are dedicated to complete tasks.
                                            I look forward to work with em on challenging subjects which, for sure, will become successes again.
                                        </div>
                                        <div className="teams__user"> */}
                                            {/* <div className="teams__ava">
                                                <img className="teams__pic" src="img/ava-1.png" alt="" />
                                            </div> */}
                                            {/* <div className="teams__box">
                                                <div className="teams__man">- Samba Thibo</div> */}
                                                {/* <div className="teams__login">Founder Website</div> */}
                                            {/* </div>
                                        </div>
                                    </div>
                                    <div className="teams__slide">
                                        <div className="teams__line" style={{backgroundColor: "#FAB8C4"}}></div> */}
                                        {/* <div className="teams__name" style={{color: "#5956E9"}}>Website</div> */}
                                        {/* <div className="teams__text">
                                            Absolute 5 star experience. These guys are pros - excellent communication, prompt and really competent professionals!
                                        </div>
                                        <div className="teams__user"> */}
                                            {/* <div className="teams__ava">
                                                <img className="teams__pic" src="img/ava-1.png" alt="" />
                                            </div> */}
                                            {/* <div className="teams__box">
                                                <div className="teams__man">- Jack Fischman</div> */}
                                                {/* <div className="teams__login">Founder Website</div> */}
                                            {/* </div>
                                        </div>
                                    </div>
                                    <div className="teams__slide">
                                        <div className="teams__line" style={{backgroundColor: "#FAB8C4"}}></div> */}
                                        {/* <div className="teams__name" style={{color: "#5956E9"}}>Website</div> */}
                                        {/* <div className="teams__text">
                                            A complete professional team. Ask and you will receive. Excellent communicators. A pleasure to work with.
                                        </div>
                                        <div className="teams__user"> */}
                                            {/* <div className="teams__ava">
                                                <img className="teams__pic" src="img/ava-1.png" alt="" />
                                            </div> */}
                                            {/* <div className="teams__box">
                                                <div className="teams__man">- Johnny Palomares</div> */}
                                                {/* <div className="teams__login">Founder Website</div> */}
                                            {/* </div>
                                        </div>
                                    </div>
                                    <div className="teams__slide">
                                        <div className="teams__line" style={{backgroundColor: "#FAB8C4"}}></div> */}
                                        {/* <div className="teams__name" style={{color: "#5956E9"}}>Website</div> */}
                                        {/* <div className="teams__text">
                                            Excellent work as usual, very friendly and very dedicated in achieving the best result.
                                        </div>
                                        <div className="teams__user"> */}
                                            {/* <div className="teams__ava">
                                                <img className="teams__pic" src="img/ava-1.png" alt="" />
                                            </div> */}
                                            {/* <div className="teams__box">
                                                <div className="teams__man">- J De Leon</div> */}
                                                {/* <div className="teams__login">Founder Website</div> */}
                                            {/* </div>
                                        </div>
                                    </div>
                                </Slider> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="teams__circle js-rellax" data-rellax-speed="1"></div>
            </div>
        </>
    )
}

export default Teams