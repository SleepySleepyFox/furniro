import React from "react"
import Navbar from "../components/Navbar"
import ShopBaner from "../components/ShopBaner"
import Header from "../common/Header"
import Footer from "../components/Footer"
export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <div className="2xl:px-80">
                <Header h='Cart' bg='bg-shop-header' />
            </div>
            {children}
            <ShopBaner />
            <Footer />
        </div>
    )
}

