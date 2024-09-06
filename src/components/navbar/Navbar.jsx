import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import { Link, useLocation } from "react-router-dom"; 
import { IoReorderThree } from "react-icons/io5";
import { MdClose } from "react-icons/md";

export function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false); 
    const [showMenuIcon, setShowMenuIcon] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (location.pathname === "/policy") {
                setShowMenuIcon(window.innerWidth <= 728);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 
        return () => window.removeEventListener('resize', handleResize);
    }, [location]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(()=>{
        setMenuOpen(false)
    },[location]);

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">
                    <span>Scavenge</span>
                </Link>
            </div>
            {showMenuIcon ? (
                <>
                    {!menuOpen ? (
                        <IoReorderThree onClick={toggleMenu} className={styles.menuIcon}/>
                    ) : (
                        <MdClose onClick={toggleMenu} className={styles.menuIcon}/>
                    )}
                    {menuOpen && (
                        <div className={styles.navLinksMobile}>
                            <Link to="/about" style={{textDecoration: "none"}}>
                                <span>About</span>
                            </Link>
                            <Link to="/policy" style={{textDecoration: "none"}}>
                                <span>User Policy</span>
                            </Link>
                            <Link to="/about" style={{textDecoration: "none"}}>
                                <span>Item Listing</span>
                            </Link>
                            <Link to="/about" style={{textDecoration: "none"}}>
                                <span>Buyer's Protection</span>
                            </Link>
                            <Link to="/about" style={{textDecoration: "none"}}>
                                <span>Seller's Protection</span>
                            </Link>
                            <Link to="/about" style={{textDecoration: "none"}}>
                                <span>Item Request</span>
                            </Link>
                            <Link to="/support" style={{textDecoration: "none"}}>
                                <span>Support</span>
                            </Link>
                            <Link to="/team" style={{textDecoration: "none"}}>
                                <span>Scavenge Team</span>
                            </Link>
                        </div>
                    )}
                </>
            ) : isMobile ? (
                <>
                    {!menuOpen ? (
                        <IoReorderThree onClick={toggleMenu} className={styles.menuIcon}/>
                    ) : (
                        <MdClose onClick={toggleMenu} className={styles.menuIcon}/>
                    )}
                    {menuOpen && (
                        <div className={styles.navLinksMobile}>
                            <Link to="/about" style={{textDecoration: "none"}}>
                                <span>About</span>
                            </Link>
                            <Link to="/policy" style={{textDecoration: "none"}}>
                                <span>User Policy</span>
                            </Link>
                            <Link to="/about" style={{textDecoration: "none"}}>
                                <span>Item Listing</span>
                            </Link>
                            <Link to="/about" style={{textDecoration: "none"}}>
                                <span>Buyer's Protection</span>
                            </Link>
                            <Link to="/about" style={{textDecoration: "none"}}>
                                <span>Seller's Protection</span>
                            </Link>
                            <Link to="/about" style={{textDecoration: "none"}}>
                                <span>Item Request</span>
                            </Link>
                            <Link to="/support" style={{textDecoration: "none"}}>
                                <span>Support</span>
                            </Link>
                            <Link to="/team" style={{textDecoration: "none"}}>
                                <span>Scavenge Team</span>
                            </Link>
                        </div>
                    )}
                </>
            ) : (
                location.pathname !== "/policy" && (
                    <div className={styles.navLinks}>
                        <Link to="/about">
                            <span>About</span>
                        </Link>
                        <Link to="/support">
                            <span>Support</span>
                        </Link>
                        <Link to="/policy">
                            <span>User Policy</span>
                        </Link>
                        <Link to="/team">
                            <span>Scavenge Team</span>
                        </Link>
                    </div>
                )
            )}
            {location.pathname === "/policy" && !showMenuIcon && (
                <div className={styles.navLinks}>
                    <Link to="/aboutScavenge">
                        <span>About Scavenge</span>
                    </Link>
                    <Link to="/about">
                        <span>Item Listing</span>
                    </Link>
                    <Link to="/about">
                        <span>Buyer Protection</span>
                    </Link>
                    <Link to="/about">
                        <span>Seller's Protection</span>
                    </Link>
                    <Link to="/about">
                        <span>Item Request</span>
                    </Link>
                    <Link to="/support">
                        <span>Support</span>
                    </Link>
                    <Link to="/policy">
                        <span>User Policy</span>
                    </Link>
                    <Link to="/team">
                        <span>Scavenge Team</span>
                    </Link>
                </div>
            )}
        </div>
    );
}
