'use client'
import { ReactNode, useRef } from "react"
import Navbar from "../components/Navbar"
import Header from "../common/Header"
import Filters from "../components/Filters"
import StoreProvider from "../StoreProvider"
import ShopBaner from "../components/ShopBaner"
import Footer from "../components/Footer"

export default function Layout({ children } : {children : ReactNode}) {

  return (
      <StoreProvider>
      <main className="">
        <Navbar/>
        <div className="2xl:px-80">
          <Header h='Shop' bg='bg-shop-header'/>
          <Filters/>
        </div>
        {children}
      </main>
      <ShopBaner/>
      <Footer/>
      </StoreProvider>
  )
}
