import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Qrm = () => {
  const router = useRouter()
  console.log('router as path', router.asPath)
  useEffect(() => {
    // router.push('/')
  }, [])

  return <h1>Mehek sir</h1>
}

export default Qrm
