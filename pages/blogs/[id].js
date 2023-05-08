import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function BlogDetails({ blogData }) {
  const router = useRouter()
  const [name, setName] = useState('')

  // useEffect used for solving hydration errror because name is not defined at server side

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      setName(localStorage.getItem('name'))
    }
    if (blogData.length === 0) {
      router.push('/404')
    }
  }, [])

  const handleOnBack = () => {
    router.back()
  }
  return (
    <div>
      <Head>
        <title>{blogData[0]?.title}</title>
      </Head>

      {blogData.map((e, i) => (
        <>
          <div
            className="background_image_container"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${e.image}`}
              width={3000}
              height={1080}
              objectFit="cover"
            />
          </div>
          <div className="hire-container  blog-page-container " key={i}>
            <div className="blog-shades">
              <br />
              <h1 className="hire-h1">{blogData[i]?.title}</h1>

              <div className="htmlContent">
                <div dangerouslySetInnerHTML={{ __html: e.content }} />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params
  const res = await await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`
  )
  const blogData = await res.json()

  if (res.status === 200) {
    return {
      props: {
        blogData,
      },
    }
  } else {
    return {
      notFound: true,
    }
  }
}
