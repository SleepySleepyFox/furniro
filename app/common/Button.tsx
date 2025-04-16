import React from 'react'

export default function Button({color, textColor, addStyle, text, size, onClick} : {color : string, textColor : string, addStyle?: string, text: string, size?: string, onClick? : () => void}) {
  const defaultSize = 'h-[74px] md:h-[54px] lg:h-[74px] w-full md:w-56'
  return (
    <button onClick={() => onClick && onClick()} className={`${color} duration-200 font-black ${textColor} justify-self-center self-center my-4 ${addStyle} ${size ? size : defaultSize}`}>{text}</button>
  )
}
