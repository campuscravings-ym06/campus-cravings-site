"use client";
import { useState, useEffect, useRef } from "react";
import "./DeliveryLocation.css";

export default function DeliveryLocation({ setCanOrder }) {

  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const inputRef = useRef(null);

  // Shop location but in lat and lng
  const shopLat = 44.2260;
  const shopLng = -76.5010;

  useEffect(() => {

  const waitForGoogle = setInterval(() => {

    if (!window.google || !window.google.maps || !inputRef.current) return;

    clearInterval(waitForGoogle);

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["address"],
        componentRestrictions: { country: "ca" }
      }
    );

    autocomplete.addListener("place_changed", () => {

      const place = autocomplete.getPlace();

      if (!place.geometry) {
        setMessage("Please select a valid address.");
        return;
      }

      const customerLat = place.geometry.location.lat();
      const customerLng = place.geometry.location.lng();

      setAddress(place.formatted_address);

      checkDelivery(customerLat, customerLng);

    });

  }, 200);

  return () => clearInterval(waitForGoogle);

}, []);

  const checkDelivery = (customerLat, customerLng) => {

    const distance = getDistance(shopLat, shopLng, customerLat, customerLng);

    if (distance <= 2) {
      setCanOrder(true);
      setMessage("Delivery available! You are within our 2km range.");
    } else {
      setCanOrder(false);
      setMessage("Unfortunately you are outside of our delivery range.");
    }

  };

  // Haversine formula
  const getDistance = (lat1, lng1, lat2, lng2) => {

    const R = 6371;

    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;

  };

  return (
    <div className="delivery-infobar">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <p className="delivery-message">{message}</p>

    </div>
  );
}