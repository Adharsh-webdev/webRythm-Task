import React from 'react';
import './Great.css';
import imgWoodForest from '../../assets/270_frame_45.png'; // Top-left
import imgConcreteTunnel from '../../assets/272_frame_46.png'; // Middle-left
import imgWhiteForest from '../../assets/274_frame_47.png'; // Bottom-left
import imgJoshuaPatio from '../../assets/276_frame_48.png'; // Large featured image
import imgIceCaveSofa from '../../assets/278_frame_49.png'; // Bottom-middle
import imgGrandCanyon from '../../assets/280_frame_50.png'; // Bottom-right

const Great = () => {
    return (
        <>
            <section className="tw-spaces-section">
                <div className="tw-spaces-container">

                    {/* Section Heading & Subheading */}
                    <div className="tw-spaces-header">
                        <h2 className="tw-spaces-main-title">Greatness In Any Space</h2>
                        <p className="tw-spaces-sub-desc">
                            Sophisticated Both Inside And Out, The Wall Is A Visual Complement For Your Space.
                        </p>
                    </div>

                    {/* 3x3 CSS Grid Layout [1] */}
                    <div className="tw-spaces-grid">

                        {/* 1. Top-Left: Wood wall, golden forest display [1] */}
                        <div className="tw-spaces-item tw-spaces-wood-forest">
                            <img src={imgConcreteTunnel} alt="Wood forest interior display" className="tw-spaces-img" />
                        </div>

                        {/* 2. Middle-Left: White concrete, circular tunnel display [1] */}
                        <div className="tw-spaces-item tw-spaces-concrete-tunnel">
                            <img src={imgWhiteForest} alt="Concrete tunnel display" className="tw-spaces-img" />
                        </div>

                        {/* 3. Bottom-Left: White interior, dark forest display [1] */}
                        <div className="tw-spaces-item tw-spaces-white-forest">
                            <img src={imgJoshuaPatio} alt="Minimal forest display" className="tw-spaces-img" />
                        </div>

                        {/* 4. Large Featured Image: Spans Col 2-3 & Row 1-2 [1] */}
                        <div className="tw-spaces-item tw-spaces-joshua-patio">
                            <img src={imgWoodForest} alt="Joshua tree outdoor patio display" className="tw-spaces-img" />
                        </div>

                        {/* 5. Bottom-Middle: Sunken gray sofa, ice cave display [1] */}
                        <div className="tw-spaces-item tw-spaces-ice-cave-sofa">
                            <img src={imgIceCaveSofa} alt="Ice cave sunken sofa display" className="tw-spaces-img" />
                        </div>

                        {/* 6. Bottom-Right: Grand Canyon display [1] */}
                        <div className="tw-spaces-item tw-spaces-grand-canyon">
                            <img src={imgGrandCanyon} alt="Grand Canyon display" className="tw-spaces-img" />
                        </div>

                    </div>

                </div>
            </section>


        </>
    )
}

export default Great
