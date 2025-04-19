'use client'
import React, { useState } from 'react'
import ButtonAnimated from '../common/ButtonAnimated'
import Button from '../common/Button';

export default function page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='border-[1px] border-muted rounded-md w-[400px] h-[600px] flex flex-col justify-center'>
            <div className='flex justify-center py-6 justify-self-start'>
                <img src="/logo.svg" alt="" />
            </div>
            <form action="" className='flex flex-col p-6 gap-4'>
                <input type="email"  placeholder='Email' className='checkout-forms w-full' onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' className='checkout-forms w-full'  onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" placeholder='Repeat Passwprd' className='checkout-forms w-full' onChange={(e) => setRepeatPassword(e.target.value)}/>
                <Button color='bg-primary' text='Register' textColor='text-white' size='w-full p-4' addStyle='rounded-md'/>
            </form>
        </div>
    </div>
  )
}
