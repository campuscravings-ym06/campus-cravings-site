import ScrollingCs from '../components/ScrollingCs/ScrollingCs'
import './page.css'

export default function About() {
    return (
        <main className="main-wrapper">
        <section data-background="white" className="section founders">
            <div className="page-padding in-founders">
            <div className="w-layout-blockcontainer container w-container">
                <div className="wrap founders__wrap">
                <div className="slider founders-slider">
                    <div id="founders-slider" className="swiper founders-slider__track">
                    <div className="swiper-wrapper founders-slider__list">
                        <div className="swiper-slide founders-slider__slide v1">
                        <div className="founders-slide v1">
                            <div className="founders-slide__heading">
                            <h1 data-w-id="f4bb5e05-edb4-ddcb-15df-e53ade87e460" className="h2 founders__h2">who we are</h1>
                            <p data-w-id="132d28c5-b070-8108-c9dd-80b99daad65e"
                                className="text-secondary-16 in-founders slide-1-desktop v3">BORN FROM LATE NIGHTS AND EMPTY
                                FRIDGES, CAMPUS CRAVINGS BEGAN WITH ONE GOAL—TO BRING REAL COMFORT FOOD TO HUNGRY QUEEN’S
                                STUDENTS. THE KIND THAT’S HOT, FRESH, AND MADE WITH CARE—THE KIND THAT MAKES EVERY LATE
                                NIGHT A LITTLE BETTER.</p>
                            </div>
                            <div data-w-id="c92d8e39-66d1-1c70-1304-e327bebafff8" className="founders-slide__img-wrap v1"><img
                                src="/assets/images/Frame11.webp" sizes="(max-width: 479px) 100vw, 347px"
                                width="347" height="522" alt=""
                                srcSet="/assets/images/Frame11.webp 500w, /assets/images/Frame11.webp 694w"
                                className="founders-slide__img"/></div>
                            <p className="text-secondary-16 in-founders slide-1-mobile">BORN FROM LATE NIGHTS AND EMPTY
                                FRIDGES, CAMPUS CRAVINGS BEGAN WITH ONE GOAL—TO BRING REAL COMFORT FOOD TO HUNGRY QUEEN’S
                                STUDENTS. THE KIND THAT’S HOT, FRESH, AND MADE WITH CARE—THE KIND THAT MAKES EVERY LATE
                                NIGHT A LITTLE BETTER.</p>
                        </div>
                        </div>
                        <div className="swiper-slide founders-slider__slide v2">
                        <div className="founders-slide v2">
                            <div data-w-id="9fcc3076-39e2-a62f-b68c-31401e63a4df" className="founders-slide__img-wrap v2">
                                <img
                                src="/assets/images/Kitchen.png"
                                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 749px" width="749" height="322"
                                alt=""
                                srcSet="/assets/images/Kitchen.png 500w, /assets/images/Kitchen.png 800w, /assets/images/Kitchen.png 1080w, /assets/images/Kitchen.png 1600w, /assets/images/Kitchen.png 2000w, /assets/images/Kitchen.png 2600w, /assets/images/Kitchen.png 2996w"
                                className="founders-slide__img v2"/><img src="/assets/images/Kitchen.png"
                                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 749px" width="749" height="322"
                                alt=""
                                srcSet="/assets/images/Kitchen.png 500w, /assets/images/Kitchen.png 800w, /assets/images/Kitchen.png 1060w"
                                className="founders-slide__img v2 mob"></img>
                            </div>
                            <h2 data-w-id="9fcc3076-39e2-a62f-b68c-31401e63a4db" className="h2 founders__h2 v2">See<br/>our
                            kitchen</h2>
                            <h2 data-w-id="b417270c-7252-d44d-b5de-d4ad8467320d" className="h2 founders__h2 v2 mob">See Our
                            Kitchen</h2>
                            <div data-w-id="aaae2159-6ba0-15ce-dd7d-dd3116c4f5e4" className="founders-slide__text-wrap">
                            <p className="text-secondary-16 in-founders v2">EVERY ORDER IS MADE FRESH IN OUR CERTIFIED STUDENT
                                KITCHEN IN KINGSTON. WE USE REAL INGREDIENTS—NOTHING FROZEN, NOTHING FAKE. EACH MEAL IS
                                COOKED TO ORDER WITH CARE AND THE SAME LOVE WE’D COOK FOR OURSELVES.</p>
                            <p className="text-secondary-16 in-founders v2">PROUDLY RUN BY QUEEN’S STUDENTS, FOR QUEEN’S
                                STUDENTS—FUELING KINGSTON’S LATE NIGHTS WITH REAL FOOD AND REAL CARE.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="swiper-pagination founders-slider__pag"></div>
                </div>
            </div>
            </div>
            <div className="banner founders-banner">
                <ScrollingCs/>
            </div>
    </section>
  <section id="section-about" data-background="black" className="section mission">
    <div className="page-padding">
      <div className="w-layout-blockcontainer container w-container">
        <div className="wrap mission-wrap">
          <div className="mission__heading">
            <h2 id="w-node-_7f11e646-9144-1bf3-050b-d663d2d74b0f-37855d72"
              data-w-id="7f11e646-9144-1bf3-050b-d663d2d74b0f" style={{"opacity" : 0}} className="h2 mission__h2">our mission</h2>
            <p data-w-id="b243d004-177d-5c99-e77a-4371a0feb168" style={{"opacity" : 0}}
              className="text-secondary-16 color-biege in-mission">TO SERVE FRESH, HONEST, AND COMFORTING FOOD MADE BY
              STUDENTS, FOR STUDENTS. FUELING LATE NIGHTS, GOOD VIBES, AND THE QUEEN’S COMMUNITY, ONE CRAVING AT A TIME.
            </p>
          </div>
          <div className="mission__content">
            <div data-w-id="2b5e7a95-eb44-d042-db01-712fc92c83ce" style={{"opacity" : 0}} className="mission__img-wrap"><img
                src="/assets/images/6723a1cf93ba512237855dc8_Pretty%20Patty%20Fe%CC%81vrier%202023-37%201.avif"
                loading="lazy" width="1320" height="600" alt="" className="mission__img desktop"/><img
                src="/assets/images/6723a1cf93ba512237855d97_team-mobile.webp" loading="lazy" width="335"
                height="194" alt="pretty patty team on kitchen"
                srcSet="/assets/images/6723a1cf93ba512237855d97_team-mobile.webp 500w, /assets/images/6723a1cf93ba512237855d97_team-mobile.webp 670w"
                sizes="(max-width: 479px) 100vw, 335px" className="mission__img mobile"/></div>
            <div className="mission__cards">
              <div className="mission__card">
                <div className="mission__card-inner"><img
                    src="/assets/images/678785e427c68f624925cdf6_superman-man-hero-superhuman-svgrepo-com.svg"
                    loading="lazy" width="32" height="32" alt="" className="mission__icon"/>
                  <h3 className="h6 mission__h3">YOUR LOCAL HERO</h3>
                  <p className="text-main-15">We’re Queen’s students just like you—running Campus Cravings right here in
                    Kingston. Every order supports local students and keeps the late-night food scene alive in the
                    student ghetto. Real food, made by students, for students.</p>
                </div>
              </div>
              <div className="mission__card center">
                <div className="mission__card-inner"><img src="/assets/images/6723a1cf93ba512237855daf_Leaf.svg"
                    loading="lazy" width="32" height="32" alt="" className="mission__icon"/>
                  <h3 className="h6 mission__h3">fresh ingredients only</h3>
                  <p className="text-main-15">Every serving of our mac starts with freshly cooked pasta, real cheddar, and
                    creamy sauce made in our student kitchen. Nothing frozen, nothing fake—just honest comfort food that
                    tastes like it should. </p>
                </div>
              </div>
              <div className="mission__card">
                <div className="mission__card-inner"><img
                    src="/assets/images/67878567547cafad206f4ede_hand-heart-svgrepo-com.svg" loading="lazy"
                    width="32" height="32" alt="" className="mission__icon"/>
                  <h3 className="h6 mission__h3">MADE WITH LOVE</h3>
                  <p className="text-main-15">We take pride in every order that leaves our kitchen. Made fresh, packed with
                    care, and crafted to satisfy that late-night craving you didn’t know you had.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="anchor-team" className="anchor"></div>
  </section>
  </main>
    )
}