import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  const navLinkStyle = {
    color: "white",
    fontWeight: 800,
    fontSize: "20px",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "2px",
  };

  const bottomLinkStyle = { color: "white", textDecoration: "none" };

  return (
    <footer
      className="footer"
      style={{ backgroundColor: "#f53a30", padding: "20px", color: "white" }}
    >
      <div className="page-padding">
        <div className="w-layout-blockcontainer container w-container">
          <div className="footer-top-row">
            {/* Logo Section */}
            <div className="footer-logo-section">
              <Link
                href="/"
                className="w-nav-brand footer-logo-link"
              >
                <img
                  className="footer-logo"
                  width="120"
                  height="57"
                  alt="Campus Cravings Logo"
                  src="/assets/images/logo_hero.png"
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="footer-nav-links">
              <Link href="/about-us" style={navLinkStyle}>
                About Us
              </Link>
              <Link href="/menu" style={navLinkStyle}>
                Menu
              </Link>
              <Link href="/locations" style={navLinkStyle}>
                Location
              </Link>
              <Link href="/delivery" style={navLinkStyle}>
                Delivery
              </Link>
            </div>

            {/* Socials & Contact */}
            <div className="footer-social-contact">
              {/* Instagram Icon */}
              <Link
                href="https://www.instagram.com/campuscravings_queens/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link-inline"
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    minWidth: "24px",
                    background: "white",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      fill="black"
                    />
                  </svg>
                </span>
                <span className="footer-contact-text-inline" style={{ wordBreak: "break-word" }}>
                  @campuscravings_queens
                </span>
              </Link>
              <Link
                href="mailto:campuscravings0411@gmail.com"
                className="footer-contact-link-inline"
              >
                <img
                  src="/assets/images/6735b9f37049694d96095db9_Mail.svg"
                  loading="lazy"
                  alt="Email"
                  style={{
                    width: "24px",
                    height: "24px",
                    minWidth: "24px",
                    flexShrink: 0,
                  }}
                />

                <span className="footer-contact-text-inline" style={{ wordBreak: "break-all" }}>
                  campuscravings0411@gmail.com
                </span>
              </Link>
            </div>
          </div>

          {/* Terms, Privacy, Copyright */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.4)",
              paddingTop: "20px",
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
              fontSize: "13px",
              opacity: 0.9,
            }}
          >
            <Link href="/terms" style={bottomLinkStyle}>
              Terms of Service
            </Link>
            <Link href="/privacy" style={bottomLinkStyle}>
              Privacy Policy
            </Link>
            <Link href="/cookies-policy" style={bottomLinkStyle}>
              Cookies
            </Link>
            <span style={{ opacity: 0.5 }}>|</span>
            <span>© 2026 Campus Cravings. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}