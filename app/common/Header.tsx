'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Header({logo,h, bg}:{logo?: string, h: string, bg: string}) {
  const pathName = usePathname()

  const breadcrumb = pathName
    .split('/')
    .filter(Boolean) // Remove empty strings
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize words
    .join(' > ')

  return (
  <header className={`${bg} w-full h-fit lg:bg-cover py-20 bg-center bg-no-repeat flex flex-col justify-center items-center`}>
    {logo && <img src={`${logo}`}/>}
    <h1>{h}</h1>
    <p><strong>Home</strong> {'>'} {breadcrumb}</p>
  </header>
  )
}
