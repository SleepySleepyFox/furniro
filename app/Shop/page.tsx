'use client'
import React, { useEffect, useRef, useState } from 'react'
import ProductSection from '../components/ProductSection'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { ItemsPerPage } from '@/lib/features/filters/filterSlices';
import Pagination from '../common/Pagination';
export default function page() {
  // Store is set to 8 now and re-renders ProductSection 
  const itemsPerPage = useSelector((state: RootState) => state.filter.itemsPerPage);
  const [slice, setSlice] = useState(16)
  useEffect(() => {
    setSlice(e => itemsPerPage)
    console.log(itemsPerPage)
  },[itemsPerPage])


  return (
    <div>
      <ProductSection isOnHero={false} sliceTo={slice}/>
    </div>
  )
}
