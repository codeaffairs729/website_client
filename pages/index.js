// import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Main from './main'
import CaseStudy from '../components/CaseStudy'
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

// const Teams = dynamic(() => import('./teams'), {
//   ssr: false,
// })

export default function Home({ data, caseData }) {
  // <----------------Don't delete ---------->
  // ---code for open chatwoot based on url---

  // const Router = useRouter();
  // const { email } = Router.query;
  // // console.log('email:', email)
  // const isEmpty = Object.keys(Router.query).length;
  // // console.log('team:', isEmpty)
  // // const isEmpty = Object.keys(ChatwootWidget).length

  // // function handleComponentRender() {
  // //   // console.log('Dynamic component rendered!')
  // }
  // useEffect(() => {

  //   if (isEmpty) {
  //     // console.log(
  //     //   'window : ',
  //     //   window.$chatwoot.setConversation('xyz', 'xyzz@xyz.com')
  //     // )
  //     // console.log('chatwoot dialog open\n')
  //     // console.log('\nEmail :', email)
  //     // window.$chatwoot.setConversation('xyz', email)
  //   }
  // }, [])
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
        {/* <Package /> */}
        <Access />
        <Layouts />
        {/* <Partners /> */}
        {/* <Design /> */}
        {/* <Teams /> */}
        <BlogSection data={data} />
        {/* <CaseStudy data={caseData} /> */}
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
