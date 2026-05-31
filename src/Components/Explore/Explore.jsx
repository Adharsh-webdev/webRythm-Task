import React from 'react';
import optionImg1 from '../../assets/127_layer_1.png';
import optionImg2 from '../../assets/138_layer_1.png';
import './Explore.css';

const Explore = () => {
    return (
        <>
            <section className="tw-explore-section">
                <div className="tw-explore-container">

                    {/* Main Section Header */}
                    <h2 className="tw-explore-main-title">Explore Our Other Options</h2>

                    {/* 2-Column Options Grid [1] */}
                    <div className="tw-explore-grid">

                        {/* Left Column: All-In-One-Series */}
                        <div className="tw-explore-column">
                            <div className="tw-explore-image-frame">
                                <img src={optionImg1} alt="The Wall All-In-One-Series" className="tw-explore-img" />
                            </div>

                            <div className="tw-explore-content">
                                <h3 className="tw-explore-title">The Wall <br /> (All-In-One-Series)</h3>
                                <p className="tw-explore-subtitle">Speaker And Control Unit In-Built</p>

                                {/* Width synchronized perfectly to align edge-to-edge with the image above [1] */}
                                <div className="tw-explore-details-wrapper">
                                    <p className="tw-explore-desc">
                                        <span className='tw-variants-headtitle'>Variants Available:</span> <br />
                                        A) 110 And 146 Inches In 2K Resolution<br />
                                        B) 110 And 146 Inches In 4K Resolution
                                    </p>
                                    <button className="tw-explore-quote-btn">Get Quote</button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Custom-In Wall Series */}
                        <div className="tw-explore-column">
                            <div className="tw-explore-image-frame">
                                <img src={optionImg2} alt="The Wall Custom-In Wall Series" className="tw-explore-img" />
                            </div>

                            <div className="tw-explore-content">
                                <h3 className="tw-explore-title">The Wall <br /> (Custom-In Wall Series)</h3>
                                <p className="tw-explore-subtitle">Speaker And Control Unit Sold Seperately</p>

                                <div className="tw-explore-details-wrapper-right">
                                    <p className="tw-explore-desc tw-desc-centered">
                                        Started With 250” Can Be Expanded<br />
                                        To Your Imagination
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default Explore
