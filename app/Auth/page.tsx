'use client'
import React, { useState } from 'react'
import ButtonAnimated from '../common/ButtonAnimated'
import Button from '../common/Button';
import { UserData } from '../types/UserData';
import axios from 'axios';
import { p } from 'framer-motion/client';

export default function page() {
    const [FirstName, setFirstName] = useState('')
    const [SecondName, setSecondName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [RepeatPassword, setRepeatPassword] = useState('')
    const [error, setError] = useState<Error | null>(null)

    const sendData = () => {
        if(!process.env.NEXT_PUBLIC_FURNIRO_BACKEND) return 

                axios.post(`${process.env.NEXT_PUBLIC_FURNIRO_BACKEND}api/register`,{
                    FirstName: FirstName,
                    SecondName: SecondName,
                    Email: Email,
                    Password: Password
                }).catch(err => {
                    if(err){
                        console.log(err)
                        if(err.status == 400){
                            setError(err)
                        }
                    }
                })
    }


  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='border-[1px] border-muted rounded-md w-[400px] h-[600px] flex flex-col justify-center'>
            <div className='flex justify-center py-6 justify-self-start'>
                <img src="/logo.svg" alt="" />
            </div>
            <form action="" className='flex flex-col p-6 gap-4'>
                <input type="text"  placeholder='First Name' className='checkout-forms w-full' onChange={(e) => setFirstName(e.target.value)}/>
                <input type="text"  placeholder='Second Name' className='checkout-forms w-full' onChange={(e) => setSecondName(e.target.value)}/>
                <input type="email"  placeholder='Email' className={`${error == null ? 'checkout-forms' : 'checkout-forms-not-valid'} w-full`} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' className='checkout-forms w-full'  onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" placeholder='Repeat Passwprd' className='checkout-forms w-full' onChange={(e) => setRepeatPassword(e.target.value)}/>
                <Button color='bg-primary' text='Register' textColor='text-white' size='w-full p-4' addStyle='rounded-md' onClick={sendData}/>
            </form>
        </div>
    </div>
  )
}
