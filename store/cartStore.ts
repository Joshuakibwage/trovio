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
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
        cart: [],

        addToCart: (item) => {
            const existing = get().cart.find((cartItem) => cartItem.id === item.id);
            if (existing) {
            set({
                cart: get().cart.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
                ),
            });
            } else {
            set({ cart: [...get().cart, { ...item, quantity: 1 }] });
            }
        },

        removeFromCart: (id) => {
            set({ cart: get().cart.filter((item) => item.id !== id) });
        },

        increaseQuantity: (id) => {
            set({
            cart: get().cart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ),
            });
        },

        decreaseQuantity: (id) => {
            set({
            cart: get().cart
                .map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                )
                .filter((item) => item.quantity > 0),
            });
        },

        clearCart: () => set({ cart: [] }),

        get totalItems() {
            return get().cart.reduce((acc, item) => acc + item.quantity, 0);
        },

        get totalPrice() {
            return get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        }),
        { name: "cart-storage" } // persists in localStorage
    )
);
