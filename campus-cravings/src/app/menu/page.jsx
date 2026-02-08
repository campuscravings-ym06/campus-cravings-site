import MenuCarousel from '../../components/MenuCarousel/MenuCarousel'
import './page.css'

export default function Menu() {


    return (
        <main className="main-wrapper">
      <section data-background="white" className="section menu">
        <div className="page-padding in-menu">
          <div className="w-layout-blockcontainer container in-popular w-container">
            <div className="wrap menu-wrap">
              <div id="w-node-_090e04ad-0ab6-47bf-ca84-c54f63c1fd67-37855d75" className="menu__heading">
                <p data-w-id="b61f46c8-f084-b7ee-246a-28a07447be72" style={{opacity : 0, textAlign: 'left'}}
                  className="text-secondary-16 in-menu-heading">ALL OF OUR MACS ARE MADE FROM SCRATCH WITH REAL CHEESE, CREAMY SAUCE, AND FRESH PASTA—PERFECT FOR WHEN THE CRAVINGS HIT HARD.</p>
                <h1 data-w-id="b61f46c8-f084-b7ee-246a-28a07447be77" style={{opacity : 0, textAlign: 'left'}} className="h2 menu__h1">local,<span
                    className="empty-span">1</span>fresh,damn tasty.</h1>
              </div>
              <div data-w-id="af72a4ba-ec34-3734-ffda-f46a65c35d7c" style={{opacity : 0}} data-current="Sides"
                data-easing="ease" data-duration-in="300" data-duration-out="100" className="tabs w-tabs">
                <MenuCarousel/>
            
                      </div>
                      </div>
                  </div>
                  </div>
        <div className="banner menu-banner">
          <div className="banner__image"></div>
        </div>
      </section>
    </main>
    )
}