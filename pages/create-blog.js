import RichTextEditor from '../components/RichTextEditor'
import ProtectedRoute from '../components/ProtectedRoute'

export default function CreateBlog() {
  const data = {
    title: '',
    content: '',
    image: '',
  }

  return (
    <>
      <ProtectedRoute>
        <RichTextEditor
          pageName={'Create A Blogs'}
          btnName={'Save'}
          uploadbtn={'Choose banner'}
          data={data}
        />
      </ProtectedRoute>
    </>
  )
}
