import React, { Dispatch, SetStateAction } from 'react'
import { Search, X } from 'lucide-react';
export default function Sidebar({ sidebarState, setSidebarState }: { sidebarState: boolean, setSidebarState: Dispatch<SetStateAction<boolean>> }) {
  return (
    <>
      {
        <div className={`fixed overflow-clip left-0 top-0 bg-gray-200 md:hidden h-screen duration-300 ${sidebarState ? 'animate-slideIn w-1/2 sm+:w-1/3' : 'animate-slideOut w-0'}`}>
          <X className='m-4' onClick={() => setSidebarState(e => !e)} />


          <ul className='flex flex-col gap-7  p-4 text-center'>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contacts</li>
            <li>Profile</li>
            <li>Cart</li>
            <li>Liked</li>
            <li>Search</li>
          </ul>
        </div>
      }
    </>
  )
}

