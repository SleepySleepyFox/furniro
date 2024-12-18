import React from 'react'

export default function Hero() {
  return (
    <div className='flex justify-center md:justify-end md:items-start lg+:items-center w-screen h-screen md:h-[717px] md:bg-hero-pattern md:bg-no-repeat md:bg-contain lg+:bg-cover lg+:h-[800px]'>
      <div className='w-screen md:w-[400px] lg:w-[600px] md:h-[300px] lg:h-[400px] md:relative md:right-14 md:top-10 lg:top-28 lg+:top-0 md:gap-2 md:text-start md:p-4 lg:p-9 bg-[#FFF3E3] md:rounded-lg  flex flex-col justify-center text-center gap-4 px-2'>
        <p className='text-sm font-semibold'>New Arrival</p>
        <h1 className=' text-[#B88E2F] font-bold text-5xl md:text-2xl lg:text-5xl'>Discover Our New Collection</h1>
        <p className='text-sm'>Our new collection offers timeless designs, blending comfort, quality, and style for every space.</p>
        <button className='bg-[#B88E2F] h-[74px] w-full font-black text-white md:w-56'>Buy Now</button>
      </div>
    </div>
  )
}
