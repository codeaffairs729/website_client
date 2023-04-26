import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

const Dashboard = () => {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.clear()
    router.back()
  }

  return (
    <>
      <section style={{ height: 90, width: '100vw' }}></section>

      <div
        className="btn btn-link "
        onClick={() => handleLogout()}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '90vw',
        }}
      >
        Logout
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          fontFamily: 'cursive',
          fontSize: 30,
          fontWeight: '600',
          letterSpacing: 2,
        }}
      >
        Our Featured Blogs and Case-Studies
      </div>

      <div
        style={{
          height: '65vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Link href="/blogs">
          <div
            className="header__btn btn-none btn btn_pink"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Blogs
          </div>
        </Link>

        <Link href="/case-study">
          <div
            className="header__btn btn-none btn btn_pink"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Case Study
          </div>
        </Link>
      </div>
    </>
  )
}

export default Dashboard
