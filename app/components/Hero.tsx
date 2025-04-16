'use client'
import React from 'react'
import { motion } from "motion/react"
import Button from '../common/Button'
import Head from 'next/head'

export default function Hero() {
  return (
    <div className='bg-[#FFF3E3] md:bg-white'>
      <Head>
      <link rel="preload" href="/HeroBG.svg" as="image" />
      </Head>
      <div className='flex justify-center md:justify-end md:items-start lg+:items-center w-screen h-screen md:h-[717px] md:bg-auto md:bg-hero-pattern md:bg-no-repeat md:bg-center lg+:bg-cover lg+:h-[800px]'>
        <motion.div
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 100, x: 0, transition: {duration: 0.3}}}
          className='w-screen flex-shrink lg:min-h-[350px] md:h-[300px] md:w-[440px] lg:w-[600px] md:self-center lg:max-h-[400px] md:relative md:right-14 md:gap-2 md:text-start md:p-4 lg:p-9 bg-[#FFF3E3] md:rounded-lg  flex flex-col justify-center text-center gap-4 px-2'>
          <p className='text-sm font-semibold'>New Arrival</p>
          <h1 className=' text-[#B88E2F] font-bold text-5xl md:text-2xl lg:text-5xl'>Discover Our New Collection</h1>
          <p className='text-sm'>Our new collection offers timeless designs, blending comfort, quality, and style for every space.</p>
          <div>
          <Button color='bg-primary' textColor='text-white' text='Buy now'/>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
