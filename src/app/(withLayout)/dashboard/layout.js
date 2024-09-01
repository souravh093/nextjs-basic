import Footer from '@/components/shared/Footer'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div>
        {children}
        <Footer />
    </div>
  )
}

export default DashboardLayout