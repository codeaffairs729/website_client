// import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Main from './main'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

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

export default function Home({ data, caseData }) {
  const Router = useRouter()
  // <----------------Don't delete ---------->
  // ---code for open chatwoot based on url---

  // const { twitter } = Router.query
  // console.log('Router ', Router.asPath=="/?twitter-ads")

  // const [isEmpty, setIsEmpty] = useState(Object.keys(Router?.query).length)

  // console.log(
  //   'window?.$chatwoot',
  //   // window?.$chatwoot,
  //   'isEmpty:',
  //   isEmpty,
  //   'Params data',
  //   Router?.query
  // )

  useEffect(() => {
    if (Router.asPath === '/?twitter-ads') {
      console.log('Inside if else ')
      setTimeout(() => {
        window?.$chatwoot?.setConversation('xyz', 'xyzz@xyz.com')
      }, 1000)
    }

    // if (twitter == '') {
    //   console.log(
    //     'window inside useEffect: ',
    //     window?.$chatwoot.setConversation('xyz', 'xyzz@xyz.com')
    //   )
    //   setTimeout(() => {
    //     window?.$chatwoot.setConversation('xyz', 'xyzz@xyz.com')
    //   }, 100)
    // }
  }, [])
  // const d = new Date()
  // let ms = useEffect(() => {}, [])
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

        <Main />
        <FeatureList />
        {/* <CaseStudy data={caseData} /> */}
        {/* <Package /> */}
        <Access />
        <Layouts />
        {/* <Partners /> */}
        <Design />
        {/* <Teams /> */}
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
