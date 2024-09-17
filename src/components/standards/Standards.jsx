import React from 'react';
import StandardStyles from "./standards.module.css";
import { IoCheckmarkOutline } from "react-icons/io5";


export function Standards() {
    

    return (
        <div className={StandardStyles.standards}>
            <div className={StandardStyles.left}>
                <h2>Enterprise-grade security</h2>
                <span>We embrace robust security solutions that aligns with global best standards</span>
            </div>
            <div className={StandardStyles.right}>
                <span><IoCheckmarkOutline /> SSL/TLS Encryption</span>
                <span><IoCheckmarkOutline /> Payment Gateway Security</span>
                <span><IoCheckmarkOutline /> Two-Factor Authentication</span>
                <span><IoCheckmarkOutline /> Secure Login</span>
                <span><IoCheckmarkOutline /> Fund Protection</span>
                <span><IoCheckmarkOutline /> Digital Signature</span>
                <span><IoCheckmarkOutline /> Fraud Detection Sy</span>
            </div>
        </div>
    );
}
