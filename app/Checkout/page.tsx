import React from 'react'
import ButtonAnimated from '../common/ButtonAnimated'

export default function page() {
  return (
    <div>
      <div>
        <div className='w-full flex justify-between'>
          <h1 className='text-2xl'>Product</h1>
          <h1 className='text-2xl'>Subtotal</h1>
        </div>

        <div className='w-full flex justify-between'>
          <p className='text-[#9F9F9F]'>ProductName <span className='text-black'>x1</span></p>
          <p>250.000</p>
        </div>

        <div className='w-full flex justify-between'>
          <p>Subtotal</p>
          <p>250.000</p>
        </div>

        <div className='w-full flex justify-between bp-6'>
          <p>Total</p>
          <p className='text-primary font-bold text-2xl'>250.000.00</p>
        </div>
      </div>

      <hr className='w-full' />

      <div className='py-4'>
        <p className='font-light text-[#9F9F9F]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

        <form className='text-[#9F9F9F] py-2'>
         
          <input type="radio" id='bank' name='payment' className='accent-black'/>
          <label htmlFor="bank" className='ml-2'>Direct Bank Transfer</label>
          <br />
          <input type="radio" id='cash' name='payment' className='accent-black'/>
          <label htmlFor="cash" className='ml-2'>Cash On Delivery</label>
          
        </form>

        <p className='font-light'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in <a href=""><strong className='font-bold'>our privacy policy.</strong></a></p>

        <div className='w-full flex justify-center pt-6'>
         <ButtonAnimated text={'Place order'}/>
        </div>
      </div>
    </div>
  )
}
