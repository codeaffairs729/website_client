import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import BlogGrid from './BlogGrid'
import DeleteModal from './DeleteModal'

const BlogList = ({ authorized, blogData, notify, notifyError }) => {
  const [data, setData] = useState(blogData)
  const [delId, setDelId] = useState()
  const router = useRouter()

  const handleOnLogout = () => {
    localStorage.clear()
    router.push('/signIn')
  }

  if (typeof window !== 'undefined' && window.localStorage) {
    var token = localStorage.getItem('token')
  }

  const handleOnCreate = () => {
    router.push('/create-blog')
  }

  const handleOnDelete = async () => {
    const newData = data.filter((e) => e.id != delId)
    console.log(process.env.NEXT_PUBLIC_BASE_URL, delId, token)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${delId}`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json', Authorization: token },
        }
      )
      const json = await response.json()
      notify(json.message)
      setData(newData)
      router.push('/blog/admin-blog-list')
    } catch (error) {
      notifyError('Internal server error')
    }
  }
  return (
    <>
      <DeleteModal handleOnDelete={handleOnDelete} />
      {authorized && (
        <>
          <div className="control-btn-div cursor_pointer d-flex fs-6 fw-semibold text-primary fw-bold">
            <div onClick={handleOnCreate}>Create Blog</div>
            <div onClick={handleOnLogout}>Logout</div>
          </div>
        </>
      )}
      <div className="breadcumb-area">
        <h1 className="text-center text-light">OUR LATEST BLOGS</h1>
      </div>
      <BlogGrid data={data} authorized={authorized} setDelId={setDelId} />
    </>
  )
}

export default BlogList
