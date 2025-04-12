'use client'
import Breadcrumbs from '@/app/common/Breadcrumbs';
import { productFields } from '@/app/types/productTypes';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function page({params, searchParams} : {params : {productsId : string}, searchParams : {productData : string, path: string}}) {
   
    // Horrible but works, fix later!
    // try{
    //     const dataTest = JSON.parse(searchParams.productData)
    //     // if(dataTest.id != params.productsId) notFound()
    // }catch(e){  
    //     notFound()
    // }
    // const ls = localStorage.getItem("productData")
    // if(!ls) return
    // const data : productFields = JSON.parse(ls)
    const getLocalStorage = localStorage.getItem("productData")
    if(!getLocalStorage) return
    const data : productFields = JSON.parse(getLocalStorage)
    return (
    <div>   
        {/* <Breadcrumbs path={searchParams.path} item={data.name}/> */}

        <h1>
        {data.name}   
        </h1>
    </div>
  )
}

