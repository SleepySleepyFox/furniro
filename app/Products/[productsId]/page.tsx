'use client'
import Breadcrumbs from '@/app/common/Breadcrumbs';
import ProductPhotos from '@/app/components/ProductPhotos';
import { productFields } from '@/app/types/productTypes';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function page({params, searchParams} : {params : {productsId : string}, searchParams : {productData : string, path: string}}) {
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
            <p>{data.description}</p>
        </div>
    </div>
  )
}

