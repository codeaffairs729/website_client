// import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Main from './main'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import LandingModal from '../components/LandingModal'

const BlogSection = dynamic(() => import('../components/BlogSection'), {
  ssr: false,
})
const FeatureList = dynamic(() => import('../components/FeatureList'), {
  ssr: false,
})

const Layouts = dynamic(() => import('./layouts'), {
  ssr: false,
})
const Access = dynamic(() => import('./access'), {
  ssr: false,
})

const Design = dynamic(() => import('./design'), {
  ssr: false,
})

const Industries = dynamic(() => import('./industries'), {
  ssr: false,
})

const CaseStudySection = dynamic(() =>
  import('./../components/CaseStudySection')
)

export default function Home({ data, caseData }) {
  const Router = useRouter()

  useEffect(() => {
    const openChatwoot = () => {
      console.log('hello')
      window.$chatwoot.toggle('open')
    }
    if (Router.asPath === '/?twitter-ads') {
      window.addEventListener('chatwoot:ready', openChatwoot)
    }
    if (Router.asPath === '/?request-contact') {
      const modal = document.getElementById('exampleModal')
      modal.classList.add('show')
      modal.classList.add('fade')
      modal.setAttribute('aria-hidden', 'false')
    }
    clearTimeout()
    return () => {
      window.removeEventListener('chatwoot:ready', openChatwoot)
    }
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
