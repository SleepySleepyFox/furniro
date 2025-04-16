'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

export default function ButtonAnimated({text, alertText, addStyle} :  {text : string, alertText? : string, addStyle ? : string}) {
const divRef = useRef(null)
const buttonRef = useRef<HTMLButtonElement>(null)

console.log(buttonRef)

const animationIn = (e: React.MouseEvent) => {
  const bounds = buttonRef.current?.getBoundingClientRect()
  if(!bounds) return
  const posX = e.clientX - bounds.left 
  const posY = e.clientY - bounds.bottom 
  const tl = gsap.timeline()
  tl.to(divRef.current, {scale: 100, ease:"power3.inOut"}, 0.01)
  tl.to(buttonRef.current, {color: "#FFF", immediateRender: true}, 0.01)
  tl.to(divRef.current, {x: posX, y: posY}, 0)
}

const animationOut = (e: React.MouseEvent) => {
  const bounds = buttonRef.current?.getBoundingClientRect()
  if(!bounds) return
  const posX = e.clientX - bounds.left
  const posY = e.clientY - bounds.bottom

  const tl = gsap.timeline()
  tl.to(divRef.current, {scale: 0}, 0.01)
  tl.to(divRef.current, {x: posX, y: posY}, 0.01)

  tl.to(buttonRef.current, {color: "#000", immediateRender: true})
}
const posAdjust = (e: React.MouseEvent) => {
  const bounds = buttonRef.current?.getBoundingClientRect()
  if(!bounds) return
  const posX = e.clientX - bounds.left
  const posY = e.clientY - bounds.bottom 

  const tl = gsap.timeline()
  tl.to(divRef.current, {x: posX, y: posY}, 0.01)

}

  return (
    <button 
    ref={buttonRef}
    onMouseEnter={(e) => animationIn(e)}
    onMouseLeave={(e) => animationOut(e)}
    onMouseMove={(e) => posAdjust(e)}
    onClick={() => {alertText && alert(alertText)}}
    className={`${addStyle != undefined ? addStyle : "h-[64px] w-[318px]"} border-[1px] border-black rounded-xl relative text-black  overflow-clip`}>  
        {text}
       
        <div ref={divRef} className='w-16 h-16 scale-0 rounded-full bg-black absolute divRef aspect-square -z-10'></div>
    </button>
  )
}
