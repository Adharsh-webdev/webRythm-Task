
import React from 'react'
import './Products.css'
import prodImg1 from '../../assets/153_layer_1.png'; // Purple display mockup
import prodImg2 from '../../assets/167_layer_1.png'; // Pink/Blue display mockup
const Products = () => {
    return (
        <>


            <section id="products" className="tw-shop-section">
                <div className="tw-shop-container">

                    {/* Section Header */}
                    <h2 className="tw-shop-main-title">Shop The Wall Products</h2>

                    {/* 3-Column Product Grid [1.1] */}
                    <div className="tw-shop-grid">

                        {/* Card 1 */}
                        <div className="tw-shop-card">
                            <div className="tw-shop-media">
                                <img src={prodImg1} alt="The Wall (P1.2)" className="tw-shop-img" />
                            </div>
                            <div className="tw-shop-info">
                                <h4 className="tw-shop-title">The Wall (P1.2)</h4>
                                <button className="tw-shop-buy-btn">Buy Now</button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="tw-shop-card">
                            <div className="tw-shop-media">
                                <img src={prodImg1} alt="The Wall (P1.6)" className="tw-shop-img" />
                            </div>
                            <div className="tw-shop-info">
                                <h4 className="tw-shop-title">The Wall (P1.6)</h4>
                                <button className="tw-shop-buy-btn">Buy Now</button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="tw-shop-card">
                            <div className="tw-shop-media">
                                <img src={prodImg2} alt="The Wall - Remote Power Ready (P0.84) (TAA-Compliant†)" className="tw-shop-img" />
                            </div>
                            <div className="tw-shop-info">
                                <h4 className="tw-shop-title">
                                    The Wall - Remote Power Ready <br /> (P0.84) (TAA-Compliant†)
                                </h4>
                                <button className="tw-shop-buy-btn">Buy Now</button>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="tw-shop-card">
                            <div className="tw-shop-media">
                                <img src={prodImg2} alt="The Wall - Remote Power Ready (P1.2) (TAA-Compliant†)" className="tw-shop-img" />
                            </div>
                            <div className="tw-shop-info">
                                <h4 className="tw-shop-title">
                                    The Wall - Remote Power Ready <br /> (P1.2) (TAA-Compliant†)
                                </h4>
                                <button className="tw-shop-buy-btn">Buy Now</button>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="tw-shop-card">
                            <div className="tw-shop-media">
                                <img src={prodImg2} alt="The Wall - Remote Power Ready (P1.6) (TAA-Compliant†)" className="tw-shop-img" />
                            </div>
                            <div className="tw-shop-info">
                                <h4 className="tw-shop-title">
                                    The Wall - Remote Power Ready <br /> (P1.6) (TAA-Compliant†)
                                </h4>
                                <button className="tw-shop-buy-btn">Buy Now</button>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="tw-shop-card">
                            <div className="tw-shop-media">
                                <img src={prodImg2} alt="The Wall Professional Bundle - F-IW008J" className="tw-shop-img" />
                            </div>
                            <div className="tw-shop-info">
                                <h4 className="tw-shop-title">
                                    The Wall Professional Bundle <br /> - F-IW008J
                                </h4>
                                <button className="tw-shop-buy-btn">Buy Now</button>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default Products
