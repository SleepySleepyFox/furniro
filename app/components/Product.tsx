'use client'
import React from 'react'
import Image from 'next/image'
import Button from '../common/Button'
import { ArrowLeftRight, ArrowRight, Heart, Share2 } from 'lucide-react'
import { productFields } from '../types/productTypes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { json } from 'stream/consumers'
import axios from 'axios'

export default function ({ productData }: { productData : productFields }) {
  const path = usePathname()
  const addToCart = async () => {
    console.log('item added')
    axios.post(`${process.env.NEXT_PUBLIC_FURNIRO_BACKEND}api/addCartItem`, {
      
    })
  }
  return (
    <div className='relative flex flex-col h-[446px]  border-solid bg-[#F4F5F7] border-[#F4F5F7] border-2 justify-self-stretch'>
       <Link 
       href={{pathname: `/Products/${productData.id}`}}
       className='flex flex-col justify-center items-center bg-[#0000004b] opacity-0 hover:opacity-100 duration-300 h-full w-full z-10 absolute'
       onClick={() => {
        localStorage.setItem("productData", JSON.stringify(productData))
        console.log(localStorage.getItem("productData"))
      }}
       >
        <div 
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
        }}>
          <Button 
            color='z-50 bg-white hover:bg-primary' 
            text='add to cart' 
            textColor='text-primary hover:text-white' 
            addStyle='px-8 py-3 z-50' size='h-fit w-fit'
            onClick ={() => addToCart()}
          />
        </div>
        <div className='flex gap-2 text-white'>
          <div
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }} 
          className='flex gap-2 justify-center items-center z-20'>
            <Share2 size={16}/>
            Share
          </div>
          <div 
            onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
          className='flex gap-2 justify-center items-center z-20'>
            <ArrowLeftRight size={16}/>
            Compare
          </div>
          <div 
            onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }} 
          className='flex gap-2 justify-center items-center z-20'>
            <Heart size={16}/>
            Like
          </div>
        </div>
      </Link>

      <div className='flex justify-center h-[301px] relative'>
        <img sizes='100%' alt={'productIMG'} src={`${productData.image_path}`} className='object-cover' />
      </div>

      <div className='bg-[#e6e8eb] h-1/3 p-4'>
        <h1 className='text-primary_h font-bold'>{productData.name}</h1>
        <p  className='text-primary_h font-bold'>{productData.price}$</p>
      </div>
    </div>
  )
}

