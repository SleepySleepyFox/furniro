import Breadcrumbs from '@/app/common/Breadcrumbs';
import { productFields } from '@/app/types/productTypes';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function page({params, searchParams} : {params : {productsId : string}, searchParams : {productData : string, path: string}}) {
   
    // Horrible but works, fix later!
    try{
        const dataTest = JSON.parse(searchParams.productData)
        if(dataTest.id != params.productsId) notFound()
    }catch(e){  
        notFound()
    }
    const data : productFields = JSON.parse(searchParams.productData)
    return (
    <div>   
        <Breadcrumbs path={searchParams.path} item={data.name}/>
        {searchParams.productData}
    </div>
  )
}

