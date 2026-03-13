import "./DeliveryItem.css"

export default function DeliveryItem({name, image, price}) {

    return (
        <div className="deliver-item-container">
            <div className="delivery-item-flex">
                <div>
                    <img className="delivery-image" src={`/assets/images/${image}`}></img>
                </div>
                <div>{name}</div>
                <div>{price}</div>
            </div>
        </div>
    )
}