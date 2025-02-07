import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './UseAuth'
export function RutasPrivadas ({ children, isAlowed }) {
  const { login } = useAuth()
  const user = JSON.parse(window.sessionStorage.getItem('user'))
  useEffect(() => {
    login()
  }, [])

  if (!user) {
    return <Navigate to='/' />
  }
  console.log(isAlowed)
  return user
    ? children
    : 'no tienes permiso'
}
