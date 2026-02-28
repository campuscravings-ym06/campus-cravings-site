"use client"

import { useEffect, useState } from "react"
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { menuItems } from "../../js/menuItems"
import MenuItem from "../MenuItem/MenuItem"
import "./MenuCarousel.css"

export default function MenuCarousel() {

    const [curDisplay, setCurDisplay] = useState("MacNCheese")
    const [dispItems, setDispItems] = useState(menuItems["MacNCheese"])
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [swiperIndex, setSwiperIndex] = useState(0);

    const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Set initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


    useEffect(() => {
        setDispItems(menuItems[curDisplay]);
        // Optional: Reset to first slide when category changes
        swiperInstance?.slideTo(0);
    }, [curDisplay, swiperInstance])

    useEffect(() => {
    if (dispItems.length > 3) {
        swiperInstance.params.navigation.prevEl = '.swiper-button-prev';
        swiperInstance.params.navigation.nextEl = '.swiper-button-next';
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
    }
}, [dispItems]);

    return (
        <div>
        <div className="menu-tab">
            <div className="tabs-menu w-tab-menu">
                <div data-w-tab="Smashburgers" className={`tabs-menu__link w-inline-block w-tab-link ${curDisplay == "MacNCheese" ? "w--current" : ""}` } onClick={() => setCurDisplay("MacNCheese")}>
                    <img width="40" height="40" alt="Smashburgers"
                        src="/assets/images/rda-macaroni-pasta-zoom-24a0aa60.jpeg" loading="lazy"
                        className="tabs-menu__icon"/>
                    <div className="tabs-menu__text">mac n' cheese</div>
                </div>
                <div data-w-tab="Sides" className={`tabs-menu__link w-inline-block w-tab-link ${curDisplay == "Drinks" ? "w--current" : ""}`} onClick={() => setCurDisplay("Drinks")}>
                    <img width="40"
                        height="40" alt="Sides" src="/assets/images/ice.jpg"
                        loading="lazy" className="tabs-menu__icon"/>
                    <div className="tabs-menu__text">Drinks</div>
                </div>
                <div data-w-tab="Sweets" className={`tabs-menu__link w-inline-block w-tab-link ${curDisplay == "Sweets" ? "w--current" : ""}`} onClick={() => setCurDisplay("Sweets")}>
                    <img width="40"
                        height="40" alt="Sweets" src="/assets/images/cookie.jpg"
                        loading="lazy" className="tabs-menu__icon"/>
                    <div className="tabs-menu__text">Sweets</div>
                </div>
                <div data-w-tab="Drinks" className={`tabs-menu__link w-inline-block w-tab-link ${curDisplay == "Snacks" ? "w--current" : ""}`} onClick={() => setCurDisplay("Snacks")}>
                    <img width="40"
                        height="40" alt="Drinks" src="/assets/images/chips.jpg"
                        loading="lazy" className="tabs-menu__icon"/>
                    <div className="tabs-menu__text">Snacks</div>
                </div>
            </div>
            
            <div className="menu-items" key={curDisplay}>
                {width > 600 ? 
                <Swiper
                modules={[Navigation]}
                    slidesPerView={Math.min(3, dispItems.length)}
                    spaceBetween={0}
                    loop={dispItems.length > 3}
                    onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
                    onSwiper={(swiper) => {setSwiperInstance(swiper); setSwiperIndex(swiper.activeIndex); console.log(swiper.activeIndex)}}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >
                    {dispItems.map(item => {
                        return (
                            <SwiperSlide key={item.name}>
                                <MenuItem name={item.name} image={item.image} price={item.price} desc={item.desc} sticker={item.sticker}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper> : 
                <Swiper
                modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop
                    pagination
                    onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
                    onSwiper={(swiper) => {setSwiperInstance(swiper); setSwiperIndex(swiper.activeIndex); console.log(swiper.activeIndex)}}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >
                    {dispItems.map(item => {
                        return (
                            <SwiperSlide key={item.name}>
                                <MenuItem name={item.name} image={item.image} price={item.price} desc={item.desc} sticker={item.sticker}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper> 
                
            }
            
            </div>
        </div>
        { dispItems.length > 3 &&
            <div>
                <div className="slider-arrows menu-arrows">
                    <button type="button" data-slider-btn="prev" className="slider-arrow swiper-button-prev">
                        <div className="slider-arrow__embed w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 12H5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round"strokeLinejoin="round"></path>
                                <path d="M12 19L5 12L12 5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </button>
                    <button type="button" data-slider-btn="next" className="slider-arrow swiper-button-next">
                        <div className="slider-arrow__embed w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M12 19L19 12L12 5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </button>
                </div>
                
            </div>
            }
            {((dispItems.length > 3 && width > 600) || (dispItems.length > 1 && width <= 600)) && (
                <>
                <div className="swiper-pagination menu-slider__pag"></div>
                <div className="menu-slider__fraction">{swiperIndex + 1} of {dispItems.length}</div>
                </>
            )}
        </div>
    )
}