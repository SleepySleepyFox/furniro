import React from 'react'
import Image from 'next/image'

export default function ({ productName, productCost, productImg }: { productName: string, productCost: string, productImg: string }) {
  return (
    <div className='flex flex-col h-[446px]  border-solid bg-[#F4F5F7] border-[#F4F5F7] border-2 justify-self-stretch'>

      <div className='flex justify-center h-[301px] relative'>
        <Image fill alt={'productIMG'} src={`${productImg}`} objectFit='cover' className='object-cover' />
      </div>

      <div className='bg-[#e6e8eb] h-1/3'>
        <h1>{productName}</h1>
        <p>{productCost}</p>
      </div>
    </div>
  )
}

