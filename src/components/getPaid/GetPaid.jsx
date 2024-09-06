import React from 'react';
import  Styles from "./getPaid.module.css";

export function GetPaid() {

    return (
        <div className={Styles.getPaid}>
            <p>
                 The earnings you receive from your sold items (regardless of the buyer’s payment method) go to your Scavenge account and safely stay there.
            </p>
            <span>Important</span>
            <p> 
                Please note that during the selling process, after using the Buy now button, Scavenge will never ask for your personal information, such as your email address or phone number.
            </p>
            <span>Pending balance</span>
            <p>
                 Firstly, the money from your sale and shipping cost will appear as Pending in your Scavenge Balance until the order is completed.
            </p>
            <span>Available balance</span>
            <p>
                 After the order is completed, then you can  move your funds to your bank account.
            </p>
            <span>Completed order</span>
            <p>An order is completed when:</p>
            <p>&#8226; The buyer comfirms the delivery of the item without verifiable</p>
        </div>
    )
}