import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

  return (
    <div className='flex w-fit p-4 rounded-lg gap-7 border-[1px] border-[#9F9F9F]'>
        <button onClick={() => setCount(e => e + 1)}>+</button>
        <div className='w-4 h-4'>
            {count}
        </div>
        <button onClick={() => count >=  1 && setCount(e => e - 1)}>-</button>
    </div>
  )
}
