import ProtectedRoute from '../../components/ProtectedRoute'
import CaseStudyForm from '../../components/CaseStudyForm'
export default function CreateCaseStudyForm() {
  const data = {
    title: '',
    content: '',
    image: '',
  }

  return (
    <>
      <ProtectedRoute>
        <CaseStudyForm db={'case-study'} />
      </ProtectedRoute>
    </>
  )
}
