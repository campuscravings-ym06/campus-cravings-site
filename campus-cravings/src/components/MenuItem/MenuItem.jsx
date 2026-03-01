import "./MenuItem.css"

export default function MenuItem({name, image, price, priceDesc="", descTitle="", desc="", sticker="", isCenter=false, canRotate=false}) {
    let curImgClass = "";
    let curTextClass = "";
    if (canRotate && isCenter) {
        curImgClass = "img-center";
        curTextClass = "swiper-text-center";
    } else if (canRotate) {
        curImgClass = "swiper-prevent-enlarge"
        curTextClass = "swiper-prevent-enlarge"
    }

    return (
        <div className="menu-slide">
            <div className={`menu-slide__img-wrap  ${curImgClass}` }>
                
                <img width="362" height="236" alt=""
                src={`/assets/images/${image}`}
                sizes="(max-width: 479px) 100vw, 362px"
                srcSet={`/assets/images/${image} 500w, /assets/images/${image} 800w, /assets/images/${image} 924w`}
                className="menu-slide__img"/><img width="68" height="68" alt=""
                src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                loading="lazy" className="menu-slide__sticker w-dyn-bind-empty"/>
                {sticker && <img width="68" height="68" alt=""
                                  src={`/assets/images/${sticker}`}
                                  loading="lazy" className="menu-slide__sticker"/>}
            </div>
            <div className={`menu-slide__info ${curTextClass}`}>
                <h2 className="h6 menu-slide__name">{name}</h2>
                <div className="spacer-8"></div>
                <div className="menu-slide__rich-text w-richtext">
                    <strong>{descTitle}{descTitle && ":"}</strong>{desc}
                </div>
                <div className="spacer-12"></div>
                <div className="menu-slide__rich-text-2 w-richtext">
                    <p><strong className="menu-slide__price-desc">{priceDesc}</strong> {price}</p>
                </div>
            </div>
        </div>
    )
}