import React from 'react';
import Styles from "./support.module.css";
import { BiArrowBack } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

export function Support() {
    return (
        <div className={Styles.support}>
            <div className={Styles.header}>
                <BiArrowBack className={Styles.iconBack} />
                <p className={Styles.headerH}>Help & Contact</p>
            </div>
            <h2>How can we be of help?</h2>
            <div className={Styles.phone}>
                <div className={Styles.phoneInfo}>
                    <span>
                        <FaPhoneVolume style={{color: "rgba(37,128,179,1)"}} />
                        Phone 
                    </span>
                    <p className={Styles.team}>Speak to a member <br />of our team</p>
                    <p className={Styles.phoneNum}>03457302011</p>
                </div>
                <div className={Styles.iconForward}>
                    <IoIosArrowForward />
                </div> 
            </div>
            <div className={Styles.mail}>
                <div className={Styles.mailInfo}>
                    <span>
                        <CiMail style={{color: "rgba(37,128,179,1)", fontSize: "43px"}} />
                        Email 
                    </span>
                    <p className={Styles.mailTeam}>Send us an email <br /> and get prompt <br />response</p>
                    <p className={Styles.email}>customer.service@nationwide.co.uk</p>
                </div>
                 <div className={Styles.iconForward}>
                    <IoIosArrowForward />
                </div> 
            </div>
        </div>
    );
}