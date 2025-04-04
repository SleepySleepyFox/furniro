'use client'
import { ReactNode, useRef } from "react"
import Navbar from "../components/Navbar"
import Header from "../common/Header"
import Filters from "../components/Filters"
import { Provider } from "react-redux"
import { AppStore, makeStore } from "../../lib/store"
import { useStore } from "react-redux"
import { ItemsPerPage } from "../../lib/features/filters/filterSlices"
import { createSelector } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import StoreProvider from "../StoreProvider"
import Pagination from "../common/Pagination"

export default function Layout({ children } : {children : ReactNode}) {

  return (
      <StoreProvider>
      <main className="">
        <Navbar/>
        <div className="2xl:px-80">
          <Header h='Shop' p='p' bg='bg-shop-header'/>
          <Filters/>
        </div>
        {children}
      </main>
      </StoreProvider>
  )
}
