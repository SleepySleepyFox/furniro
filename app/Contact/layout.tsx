import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../common/Header'
import ShopBaner from '../components/ShopBaner'
import Footer from '../components/Footer'

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <div>
        <Navbar/>
        <div className='2xl:px-80'>
            <Header h='Contact' bg='bg-shop-header'/>
        </div>
        {children}
        <ShopBaner/>
        <Footer/>
    </div>
  )
}
