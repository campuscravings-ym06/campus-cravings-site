"use client"

import { useEffect, useRef, useState } from "react";

export default function ScrollingCs() {

    const divRef = useRef(null)

    const [backPos, setBackPos] = useState({})
    const [scrollPos, setScrollPos] = useState(0)

    const speed = 0.5;
    useEffect(() => {
        const handleScroll = () => {setScrollPos(window.scrollY)};

        // Adding scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { 
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            const offsetTop = rect.top + window.scrollY;
            setBackPos({"backgroundPosition": `center ${(scrollPos - offsetTop) * speed}px`})
        }
    }, [scrollPos])

    return (
        <div className="banner__image" style={backPos} ref={divRef}></div>
    )
}