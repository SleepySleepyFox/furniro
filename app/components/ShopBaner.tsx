import React from 'react'

export default function ShopBaner() {
  return (
    <div className='bg-secondary w-full flex justify-between px-12 items-center h-[270px]'>
        <div className='flex items-center justify-center gap-2'>
            <img src="shopbaner_icon_trophy.svg" alt="" />
            <div>
                <h1 className='text-primary_h font-extrabold 2xl:text-2xl'>High Quality</h1>
                <p className='text-[#898989] 2xl:text-xl'>crafted from top materials</p>
            </div>
        </div>

        <div className='flex items-center justify-center gap-4'>
            <img src="shopbaner_icon_guarantee.svg" alt="" />
            <div>
                <h1 className='text-primary_h font-extrabold 2xl:text-2xl'>Warranty Protection</h1>
                <p className='text-[#898989] 2xl:text-xl'>Over 2 years</p>
            </div>
        </div>

        <div className='flex items-center justify-center gap-4'>
            <img src="shopbaner_icon_shipping.svg" alt="" />
            <div>
                <h1 className='text-primary_h font-extrabold 2xl:text-2xl'>Free Shipping</h1>
                <p className='text-[#898989] 2xl:text-xl'>Order over 150$</p>
            </div>
        </div>

        <div className='flex items-center justify-center gap-4'>
            <img src="shopbaner_icon_customer_support.svg" alt="" />
            <div>
                <h1 className='text-primary_h font-extrabold 2xl:text-2xl'>24 / 7 Support</h1>
                <p className='text-[#898989] 2xl:text-xl'>Dedicated support</p>
            </div>
        </div>
    </div>
  )
}
