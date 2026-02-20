import ContentsTable from "../../components/ContentsTable/ContentsTable";

export default function Privacy() {

    const contents = ["Information We Collect", "Third-Party Services", "How We Use Your Data",
        "Data Retention", "Your Rights", "Updates To This Policy"
    ];

    return (
        <div className="main-wrapper">
            <div id="offset-section" className="offset-section"></div>
            <section data-background="white" className="section top">
                <div className="page-padding">
                    <div className="w-layout-blockcontainer container w-container">
                        <div data-sync-scroll-items="" className="wrap policy__wrap">
                            <div className="anchor-links-wrap">
                                <h1 className="anchor__title">Privacy Policy</h1>
                                <ContentsTable contents={contents}/>
                            </div>
                            <div className="policy__right">
                                <div className="policy__box">
                                    <ul data-items="" role="list" className="policy__main-list">
                                        <li data-theme="theme-1" className="policy__main-item">
                                            <h2 className="policy-head">1. Information We Collect</h2>
                                            <p className="policy-text">We do not collect personal data directly. However, we collect and analyze sales data from orders placed through UberEats, 5Loyalty, and Shopify. This data includes the products purchased, transaction amounts, and other anonymized details that help us improve our services.</p>
                                        </li>
                                        <li data-theme="theme-2" className="policy__main-item">
                                            <h2 className="policy-head">2. Third-Party Services</h2>
                                            <p className="policy-text">We work with the following third parties:</p>
                                            <ul role="list" className="policy-inner-list">
                                                <li className="policy-inner-item">UberEats: For food delivery services.</li>
                                                <li className="policy-inner-item">5Loyalty: For our loyalty program and pick-up service.</li>
                                                <li className="policy-inner-item">Shopify: For merchandise sales.</li>
                                            </ul>
                                            <p className="policy-text">These third parties may collect and process personal information under their respective privacy policies. We encourage you to review their policies for more information on how they handle your data.</p>
                                        </li>
                                        <li data-theme="theme-3" className="policy__main-item">
                                            <h2 className="policy-head">3. How We Use Your Data</h2>
                                            <p className="policy-text">The sales data we collect is used solely for internal business purposes, such as analyzing purchasing trends, improving our offerings, and managing inventory. We do not sell or share your personal information with third parties for marketing purposes.</p>
                                        </li>
                                        <li data-theme="theme-4" className="policy__main-item">
                                            <h2 className="policy-head">4. Data Retention</h2>
                                            <p className="policy-text">We retain sales data for as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
                                        </li>
                                        <li data-theme="theme-5" className="policy__main-item">
                                            <h2 className="policy-head">5. Your Rights</h2>
                                            <p className="policy-text">If you believe there has been a misuse of your personal data by a third party, such as UberEats, 5Loyalty, or Shopify, we recommend reaching out to them directly for resolution. We are happy to assist you in contacting them if needed.</p>
                                        </li>
                                        <li data-theme="theme-6" className="policy__main-item">
                                            <h2 className="policy-head">6. Updates to this Policy</h2>
                                            <p className="policy-text">We may update this Privacy Policy from time to time. Any changes will be posted on this page, so we encourage you to check back periodically.</p>
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
    )
}