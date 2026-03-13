import "./DeliveryItem.css"

export default function DeliveryItem({name, image, price, onAdd}) {

    return (
        <button className="deliver-item-container" type="button" onClick={onAdd}>
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