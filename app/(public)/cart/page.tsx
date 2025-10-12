"use client";
import { useCartStore } from "@/store/cartStore";
import { Trash2 } from "lucide-react"

const CartPage = () => {

    const {cart, totalPrice, removeFromCart, increaseQuantity, decreaseQuantity, clearCart} = useCartStore();

    return (
        <div className="w-[80%] mx-auto py-16 px-4 shadow-2xl">
            <h1 className="text-center font-semibold text-xl md:text-2xl border-b border-neutral-200 shadow-xs">Cart</h1>
            {
                cart.length === 0 ? (
                    <p>Your Cart is empty.</p>
                ) : (
                    <>
                        <ul>
                            {
                                cart.map((item) => (
                                    <li key={item.id} className="flex justify-between items-center border-b py-4 border-neutral-200 shadow-xs">
                                        <div>
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="text-sm text-gray-500">GHS {item.price}</p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="px-2 py-1 rounded bg-gray-200 cursor-pointer"
                                            >
                                                -
                                            </button>
                                            
                                            <button 
                                                onClick={() => increaseQuantity(item.id)}
                                                className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                                            >
                                                +
                                            </button>

                                            <button
                                                onClick={() => removeFromCart(item.id)} 
                                                className="text-red-500 text-sm cursor-pointer"
                                            >
                                                <Trash2 />
                                            </button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>

                        <div className="flex justify-between items-center mt-6">
                            <h2 className="text-xl font-bold">Total: GHS {totalPrice.toFixed(2)}</h2>
                            <button
                                onClick={clearCart}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </>
                )
            }
        </div>
    )
}


export default CartPage;