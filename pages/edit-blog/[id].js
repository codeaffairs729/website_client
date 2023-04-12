import RichTextEditor from '../../components/RichTextEditor'
import ProtectedRoute from '../../components/ProtectedRoute'

export default function UpdateBlog({ blogData }) {
  return (
    <ProtectedRoute>
      <RichTextEditor
        pageName={'Update A Blog'}
        btnName={'Update'}
        uploadbtn={'Update banner'}
        data={blogData[0]}
      />
    </ProtectedRoute>
  )
}

// export const getStaticPaths = async () => {
//   const blogData = await (
//     await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`)
//   ).json()
//   const blogIds = blogData.map((blog) => blog.id)
//   return {
//     paths: blogIds.map((blogId) => ({ params: { id: `${blogId}` } })),
//     fallback: false,
//   }
// }
export async function getServerSideProps({ params }) {
  const { id } = params
  const blogData = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`)
  ).json()

  return {
    props: {
      blogData,
    },
  }
}
