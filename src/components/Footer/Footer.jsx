import React from 'react';
import Styles from "./footer.module.css";

export function Footer() {
    

    return (
        <div className={Styles.footer}>
            <span>About Scavenge</span>
            <span>Safety</span>
            <span>Support</span>
            <span>User Policy</span>
            <span>Scavenge Team</span>
        </div>
    )
}