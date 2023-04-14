import BlogList from '../../components/BlogList'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from '../../components/ProtectedRoute'

export default function CaseStudyList({ blogData }) {
  const notify = (status) => {
    toast.success(status, {
      position: 'top-right',
    })
  }

  const notifyError = (status) => {
    toast.error(status, {
      position: 'top-right',
    })
  }

  return (
    <>
      <ProtectedRoute>
        <ToastContainer />
        <BlogList
          authorized
          blogData={blogData}
          notify={notify}
          notifyError={notifyError}
          db={'case-studies'}
        />
      </ProtectedRoute>
    </>
  )
}
export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/case-studies`
  )
  const data = await response.json()

  return {
    props: {
      blogData: data,
    },
  }
}
