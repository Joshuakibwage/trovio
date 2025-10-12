import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image?: string;
    quantity: number;
}

interface CartState {
    cart: CartItem[];
    totalItems: number;
    totalPrice: number;
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],
            totalItems: 0,
            totalPrice: 0,

        addToCart: (item) => {
            const existing = get().cart.find((cartItem) => cartItem.id === item.id);
            let updatedCart;
            if (existing) {
                updatedCart = get().cart.map((cartItem) =>
                cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            );
            } else {
                updatedCart = [...get().cart, { ...item, quantity: 1 }];
            }

            set({
                cart: updatedCart,
                totalItems: updatedCart.reduce((acc, i) => acc + i.quantity, 0),
                totalPrice: updatedCart.reduce((acc, i) => acc + i.price * i.quantity, 0),
            });
        },

        removeFromCart: (id) => {
            const updatedCart = get().cart.filter((item) => item.id !== id);
            set({
                cart: updatedCart,
                totalItems: updatedCart.reduce((acc, i) => acc + i.quantity, 0),
                totalPrice: updatedCart.reduce((acc, i) => acc + i.price * i.quantity, 0),
            });
        },

        increaseQuantity: (id) => {
            const updatedCart = get().cart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
            set({
                cart: updatedCart,
                totalItems: updatedCart.reduce((acc, i) => acc + i.quantity, 0),
                totalPrice: updatedCart.reduce((acc, i) => acc + i.price * i.quantity, 0),
            });
        },

        decreaseQuantity: (id) => {
            const updatedCart = get()
            .cart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0);
            set({
                cart: updatedCart,
                totalItems: updatedCart.reduce((acc, i) => acc + i.quantity, 0),
                totalPrice: updatedCart.reduce((acc, i) => acc + i.price * i.quantity, 0),
            });
        },

        clearCart: () => set({ cart: [], totalItems: 0, totalPrice: 0 }),
        }),
        { name: "cart-storage" }
    )
);
