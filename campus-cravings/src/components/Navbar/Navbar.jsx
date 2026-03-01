"use client"

import Link from "next/link";
import './Navbar.css';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {

    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);
    console.log(pathname)

    useEffect(() => {
      setIsVisible(false);
    }, [pathname]);

    function isActive(path) {
        return pathname === path ? 'w--current ' : '';
    }

    const toggleMenu = (e) => {
      e.preventDefault();
      setIsVisible(!isVisible);
    }

    return (
      <div className="page-wrapper">
      <div data-animation="over-right" className="nav w-nav" data-easing2="ease" fs-scrolldisable-element="smart-nav"
        data-easing="ease" data-collapse="tiny" role="banner" data-duration="400" data-doc-height="1">
        <div className="container in-nav">
          <nav role="navigation" className={`nav__menu-wrap ${isVisible ? 'is-open' : ''}`}>
            <div className="nav__menu">
              <ul role="list" className="nav__links">
                <li>
                  <Link href={'/'} className={`nav__link w-inline-block ${isActive('/')}`}>
                    <div>about us</div>
                  </Link>
                </li>
                <li>
                  <Link href={'/menu'} className={`nav__link w-inline-block ${isActive('/menu')}`}>
                    <div>Menu</div>
                  </Link>
                </li>
                <li>
                  <Link href={'/order'} className={`nav__link w-inline-block ${isActive('/order')}`}>
                    <div>Order</div>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Link href={'/'} data-logo="main-logo-link" aria-label="domore-logo"
            id="w-node-_0b7b9196-ea08-6b03-d762-a887b490f0ee-b490f0d2" className="logo in-nav w-nav-brand">
              <img width="120"
              height="57" alt="logo" src="/assets/images/logo_hero.png" loading="lazy"
              data-logo="main"/></Link>
          <div id="w-node-_0b7b9196-ea08-6b03-d762-a887b490f0f7-b490f0d2" className={`burger ${isVisible ? 'is-visible' : ''}`} onClick={(e) => toggleMenu(e)} style={{cursor: 'pointer', zIndex: 999}}>
            <div className="burger__box">
              <div className="w-embed" style={{ display: isVisible ? 'none' : 'block' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_490_863)">
                    <path d="M4 6H20" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M4 12H20" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M4 18H20" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                  <defs>
                    <clippath id="clip0_490_863">
                      <rect width="24" height="24" fill="white"></rect>
                    </clippath>
                  </defs>
                </svg>
              </div>
              <div className="w-embed" style={{ display: isVisible ? 'block' : 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}