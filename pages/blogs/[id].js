import Link from 'next/link'
import Head from 'next/head'
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
    <>
      <Head>
        <title>{blogData[0]?.title}</title>
      </Head>
      {name && (
        // <Link href={name ? '/blogs' : '/user-blog-list'}>
        <div className="blog-back-btn cursor_pointer d-flex ">
          <div className="align-self-center">
            <img src="/icons/left-angle.png" style={{ height: '24px' }} />
          </div>
          <div
            className="fs-6  fw-semibold fw-bold"
            style={{
              color: '#2522BA',
              width: '100vw',
              height: 80,
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={handleOnBack}
          >
            <div>&nbsp;&nbsp;Back</div>
          </div>
        </div>
        // </Link>
      )}

      {blogData.map((e, i) => (
        <div className="hire-container  blog-page-container " key={i}>
          <div className="blog-shades">
            <h1 className="hire-h1">{blogData[i]?.title}</h1>
            <br />
            <div className="p-4" style={{ height: 300, width: 500 }}>
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${e.image}`}
                alt="node-guide-image"
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </div>
            <div className="htmlContent">
              <div dangerouslySetInnerHTML={{ __html: e.content }} />
            </div>
          </div>
        </div>
      ))}
    </>
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
