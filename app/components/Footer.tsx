import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
  <footer className="flex flex-col justify-center items-center py-4">
    <div className='flex justify-between'>
      <div className='w-[25%] flex flex-col gap-14'>
        <h1 className='text-3xl font-extrabold'>Foruniro.</h1>
        <address className='leading-relaxed text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables,
        FL 33134 USA</address>
      </div>

      <div className='flex flex-col gap-14'>
        <h1 className='text-[#9F9F9F]'>Links</h1>
        <ul>
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

      <div className='flex flex-col gap-14'>
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

      <div className='flex flex-col gap-14'>
        <h1 className='text-[#9F9F9F]'>Newsletter</h1>
        <div className=''>
          <input className='text-xs mx-4 border-b-2 border-gray-200' type="text" name="" id="" placeholder='Enter Your Email Address' />
          <button>subscribe</button>
        </div>
      </div>
    </div>

    <hr />

    <div>
    2025 forniro. All right reserved
    </div>
  </footer>
  )
}

