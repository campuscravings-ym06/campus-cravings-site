import "./DeliveryItem.css"

export default function DeliveryItem({name, image, price, quantity, onAdd}) {

    return (
        <button className="deliver-item-container" type="button" onClick={onAdd}>
            {quantity > 0 && 
                <div className="delivery-quantity">
                    <div className="delivery-quantity-center">{quantity}x</div>
                </div>
            }
            <div className="delivery-item-flex">  
                <div>
                    <img className="delivery-image" src={`/assets/images/${image}`} alt={name}></img>
                </div>
                <div>{name}</div>
                <div>{price}</div>
                <span className="add-label">Add to cart</span>
            </div>
        </button>
    )
}