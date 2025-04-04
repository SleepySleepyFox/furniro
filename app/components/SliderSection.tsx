import React from 'react'
import Button from '../common/Button'
import Slider from './Slider'
import { div, img } from 'framer-motion/client'


export default function SliderSection() {
  const products = [
    {
      p: "01 - lorem ipsum",
      h: "01 - lorem ipsum",
      img: '/slide_1.png'
    },
    {
      p: "02 - lorem ipsum",
      h: "02 - lorem ipsum",
      img: '/slide_2.png'
    },
    {
      p: "03 - lorem ipsum",
      h: "03 - lorem ipsum",
      img: '/slide_3.png'
    },
  ]
  
  return (
    <div className='flex-col-reverse justify-center md:flex-row w-full bg-secondary h-[670px] flex md:justify-between items-center overflow-hidden'>
        <div className='p-4 lg:p-6 w-full'>
            <h1 className='font-bold text-4xl'>50+ Beautiful rooms <br className='lg:hidden'/> 
            inspiration</h1>
            <p className='lg:text-2xl'>Our designer already made a lot of beautiful <br/> prototipe of rooms that inspire you</p>
            <Button color='bg-primary' textColor='text-white' text='Explore More'/>
        </div>

        <div className='hidden md:block'>
          <Slider productData={products}/>
        </div>
    </div>
  )
}
