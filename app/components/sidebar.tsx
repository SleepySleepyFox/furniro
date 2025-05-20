import React, { Dispatch, SetStateAction, useState } from "react"
import { createPortal } from "react-dom";
import CartModal from "./cartItems/CartModal";
import Link from "next/link";
import { X } from "lucide-react";
export default function Sidebar({ sidebarState, setSidebarState }: { sidebarState: boolean, setSidebarState: Dispatch<SetStateAction<boolean>> }) {
    const [showCart, setShowCart] = useState(false)
    return (
        <>
            {
                <div className={`fixed overflow-clip z-10 left-0 top-0 bg-gray-200 md:hidden h-screen duration-300 ${sidebarState ? "animate-slideIn w-1/2 sm+:w-1/3" : "animate-slideOut w-0"}`}>
                    <X className='m-4' onClick={() => setSidebarState(e => !e)} />


                    <ul className='flex flex-col gap-7  p-4 text-center'>
                        <li>
                            <Link href={"/"}></Link>
                        </li>
                        <li>
                            <Link href={"/Shop"}>Shop</Link>
                        </li>
                        <li>
                            <Link href={"/About"}>About</Link>
                        </li>
                        <li>
                            <Link href={"/Contact"}>Contacts</Link>
                        </li>
                        <li>Profile</li>
                        <li>
                            <Link href={"/Cart"}>Cart</Link>
                        </li>
                        <li>Liked</li>
                        <li>Search</li>
                    </ul>
                </div>
            }
            {showCart && createPortal(<CartModal setShowCart={setShowCart} />, document.body)}
        </>
    )
}

