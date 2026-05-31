import React from 'react';
import './Resale.css';
import resalePanels from '../../assets/237_group_18.png';
import arrowIcon from '../../assets/262_polygon_7.png';

const Resale = () => {
    return (
        <>
            <section id="resale" className="tw-resale-section">
                <div className="tw-resale-container">

                    {/* Main Section Header */}
                    <h2 className="tw-resale-main-title">For Resale</h2>

                    {/* Perspective Screen Mockup Frame */}
                    <div className="tw-resale-media-wrapper">
                        <img
                            src={resalePanels}
                            alt="Resale perspective screens"
                            className="tw-resale-panels-img"
                        />
                    </div>

                    {/* Benefits Checklist Container */}
                    <div className="tw-resale-benefits-box">
                        <h3 className="tw-resale-benefits-title">Benefits</h3>

                        {/* Responsive 2-Column Checklist Grid */}
                        <div className="tw-resale-grid">

                            <div className="tw-resale-item">
                                <img src={arrowIcon} className="tw-resale-bullet" alt="" />
                                <span>Tailored Solutions And Support Services</span>
                            </div>

                            <div className="tw-resale-item">
                                <img src={arrowIcon} className="tw-resale-bullet" alt="" />
                                <span>Best Discounted Price</span>
                            </div>

                            <div className="tw-resale-item">
                                <img src={arrowIcon} className="tw-resale-bullet" alt="" />
                                <span>Strategic Marketing And Branding Opportunities</span>
                            </div>

                            <div className="tw-resale-item">
                                <img src={arrowIcon} className="tw-resale-bullet" alt="" />
                                <span>Exclusive Access To Cutting-Edge Technology</span>
                            </div>

                        </div>
                    </div>

                    {/* Centered Outline Contact us Button */}
                    <div className="tw-resale-btn-wrapper">
                        <a href="#contact" className="tw-resale-cta-btn">Contact us</a>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Resale
