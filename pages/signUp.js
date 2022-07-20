import React from 'react'

const SignUp = () => {
    return (
        <div className="page">
            <div className="entry entry_solo">
                <div className="entry__center center">
                    <div className="entry__head">
                        <a className="entry__logo" href="index.html">
                            <img className="entry__pic entry__pic_white" src="img/logo-white.svg" alt="" />
                            <img className="entry__pic entry__pic_black" src="img/logo.svg" alt="" />
                        </a>
                        <a className="entry__link" href="#">Not a member?</a>
                        <button className="entry__btn btn btn_pink">Sign up now</button>
                    </div>
                    <div className="entry__body">
                        <div className="entry__row">
                        <div className="entry__details">
                            <div className="entry__title title title_sm">The world most powerful design tool.</div>
                            <div className="entry__info">Create your own website with the Fastest Page Building Platform.</div>
                            <div className="entry__img">
                                <img className="entry__pic" src="img/entry-pic-2.png" alt="" />
                            </div>
                        </div>
                        <form className="entry__form">
                            <div className="entry__title title title_sm">
                                Sign in to Collab
                                <span className="title__color">.</span>
                            </div>
                            <div className="entry__info">Enter your detail below</div>
                            <div className="entry__field field">
                                <div className="field__label">Username or Email</div>
                                <div className="field__wrap">
                                    <div className="field__icon">
                                        <img className="field__pic" src="img/sending-mail.svg" alt="" />
                                    </div>
                                    <input className="field__input" type="email" name="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="entry__field field">
                                <div className="field__line">
                                    <div className="field__label">Password</div>
                                    <a className="field__link" href="#">Forget password?</a>
                                </div>
                                <div className="field__wrap">
                                    <div className="field__icon">
                                        <img className="field__pic" src="img/lock.svg" alt="" />
                                    </div>
                                    <input className="field__input" type="password" name="password" placeholder="Password" />
                                </div>
                            </div>
                            <button className="entry__btn btn btn_purple" type="submit">Sign in</button>
                            <div className="entry__links">
                                <a className="entry__link" href="#">Not a member? Sigup now</a>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="entry__foot">
                        <a className="entry__author" href="https://ui8.net/" target="_blank">
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

export default SignUp