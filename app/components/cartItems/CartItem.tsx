"use client"
import Image from "next/image"
import React from "react"

export default function CartItem({ img, name, cost, amount, subtotal }: { img: string, name: string, cost: string | number, amount: string | number, subtotal: string | number }) {

    return (
        <tr>
            <td className="rounded-md" align="center">
                <Image src={img} alt="" width={96} height={96} className="rounded-md" />
            </td>
            <td align="center">{name}</td>
            <td align="center">{amount}</td>
            <td align="center">{cost}</td>
            <td align="center">{subtotal}</td>
        </tr>
    )
}
