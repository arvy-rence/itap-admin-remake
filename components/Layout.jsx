import React from 'react'
import NavbarComponent from './NavbarComponent'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()
  const pathName = router.pathname
  return (
    <div>
      {pathName === '/' ? (children) : (
        <>
          <NavbarComponent activePage={pathName} />
          {children}
        </>
      )}
    </div>
  )
}
