import React, { useEffect, useState } from 'react'

const Contact = () => {
    const [nameIcon, setNameIcon] = useState(false);
    const [emailIcon, setEmailIcon] = useState(false);
    const [messageIcon, setMessageIcon] = useState(false);

    const changeNameIcon = (e) => {
        e == 1 ? setNameIcon(true) : setNameIcon(false);
    }

    const changeEmailIcon = (e) => {
        e == 1 ? setEmailIcon(true) : setEmailIcon(false);
    }

    const changeMessageIcon = (e) => {
        e == 1 ? setMessageIcon(true) : setMessageIcon(false);
    }
    return (
        <div className="page">
            <div className="entry entry_solo contact_solo">
                <div className="entry__center center contact-entry-center">
                    <div className="entry__head contact__head">
                        <a className="entry__logo contact__logo" href="./">
                            <img className="entry__pic entry__pic_white" src="logo/logoEdited.png" alt="CodeGarage Tech" />
                            <img className="entry__pic entry__pic_black" src="logo/logoEdited.png" alt="CodeGarage Tech" />
                        </a>
                    </div>
                    <div className="entry__body contact_body">
                        <div className="like">
                            <div className="like__center contact__center center">
                                <div className="like__container" style={{padding: "55px 38px"}}>
                                    <div className="entry__row contact__row">
                                        <form className="entry__form" action='/api/signIn' method='post'>
                                            <div className="entry__title title title_sm text-center">
                                                Get in touch
                                                <span className="title__color">.</span>
                                            </div>
                                            <div className="entry__info text-center">Enter your detail below</div>
                                            <div className="entry__field field">
                                                <div className="field__label">Name</div>
                                                <div className="field__wrap">
                                                    <div className="field__icon contact-field-icon">
                                                        {
                                                            nameIcon
                                                            ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.3" d="M12 11.5C9.79086 11.5 8 9.70914 8 7.5C8 5.29086 9.79086 3.5 12 3.5C14.2091 3.5 16 5.29086 16 7.5C16 9.70914 14.2091 11.5 12 11.5Z" fill="#5956E9"/>
                                                                <path d="M3.00065 20.6992C3.38826 15.9265 7.26191 13.5 11.9833 13.5C16.7712 13.5 20.7049 15.7932 20.9979 20.7C21.0096 20.8955 20.9979 21.5 20.2467 21.5C16.5411 21.5 11.0347 21.5 3.7275 21.5C3.47671 21.5 2.97954 20.9592 3.00065 20.6992Z" fill="#5956E9"/>
                                                            </svg>
                                                            : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.3" d="M12 11.5C9.79086 11.5 8 9.70914 8 7.5C8 5.29086 9.79086 3.5 12 3.5C14.2091 3.5 16 5.29086 16 7.5C16 9.70914 14.2091 11.5 12 11.5Z" fill="black"/>
                                                                <path d="M3.00065 20.6992C3.38826 15.9265 7.26191 13.5 11.9833 13.5C16.7712 13.5 20.7049 15.7932 20.9979 20.7C21.0096 20.8955 20.9979 21.5 20.2467 21.5C16.5411 21.5 11.0347 21.5 3.7275 21.5C3.47671 21.5 2.97954 20.9592 3.00065 20.6992Z" fill="black"/>
                                                            </svg>
                                                        }
                                                    </div>
                                                    <input onFocus={() => changeNameIcon(1)} onBlur={() => changeNameIcon(0)} className="field__input contact-field-input" type="text" name="name" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="entry__field field">
                                                <div className="field__label">Email</div>
                                                <div className="field__wrap">
                                                    <div className="field__icon contact-field-icon">
                                                        {
                                                            emailIcon
                                                            ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Stockholm-icons / Communication / Sending mail">
                                                            <path id="Combined Shape" opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M3 6C2.44772 6 2 6.44772 2 7C2 7.55228 2.44772 8 3 8H5C5.55228 8 6 7.55228 6 7C6 6.44772 5.55228 6 5 6H3ZM0 12C0 11.4477 0.447715 11 1 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H1C0.447715 13 0 12.5523 0 12ZM3 17C3 16.4477 3.44772 16 4 16H5C5.55228 16 6 16.4477 6 17C6 17.5523 5.55228 18 5 18H4C3.44772 18 3 17.5523 3 17Z" fill="#5956E9"/>
                                                            <path id="Combined Shape_2" fillRule="evenodd" clipRule="evenodd" d="M10 6C8.89543 6 8 6.89543 8 8V16C8 17.1046 8.89543 18 10 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H10ZM21.9257 8.31565C21.7632 8.02389 21.3868 7.91473 21.0849 8.07183L16 10.7186L10.9151 8.07183C10.6132 7.91473 10.2368 8.02389 10.0743 8.31565C9.91179 8.6074 10.0247 8.97127 10.3265 9.12837L15.7057 11.9283C15.8894 12.0239 16.1106 12.0239 16.2943 11.9283L21.6735 9.12837C21.9753 8.97127 22.0882 8.6074 21.9257 8.31565Z" fill="#5956E9"/>
                                                            </g>
                                                            </svg>                                                    
                                                            : <img className="field__pic" src="img/sending-mail.svg" alt="" />
                                                        }
                                                    </div>
                                                    <input onFocus={() => changeEmailIcon(1)} onBlur={() => changeEmailIcon(0)} className="field__input contact-field-input" type="email" name="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="entry__field field">
                                                <div className="field__line">
                                                    <div className="field__label">Message</div>
                                                </div>
                                                <div className="field__wrap">
                                                    <div className="field__icon contact-field-icon">
                                                        {
                                                            messageIcon
                                                            ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M5 3C3.34315 3 2 4.34315 2 6V15C2 16.6569 3.34315 18 5 18H9.01653L11.0887 21.1255C11.5036 21.7513 12.4344 21.7137 12.7975 21.0566L14.4862 18H19C20.6569 18 22 16.6569 22 15V6C22 4.34315 20.6569 3 19 3H5Z" fill="#5956E9"/>
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M6 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H6C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7ZM6 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11Z" fill="#5956E9"/>
                                                            </svg>
                                                            : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M5 3C3.34315 3 2 4.34315 2 6V15C2 16.6569 3.34315 18 5 18H9.01653L11.0887 21.1255C11.5036 21.7513 12.4344 21.7137 12.7975 21.0566L14.4862 18H19C20.6569 18 22 16.6569 22 15V6C22 4.34315 20.6569 3 19 3H5Z" fill="#27272E"/>
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M6 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H6C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7ZM6 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11Z" fill="#27272E"/>
                                                            </svg>
                                                        }
                                                    </div>
                                                    <textarea onFocus={() => changeMessageIcon(1)} onBlur={() => changeMessageIcon(0)} className="field__input field_text_area" name="message" placeholder="Message" />
                                                </div>
                                            </div>
                                            <button className="entry__btn btn btn_purple contact-submit-btn" type="submit" >Send Now</button>
                                        </form>
                                    </div>
                                    <div className="contact__circles">
                                        <div className="contact__circle"></div>
                                        <div className="contact__circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="entry__foot">
                        
                    </div>
                </div>
                <div className="entry__bg">
                    <img className="entry__pic" src="img/entry-circle.svg" alt="" />
                </div>
                <div className="contact__cloud">
                    <img className="tool__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.png" alt="" />
                </div>
                <div className="contact_cloud_2">
                    <img className="tool__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.png" alt="" />
                </div>
                {/* <div className="contact__bucket" >
                    <img className="contact_bucket_pic" src="img/popup-pic-2.png" alt="" />
                </div>
                <div className="contact__arrow" >
                    <img className="contact_arrow_pic" src="img/cursor-1.png" alt="" />
                </div> */}
                <div className="contact_circles_2">
                    <div className="contact_circle_2"></div>
                    <div className="contact_circle_2"></div>
                    <div className="contact_circle_2"></div>
                    <div className="contact_circle_2"></div>
                </div>
            </div>
        </div>
    )
}

export default Contact