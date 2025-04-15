import React from 'react'
import { productFields } from '../types/productTypes'

export default function ProductPhotos() {

  const ls = localStorage.getItem("productData")
  if(!ls) return
  const data : productFields = JSON.parse(ls)
  console.log('photoData: ', data)
  return (
    <div>
      <div>
        <img src={data.image_path} alt="" className='rounded-md'/>
      </div>
    </div>
  )
}
