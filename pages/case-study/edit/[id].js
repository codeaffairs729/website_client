import ProtectedRoute from '../../../components/ProtectedRoute'
import CaseStudyForm from '../../../components/CaseStudyForm'
export default function UpdateBlog({ blogData }) {
  return (
    <ProtectedRoute>
      <CaseStudyForm action={'update'} data={blogData[0]} />
    </ProtectedRoute>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params
  const blogData = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/case-study/${id}`)
  ).json()

  return {
    props: {
      blogData,
    },
  }
}
