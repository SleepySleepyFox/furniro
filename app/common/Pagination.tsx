import { useAppSelector } from '@/lib/hooks'
import { div } from 'framer-motion/client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

export default function Pagination({ItemsAmount} : {ItemsAmount : number}) {
    const ItemsPerPageSelector = useAppSelector(value => value.filter.itemsPerPage)
    const calculatePages = Array.from({length: Math.ceil(ItemsAmount / ItemsPerPageSelector)}).map((_,index) => {
        return <li key={index} className='h-10 w-10 flex justify-center items-center bg-primary text-white rounded-md'>{index + 1}</li>
    })
  return (
    <ul className='flex gap-4 w-full justify-center items-center py-4'>
        <button className='h-10 w-10 flex justify-center items-center bg-primary text-white rounded-md'>
            <ChevronLeft/>
        </button>
        {calculatePages}
        <button className='h-10 w-10 flex justify-center items-center bg-primary text-white rounded-md'>
            <ChevronRight/>
        </button>
    </ul>
  )
}
