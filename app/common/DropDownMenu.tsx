'use client'
import React, { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { FilterAction } from '@/lib/types/FilterTypes'

interface DropDownProps{
  activeOption : string | number,
  menuItems : string[] | number[],
  returnedValue?: any,
  handleChange: (e : number | string, action : FilterAction) => void,
  filterType?: FilterAction
}

export default function DropDownMenu({activeOption, menuItems, handleChange, filterType} : DropDownProps){
  const [visible, setVisible] = useState(false)
  // const [width,setWidth] = useState('h-fit')

  return (
    <div className='relative select-none z-10'>
        <button className={`bg-secondary h-fit p-2 flex justify-center items-center text-nowrap duration-300 ease-in-out z-20`} onClick={e => setVisible(e => !e)} aria-expanded={visible} aria-haspopup="true">
          {activeOption}
        <ChevronDownIcon className={`${visible ? "rotate-180" : "rotate-0 scale-100"} duration-300 ease-in-out`}/>
        </button>
        <ul role="menu" className={`${visible ? " opacity-100 translate-y-0 pointer-events-auto" : `pointer-events-none opacity-0 -translate-y-7`} text-nowrap ease-in duration-150 absolute right-0 h-fit min-w-20 p-4 mt-2 rounded-md bg-tertiary border-2 border-secondary`}>
     
          {menuItems.map((e, index) => {
            return <li key={index} onClick={() => {
             filterType && handleChange(e, filterType)
              setVisible(e => !e)
            }}>{e}</li>
          })}
        
        </ul>
    </div>
  )
}
