'use client'
import React, { use, useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Slider({productData} : {productData: {h: string, p: string, img: string}[]}) {
  const [slides, setSlides] = useState([...productData, ...productData])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loop, setLoop] = useState(slides.length - 4)
  const slideRef = useRef<HTMLDivElement | null>(null)
  const continerRef = useRef(null)

  // useEffect(() => {
  //   console.log('stats:')
  //   console.log('slides lenth: ', slides.length)
  //   console.log('current slide: ', currentSlide)
  //   console.log('loop: ', loop)
  // },[currentSlide])

  const nextSlide = () => {
      setCurrentSlide(e => e + 1)   
      if(currentSlide === loop){
        // console.log('add loop')
        setLoop((slides.length - 2))
        // console.log('moved out of view: ', slides)
        // slides.push(...productData)
        setSlides(e => [...e, ...productData])
      }
      console.log(slideRef.current?.offsetWidth)
  }

  const displayProducts =  slides.map((e, index) => {
    if(currentSlide === index) console.log(index)
    return(
   
    
    //   <img
    //   key={index}
    //   src={`${e.img}`} 
    //   ref={slideRef} 
    //   className={`duration-300 ease-out w-[208px] h-[300px] object-cover ${
    //     currentSlide === index ? 'h-[500px] w-[229px]' : 'h-[300px] w-[229px]'
    //   }`}
    //   style={{
    //     transform: `translateX(-${
    //       slideRef.current?.width &&(slideRef.current?.width + 8) * currentSlide}px)`,
    //   }}
    // />

    <div
    key={index}
    ref={slideRef}
    className={`flex justify-start items-end duration-300 ease-out min-w-[208px] h-[300px] object-cover bg-no-repeat ${
        currentSlide === index ? 'h-[500px] min-w-[300px]' : 'h-[300px] w-[229px]'
      }`}
    style={{
      backgroundImage: `url(${e.img})`,
      transform: `translateX(-${
              slideRef.current?.offsetWidth &&(slideRef.current?.offsetWidth + 8) * currentSlide}px)`,
    }}
    >
      {index === currentSlide && <div className='ml-6 mb-12 flex'>
       <div className={`opacity-0 duration-500 p-4 bg-white w-fit  ${index === currentSlide && 'opacity-60'}`}>
       <p className={`opacity-0 duration-300 ${index === currentSlide && 'opacity-100'}`}>
          {e.p}
        </p>
        <h1 className={`opacity-0 duration-300 ease-in font-extrabold ${index === currentSlide && 'opacity-100'}`}>
          {e.h}
        </h1>
       </div>
       <div className='bg-primary w-fit h-fit p-2 self-end'>
          <Link href={'/Roomshowcase'}>
            <ArrowRight color='white'/>
          </Link>
        </div>
      </div>}
    </div>

   
    
    )
  })
  return (
    <div className='w-full md:w-[400px] lg:w-[600px] h-full overflow-hidden flex flex-col' ref={continerRef}>
      <div className='flex overflow-clip h-[500px] gap-2 relative'
      style={{
        WebkitMaskImage: 'linear-gradient(90deg, transparent, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, transparent)',
        maskImage: 'linear-gradient(90deg, transparent, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 80%, transparent)',
      }}>
      <div onClick={() => nextSlide()} className='hidden md:flex justify-center items-center bg-white absolute ml-[50px] h-8 w-8 z-10 top-36 md:left-[75%] lg:left-[80%] rounded-full'>
        <ChevronRight/>
      </div>
        {displayProducts}
      </div>
    </div>
  )
}
