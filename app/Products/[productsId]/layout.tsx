import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import ShopBaner from '@/app/components/ShopBaner'
import React from 'react'

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <div>
        <Navbar/>
        {children}
        <ShopBaner />
        <Footer/>
    </div>
  )
}
