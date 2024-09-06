import React from 'react';
import Styles from "./howItWorks.module.css";

export function HowItWorks() {
    

    return (
      <div className={Styles.howItWorks}>
            <h2>Scavenge is your platform for pre-owned items you’ ll love</h2>
            <p>One community, thousands of items, and a whole lot of pre-loved. Ready to get started? Here’s how it works.</p>
            <h2 className={Styles.sellSimple}>Selling is simple</h2>
            <img src="./images/phone.jpeg" alt="" style={{width: "750px", objectFit: "cover"}} className={Styles.largeImg} />
            <span>1. List for free</span>
            <p>Download the Scavenge app for free. Take photos of your item, describe it, and set your price. Tap “Upload” and your listing is live.</p>
            <img src="./images/x.jpeg" alt=""  />
            <span>2. Sell it, ship it</span>
            <p>
                Download the Scavenge app for free. Take photos of your item, write
                descriptions and set prices. Tap “Upload” and your listing is live. 
                Sold! Box your item, print your shipping  label, and dispatch.
            </p>
            <img src="./images/file.jpeg" alt="" />
            <span>3. Get Paid</span>
            <p>
                There are no selling fees, so what you earn is yours. You’ll be paid as soon as  the buyer confirms product delivery in good 
                condition.
            </p>
            <span className={Styles.shopSafely}>Shop safely</span>
            <img src="./images/phone.jpeg" alt="" style={{width: "750px", objectFit: "cover"}} className={Styles.largeImg}/>
            <span>1. Find it</span>
            <p>
                Download the Scavenge app for free. Browse listings, search
                thousands of  items, and find your preference.
            </p>
            <img src="./images/smile.jpeg" alt="" />
            <span>2. Get it</span>
            <p>
                Purchase your favourite items, the seller will contact you after checkout. The delivery date will be agreed between you and the seller. Your item will arrive on the agreed date.
            </p>
            <img src="./images/box.jpeg" alt="" style={{width: "750px", objectFit: "cover"}} className={Styles.largeImg}/>
            <span>You're safe with us</span>
            <p>
                Shop with peace of mind As a buyer, you pay a Buyer Protection fee on each  transaction when using the "Buy now" button.  This helps safeguard your money, adding an extra  layer of protection to your purchases and keeping  your information secure. The cost is 3–8% of the item price (before postage) plus £0.30–0.80.
            </p>
            <span>Reliable refund policy</span>
            <p>
                Your order is protected when you pay through Scavenge. You’ll get a refund if your item doesn’t arrive, was damaged in transit, or is significantly  not as described. Let us know within 3 days of  delivery if something isn’t right. Unless otherwise agreed, the buyer covers the return cost.
            </p>
      </div>
    )
}