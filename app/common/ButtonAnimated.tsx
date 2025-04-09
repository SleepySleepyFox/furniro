'use client'
import React, { useState } from 'react'

export default function ButtonAnimated() {
// TODO: Animation (GSAP?)
  return (
    <button 
    className='h-[64px] w-[318px] border-[1px] border-black rounded-xl relative overflow-clip bg-white hover:bg-black hover:text-white duration-300'>
        Place order
    </button>
  )
}
