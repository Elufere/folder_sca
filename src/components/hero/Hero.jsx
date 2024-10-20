import React from 'react';
import Styles from "./hero.module.css";
import { Link } from 'react-router-dom';

export function Hero() {
    
    return (
        <div className={Styles.hero}>
            <div className={Styles.top}>
                <div className={Styles.left}>
                    <h2>Nigeria’s trusted e-commerce platform for selling and donating pre-loved items</h2>
                    <p>Scavenge App connects communities to buy, sell and donate gently used items to anyone and anywhere in Nigeria.</p>
                </div>
                <div className={Styles.right}>
                    <img src="./images/phone.jpeg" alt="" />
                </div>
                <div className={Styles.appDownload}>
                    <span style={{color: "rgba(0,0,0,1)"}}>Download Scavenge App on</span>
                    <div className={Styles.downloadWrapper}>
                        <Link to="https://play.google.com/store/apps/details?id=com.michofatapps.scavenge&hl=en_US">
                            <img src="./images/google.PNG" alt="" />
                        </Link>
                        <img src="./images/apple.PNG" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}