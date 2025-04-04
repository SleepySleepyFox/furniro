import React from 'react'

export default function Footer() {
  return (
  <footer className="flex flex-col justify-center items-center py-4">
      <hr className="h-1 w-full py-2"/>
      <div className="">
      <img src="/logo.svg" alt="" className="w-28"/>
      </div>
      
      <div className="flex gap-2">
        <p className="hidden md:block">Link</p>
        <a href="/Shop">Shop</a>
        <a className="">About</a>
        <a>Contact</a>
      </div>

      <div className="flex gap-2">
        <p className="hidden md:block">Link</p>
        <a>Payment Options</a>
        <a className="">Returns</a>
        <a>Privacy Policies</a>
      </div>
    <hr className="hidden md:block"/>
  </footer>
  )
}

