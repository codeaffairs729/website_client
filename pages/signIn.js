import React, { useState } from 'react'
import Head from 'next/head'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { useRouter } from 'next/router'
export const BASE_URL = process.env.BASE_URL

const SignIn = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useRouter()

  if (typeof window !== 'undefined' && window.localStorage) {
    var token = localStorage.getItem('token')
    if (token) {
      navigate.push('/dashboard')

      // navigate.push('/blogs')
    }
  }
  const notify = (status) => {
    toast.success(status, {
      position: 'top-right',
    })
  }

  const notifyError = (status) => {
    toast.error(status, {
      position: 'top-right',
    })
  }

  const handleOnSignIn = async (e) => {
    e.preventDefault()
    const body = { name, password }
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/signIn`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      )
      const jsonData = await response.json()

      if (jsonData.user?.name) {
        notify('Login Successfully')
        window.localStorage.setItem('name', jsonData?.user?.name)
        window.localStorage.setItem('token', jsonData?.token)
        window.localStorage.setItem('id', jsonData?.user.id)
        // navigate.push('/blogs')
        navigate.push('/dashboard')
      } else {
        notifyError(jsonData.message)
        navigate.push('/signIn')
      }
    } catch (error) {
      notifyError('Internal Server Error')
    }
  }

  return (
    <>
      <ToastContainer />
      <Head>
        <meta charSet="utf-8" />
        <title>CodeGarageTech | Sign-In</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="format-detection" content="telephone=no" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="img/apple-touch-icon.png"
        />
        <link
          rel="mask-icon"
          href="img/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="CodeGarageTech" />
      </Head>
      <div className="page">
        <div className="entry entry_solo">
          <div className="entry__center center">
            <div className="entry__head"></div>
            <div className="entry__body">
              <div className="entry__row">
                <div className="entry__details">
                  <div className="entry__title title title_sm sign_title">
                    The world most powerful design{' '}
                    <span
                      className="cursor_pointer"
                      onClick={() => sentryErrorTest()}
                    >
                      tool
                    </span>
                  </div>
                  <div className="entry__info">
                    Create your own website with the Fastest Page Building
                    Platform.
                  </div>
                  <div className="entry__img"></div>
                </div>
                <div className="entry__form">
                  <div className="entry__title title title_sm">
                    Sign In
                    <span className="title__color">.</span>
                  </div>
                  <div className="entry__info">Enter your detail below</div>
                  <div className="entry__field field">
                    <div className="field__label">Username</div>
                    <div className="field__wrap">
                      <div className="field__icon">
                        <img
                          src="/icons/username-icon.png"
                          style={{ width: '25px' }}
                        />
                      </div>
                      <input
                        className="field__input"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="entry__field field">
                    <div className="field__line">
                      <div className="field__label">Password</div>
                    </div>
                    <div className="field__wrap">
                      <div className="field__icon">
                        <img
                          src="/icons/password-lock.svg"
                          style={{ width: '20px' }}
                        />
                      </div>
                      <input
                        className="field__input"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <button
                    className="sign-btn"
                    type="submit"
                    onClick={(e) => handleOnSignIn(e)}
                    // onClick={(e) =>
                    //   dispatch(addItem({ name: name, password: password }))
                    // }
                  >
                    Sign in
                  </button>
                </div>
                {/* {form} */}
              </div>
            </div>
            <div className="entry__foot">
              <a className="entry__author" href="#">
                <div className="entry__icon"></div>
              </a>
            </div>
          </div>
          <div className="entry__bg"></div>
          <div className="entry__cube"></div>
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
