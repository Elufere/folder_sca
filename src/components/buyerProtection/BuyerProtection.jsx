import React from 'react';
import Styles from "./buyerProtection.module.css";

export function BuyerProtection() {
    

    return (
        <div className={Styles.buyerProtection}>
            <p>
                  Our goal is to offer you a safe and secure shopping experience. The Buyer Protection Fee is designed to enhance the security and reliability of transactions, ensuring a safe environment for all users. 
            </p>
            <p>
                  The Order Protection Fee covers the costs associated with the following services:
            </p>
            <p>&#8226; Secure Payment Processing: Ensuring that your payment details are handled with the highest level of security.</p>
            <p>&#8226; Transaction Monitoring: Providing oversight to detect and prevent fraudulent activities.</p>
            <p>&#8226; Dispute Resolution: Offering assistance and support in case of disputes between buyers and sellers.</p>
            <p>&#8226; Customer Support: Access to dedicated customer service for any issues or questions related to your purchase.</p>
        </div>
    )
}