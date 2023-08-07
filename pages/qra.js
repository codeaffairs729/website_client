import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Qra = () => {
  const router = useRouter()
  console.log('router as path', router.asPath)
  useEffect(() => {
    if (router.asPath === '/qra') {
      console.log('qra')
      router.push('/')
    }
  }, [])

  return null
}

export default Qra
