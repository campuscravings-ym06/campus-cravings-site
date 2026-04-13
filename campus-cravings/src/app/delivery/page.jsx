"use client"

import Script from "next/script"
import DeliveryLocation from "../../components/DeliveryLocation/DeliveryLocation"

import { useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import DeliveryItem from "../../components/DeliveryItem/DeliveryItem"
import { menuItems } from "../../js/menuItems"
import {useCart} from "../../contexts/cartContext"
import "./page.css"
import Link from "next/link"


export default function Delivery() {
    const searchParams = useSearchParams()
    const [canOrder, setCanOrder] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All")

    const {updateQuantity, addToCart, cartTotal, cartQuantities, cartItems, isCartOpen, setIsCartOpen} = useCart()

    useEffect(() => {
        const cartAction = searchParams.get("cart")

        if (cartAction === "open") {
            setIsCartOpen(true)
        }
        if (cartAction === "toggle") {
            setIsCartOpen((prev) => !prev)
        }
    }, [searchParams])


    const categories = ["All", ...Object.keys(menuItems)]

    const filteredMenuItems = useMemo(() => {
        if (selectedCategory === "All") return menuItems
        return { [selectedCategory]: menuItems[selectedCategory] }
    }, [selectedCategory])

    return (
        <div>
            <div className="delivery-page">
                <aside className="category-sidebar">
                    <nav className="category-nav">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat === "MacNCheese" ? "Mac N' Cheese" : cat}
                            </button>
                        ))}
                    </nav>
                </aside>

                <div className="delivery-content">
                    {Object.entries(filteredMenuItems).map(([category, items]) => (
                        <section key={category} className="delivery-category">
                            {category === "MacNCheese" ? 
                                <h2 className="food-category">Mac N' Cheese</h2> :
                                <h2 className="food-category">{category}</h2>
                                }
                            <div className="delivery-row">
                                {items.map((item) => (
                                    <DeliveryItem
                                        key={item.name}
                                        name={item.name}
                                        image={item.image}
                                        price={item.price}
                                        quantity={cartQuantities[item.name]}
                                        onAdd={() => addToCart(item)}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <div
                    className={`cart-backdrop ${isCartOpen ? "is-open" : ""}`}
                    onClick={() => setIsCartOpen(false)}
                />

                <aside className={`cart-drawer ${isCartOpen ? "is-open" : ""}`}>
                    <div className="cart-header">
                        <h3>Your Order</h3>
                        <button
                            type="button"
                            className="cart-close"
                            onClick={() => setIsCartOpen(false)}
                            aria-label="Close cart"
                        >
                            x
                        </button>
                    </div>

                    {cartItems.length === 0 ? (
                        <p className="cart-empty">Select an item to add it to your cart.</p>
                    ) : (
                        <>
                            <div className="cart-list">
                                {cartItems.map((item) => (
                                    <div key={item.name} className="cart-item">
                                        <div>
                                            <div className="cart-item-name">{item.name}</div>
                                            <div className="cart-item-price">{item.price}</div>
                                        </div>
                                        <div className="qty-controls">
                                            <button type="button" onClick={() => updateQuantity(item.name, -1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button type="button" onClick={() => updateQuantity(item.name, 1)}>+</button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="cart-footer">
                                <div className="cart-location-wrapper">
                                    <Script
                                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBsiEG1Ah0m4RqZbv-hYzdgzCPxtWdJ6jM&libraries=places&language=en&region=CA"
                                    strategy="afterInteractive"
                                    />

                                    {<DeliveryLocation setCanOrder={setCanOrder} />}
                                </div>
                                <div className="cart-total-row">
                                    <span>Total</span>
                                    <strong>${cartTotal.toFixed(2)}</strong>
                                </div>
                                <Link href={canOrder ? "/delivery/complete" : {}}>
                                    <button
                                    type="button"
                                    className={canOrder ? "checkout-btn active" : "checkout-btn disabled"}
                                    disabled={!canOrder}
                                    >
                                    Checkout
                                    </button>
                                </Link>
                            </div>
                        </>
                    )}
                </aside>
            </div>
        </div>
    )
}