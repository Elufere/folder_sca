import React, { useState } from 'react';
import Styles from "./security.module.css";
import { IoIosArrowForward } from "react-icons/io";
import {Link} from "react-router-dom";

export function Security() {
    const [open, setOpen] = useState(false);
    const [faqOpen, setFaqOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    const handleFaqClick = (e) => {
        e.preventDefault();
        setFaqOpen(!faqOpen);
    };

    return (
        <div className={Styles.security}>
            <img src="./images/box.jpeg" alt="" />
            <div className={Styles.confidence}>
                <div className={Styles.left}>
                    <p>"Shop with confidence knowing that all transactions are committed to ensuring a safe and trustworthy experience for all our users."</p>
                    <div className={Styles.logo}>
                        <p>We are trusted by over 10,000 sellers and buyers</p>
                            <img src="./images/fabric.jpeg" alt="" />
                            <img src="./images/ambrose.jpeg" alt="" />
                            <img src="./images/ideal.jpeg" alt="" />
                            <img src="./images/alluring.png" alt="" />
                            <img src="./images/best.jpeg" alt="" />
                    
                    </div>
                </div>
                <div className={Styles.right}>
                    <p>Money back guaranteed on all transactions. Our Order Protection fee applies if buyers receive an item that is considerably different than described.</p>
                    <Link to="/refund">
                        <button>LEARN MORE</button>
                    </Link>
                </div>
            </div>
            <div className={Styles.faq}>
                <p onClick={handleClick}>Why you should donate or sell your pre-loved items <IoIosArrowForward /></p>
                {open && (
                    <ul  className={Styles.expandedContent}>
                        <li>Income Generation: Selling pre-loved items can provide additional income for individuals and families.</li>
                        <li>Cost Savings: Buyers can save money by purchasing second-hand items instead of new ones.</li>
                        <li>Charity and Community Support: Donating items to charities helps support those in need, fostering community spirit.</li>
                        <li>Decluttering and Stress Reduction: Selling or donating items helps individuals declutter their homes, creating more space and reducing stress.</li>
                        <li>Waste Reduction: Donating and selling used items reduces the amount of waste that ends up in landfills.</li>
                        <li>Resource Conservation: Extending the life of products reduces the demand for new resources, promoting sustainable consumption.</li>
                        <li>Cultural Encouragement: Encourages a culture of reuse and sustainability within the community.</li>
                   </ul>
                )}
                <p onClick={handleFaqClick}>Frequently asked questions <IoIosArrowForward /></p>
                {faqOpen && (
                   <ul className={Styles.faqExpandedContent}>
                   <h3>How does Scavenge work?</h3>
                   <li>Users can create an account, list items for sale, and browse items from other users.</li>
               
                   <h3>How do I create an account?</h3>
                   <li>You automatically create an account when you upload an item for sale or purchase an item on Scavenge.</li>
               
                   <h3>How do I reset my password?</h3>
                   <li>Go to the login page, click on "Forgot Password," and follow the instructions to reset your password.</li>
               
                   <h3>Can I delete my account?</h3>
                   <li>Yes, you can delete your account by going to the account settings and selecting the "Delete Account" option.</li>
               
                   <h3>How do I purchase an item?</h3>
                   <li>Browse the listings, select the item you want, and click "Buy Now" to proceed with payment.</li>
               
                   <h3>What payment methods are accepted?</h3>
                   <li>Scavenge accepts card payments processed by Paystack.</li>
               
                   <h3>How do I list an item for sale?</h3>
                   <li>Click on the "Sell" icon on the homepage, fill out the item details, upload photos, set your price, and publish the listing.</li>
               
                   <h3>Are there any listing fees?</h3>
                   <li>There is no listing fee on Scavenge.</li>
               
                   <h3>How do I get paid?</h3>
                   <li>Once the buyer confirms receipt of the item, payment will be transferred to your account through the agreed-upon method.</li>
               
                   <h3>How does Scavenge ensure transaction safety?</h3>
                   <li>Paystack provides secure payment for users on Scavenge, and we consistently review systems to maintain a safe and trustworthy environment.</li>
               
                   <h3>What should I do if I encounter a fraudulent seller or buyer?</h3>
                   <li>Report the user to our support team immediately, and we will investigate and take appropriate action.</li>
               
                   <h3>How do I protect my personal information?</h3>
                   <li>Avoid sharing sensitive information through the platform.</li>
               
                   <h3>Who handles the shipping?</h3>
                   <li>Shipping arrangements are made between the buyer and seller. They can agree on a delivery method or meet in person.</li>
               
                   <h3>Can I track my shipment?</h3>
                   <li>Tracking availability depends on the chosen delivery method. Sellers should provide tracking information if available.</li>
               
                   <h3>How do I request a refund and item return?</h3>
                   <li>Go to the Profile Page, click on "My Orders," then click on that particular item, scroll down, and cancel the order. Let us know why you are canceling the order. The issue will be escalated to the support team.</li>
                   <li>Your return request will be forwarded to the seller for inspection and action. If the seller accepts, your request will be authorized, and you will be required to mail the item(s) back. If the seller disagrees with the return or does not answer within three days, our Support staff will investigate and make a final decision.</li>
               
                   <h3>How can I contact customer support?</h3>
                   <li>Reach out to our customer support team via the "Support" icon on the user profile page.</li>
               
                   <h3>Can I leave feedback for buyers and sellers?</h3>
                   <li>Yes, after a transaction, you can leave feedback and rate your experience to help other users make informed decisions.</li>
               
                   <h3>How can I stay updated on platform news and updates?</h3>
                   <li>Follow us on social media, subscribe to our newsletter, and check our blog for the latest news and updates.</li>
               </ul>               
                )}
            </div>
        </div>
    );
}