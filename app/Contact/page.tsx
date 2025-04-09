import { Clock, MapPin, Phone } from 'lucide-react'
import React from 'react'
import Button from '../common/Button'

export default function page() {
  return (
    <div className='md:px-[5%] 2xl:px-80'>
        <div className='flex flex-col justify-center items-center py-24'>
            <h1 className='text-4xl font-semibold'>Get In Touch With Us</h1>
            <p className='text-sm text-[#9F9F9F] text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us <br/> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        <div className='flex flex-col md:flex-row justify-between w-full'>
            <div className='w-full flex justify-center md:justify-start md:flex-col gap-4 text-sm md:text-base px-12'>
                <div className='flex gap-4 flex-col md:flex-row items-center md:items-start text-center md:text-left'>
                    <MapPin/>
                    <div className='max-w-[200px]'>
                        <h1>Address</h1>
                        <address>
                        236 5th SE Avenue, New York NY10000, United States
                        </address>
                    </div>
                </div>

                <div className='flex gap-4 flex-col md:flex-row items-center md:items-start text-center md:text-left'>
                    <Phone/>
                    <div className='max-w-[200px]'>
                        <h1>Phone</h1>
                        <p>Mobile: +(84) 546-6789</p>
                        <p>Hotline: +(84) 456-6789</p>
                    </div>
                </div>

                <div className='flex gap-4 flex-col md:flex-row items-center md:items-start text-center md:text-left'>
                    <Clock/>
                    <div className='max-w-[200px]'>
                        <h1>Working Time</h1>
                        <p>Monday-Friday: 9:00 - 22:00</p>
                        <p>Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>
            </div>

            <form className='w-full flex flex-col justify-center px-12 pb-12'>
                <div className='flex flex-col'>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name='name' id='name' className='checkout-forms' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="Name">Email address</label>
                    <input type="email" name='email' id='email' className='checkout-forms' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name='subject' id='subject' className='checkout-forms' />
                </div>

                <div className='flex flex-col h-'>
                    <label htmlFor="message">Message</label>
                    <textarea name='message' id='message' className='checkout-forms resize-none min-h-32' />
                </div>
                <Button color='bg-primary' text='Submit' textColor='text-white' addStyle='rounded-md md:self-start'/>
            </form>
        </div>
    </div>
  )
}
