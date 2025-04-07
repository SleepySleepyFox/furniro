import React from 'react'
import Header from '../common/Header'
import Navbar from '../components/Navbar'

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <div>
        <Navbar/>
        <Header h='Checkout' p='p' bg='bg-shop-header'/>
        <div className='flex w-full justify-between 2xl:px-[20%]'>
            <div className='[&>div]:gap-2 '>
                <h1>Billing details</h1>
                <div className='flex'>
                    <div className='flex flex-col'>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name='firstName'  className='checkout-forms'/>
                    </div>
                    
                    <div className='flex flex-col'>
                        <label htmlFor="secondName">First Name</label>
                        <input type="text" name='secondName' className='checkout-forms' />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="companyName">{"Company Name (Optional)"}</label>
                    <input type="text" name='companyName' className='checkout-forms' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="region">Country / Region</label>
                    <input type="text" name='region' className='checkout-forms' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="city">Town / City</label>
                    <input type="text" name='city' className='checkout-forms' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="addres">Street address</label>
                    <input type="text" name='addres' className='checkout-forms' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="zipcode">ZIP code</label>
                    <input type="text" name='zipcode' className='checkout-forms' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name='phone' className='checkout-forms' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' className='checkout-forms' />
                </div>
                
            </div>
            {children}
        </div>
    </div>
  )
}
