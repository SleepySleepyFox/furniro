"use client"
import { useRouter } from "next/navigation";
import ButtonAnimated from "../common/ButtonAnimated";
import CartItem from "../components/cartItems/CartItem";

export default function page() {
    const router = useRouter()
    return (
        <div className="flex flex-col gap-8 md:flex-row justify-between md:mx-12 2xl:mx-80 mt-8">
            <div className="flex w-full">
                <table className="w-full">
                    <thead className="bg-tertiary">
                        <tr className="*:py-4">
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartItem img="/slide_1.png" name="TestItem" amount="1" cost="100" subtotal={"100"} />
                    </tbody>
                </table>
            </div>
            <div className="bg-tertiary min-w-[300px] min-h-[300px] p-8 flex flex-col justify-center items-center">
                <h1>Cart Total</h1>
                <p>Subtotal:</p>
                <p>Total:</p>
                <ButtonAnimated text="Check Out" addStyle="w-full py-4 z-50 mt-auto" onClick={() => router.push("/Checkout")} />
            </div>
        </div>
    )
}

