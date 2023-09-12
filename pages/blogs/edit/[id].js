import RichTextEditor from '../../../components/RichTextEditor'
import ProtectedRoute from '../../../components/ProtectedRoute'

export default function UpdateBlog({ blogData }) {
  return (
    <ProtectedRoute>
      <RichTextEditor
        pageName={'Update A Blog'}
        btnName={'Update'}
        uploadbtn={'Update banner'}
        data={blogData[0]}
        db={'blogs'}
      />
    </ProtectedRoute>
  )
}
export async function getServerSideProps({ params }) {
  const blogData = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/slug/${params.id}`)
  ).json()

  return {
    props: {
      blogData,
    },
  }
}
