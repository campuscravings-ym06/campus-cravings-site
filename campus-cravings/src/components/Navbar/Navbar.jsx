"use client"

import './Navbar.css'
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathname = usePathname();
    console.log(pathname)
    

    function isActive(path) {
        return pathname === path ? 'w--current ' : '';
    }
    return (
        <div className="page-wrapper">
    <div data-animation="over-right" className="nav w-nav" data-easing2="ease" fs-scrolldisable-element="smart-nav"
      data-easing="ease" data-collapse="tiny" role="banner" data-duration="400" data-doc-height="1">
      <div className="container in-nav">
        <nav role="navigation" className="nav__menu-wrap w-nav-menu">
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
        <div id="w-node-_0b7b9196-ea08-6b03-d762-a887b490f0f7-b490f0d2" className="burger w-nav-button">
          <div className="burger__box">
            <div className="burger__open w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_490_863)">
                  <path d="M4 6H20" stroke="currentcolor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round"></path>
                  <path d="M4 12H20" stroke="currentcolor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round"></path>
                  <path d="M4 18H20" stroke="currentcolor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </g>
                <defs>
                  <clippath id="clip0_490_863">
                    <rect width="24" height="24" fill="white"></rect>
                  </clippath>
                </defs>
              </svg></div>
            <div className="burger__close w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none">
                <path d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="currentcolor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"></path>
              </svg></div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}