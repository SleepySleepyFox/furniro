import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

  return (
    <div className='flex justify-around items-center [&>*]:w-[25px] md:[&>*]:w-[50px] p-4 rounded-lg gap-7 border-[1px] border-[#9F9F9F]'>
        <button className='' onClick={() => setCount(e => e + 1)}>+</button>
        <div className=' text-center'>
            {count}
        </div>
        <button className='' onClick={() => count >=  1 && setCount(e => e - 1)}>-</button>
    </div>
  )
}
