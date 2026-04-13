import ScrollingCs from "../../../components/ScrollingCs/ScrollingCs"
import "./complete.css"
import Link from "next/link"

export default function Complete() {

    return (
        <div>
            <div className="complete-page">
                <h3>Order Complete!</h3>
                <h5>Your order has been received and is on it's way!</h5>
                <Link href={"/delivery"} ><button className="btn">Return To Menu</button></Link>
            </div>
        </div>
    )
}