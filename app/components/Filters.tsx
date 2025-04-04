'use client'
import React, { useState } from 'react'
import DropDownMenu from '../common/DropDownMenu'
import { SlidersHorizontal } from 'lucide-react'
import { LayoutGrid } from 'lucide-react'
import { GalleryVertical } from 'lucide-react'
import DropDownWrap from '../common/DropDownWrap'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { ItemsPerPage } from '@/lib/features/filters/filterSlices'
import { useFilter } from '../hooks/useFilter'


export default function Filters() {    
  const setItemPerPage = useFilter()
  return (
    <div className='w-full flex justify-between items-center xl:object-contain h-fit py-2 bg-tertiary px-6'>
        <div className='flex justify-start items-center gap-2'>
          <div className='flex gap-2 justify-center items-center'>
            <DropDownWrap menuItems={['option 1', 'option 2', 'option 3']}>
              <SlidersHorizontal size={16}/>
              <p>Filters</p>
            </DropDownWrap>
          </div>

          <div>
            <LayoutGrid size={16}/>
          </div>

          <div>
            <GalleryVertical size={16}/>
          </div>
        </div>
        <div className='flex gap-2'>
            <div className='flex justify-center items-center w-full'>
                <p>Show:</p>
                <DropDownMenu activeOption={setItemPerPage.itemsPerPageSelector} menuItems={[2,8,10,16, 32]} handleChange={setItemPerPage.handleChange} filterType='ItemsPerPage'/>
            </div>
            <div className='flex justify-center items-center'>
                <p className='text-nowrap'>Sort By:</p>
                <DropDownMenu activeOption={setItemPerPage.sortBySelector} menuItems={["Option 1", "Option 2", "Option 3"]} handleChange={setItemPerPage.handleChange} filterType='SortBy'/>
            </div>
        </div>
    </div>
  )
}
