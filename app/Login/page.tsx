'use client'
import React, { useEffect, useState } from 'react'
import Button from '../common/Button';
import Link from 'next/link';


export default function LogIn() {

  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='border-[1px] border-muted rounded-md w-[400px] h-[600px] flex flex-col justify-center'>
            <div className='flex justify-center py-6 justify-self-start'>
                <img src="/logo.svg" alt="" />
            </div>
            <form action="" className='flex flex-col p-6 gap-4'>
                <input type="email"  placeholder='Email' className='checkout-forms w-full'/>
                <input type="password"  placeholder='Password' className='checkout-forms w-full'/>
                <Button color='bg-primary' text='Log In' textColor='text-white' size='w-full p-4' addStyle='rounded-md'/>
            </form>
            <Link href={'/Register'} className='text-primary hover:underline text-center'>Don’t have an account?</Link>
        </div>
    </div>
  )
}
