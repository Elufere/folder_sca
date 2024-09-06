import React from 'react';
import SpotlightStyles from "./spotlight.module.css";

export default function Spotlight() {
    return (
        <div className={SpotlightStyles.spotlightContainer}>
            <h1>Using Item Spotlight & Wardrobe Showcase</h1>
            
            <p>
                The Spotlight and Wardrobe Showcase is a premium service designed to increase the visibility of your listings on our peer-to-peer e-commerce platform. By subscribing, your products will be highlighted to reach a broader audience, potentially increasing sales. This policy outlines the terms and conditions associated with the Spotlight Subscription.
            </p>

            <h2>How it works</h2>
            <p>
                When a seller subscribes to the Spotlight service, their listings are given priority in search results and category pages. This means that when a buyer searches for a product or browses a category related to the spotlighted item, those items are displayed at the top or in special sections, making them more likely to be seen.
            </p>

            <h3>Item Spotlight</h3>
            <p>To subscribe for Item Spotlight:</p>
            <ul>
                <li >Tap the upload button</li>
                <li>Upload a maximum of 10 different items</li>
                <li>Fill in your personal information</li>
                <li>Click on promote your item link</li>
                <li>Proceed to make payment</li>
                <li>Return to click on upload button</li>
            </ul>
            <p>
                Your item spotlight is activated immediately after payment and runs for a month.
            </p>

            <h3>Wardrobe Showcase</h3>
            <p>To purchase a Wardrobe Showcase:</p>
            <ul>
                <li>You’ll need at least 3 listings visible in your wardrobe.</li>
                <li>Tap the upload button</li>
                <li>Fill in your personal information</li>
                <li>Upload a maximum of 10 different items</li>
                <li>Proceed to make payment</li>
            </ul>
            <p>
                Your Wardrobe Showcase is activated immediately after payment and runs for a month.
            </p>
        </div>
    );
}
