import React from "react"

export default function CartItem({ img, name, cost, amount }: { img: string, name: string, cost: string, amount: string }) {

    return (
        <div>
            <img src={img} alt="" />
            <div>
                <h1>{name}</h1>
                <div>
                    <p>{amount}</p>
                    <p>{cost}</p>
                </div>
            </div>
        </div>
    )
}
