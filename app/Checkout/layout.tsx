import React from 'react'
import Header from '../common/Header'
import Navbar from '../components/Navbar'

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <div>
        <Navbar/>
        <Header h='Checkout' p='p' bg='bg-shop-header'/>
        <div className='flex w-full justify-between'>
            <div>
                <h1>Billing details</h1>
                <div className='flex'>
                    <div className='flex flex-col'>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name='firstName'  className='border-2 border-primary_h rounded-md'/>
                    </div>
                    
                    <div className='flex flex-col'>
                        <label htmlFor="secondName">First Name</label>
                        <input type="text" name='secondName' className='border-2 border-primary_h rounded-md' />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="companyName">{"Company Name (Optional)"}</label>
                    <input type="text" name='companyName' className='border-2 border-primary_h rounded-md' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="region">Country / Region</label>
                    <input type="text" name='region' className='border-2 border-primary_h rounded-md' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="city">Town / City</label>
                    <input type="text" name='city' className='border-2 border-primary_h rounded-md' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="addres">Street address</label>
                    <input type="text" name='addres' className='border-2 border-primary_h rounded-md' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="zipcode">ZIP code</label>
                    <input type="text" name='zipcode' className='border-2 border-primary_h rounded-md' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name='phone' className='border-2 border-primary_h rounded-md' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' className='border-2 border-primary_h rounded-md' />
                </div>
                
            </div>
            {children}
        </div>
    </div>
  )
}
