"use client"
import { useEffect } from "react";
import "./ContentsTable.css"

export default function ContentsTable({contents}) {

    useEffect(() => {
            const sections = document.querySelectorAll("[data-theme]");
            const links = document.querySelectorAll("[data-link]");
    
            const onScroll = () => {
                let current = "";
                sections.forEach((section) => {
                const top = section.getBoundingClientRect().top;
                if (top <= window.innerHeight * 0.3) current = section.dataset.theme;
                });
    
                links.forEach((link) => {
                link.classList.toggle("active", link.dataset.link === current);
                });
            };
    
            window.addEventListener("scroll", onScroll);
            onScroll();
            return () => window.removeEventListener("scroll", onScroll);
        }, [contents]);

        return (
            <div id="anchor-links" className="anchor-links">
                <p className="anchor__subtitle">Table of Contents</p>
                {contents.map((content, index) => (
                    <a data-link={`theme-${index + 1}`} key={`theme-${index + 1}`} href="#" className="anchor-link w-inline-block">
                        <p className="anchor-counter">{index + 1}.</p>
                        <p className="anchor-link-text">{content}</p>
                    </a>
                ))}
            </div>
        )
}