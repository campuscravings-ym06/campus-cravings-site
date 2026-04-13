"use client"

import { createContext, useState, useContext, useMemo } from "react";

const CartContext = createContext();

function getNumberPrice(price) {
    if (typeof price === "number") {
        return price
    }

    const normalized = Number.parseFloat(String(price).replace(/[^\d.]/g, ""))
    return Number.isNaN(normalized) ? 0 : normalized
}

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([])
    const [cartQuantities, setCartQuantities] = useState({})
    const [isCartOpen, setIsCartOpen] = useState(false)

    const addToCart = (item) => {
            const existing = cartItems.find((cartItem) => cartItem.name === item.name)
            setCartItems((prev) => {
                if (existing) {
                    return prev.map((cartItem) =>
                        cartItem.name === item.name
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    )
                }
    
                return [...prev, { ...item, quantity: 1 }]
            })
    
            setCartQuantities((prev => {
                const updated = { ...prev };
                if (existing) updated[item.name] += 1;
                else updated[item.name] = 1;
                return updated;
            }))
    
            setIsCartOpen(true)
        }
    
        const updateQuantity = (name, amount) => {
            setCartItems((prev) =>
                prev
                    .map((item) =>
                        item.name === name ? { ...item, quantity: item.quantity + amount } : item
                    )
                    .filter((item) => item.quantity > 0)
            )
            setCartQuantities((prev) => {
                const updated = { ...prev };
    
                updated[name] = (updated[name] || 0) + amount;
    
                if (updated[name] <= 0) {
                    delete updated[name];
                }
    
                return updated;
            });
        }

        const cartTotal = useMemo(() => {
            return cartItems.reduce((total, item) => {
                return total + getNumberPrice(item.price) * item.quantity
            }, 0)
        }, [cartItems])

        return <CartContext.Provider value={{cartItems, addToCart, cartQuantities, updateQuantity, cartTotal, cartQuantities, setIsCartOpen, isCartOpen}}>
            {children}
        </CartContext.Provider>
}

export const useCart = () => useContext(CartContext);