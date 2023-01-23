import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const SignIn = () => {
    const [emailIcon, setEmailIcon] = useState(false);
    const [passwordIcon, setPasswordIcon] = useState(false);

    const changeEmailIcon = (e) => {
        e == 1 ? setEmailIcon(true) : setEmailIcon(false);
    }

    const changePasswordIcon = (e) => {
        e == 1 ? setPasswordIcon(true) : setPasswordIcon(false);
    }
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>CodeGarageTech | Sign-In</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
                <meta name="format-detection" content="telephone=no" />
                <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.webp" />
                <link rel="icon" type="image.webp" sizes="32x32" href="/logo/cgt_new_favicon.webp" />
                <link rel="icon" type="image.webp" sizes="16x16" href="/logo/cgt_new_favicon.webp" />
                <link rel="manifest" href="/img/site.webmanifest" />
                <link rel="mask-icon" href="img/safari-pinned-tab.webp" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="description" content="CodeGarageTech" />
            </Head>
            <div className="page">
                <div className="entry entry_solo">
                    <div className="entry__center center">
                        <div className="entry__head">
                            <Link href="./">
                                <div className="entry__logo" >
                                    <img className="entry__pic entry__pic_white" src="logo/logoEdited.webp" alt="" />
                                    <img className="entry__pic entry__pic_black" src="logo/logoEdited.webp" alt="" />
                                </div>
                            </Link>
                            <a className="entry__link" href="#">Not a member?</a>
                            <button className="entry__btn btn btn_pink">Sign up now</button>
                        </div>
                        <div className="entry__body">
                            <div className="entry__row">
                                <div className="entry__details">
                                    <div className="entry__title title title_sm">The world most powerful design tool.</div>
                                    <div className="entry__info">Create your own website with the Fastest Page Building Platform.</div>
                                    <div className="entry__img">
                                        <img className="entry__pic" src="img/entry-pic-2.webp" alt="" />
                                    </div>
                                </div>
                                <form className="entry__form" action='/api/signIn' method='post'>
                                    <div className="entry__title title title_sm">
                                        Sign in to Collab
                                        <span className="title__color">.</span>
                                    </div>
                                    <div className="entry__info">Enter your detail below</div>
                                    <div className="entry__field field">
                                        <div className="field__label">Username or Email</div>
                                        <div className="field__wrap">
                                            <div className="field__icon">
                                                {
                                                    emailIcon
                                                        ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Stockholm-icons / Communication / Sending mail">
                                                                <path id="Combined Shape" opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M3 6C2.44772 6 2 6.44772 2 7C2 7.55228 2.44772 8 3 8H5C5.55228 8 6 7.55228 6 7C6 6.44772 5.55228 6 5 6H3ZM0 12C0 11.4477 0.447715 11 1 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H1C0.447715 13 0 12.5523 0 12ZM3 17C3 16.4477 3.44772 16 4 16H5C5.55228 16 6 16.4477 6 17C6 17.5523 5.55228 18 5 18H4C3.44772 18 3 17.5523 3 17Z" fill="#5956E9" />
                                                                <path id="Combined Shape_2" fillRule="evenodd" clipRule="evenodd" d="M10 6C8.89543 6 8 6.89543 8 8V16C8 17.1046 8.89543 18 10 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H10ZM21.9257 8.31565C21.7632 8.02389 21.3868 7.91473 21.0849 8.07183L16 10.7186L10.9151 8.07183C10.6132 7.91473 10.2368 8.02389 10.0743 8.31565C9.91179 8.6074 10.0247 8.97127 10.3265 9.12837L15.7057 11.9283C15.8894 12.0239 16.1106 12.0239 16.2943 11.9283L21.6735 9.12837C21.9753 8.97127 22.0882 8.6074 21.9257 8.31565Z" fill="#5956E9" />
                                                            </g>
                                                        </svg>
                                                        : <img className="field__pic" src="img/sending-mail.webp" alt="Sending Mail PNG" />
                                                }
                                            </div>
                                            <input onFocus={() => changeEmailIcon(1)} onBlur={() => changeEmailIcon(0)} className="field__input" type="email" name="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="entry__field field">
                                        <div className="field__line">
                                            <div className="field__label">Password</div>
                                            <a className="field__link" href="#">Forget password?</a>
                                        </div>
                                        <div className="field__wrap">
                                            <div className="field__icon">
                                                {
                                                    passwordIcon
                                                        ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10H18C19.1046 10 20 10.8954 20 12V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V12C4 10.8954 4.89543 10 6 10H7V8ZM12 5C10.3431 5 9 6.34315 9 8V10H15V8C15 6.34315 13.6569 5 12 5Z" fill="#5956E9" />
                                                        </svg>
                                                        : <img className="field__pic" src="img/lock.webp" alt="" />
                                                }
                                            </div>
                                            <input onFocus={() => changePasswordIcon(1)} onBlur={() => changePasswordIcon(0)} className="field__input" type="password" name="password" placeholder="Password" />
                                        </div>
                                    </div>
                                    <button className="entry__btn btn btn_purple" type="submit" >Sign in</button>
                                    <div className="entry__links">
                                        <a className="entry__link" href="#">Not a member? Sigup now</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="entry__foot">
                            <a className="entry__author" href="#" >
                                <div className="entry__text">A product by</div>
                                <div className="entry__icon">
                                    <img className="entry__pic" src="/logo/favicon_white.webp" alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="entry__bg">
                        <img className="entry__pic" src="img/entry-circle.webp" alt="" />
                    </div>
                    <div className="entry__cube">
                        <img className="entry__pic" src="img/cube.webp" alt="3D Cube" />
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
        </>
    )
}

export default SignIn