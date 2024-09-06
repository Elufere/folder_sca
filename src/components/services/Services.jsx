import React from 'react';
import Styles from "./services.module.css";

export function Services() {
    

    return (
       <div className={Styles.services}>
            <span className={Styles.header}>WHO WE ARE</span>
            <p className={Styles.pHeader}>Scavenge is Nigeria's leading e-commerce platform where the charm of pre-loved items meets the convenience of digital shopping</p>
            <img src="./images/discover.jpeg" alt="" />
            <div className={Styles.cards}>
                <div className={Styles.sellers}>
                    <span>Sellers Protection</span>
                    <p>Payment are routed into sellers specified account immediately after the confirmation of item delivery by the buyers</p>
                </div>
                <div className={Styles.buyers}>
                    <span>Buyers Protection</span>
                    <p>As a buyer, when you purchase on Scavenge using the Pay Now  button, you are covered by Scavenge Order Protection fee.</p>
                </div>
                <div className={Styles.request}>
                    <span>Request an item</span>
                    <p>Can’t find what you are looking for on Scavenge! Request for a product from our community of sellers.</p>
                </div>
            </div>
       </div>
    );
}