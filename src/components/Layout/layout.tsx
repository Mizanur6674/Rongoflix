import React from 'react'
import Header from '../Header'

 const Layout:React.FC<{children:React.ReactNode}>= ({children}) => {
  return (
    <div className=' relative h-screen bg-gradient-to-b md:h-[140vh]'>
      <Header/>
      {children}
    </div>
  )
}
export default Layout;