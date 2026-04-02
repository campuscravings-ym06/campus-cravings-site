 "use client"

import Script from "next/script"
import DeliveryLocation from "../../components/DeliveryLocation/DeliveryLocation"

import { useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import DeliveryItem from "../../components/DeliveryItem/DeliveryItem"
import ScrollingCs from "../../components/ScrollingCs/ScrollingCs"
import { menuItems } from "../../js/menuItems"
import "./page.css"

function getNumberPrice(price) {
    if (typeof price === "number") {
        return price
    }

    const normalized = Number.parseFloat(String(price).replace(/[^\d.]/g, ""))
    return Number.isNaN(normalized) ? 0 : normalized
}

export default function Delivery() {
    const searchParams = useSearchParams()
    const [cartItems, setCartItems] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartQuantities, setCartQuantities] = useState({})

    const [mapsReady, setMapsReady] = useState(false);
    const [canOrder, setCanOrder] = useState(false);

    useEffect(() => {
        const cartAction = searchParams.get("cart")

        if (cartAction === "open") {
            setIsCartOpen(true)
        }
        if (cartAction === "toggle") {
            setIsCartOpen((prev) => !prev)
        }
    }, [searchParams])

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
            if (existing) prev[item.name] += 1;
            else prev[item.name] = 1;
            return prev;
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

    return (
        <div>
            <div className="delivery-page">
                <div className="delivery-content">
                    {Object.entries(menuItems).map(([category, items]) => (
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
                                    onLoad={() => setMapsReady(true)}
                                    />

                                    {mapsReady && <DeliveryLocation setCanOrder={setCanOrder} />}
                                </div>
                                <div className="cart-total-row">
                                    <span>Total</span>
                                    <strong>${cartTotal.toFixed(2)}</strong>
                                </div>
                                <button
                                type="button"
                                className={canOrder ? "checkout-btn active" : "checkout-btn disabled"}
                                disabled={!canOrder}
                                >
                                Checkout
                                </button>
                            </div>
                        </>
                    )}
                </aside>
            </div>
            <div className="c-scroll">
                        <ScrollingCs />
                    </div>
        </div>
    )
}