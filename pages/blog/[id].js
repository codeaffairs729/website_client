import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function BlogDetails({ blogData }) {
  const [data, setData] = useState(blogData)

  if (typeof window !== 'undefined' && window.localStorage) {
    var name = localStorage.getItem('name')
  }

  return (
    <>
      <Head>
        <title>{blogData[0].title}</title>
      </Head>
      {true && (
        <Link href={name ? '/blog/admin-blog-list' : '/user-blog-list'}>
          <div className="blog-back-btn cursor_pointer d-flex ">
            <div className="align-self-center">
              <img src="/icons/left-angle.png" style={{ height: '24px' }} />
            </div>
            <div
              className="fs-6  fw-semibold fw-bold"
              style={{ color: '#2522BA' }}
            >
              &nbsp;&nbsp;Back
            </div>
          </div>
        </Link>
      )}

      {data.map((e, i) => (
        <div className="hire-container  blog-page-container " key={i}>
          <div className="blog-shades">
            <h1 className="hire-h1">{data[i].title}</h1>
            <div className="text-center p-4">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${e.image}`}
                alt="node-guide-image"
                style={{ width: '1060px' }}
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

export const getStaticPaths = async () => {
  const blogData = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`)
  ).json()
  const blogIds = blogData.map((blog) => blog.id)
  return {
    paths: blogIds.map((blogId) => ({ params: { id: `${blogId}` } })),
    fallback: false,
  }
}
export async function getStaticProps(context) {
  const id = context.params.id
  const blogData = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`)
  ).json()
  return {
    props: {
      blogData,
    },
  }
}
