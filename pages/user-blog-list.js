import BlogList from '../components/BlogList'
export default function UserBlogList({ blogData }) {
  return (
    <>
      <BlogList blogData={blogData} />
    </>
  )
}
export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`)
  const data = await response.json()
  return {
    props: {
      blogData: data,
    },
  }
}
