import React from 'react';
import './Footer.css';
import instagramIcon from '../../assets/299_vector.png';
import facebookIcon from '../../assets/300_vector.png';
import linkedinIcon from '../../assets/301_vector.png';

const Footer = () => {
    return (
        <>

            <footer className="tw-footer">

                {/* 1. Social Icon Media Links (Top-Right on Desktop, Centered Top on Mobile) [1.1] */}
                <div className="tw-footer-socials">
                    <a href="#" className="tw-footer-social-link" aria-label="Instagram link">
                        <img src={instagramIcon} className="tw-footer-social-icon" alt="" />
                    </a>
                    <a href="#" className="tw-footer-social-link" aria-label="Facebook link">
                        <img src={facebookIcon} className="tw-footer-social-icon" alt="" />
                    </a>
                    <a href="#" className="tw-footer-social-link" aria-label="LinkedIn link">
                        <img src={linkedinIcon} className="tw-footer-social-icon" alt="" />
                    </a>
                </div>

                {/* 2. Centered Brand Title [1.1] */}
                <div className="tw-footer-brand">
                    The Wall
                </div>

                {/* 3. Centered Navigation Menu List [1.1] */}
                <div className="tw-footer-nav">
                    <a href="#about" className="tw-footer-nav-link">Home</a>
                    <a href="#features" className="tw-footer-nav-link">Features</a>
                    <a href="#products" className="tw-footer-nav-link">Products</a>
                    <a href="#about" className="tw-footer-nav-link">About Us</a>
                </div>

            </footer>

        </>
    )
}

export default Footer
