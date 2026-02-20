import ContentsTable from "../../components/ContentsTable/ContentsTable"

export default function Terms() {

    const contents = ["General Information", "Ordering And Delivery", "Online Merchandise Sales",
        "Loyalty Program", "Refund And Complaints", "Intellectual Property", "Limitation Of Liability",
        "Governing Law"
    ]

    return (
        <div><div className="main-wrapper">
            <div id="offset-section" className="offset-section"></div>
                <section data-background="white" className="section top">
                    <div className="page-padding">
                        <div className="w-layout-blockcontainer container w-container">
                            <div data-sync-scroll-items="" className="wrap policy__wrap">
                                <div className="anchor-links-wrap">
                                    <h1 className="anchor__title">Terms &amp; <br/>Conditions</h1>
                                    <ContentsTable contents={contents} />
                                </div>
                                <div className="policy__right">
                                    <div className="policy__box">
                                        <ul data-items="" role="list" className="policy__main-list">
                                            <li data-theme="theme-1" className="policy__main-item">
                                                <h2 className="policy-head">1. General Information</h2>
                                                <p className="policy-text">These Terms &amp; Conditions govern your use of PRETTY PATTY’s website and services. By accessing or placing an order through our website, you agree to be bound by these terms.</p>
                                            </li>
                                            <li data-theme="theme-2" className="policy__main-item">
                                                <h2 className="policy-head">2. Ordering and Delivery</h2>
                                                <p className="policy-text">We offer food delivery services through UberEats and a pick-up option via 5Loyalty. When you place an order, it will be processed and delivered according to the terms provided by UberEats. Please consult their platform for delivery times and fees.</p>
                                            </li>
                                            <li data-theme="theme-3" className="policy__main-item">
                                                <h2 className="policy-head">3. Online Merchandise Sales</h2>
                                                <p className="policy-text">Our merchandise is available for purchase via Shopify. All orders are subject to availability, and we reserve the right to refuse or cancel any order. Once an order is confirmed, shipping times will depend on the service provided by our fulfilLment partners.</p>
                                            </li>
                                            <li data-theme="theme-4" className="policy__main-item">
                                                <h2 className="policy-head">4. Loyalty Program</h2>
                                                <p className="policy-text">We offer a loyalty program through 5Loyalty, where you can accumulate points for future purchases. Terms and conditions of the loyalty program are governed by 5Loyalty’s platform.</p>
                                            </li>
                                            <li data-theme="theme-5" className="policy__main-item">
                                                <h2 className="policy-head">5. Refund and Complaints</h2>
                                                <p className="policy-text">We do not offer refunds. However, if you experience an issue with your order, you can contact us directly, and we will assess your complaint. We may, at our discretion, offer a commercial gesture in response to the issue.</p>
                                            </li>
                                            <li data-theme="theme-6" className="policy__main-item">
                                                <h2 className="policy-head">6. Intellectual Property</h2>
                                                <p className="policy-text">All content on this website, including images, text, logos, and trademarks, is the property of PRETTY PATTY and is protected under Swiss intellectual property laws. You may not use, distribute, or reproduce any material without prior consent.</p>
                                            </li>
                                            <li data-theme="theme-7" className="policy__main-item">
                                                <h2 className="policy-head">7. Limitation of Liability</h2>
                                                <p className="policy-text">PRETTY PATTY will not be held liable for any direct, indirect, or incidental damages arising from the use of this website or our services, including delays or errors in processing orders through third-party platforms.</p>
                                            </li>
                                            <li data-theme="theme-8" className="policy__main-item">
                                                <h2 className="policy-head">8. Governing Law</h2>
                                                <p className="policy-text">These Terms &amp; Conditions are governed by Swiss law. Any disputes arising out of the use of our website or services shall be subject to the exclusive jurisdiction of the courts of Switzerland.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner p-locations-banner">
                        <div className="banner__image"></div>
                    </div>
                </section>
            </div>
        </div>
    )
}