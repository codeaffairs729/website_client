// import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Main from './main'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
const LandingModal = dynamic(() => import('../components/LandingModal'), {
  ssr: true,
})

export default function RequestCallBack({ data, caseData }) {
  const Router = useRouter()

  useEffect(() => {
    // don't delete chatwoot code
    // const openChatwoot = () => {
    //   console.log('hello')
    //   window.$chatwoot.toggle('open')
    // }
    // if (Router.asPath === '/?twitter-ads') {
    //   window.addEventListener('chatwoot:ready', openChatwoot)
    // }
    // if (Router.asPath === '/request-contact') {
    //   const modal = document.getElementById('exampleModal')
    //   modal.classList.add('show')
    //   modal.setAttribute('aria-hidden', 'false')
    // }
    // return () => {
    //   window.removeEventListener('chatwoot:ready', openChatwoot)
    // }
  }, [])

  return (
    <>
      <div className="page">
        <a
          href="https://api.whatsapp.com/send?phone=17606839821"
          className="whatsapp-btn-outer_request"
          title="Contact Us on whatsapp"
          // style={{ position:"absolute",left:"0px", bottom: '-75px' }}
        >
          <Image
            className="whatsapp-btn"
            src="/images/WhatsApp.webp"
            alt="3D Whatsapp Icon"
            width={50}
            height={50}
          />
        </a>

        <LandingModal />
        <Main />
      </div>
    </>
  )
}
