import React from 'react';
import styles from"./refund.module.css";
import { BiArrowBack } from 'react-icons/bi';


export function Refund() {
    

    return (
        <div className={styles.refund}>
            <div className={styles.header}>
                <BiArrowBack className={styles.headerIcon} />
                <span className={styles.headerH}>Refund Policy</span>
            </div>
            <div className={styles.buyerProtection}>
            <p>
                As a buyer, when you purchase on Scavenge using the Pay Now button, you are covered by the Buyer Protection. This means that if your item does not arrive, or if it arrives damaged or not as described, we refund you.
            </p>
            <h3>How to benefit from Buyer Protection?</h3>
            <ul>
                <li>
                    If your item arrives damaged or is significantly not as described, you have 4 days after the order was marked as "delivered" to request a return. 
                    <ul style={{marginTop: "10px"}}>
                        <li>
                              If the item turns out not to be authentic or has been damaged in transit, a request will be sent to our Support team for review and response. If your request is approved, we will cancel the order and process your refund.<a href='/requestReturn' style={{textDecoration: "none"}}> How to request a return</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <p>
                If you miss the 4-day deadline or click the delivered button, the Buyer Protection will end, your order will be finalized and the payment will be automatically released to the seller. This cannot be reversed.
            </p>
            <p>
                If your item has been lost during transit, please contact us via <a href="/support" style={{textDecoration: "none"}}>Help and Contact</a> and we will contact the seller and cancel the order where necessary so you can be refunded.
            </p>
            <h3>What is refunded?</h3>
            <p>
                You’ll get a refund if your order is not as described or arrived damaged. You will be refunded based on the resolution of the support team and seller’s confirmation receipt of the returned package, depending on the situation.
            </p>
            <h3>When will you receive the refund?</h3>
            <p>
                Your refund will be issued within 5 business days to your Scavenge wallet.
            </p>
        </div>
            
        </div>
    );
}
