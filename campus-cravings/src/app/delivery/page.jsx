import DeliveryItem from "../../components/DeliveryItem/DeliveryItem"
import ScrollingCs from "../../components/ScrollingCs/ScrollingCs"
import { menuItems } from "../../js/menuItems"
import "./page.css"

export default function Delivery() {


    return (
        <div>
            {Object.entries(menuItems).map(([category, items]) => (
                <div key={category}>
                    <h2>{category}</h2>
                    <div className="delivery-row">
                        {items.map(item => (
                            <DeliveryItem key={item.name} name={item.name} image={item.image} price={item.price}></DeliveryItem>
                        ))}
                    </div>
                </div>
            ))}
            <div  className="c-scroll">
                <ScrollingCs/>
            </div>
            
        </div>
    )
}