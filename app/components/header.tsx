'use client'
import React, { useState, useEffect } from 'react'
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import Sidebar from './sidebar';
import { User, Heart, Search, ShoppingCart } from 'lucide-react';

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  useEffect(() => {
    console.log(sidebar)
  }, [sidebar])

  return (
    <div className='w-full p-4 h-[50px] flex items-center justify-between md:justify-around'>
      <AlignJustify className='md:hidden' onClick={() => setSidebar(e => !e)} />
      <Sidebar sidebarState={sidebar} setSidebarState={setSidebar} />
      <Image priority src={"/logo.svg"} alt='logo' height={50} width={100} />

      <nav className='hidden md:block align-middle'>
        <ul className='flex md:gap-10 lg:gap-16'>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>

      <div className='hidden md:flex md:gap-10 lg:gap-16'>
        <User className='w-4 lg:w-5' />
        <Search className='w-4 lg:w-5' />
        <Heart className='w-4 lg:w-5' />
        <ShoppingCart className='w-4 lg:w-5' />
      </div>
    </div >

  )
}

