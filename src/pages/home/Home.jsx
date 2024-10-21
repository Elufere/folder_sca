import React, { useEffect } from 'react';
import Styles from "./home.module.css";
import { Hero } from '../../components/hero/Hero';
import { Services } from '../../components/services/Services';
import { Security } from '../../components/security/Security';
import { Standards } from '../../components/standards/Standards';
import { Join } from '../../components/join/Join';
import { useLocation } from 'react-router-dom';

export function Home() {
    const location = useLocation();

    useEffect (()=> {

    },[location])

    return (
        <div className={Styles.home}>
               {/* <Hero />
               <Services />
               <Security /> */}
               <Standards />
               <Join />
        </div>
    );
}