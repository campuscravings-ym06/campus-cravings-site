import CookiePopup from "../components/CookiePopup/CookiePopup"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import { CartProvider } from "../contexts/cartContext"
import "../index.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/public/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Campus Cravings</title>
        <meta name="description" content="Web site created..." />
      </head>
      <body>
        <Navbar></Navbar>
        <CartProvider>
          <div id="root">{children}</div>
        </CartProvider>
        <CookiePopup/>
        <Footer></Footer>
      </body>
    </html>
  )
}