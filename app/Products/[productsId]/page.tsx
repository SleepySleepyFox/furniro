'use client'
import Breadcrumbs from '@/app/common/Breadcrumbs';
import ButtonAnimated from '@/app/common/ButtonAnimated';
import Counter from '@/app/components/Counter';
import ProductPhotos from '@/app/components/ProductPhotos';
import { productFields } from '@/app/types/productTypes';
import { Star } from 'lucide-react';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function page({params, searchParams} : {params : {productsId : string}, searchParams : {productData : string, path: string}}) {
    const [rate, setRate] = useState(0)
    const [displayedRate, setDisplayedRate] = useState(0)
    const getLocalStorage = localStorage.getItem("productData")
    if(!getLocalStorage) return
    const data : productFields = JSON.parse(getLocalStorage)
    console.log(data)
    return (
    <div className='px-6 py-6 md:px-10'>   
        {/* <Breadcrumbs path={searchParams.path} item={data.name}/> */}

       <div className='flex justify-center flex-col lg:flex-row md:justify-between md:gap-10'>
       <div className='py-6 md:pb-0 md:min-w-[553px]'>
            <ProductPhotos/>
            </div>

            <div className='min-w-[200px]'>
                <h1 className='text-3xl'>
                    {data.name}   
                </h1>
                <p className='text-[#9F9F9F]'>{data.price}$</p>
                <div className='flex py-4'>
                    <Star className={`h-5 w-5 ${displayedRate >= 1 && 'fill-yellow-300'}`} 
                        onClick={() => setRate(1)} 
                        onMouseOver={() => setDisplayedRate(1)} 
                        onMouseLeave={() => setDisplayedRate(0)}/>
                    <Star className={`h-5 w-5 ${displayedRate >= 2 && 'fill-yellow-300'}`} 
                        onClick={() => setRate(2)} 
                        onMouseOver={() => setDisplayedRate(2)} 
                        onMouseLeave={() => setDisplayedRate(0)}/>
                    <Star className={`h-5 w-5 ${displayedRate >= 3 && 'fill-yellow-300'}`} 
                        onClick={() => setRate(3)} 
                        onMouseOver={() => setDisplayedRate(3)} 
                        onMouseLeave={() => setDisplayedRate(0)}/>
                    <Star className={`h-5 w-5 ${displayedRate >= 4 && 'fill-yellow-300'}`} 
                        onClick={() => setRate(4)} 
                        onMouseOver={() => setDisplayedRate(4)} 
                        onMouseLeave={() => setDisplayedRate(0)}/>
                    <Star className={`h-5 w-5 ${displayedRate >= 5 && 'fill-yellow-300'}`} 
                        onClick={() => setRate(5)} 
                        onMouseOver={() => setDisplayedRate(5)} 
                        onMouseLeave={() => setDisplayedRate(0)}/>
                </div>
                <p>{data.description}</p>
                <div className='flex gap-6 py-4 md:justify-around'>
                    <Counter/>
                    <ButtonAnimated text='Add To Cart'/>
                    <ButtonAnimated text='+ Compare' alertText='Work in progress sry....'/>
                </div>

                <hr className='pb-4' />

                <div className='text-[#9F9F9F]'>
                    <p className='capitalize'>Category: {data.category}</p>
                    {data.wood_type && <p className='capitalize'>Wood Type: {data.wood_type}</p>}
                    <div>
                        <p>Dimensions:</p>
                        <ul className=''>
                            <li>Height: {data.dimensions.height}cm</li>
                            <li>Width: {data.dimensions.width}cm</li>
                            <li>Depth: {data.dimensions.depth}cm</li>
                        </ul>
                    </div>

                </div>
            </div>
       </div>
    </div>
  )
}

