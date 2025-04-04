'use client'
import React, { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'

export default function DropDownWrap({children, menuItems} : {children : React.ReactNode, menuItems : string[]}) {
    const [visible, setVisible] = useState(false)
  return (
      <div className='relative select-none'>
          <button className='gap-2 h-fit w-fit p-2 flex justify-center items-center' onClick={e => setVisible(e => !e)} aria-expanded={visible} aria-haspopup="true">
            {children}
          </button>
          <ul role="menu" className={`${visible ? " opacity-100 translate-y-0 pointer-events-auto" : `pointer-events-none opacity-0 -translate-y-7`} text-nowrap ease-in duration-150 absolute right-0 h-fit min-w-20 p-4 mt-2 rounded-md bg-tertiary border-2 border-secondary`}>
       
            {menuItems.map((e, index) => {
              return <li key={index} className=''>{e}</li>
            })}
          
          </ul>
      </div>
  )
}
