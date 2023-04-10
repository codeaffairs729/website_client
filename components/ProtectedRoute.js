import { useRouter } from 'next/router'
import { useLayoutEffect, useState } from 'react'

const ProtectedRoute = ({ children }) => {
  const router = useRouter()
  const [token, setToken] = useState(null)

  useLayoutEffect(() => {
    const localStorageToken = localStorage.getItem('token')
    if (localStorageToken) {
      setToken(localStorageToken)
    } else {
      router.push('/signIn')
    }
  }, [router])

  if (token === null) {
    return <div style={{ height: '500px', width: '500px' }}>Loading .....</div>
  }
  return <>{token && children}</>
}

export default ProtectedRoute
