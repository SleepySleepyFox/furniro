import React from 'react'
import Image from 'next/image'
import Button from '../common/Button'
import { ArrowLeftRight, Heart, Share2 } from 'lucide-react'

export default function ({ productName, productCost, productImg }: { productName: string, productCost: string | number, productImg: string }) {
  return (
    <div 
    className='relative flex flex-col h-[446px]  border-solid bg-[#F4F5F7] border-[#F4F5F7] border-2 justify-self-stretch'>
       <div className='flex flex-col justify-center items-center bg-[#0000004b] opacity-0 hover:opacity-100 duration-300 h-full w-full z-10 absolute'>
        <Button color='bg-white hover:bg-primary' text='add to cart' textColor='text-primary hover:text-white' addStyle='px-8 py-3' size='h-fit w-fit'/>
        <div className='flex gap-2 text-white'>
          <div className='flex gap-2 justify-center items-center'>
            <Share2 size={16}/>
            Share
          </div>
          <div className='flex gap-2 justify-center items-center'>
            <ArrowLeftRight size={16}/>
            Compare
          </div>
          <div className='flex gap-2 justify-center items-center'>
            <Heart size={16}/>
            Like
          </div>
        </div>
      </div>

      <div className='flex justify-center h-[301px] relative'>
        <img sizes='100%' alt={'productIMG'} src={`${productImg}`} className='object-cover' />
      </div>

      <div className='bg-[#e6e8eb] h-1/3 p-4'>
        <h1 className='text-primary_h font-bold'>{productName}</h1>
        <p  className='text-primary_h font-bold'>{productCost}$</p>
      </div>
    </div>
  )
}

