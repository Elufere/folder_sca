import React from 'react';
import HiwStyles from "./how-it-works.module.css";
import { BiArrowBack } from "react-icons/bi";

export function HowItWorks() {
    return (
        <div className={HiwStyles.howItWorks}>
            <div className={HiwStyles.header}>
                <BiArrowBack className={HiwStyles.icon} />
                <p className={HiwStyles.headerH}>How it works</p>
            </div>
            <div className={HiwStyles.wrapper}>
                <h2 className={HiwStyles.wrapperH}>Scavenge is your platform for pre-owned items you'll love</h2>
                <div className={HiwStyles.aboutNote}>
                    <p>One community, thousands of items, and a whole lot of pre-loved. Ready to get started? Here’s how it works.</p>
                </div>
                <div className={HiwStyles.sellSimple}>
                    <p className={HiwStyles.sellSimpleHeader}>Selling is simple</p>
                    <img src="./images/phone.jpeg" alt="Selling process on phone" />
                </div>
                <div className={HiwStyles.step}>
                    <p className={HiwStyles.stepHeader}>1. List for free</p>
                    <p>Download the Scavenge app for free. Take photos of your item, describe it, and set your price. Tap “Upload” and your listing is live.</p>
                    <img src="./images/x.jpeg" alt="List for free" />
                </div>
                <div className={HiwStyles.step}>
                    <p className={HiwStyles.stepHeader}>2. Sell it, ship it</p>
                    <p>Download the Scavenge app for free. Take photos of your item, write descriptions, and set prices. Tap “Upload” and your listing is live. Sold! Box your item, print your shipping label, and dispatch.</p>
                    <img src="./images/file.jpeg" alt="Shipping process" />
                </div>
                <div className={HiwStyles.step}>
                    <p className={HiwStyles.stepHeader}>3. Get paid</p>
                    <p>There are no selling fees, so what you earn is yours. You’ll be paid as soon as the buyer confirms product delivery in good condition.</p>
                </div>
            </div>
        </div>
    )
}