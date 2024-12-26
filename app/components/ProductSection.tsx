'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from './Product';
import data from "../../mockData.json"

interface productFields {
  id?: number,
  name: string,
  price: {
    currency: string,
    currentPrice: string,
  },
  image: string,
}

export default function ProductSection() {
  const [displayedProducts, setDisplayedProducts] = useState<productFields[]>(data)
  //TODO: display categories, attach images to certian categories
  // Apply filter to the next section on click 

  // Setup sction before this one through keyword search 
  // Pay for API :(
  const getData = async () => {
    const options = {
      method: 'GET',
      url: `https://${process.env.NEXT_PUBLIC_API_HOST}/keywordSearch`,
      params: {
        keyword: 'Bathroom',
        countryCode: 'us',
        languageCode: 'en'
      },
      headers: {
        'x-rapidapi-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
        'x-rapidapi-host': `${process.env.NEXT_PUBLIC_API_HOST}`
      }
    };

    try {
      const response = await axios.request(options);
      setDisplayedProducts(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(displayedProducts)
    //getData
  }, [])

  // Display data from API
  const apiData = displayedProducts?.slice(0, 10).map(e => {
    return <Product key={e.id} productName={e.name} productCost={e.price.currentPrice} productImg={`${'/HeroBG.png'}`} />
  })

  return (
    <div className='h-fit lg+:p-9 p-4'>
      <h1 className='text-primary_h font-bold text-center text-3xl py-8'>Our Producs</h1>

      {displayedProducts ?
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-items-center lg:grid-cols-3 lg+:grid-cols-5 gap-2 place-items-center'>
          {apiData}
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

