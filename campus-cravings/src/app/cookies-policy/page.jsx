import ContentsTable from "../../components/ContentsTable/ContentsTable"
import ScrollingCs from "../../components/ScrollingCs/ScrollingCs"

export default function Cookies() {

    const contents = ["What Are Cookies?", "How We Use Cookies", "Types Of Cookies We May Use",
        "Managing Cookies", "Third-Party Cookies", "Updates To The Cookies Policy"
    ]

    return (
        <div className="main-wrapper">
            <div id="offset-section" className="offset-section"></div>
            <section data-background="white" className="section top">
                <div className="page-padding">
                    <div className="w-layout-blockcontainer container w-container">
                        <div data-sync-scroll-items="" className="wrap policy__wrap">
                            <div className="anchor-links-wrap">
                                <h1 className="anchor__title">Cookies Policy</h1>
                                <ContentsTable contents={contents} />
</div>
<div className="policy__right">
<div className="policy__box">
<ul data-items="" role="list" className="policy__main-list">
<li data-theme="theme-1" className="policy__main-item">
<h2 className="policy-head">
1. What Are Cookies?</h2>
<p className="policy-text">
Cookies are small text files placed on your device by websites that you visit. They help the website function properly, improve user experience, and provide information to website owners.</p>
</li>
<li data-theme="theme-2" className="policy__main-item">
<h2 className="policy-head">
2. How We Use Cookies</h2>
<p className="policy-text">
Currently, we do not use cookies on our website. However, we plan to implement cookies in the future to:</p>
<ul role="list" className="policy-inner-list">
<li className="policy-inner-item">
Analyze traffic and user behavior using analytics tools (e.g., Google Analytics).</li>
<li className="policy-inner-item">
Improve website functionality and user experience.</li>
<li className="policy-inner-item">
Tailor promotions and offers to users based on their interactions with the website.</li>
</ul>
</li>
<li data-theme="theme-3" className="policy__main-item">
<h2 className="policy-head">
3. Types of Cookies We May Use</h2>
<p className="policy-text">
Once implemented, we may use the following types of cookies:</p>
<ul role="list" className="policy-inner-list">
<li className="policy-inner-item">
Essential Cookies: Necessary for the website to function.</li>
<li className="policy-inner-item">
Analytical Cookies: Help us understand how users engage with our website and allow us to improve its performance.</li>
<li className="policy-inner-item">
Marketing Cookies: Used to display relevant ads and track the effectiveness of marketing campaigns.</li>
</ul>
</li>
<li data-theme="theme-4" className="policy__main-item">
<h2 className="policy-head">
4. Managing Cookies</h2>
<p className="policy-text">
You can control or delete cookies in your browser settings. Most browsers allow you to refuse or accept cookies. Please note that disabling cookies may affect the functionality of our website.</p>
</li>
<li data-theme="theme-5" className="policy__main-item">
<h2 className="policy-head">
5. Third-Party Cookies</h2>
<p className="policy-text">
Once tracking is implemented, some cookies may be placed by third-party services, such as analytics tools or marketing platforms, to track your interactions with our website. These third parties will have their own cookie policies.</p>
</li>
<li data-theme="theme-6" className="policy__main-item">
<h2 className="policy-head">
6. Updates to the Cookies Policy</h2>
<p className="policy-text">
We will update this policy once cookies are implemented on our website. Please check back for future updates.</p>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
    )
}