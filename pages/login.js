import React from 'react'

const Login = () => {
    return (
        <div className="page">
            <div className="entry entry_variants">
                <div className="entry__center center">
                    <div className="entry__head">
                        <a className="entry__logo" href="/">
                            <img className="entry__pic entry__pic_white" src="logo/logoEdited.png" alt="" />
                            <img className="entry__pic entry__pic_black" src="logo/logoEdited.png" alt="" />
                        </a>
                        <a className="entry__link" href="#">
                            Not a member?
                        </a>
                        <button className="entry__btn btn btn_pink">Sign up now</button>
                    </div>
                    <div className="entry__body">
                        <div className="entry__row">
                            <div className="entry__details">
                                <div className="entry__title title title_sm">The world most powerful design tool.</div>
                                <div className="entry__info">Create your own website with the Fastest Page Building Platform.</div>
                                <div className="entry__hand">
                                    <img className="entry__pic" src="img/entry-pic-1.png" alt="" />
                                </div>
                            </div>
                            <div className="entry__form">
                                <div className="entry__title title title_sm">
                                    Let the team work in same place
                                    <span className="title__color">.</span>
                                </div>
                                <div className="entry__info">Most powerful design tool.</div>
                                <div className="entry__btns">
                                    <button className="entry__btn btn btn_border">
                                        <img className="btn__pic" src="img/google.svg" alt="" />
                                        <span className="btn__text">Sign in with Google</span>
                                    </button>
                                    <a className="entry__btn btn btn_purple" href="./signIn">Sign in with your email</a>
                                </div>
                                <div className="entry__links">
                                    <a className="entry__link" href="#">Not a member? Sigup now</a>
                                    <a className="entry__link" href="#">Forget password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="entry__foot">
                        <a className="entry__author" href="#" >
                            <div className="entry__text">A product by</div>
                            <div className="entry__icon">
                                <img className="entry__pic" src="img/ui8.svg" alt="" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="entry__bg">
                    <img className="entry__pic" src="img/entry-circle.svg" alt="" />
                </div>
                <div className="entry__cube">
                    <img className="entry__pic" src="img/cube.png" alt="" />
                </div>
                <div className="entry__circles">
                    <div className="entry__circle"></div>
                    <div className="entry__circle"></div>
                    <div className="entry__circle"></div>
                    <div className="entry__circle"></div>
                    <div className="entry__circle"></div>
                </div>
            </div>
        </div>
    )
}

export default Login