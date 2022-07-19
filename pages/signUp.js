import React from 'react'

const SignUp = () => {
    return (
        <div class="page">
            <div class="entry entry_solo">
                <div class="entry__center center">
                    <div class="entry__head">
                        <a class="entry__logo" href="index.html">
                            <img class="entry__pic entry__pic_white" src="img/logo-white.svg" alt="" />
                            <img class="entry__pic entry__pic_black" src="img/logo.svg" alt="" />
                        </a>
                        <a class="entry__link" href="#">Not a member?</a>
                        <button class="entry__btn btn btn_pink">Sign up now</button>
                    </div>
                    <div class="entry__body">
                        <div class="entry__row">
                        <div class="entry__details">
                            <div class="entry__title title title_sm">The world most powerful design tool.</div>
                            <div class="entry__info">Create your own website with the Fastest Page Building Platform.</div>
                            <div class="entry__img">
                                <img class="entry__pic" src="img/entry-pic-2.png" alt="" />
                            </div>
                        </div>
                        <form class="entry__form">
                            <div class="entry__title title title_sm">
                                Sign in to Collab
                                <span class="title__color">.</span>
                            </div>
                            <div class="entry__info">Enter your detail below</div>
                            <div class="entry__field field">
                                <div class="field__label">Username or Email</div>
                                <div class="field__wrap">
                                    <div class="field__icon">
                                        <img class="field__pic" src="img/sending-mail.svg" alt="" />
                                    </div>
                                    <input class="field__input" type="email" name="email" placeholder="Email" />
                                </div>
                            </div>
                            <div class="entry__field field">
                                <div class="field__line">
                                    <div class="field__label">Password</div>
                                    <a class="field__link" href="#">Forget password?</a>
                                </div>
                                <div class="field__wrap">
                                    <div class="field__icon">
                                        <img class="field__pic" src="img/lock.svg" alt="" />
                                    </div>
                                    <input class="field__input" type="password" name="password" placeholder="Password" />
                                </div>
                            </div>
                            <button class="entry__btn btn btn_purple" type="submit">Sign in</button>
                            <div class="entry__links">
                                <a class="entry__link" href="#">Not a member? Sigup now</a>
                            </div>
                        </form>
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

export default SignUp