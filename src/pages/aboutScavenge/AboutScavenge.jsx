import React from 'react';
import Styles from "./aboutScavenge.module.css";
import { BiArrowBack } from 'react-icons/bi';

export function AboutScavenge() {
    

    return (
        <div className={Styles.aboutScavenge}>
            <div className={Styles.header}>
                <BiArrowBack className={Styles.headerIcon} />
                <span className={Styles.headerH}>About Scavenge</span>
            </div>
           <div className={Styles.wrapper}>
            <p>
                    Scavenge is an online peer-to-peer e-commerce platform, where the charm of pre-loved items meets the convenience of digital shopping. Explore a curated marketplace where sellers share their unique treasures, offering a diverse range of pre-loved items waiting for a new home.
                </p>
                <p>
                    At Scavenge, we believe in the stories behind every item, and our platform is a testament to the enduring appeal of second-hand finds. Discover a sustainable shopping experience where quality meets affordability, and each purchase contributes to a more eco-conscious lifestyle.
                </p>

                <h2>Why Choose Us?</h2>
                <p>
                    Curated Selection:Our platform features a carefully curated selection of pre-loved items, ensuring quality and authenticity in every purchase.
                </p>

                <h3>Community-driven</h3>
                <p>
                    Connect with like-minded individuals who appreciate the value of well-loved possessions. Build a community where buyers and sellers share their passion for unique finds.
                </p>

                <h3>Sustainability</h3>
                <p>
                    Embrace a sustainable lifestyle by extending the lifespan of items. Reduce waste and contribute to a greener planet with every pre-loved purchase.
                </p>

                <h2>Sell with Confidence</h2>
                <p>
                    Become a seller on Scavenge and open your virtual shop to a global audience. Whether it's fashion, furniture, or more – your pre-loved items have a place here. Our platform is designed to make the selling process seamless, providing you with the tools you need to showcase your items in the best light.
                </p>

                <h3>Easy Listing and Transactions</h3>
                <p>
                    Our user-friendly interface ensures that listing your items is a breeze. Set your price, add captivating descriptions, and let your items find their next home. Secure transactions provide peace of mind for both sellers and buyers, fostering a trustworthy marketplace.
                </p>
                <p>
                    Enjoy peace of mind with our secure and user-friendly transaction system. Our platform prioritizes the safety and satisfaction of both buyers and sellers.
                </p>

                <h3>Seller Profiles</h3>
                <p>
                    Get to know the individuals behind each listing through detailed seller profiles. Transparency is key, allowing you to buy with confidence.
                </p>

                <h3>Seller Spotlight</h3>
                <p>
                    Stand out in our community with our Seller promotion feature. Showcase your unique style and the personality behind your shop. Share your passion and make your storefront a destination for buyers seeking curated, pre-loved gems.
                </p>

                <p>
                    Join us on a journey of rediscovery as you explore our virtual aisles filled with pre-loved treasures. Whether you're searching for vintage fashion, retro furniture, or unique collectibles, Scavenge is your destination for a sustainable and enjoyable shopping experience.
                </p>
                <p>
                    Indulge in the joy of finding hidden gems and giving pre-loved items a new chapter in their story. Welcome to a world where every purchase tells a tale, and every item is a piece of history waiting to be cherished once again.
                </p>
           </div>
        </div>
    );
}