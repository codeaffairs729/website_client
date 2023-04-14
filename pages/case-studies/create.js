import RichTextEditor from '../../components/RichTextEditor'
import ProtectedRoute from '../../components/ProtectedRoute'

export default function CreateCaseStudyForm() {
  const data = {
    title: '',
    content: '',
    image: '',
  }

  return (
    <>
      <ProtectedRoute>
        <RichTextEditor
          pageName={'Create Case Study Blog'}
          btnName={'Save'}
          uploadbtn={'Choose banner'}
          data={data}
          db={'case-studies'}
        />
      </ProtectedRoute>
    </>
  )
}
