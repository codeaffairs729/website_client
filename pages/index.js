// import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Main from './main'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import LandingModal from '../components/LandingModal'

import RequestCallBack from '../components/RequestCallBack'

import DeleteModal from '../components/DeleteModal'
const BlogSection = dynamic(() => import('../components/BlogSection'), {
  ssr: false,
})
const FeatureList = dynamic(() => import('../components/FeatureList'), {
  ssr: false,
})
const Package = dynamic(() => import('./package'), {
  ssr: false,
})
const Layouts = dynamic(() => import('./layouts'), {
  ssr: false,
})
const Access = dynamic(() => import('./access'), {
  ssr: false,
})
const Partners = dynamic(() => import('./partners'), {
  ssr: false,
})
const Design = dynamic(() => import('./design'), {
  ssr: false,
})

const Industries = dynamic(() => import('./industries'), {
  ssr: false,
})

const Teams = dynamic(() => import('./teams'), {
  ssr: false,
})

const CaseStudySection = dynamic(() =>
  import('./../components/CaseStudySection')
)

export default function Home({ data, caseData }) {
  const Router = useRouter()
  const buttonRef = useRef(null)

  useEffect(() => {
    if (Router.asPath === '/?twitter-ads') {
      const openChatwoot = () => {
        window.$chatwoot.toggle('open')
      }

      window.addEventListener('chatwoot:ready', openChatwoot)

      return () => {
        window.removeEventListener('chatwoot:ready', openChatwoot)
      }
    }

    if (Router.asPath === '/?request-contact') {
      const modal = document.getElementById('exampleModal')
      modal.classList.add('show')
      modal.classList.add('fade')
      modal.setAttribute('aria-hidden', 'false')
    }

    clearTimeout()
  }, [])

  return (
    <>
      <div className="page">
        <a
          href="https://api.whatsapp.com/send?phone=17606839821"
          className="whatsapp-btn-outer"
          title="Contact Us on whatsapp"
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
        <FeatureList />
        {/* <CaseStudySection data={data} /> */}
        <Access />
        <Layouts />
        <Design />
        <Industries />
        <BlogSection data={data} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`)
  ).json()

  const caseData = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/case-study`)
  ).json()

  return {
    props: {
      data,
      caseData,
    },
    revalidate: 10,
  }
}
