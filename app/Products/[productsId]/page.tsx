'use client'
import Breadcrumbs from '@/app/common/Breadcrumbs';
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
    <div className='flex justify-center flex-col p-6'>   
        {/* <Breadcrumbs path={searchParams.path} item={data.name}/> */}

        <ProductPhotos/>
        <div>
            <h1 className='text-3xl'>
                {data.name}   
            </h1>
            <p className='text-[#9F9F9F]'>{data.price}$</p>
            <div className='flex'>
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
        </div>
    </div>
  )
}

