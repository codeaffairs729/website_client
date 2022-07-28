import React, { useEffect, useState } from 'react'
import Head from 'next/head'

const SignIn = () => {
    const [emailIcon, setEmailIcon] = useState(false);

    const changeEmailIcon = () => {
        setEmailIcon(true);
    }
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>CodeGarageTech | Sign-In</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
                <meta name="format-detection" content="telephone=no"/>
                <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png"/>
                <link rel="manifest" href="img/site.webmanifest"/>
                <link rel="mask-icon" href="img/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <meta name="description" content="CodeGarageTech"/>
            </Head>
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
                                                    ? <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M3.12677 6C2.57448 6 2.12677 6.44772 2.12677 7C2.12677 7.55228 2.57448 8 3.12677 8H4.34124C4.89352 8 5.34124 7.55228 5.34124 7C5.34124 6.44772 4.89352 6 4.34124 6H3.12677ZM0.519531 12C0.519531 11.4477 0.967246 11 1.51953 11H4.34124C4.89352 11 5.34124 11.4477 5.34124 12C5.34124 12.5523 4.89352 13 4.34124 13H1.51953C0.967247 13 0.519531 12.5523 0.519531 12ZM2.93038 17C2.93038 16.4477 3.3781 16 3.93038 16H4.34124C4.89352 16 5.34124 16.4477 5.34124 17C5.34124 17.5523 4.89352 18 4.34124 18H3.93038C3.3781 18 2.93038 17.5523 2.93038 17Z" fill="#27272E"/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.94824 6C7.84367 6 6.94824 6.89543 6.94824 8V16C6.94824 17.1046 7.84367 18 8.94824 18H17.8061C18.9107 18 19.8061 17.1046 19.8061 16V8C19.8061 6.89543 18.9107 6 17.8061 6H8.94824ZM18.1392 8.31565C18.0086 8.02389 17.7061 7.91473 17.4635 8.07183L13.3772 10.7186L9.29084 8.07183C9.04829 7.91473 8.7458 8.02389 8.61519 8.31565C8.48459 8.6074 8.57534 8.97127 8.81789 9.12837L13.1407 11.9283C13.2883 12.0239 13.466 12.0239 13.6137 11.9283L17.9365 9.12837C18.179 8.97127 18.2698 8.6074 18.1392 8.31565Z" fill="#5956E9"/>
                                                    </svg>
                                                    : <img className="field__pic" src="img/sending-mail.svg" alt="" />
                                                }
                                            </div>
                                            <input onFocus={() => changeEmailIcon()} className="field__input" type="email" name="email" placeholder="Email" />
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
        </>
    )
}

export default SignIn