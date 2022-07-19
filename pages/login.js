import React from 'react'

const Login = () => {
    return (
        <div class="page">
            <div class="entry entry_variants">
                <div class="entry__center center">
                    <div class="entry__head">
                        <a class="entry__logo" href="index.html">
                            <img class="entry__pic entry__pic_white" src="img/logo-white.svg" alt="" />
                            <img class="entry__pic entry__pic_black" src="img/logo.svg" alt="" />
                        </a>
                        <a class="entry__link" href="#">
                            Not a member?
                        </a>
                        <button class="entry__btn btn btn_pink">Sign up now</button>
                    </div>
                    <div class="entry__body">
                        <div class="entry__row">
                            <div class="entry__details">
                                <div class="entry__title title title_sm">The world most powerful design tool.</div>
                                <div class="entry__info">Create your own website with the Fastest Page Building Platform.</div>
                                <div class="entry__hand">
                                    <img class="entry__pic" src="img/entry-pic-1.png" alt="" />
                                </div>
                            </div>
                            <div class="entry__form">
                                <div class="entry__title title title_sm">
                                    Let the team work in same place
                                    <span class="title__color">.</span>
                                </div>
                                <div class="entry__info">Most powerful design tool.</div>
                                <div class="entry__btns">
                                    <button class="entry__btn btn btn_border">
                                        <img class="btn__pic" src="img/google.svg" alt="" />
                                        <span class="btn__text">Sign in with Google</span>
                                    </button>
                                    <a class="entry__btn btn btn_purple" href="sign-up.html">Sign in with your email</a>
                                </div>
                                <div class="entry__links">
                                    <a class="entry__link" href="#">Not a member? Sigup now</a>
                                    <a class="entry__link" href="#">Forget password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="entry__foot">
                        <a class="entry__author" href="https://ui8.net/" target="_blank">
                            <div class="entry__text">A product by</div>
                            <div class="entry__icon">
                                <img class="entry__pic" src="img/ui8.svg" alt="" />
                            </div>
                        </a>
                    </div>
                </div>
                <div class="entry__bg">
                    <img class="entry__pic" src="img/entry-circle.svg" alt="" />
                </div>
                <div class="entry__cube">
                    <img class="entry__pic" src="img/cube.png" alt="" />
                </div>
                <div class="entry__circles">
                    <div class="entry__circle"></div>
                    <div class="entry__circle"></div>
                    <div class="entry__circle"></div>
                    <div class="entry__circle"></div>
                    <div class="entry__circle"></div>
                </div>
            </div>
        </div>
    )
}

export default Login