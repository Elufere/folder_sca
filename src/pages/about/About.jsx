import React, { useState } from 'react';
import AboutStyles from './about.module.css';
import { BiArrowBack } from 'react-icons/bi';
import { IoChevronForwardSharp } from 'react-icons/io5';
import { HowItWorks } from '../../components/howItWorks/HowItWorks';
import { AboutSca } from "../../components/aboutSca/AboutSca";
import { Shipping } from '../../components/shipping/Shipping';
import { UploadingItem } from '../../components/uploadingItem/UploadingItem';
import { GetPaid } from '../../components/getPaid/GetPaid';
import { SetPrice } from '../../components/setPrice/SetPrice';
import { BuyerProtection } from '../../components/buyerProtection/BuyerProtection';
import Spotlight from "../../components/spotlight/Spotlight";

export function About() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <div className={AboutStyles.about}>
            <div className={AboutStyles.header}>
                <BiArrowBack className={AboutStyles.headerIcon} />
                <span className={AboutStyles.headerH}>About</span>
            </div>
            <div className={AboutStyles.wrapper}>
                <ul className={AboutStyles.list} >
                    <li onClick={() => toggleDropdown(0)}>About Scavenge <IoChevronForwardSharp /></li>
                    {openDropdown === 0 && <AboutSca />}
                    
                    <li onClick={() => toggleDropdown(1)}>How it works <IoChevronForwardSharp /></li>
                    {openDropdown === 1 && <HowItWorks />}
                    
                    <li >Safety <IoChevronForwardSharp /></li> 
                    
                    <li>What you can sell on Scavenge <IoChevronForwardSharp /></li>
                    
                    <li onClick={() => toggleDropdown(4)}>Shipping and Delivery <IoChevronForwardSharp /></li>
                    {openDropdown === 4 && <Shipping />}
                    
                    <li onClick={() => toggleDropdown(5)}>Selling your items faster <IoChevronForwardSharp /></li>
                    {openDropdown === 5 && <Spotlight />}
                    
                    <li onClick={() => toggleDropdown(6)}>Uploading an item step by step <IoChevronForwardSharp /></li>
                    {openDropdown === 6 && <UploadingItem />}
                    
                    <li onClick={() => toggleDropdown(7)}>Getting paid on Scavenge <IoChevronForwardSharp /></li>
                    {openDropdown === 7 && <GetPaid />}
                    
                    <li onClick={() => toggleDropdown(8)}>How to set a correct price? <IoChevronForwardSharp /></li>
                    {openDropdown === 8 && <SetPrice />}
                    
                    <li onClick={() => toggleDropdown(9)}>Buyer protection <IoChevronForwardSharp /></li>
                    {openDropdown === 9 && <BuyerProtection />}
                </ul>
            </div>
        </div>
    );
}