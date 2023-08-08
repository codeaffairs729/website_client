import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Qrm = () => {
  const router = useRouter()
  console.log('router as path', router.asPath)
  useEffect(() => {
    router.push('/')
  }, [])

  return null
}

export default Qrm
