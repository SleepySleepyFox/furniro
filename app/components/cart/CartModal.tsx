import ButtonAnimated from '@/app/common/ButtonAnimated'
import { CartModalProps } from '@/app/types/ModalPropsTypes'
import { X } from 'lucide-react'
import React from 'react'
import { motion } from "motion/react"
import ItemModal from './ItemModal'
import { productFields } from '@/app/types/productTypes'

export default function CartModal({setShowCart} : CartModalProps) {

  return (
    <motion.div
    initial={{opacity: 0}} 
    animate={{opacity : 100, transition: {duration: 0.5}}} 
    className='h-screen w-screen bg-black/50 absolute top-0 flex justify-end z-50'>
        <motion.div
        initial={{opacity: 0, y: 20}} 
        animate={{opacity : 100, y: 0, transition: {duration: 0.3}}}
        exit={{opacity: 0, transition: {duration: 0.3}}}
        className='flex flex-col bg-white h-[700px] w-[400px] p-6'>
            <div className='flex justify-between'>
                <h1>Shoping Cart</h1>
                <X onClick={() => setShowCart(e => !e)}/>
            </div>

            <div>

            </div>

            <div className='flex mt-auto gap-4 z-50'>
                <ButtonAnimated addStyle='h-fit w-full p-2' text='Cart'/>
                <ButtonAnimated addStyle='h-fit w-full p-2' text='Checkout'/>
                <ButtonAnimated addStyle='h-fit w-full p-2' text='Comparison'/>
            </div>
        </motion.div>
    </motion.div>
  )
}
