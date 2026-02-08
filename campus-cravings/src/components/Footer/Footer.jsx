import Link from "next/link"
import './Footer.css'

export default function Footer() {
    return (
        <footer data-background="black" data-w-id="54341c44-f81e-36ad-4d33-ecf225a4c746" className="footer">
      <div className="page-padding">
        <div className="w-layout-blockcontainer container w-container">
          <div className="wrap footer-wrap">
            <div className="footer-top"><a href="index.htm" data-logo="main-logo-link" aria-label="domore-logo"
                id="w-node-_54341c44-f81e-36ad-4d33-ecf225a4c74b-25a4c746" className="logo in-footer w-nav-brand"><img
                 alt="logo" src="/assets/images/logo_hero.png"
                  loading="lazy" data-logo="main"/></a>
              <ul id="w-node-_54341c44-f81e-36ad-4d33-ecf225a4c74d-25a4c746" role="list" className="footer__links">
                <li><a href="about-us.html" className="nav__link in-footer w-inline-block">
                    <p>about us</p>
                  </a></li>
                <li><a href="#" scroll="disable" data-w-id="54341c44-f81e-36ad-4d33-ecf225a4c75f"
                    className="nav__link in-footer w-inline-block">
                    <p>Delivery</p>
                  </a></li>
                <li id="w-node-_54341c44-f81e-36ad-4d33-ecf225a4c752-25a4c746"><a href="menu.html" aria-current="page"
                    className="nav__link in-footer w-inline-block w--current">
                    <p>Menu</p>
                  </a></li>
                <li></li>
                <li id="w-node-_54341c44-f81e-36ad-4d33-ecf225a4c756-25a4c746"><a href="locations.html"
                    className="nav__link in-footer w-inline-block">
                    <p>Location</p>
                  </a></li>
              </ul>
              <div className="footer-right">
                <div className="footer-social-wrap">
                  <div id="w-node-_54341c44-f81e-36ad-4d33-ecf225a4c762-25a4c746" className="social"><a
                      href="https://www.instagram.com/campuscravings_queens/" target="_blank"
                      className="social__link w-inline-block">
                      <div className="socail__embed inst-icon w-embed"><svg width="18" height="18" viewBox="0 0 18 18"
                          fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.4954 0H4.50458C2.0207 0 0 2.02129 0 4.50591V12.7336C0 15.2183 2.0207 17.2395 4.50458 17.2395H13.4954C15.9793 17.2395 18 15.2183 18 12.7336V4.50591C18 2.02129 15.9793 0 13.4954 0ZM1.58908 4.50591C1.58908 2.89804 2.89718 1.58954 4.50458 1.58954H13.4954C15.1028 1.58954 16.4109 2.89804 16.4109 4.50591V12.7336C16.4109 14.3415 15.1028 15.65 13.4954 15.65H4.50458C2.89718 15.65 1.58908 14.3415 1.58908 12.7336V4.50591Z"
                            fill="#202024"></path>
                          <path
                            d="M9.00009 12.8102C11.3099 12.8102 13.1901 10.9305 13.1901 8.61899C13.1901 6.30748 11.3109 4.42773 9.00009 4.42773C6.68926 4.42773 4.81006 6.30748 4.81006 8.61899C4.81006 10.9305 6.68926 12.8102 9.00009 12.8102ZM9.00009 6.01829C10.4344 6.01829 11.601 7.18525 11.601 8.62001C11.601 10.0548 10.4344 11.2217 9.00009 11.2217C7.56575 11.2217 6.39913 10.0548 6.39913 8.62001C6.39913 7.18525 7.56575 6.01829 9.00009 6.01829Z"
                            fill="#202024"></path>
                          <path
                            d="M13.5778 5.10451C14.1998 5.10451 14.7067 4.59842 14.7067 3.97523C14.7067 3.35204 14.2008 2.84595 13.5778 2.84595C12.9548 2.84595 12.4489 3.35204 12.4489 3.97523C12.4489 4.59842 12.9548 5.10451 13.5778 5.10451Z"
                            fill="#202024"></path>
                        </svg></div>
                    
                    </a></div>
                </div>
                <div className="footer-contact-wrap">
                  <p className="footer-contact-title">Сontact us:</p><a href="mailto:campuscravings0411@gmail.com"
                    className="footer-contact-link-wrap w-inline-block"><img
                      src="/assets/images/6735b9f37049694d96095db9_Mail.svg" loading="lazy" alt=""
                      className="footer-contact-icon"/>
                    <p className="footer-contact-link">campuscravings0411@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer__divider"></div>
              <Link href={'/terms'} className="text-secondary-14 color-beige">Terms of Service</Link>
              <Link href="/privacy" className="text-secondary-14 color-beige" >Privacy Policy</Link>
              <Link href="/cookies-policy" className="text-secondary-14 color-beige" >Cookies</Link>
              <div id="w-node-_54341c44-f81e-36ad-4d33-ecf225a4c77b-25a4c746" className="text-secondary-14 color-beige">©
                2026, CampusCravings All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )
}