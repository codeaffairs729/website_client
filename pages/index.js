// import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Main from './main'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
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
const Teams = dynamic(() => import('./teams'), {
  ssr: false,
})

export default function Home() {
  // const Router = useRouter()
  // const { name, email } = Router.query
  // // console.log('name:', name, 'email:', email)
  // // const isEmpty = Object.keys(ChatwootWidget).length

  // function handleComponentRender() {
  //   // console.log('Dynamic component rendered!')
  // }
  // // useEffect(() => {
  // //   console.log("chatwoot length" ,Object.keys(ChatwootWidget).length);

  // //   if (isEmpty) {
  // //     console.log('chatwoot script executed successfully')
  // //     window.$chatwoot.setConversation('xyz','xyzz@xyz.com')
  // //   }

  // // }, [])
  // const d = new Date()
  // let ms = useEffect(() => {}, [])
  return (
    <>
      <div className="page">
        <a
          href="https://api.whatsapp.com/send?phone=918146394889"
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
        <Package />
        <Layouts />
        <Access />
        <Partners />
        <Design />
        <Teams />
        <BlogSection />
      </div>
    </>
  )
}
