import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Qrb = () => {
  const router = useRouter()
  console.log('router as path', router.asPath)
  useEffect(() => {
    if (router.asPath === '/qrb') {
      console.log('qrb')
      router.push('/')
    }
  }, [])

  return null
}

export default Qrb
