import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
  <footer className="flex flex-col justify-center items-center py-4 px-8 w-full">
    <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-0 w-full py-6 [&>div>ul]:flex [&>div>ul]:md:block [&>div>ul]:gap-3'>
      <div className='w-[25%] flex flex-col gap-14'>
        <h1 className='text-3xl font-extrabold'>Foruniro.</h1>
        <address className='leading-relaxed hidden md:block text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables,
        FL 33134 USA</address>
      </div>

      <div className='flex md:flex-col gap-14 justify-between'>
        <h1 className='text-[#9F9F9F]'>Links</h1>
        <ul className='flex md:block'>
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
            <Link href={'/Contacts'}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>

      <div className='flex md:flex-col gap-14 justify-between'>
      <h1 className='text-[#9F9F9F]'>Help</h1>
        <ul>
          <li>
            <Link href={'/Help'}>
              Payment Options
            </Link>
          </li>
          <li>
            <Link href={'/Help'}>
                Returns
            </Link>
          </li>
          <li>
            <Link href={'/Help'}>
              Privacy Policies
            </Link>
          </li>
        </ul>
      </div>

      <div className='flex md:flex-col gap-14 justify-between'>
        <h1 className='text-[#9F9F9F]'>Newsletter</h1>
        <div className=''>
          <input className='text-xs mr-4 border-b-2 border-gray-200 outline-none' type="email" name="" id="" placeholder='Enter Your Email Address' />
          <button type='submit'>subscribe</button>
        </div>
      </div>
    </div>

    <hr className='w-full py-4' />

    <div className='self-start'>
    2025 forniro. All right reserved
    </div>
  </footer>
  )
}

