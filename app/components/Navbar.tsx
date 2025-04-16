'use client'
import React, { useState, useEffect } from 'react'
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import Sidebar from './sidebar';
import { User, Heart, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import CartModal from './cart/CartModal';

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const [showCart, setShowCart] = useState(false)
  useEffect(() => {
    console.log(sidebar)
  }, [sidebar])

  return (
    <div className='w-full p-4 h-[50px] flex items-center justify-between md:justify-around'>
      <AlignJustify className='md:hidden' onClick={() => setSidebar(e => !e)} />
      <Sidebar sidebarState={sidebar} setSidebarState={setSidebar} />
      <Link href={'/'}>
        <img src={"/logo.svg"} alt='logo' className='h-[22px] w-[100px]'/>
      </Link>

      <nav className='hidden md:block align-middle'>
        <ul className='flex md:gap-10 lg:gap-16'>
          <li>
            <Link href={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link href={'/Shop'}>
              Shop
            </Link>
          </li>
          <li>
            <Link href={'/About'}>
              About
            </Link>
          </li>
          <li>
            <Link href={'/Contact'}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>

      <div className='hidden md:flex md:gap-10 lg:gap-16'>
        <User className='w-4 lg:w-5' />
        <Search className='w-4 lg:w-5' />
        <Heart className='w-4 lg:w-5' />
        <div className='relative'>
          <ShoppingCart className='w-4 lg:w-5' onClick={() => {
            setShowCart(e => !e)
            }}/>
          {showCart && createPortal(<CartModal setShowCart={setShowCart}/>,document.body)}
        </div>
      </div>
    </div >

  )
}

