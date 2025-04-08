import React from 'react'
import Header from '../common/Header'
import Navbar from '../components/Navbar'
import ShopBaner from '../components/ShopBaner'
import Footer from '../components/Footer'

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <div className='w-full'>
        <Navbar/>
        <Header h='Checkout' p='p' bg='bg-shop-header'/>
        <div className='flex w-full justify-between md:px-[5%] 2xl:px-[20%] py-[5%] md:gap-36 lg:gap-52'>
            <div className='[&>div]:gap-2 '>
                <h1 className='font-semibold text-3xl'>Billing details</h1>
                <div className='flex'>
                    <div className='flex flex-col'>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name='firstName' id='firstName'  className='checkout-forms'/>
                    </div>
                    
                    <div className='flex flex-col'>
                        <label htmlFor="secondName">Second Name</label>
                        <input type="text" name='secondName' id='secondName' className='checkout-forms' />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="companyName">{"Company Name (Optional)"}</label>
                    <input type="text" name='companyName' id='companyName' className='checkout-forms' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="region">Country / Region</label>
                    <input type="text" name='region' id='region' className='checkout-forms' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="city">Town / City</label>
                    <input type="text" name='city' id='city' className='checkout-forms' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="address">Street address</label>
                    <input type="text" name='address' id='address' className='checkout-forms' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="zipcode">ZIP code</label>
                    <input type="text" name='zipcode' id='zipcode' className='checkout-forms' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" name='phone' id='phone' className='checkout-forms' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' className='checkout-forms' />
                </div>
                
            </div>
            {children}
        </div>
        <ShopBaner/>
        <Footer/>
    </div>
  )
}
