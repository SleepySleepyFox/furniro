'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from './Product';
import data from "../../mockData.json"
import Button from '../common/Button';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { productFields } from '../types/productTypes';

export default function ProductSection({isOnHero, sliceTo} : {isOnHero : boolean, sliceTo : number}) {
  const [displayedProducts, setDisplayedProducts] = useState<productFields[]>([])
  const itemsDisplayedFilter = useSelector((state : RootState) => state.filter.itemsPerPage)
  const [itemsDisplayedAmount, setItmesDisplayedAmount] = useState(itemsDisplayedFilter)
  
  const productDataLength = Object.keys(data).length

  const getData = async (limit : number) => {
    await axios.get(`https://furniture-api.fly.dev/v1/products?limit=${limit}`)
      .then(data => {
        setDisplayedProducts(data.data.data)
        localStorage.setItem("productSection", JSON.stringify(data.data.data))
      })
    }
    
    useEffect(() => {
      getData(itemsDisplayedAmount)
    }, [itemsDisplayedAmount, itemsDisplayedFilter])
    
    const apiData = displayedProducts?.map((e, index) => {
      return <Product key={index} productData={e}/>
    })
    
    console.log('data: ', displayedProducts)
  return (
    <div className='h-fit lg+:p-9 p-4'>
      <h1 className='text-primary_h font-bold text-center text-3xl py-8'>Our Producs</h1>

      {displayedProducts ?
        <div className='flex flex-col justify-between w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-items-center lg:grid-cols-3 lg+:grid-cols-5 gap-2 place-items-center'>
          {apiData}
        </div>
        {isOnHero ?
         <Link href={'/Shop'} className='w-full flex justify-center'>
            <Button color='bg-transparent' textColor='text-primary_h' addStyle='border-primary border-solid border-2  hover:text-white hover:bg-primary' text='Show more'/>
          </Link> : 
          // Find good conditin to stop showing button befor it exedes limits of 100 items 
         <div 
          className='px-6 py-2 border-2 border-primary w-fit self-center mt-2 hover:bg-primary hover:text-white duration-300 select-none'
          onClick={() => setItmesDisplayedAmount(e => e + itemsDisplayedFilter)}>
            SHOW MORE
          </div>}
        </div> :
        <div className='flex flex-col items-center'>
          <h1>
            {'(︶︹︶)'}
          </h1>
          <p>Nothing Here</p>
        </div>
      }
    </div>
  )
}

