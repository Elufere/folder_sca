import React from 'react';
import Styles from "./uploadingItem.module.css";

export function UploadingItem() {
    

    return (
        <div className={Styles.uploadingItem}>
            <p>Here’s how to upload an item on Scavenge:</p>  
            <p style={{marginTop:"49px"}}>1. Add 1–10 clear, sharp photos</p>
            <p style={{marginTop:"-20px"}}>2. Add a title and describe your item in detail</p>
            <p style={{marginTop:"-20px"}}>3. Select the appropriate category for the item you’re selling</p>
            <p style={{marginTop:"-20px"}}>4. Insert a competitive price</p>
            <p>In both the description and photos, you should note any defects, alterations, missing parts, etc. of the item.</p>
            <p>The items you upload must fit the existing categories on Scavenge.</p>
        </div>
    )
}