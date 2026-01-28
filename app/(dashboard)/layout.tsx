import React from 'react'
import NavBar from './components/NavBar'

type Props = {
    children:React.ReactNode
}
function DashboardLayout({children} : Props) {
  return (
    <div>
        <NavBar />
        {children}
    </div>
  )
}

export default DashboardLayout