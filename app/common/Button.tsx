import React from 'react'

export default function Button({color, textColor, addStyle} : {color : string, textColor : string, addStyle?: string}) {
  return (
    <button className={`${color} duration-200 h-[74px] md:h-[54px] lg:h-[74px] w-full font-black ${textColor} md:w-56 justify-self-center self-center my-4 ${addStyle}`}>Show more</button>
  )
}
