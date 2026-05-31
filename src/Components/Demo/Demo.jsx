import React, { useState } from 'react'
import downloadIcon from '../../assets/115_material_symbols_download_sharp.png';
import livingBg1 from '../../assets/109_samsung_microled_2_e1607550164517_1.png';
import livingBg2 from '../../assets/109_samsung_microled_2_e1607550164517_1.png';
import buisenessBg1 from '../../assets/118_samsung_microled_2_e1607550164517_1.png';
import buisenessBg2 from '../../assets/118_samsung_microled_2_e1607550164517_1.png';
import controlRoomImg from '../../assets/204_frame_31.png';
import corporateImg from '../../assets/206_frame_32.png';
import retailImg from '../../assets/215_frame_31.png';
import residentialImg from '../../assets/217_frame_32.png';
import studioImg from '../../assets/226_frame_31.png';
import appblockImg from '../../assets/228_frame_32.png';
import './Demo.css';
const Demo = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Background slides specifically for the "For Living" section [1.1]
  const slides = [livingBg1, livingBg2];
  const buisnessSlides = [buisenessBg1, buisenessBg2]; // Placeholder: Replace with actual business images when available
  return (

    <>
      <section id="living" className="tw-living-section">

        {/* 2. Full-bleed background slideshow layer [1.1] */}
        <div className="tw-living-bg-container">
          {slides.map((img, idx) => (
            <div
              key={idx}
              className={`tw-living-bg-slide ${activeSlide === idx ? 'tw-active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          {/* Dark mask overlay to keep white text readable against any image */}
          <div className="tw-living-overlay-mask" />
        </div>

        {/* 3. Static content layer positioned on top [1.1] */}
        <div className="tw-living-content-wrapper">

          {/* Top Left Description */}
          <div className="tw-living-header-group">
            <h2 className="tw-living-title">For Living</h2>
            <p className="tw-living-desc">
              Distinguish your residence and intrigue guests with an elegant masterpiece
              engineered to defy the limits of visual innovation.
            </p>
          </div>

          {/* Bottom Left Rectangular Pill Button [1.1] */}
          <div className="tw-living-bottom-left">
            <button className="tw-living-download-btn">
              <img src={downloadIcon} className="tw-living-download-icon" alt="" />
              <span>Download Brochure</span>
            </button>
          </div>

          {/* Centered Pagination Dots [1.1] */}
          <div className="tw-living-dots-container">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`tw-living-dot ${activeSlide === idx ? 'tw-dot-active' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </section>

      <section id="business" className="tw-business-section">

        {/* 2. Full-bleed background slideshow layer [1.1] */}
        <div className="tw-business-bg-container">
          {buisnessSlides.map((img, idx) => (
            <div
              key={idx}
              className={`tw-business-bg-slide ${activeSlide === idx ? 'tw-active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          {/* Dark mask overlay to keep white text readable against any image */}
          <div className="tw-business-overlay-mask" />
        </div>

        {/* 3. Static content layer positioned on top [1.1] */}
        <div className="tw-business-content-wrapper">

          {/* Top Left Description */}
          <div className="tw-business-header-group">
            <h2 className="tw-business-title">For Business</h2>
            <p className="tw-business-desc">
              Transform your workspace into a cutting-edge environment that inspires productivity and innovation.
            </p>
          </div>

          {/* Bottom Left Rectangular Pill Button [1.1] */}
          <div className="tw-business-bottom-left">
            <button className="tw-business-download-btn">
              <img src={downloadIcon} className="tw-business-download-icon" alt="" />
              <span>Download Brochure</span>
            </button>
          </div>

          {/* Centered Pagination Dots [1.1] */}
          <div className="tw-business-dots-container">
            {buisnessSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`tw-business-dot ${activeSlide === idx ? 'tw-dot-active' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </section>
      <section className="tw-appblocks-section">
        <div className="tw-appblocks-container">

          {/* 1. CONTROL ROOM (Text Left, Image Right) [1.1] */}
          <div className="tw-appblock-grid">
            <div className="tw-appblock-text-col">
              <h3 className="tw-appblock-title">Control Room</h3>
              <p className="tw-tw-appblock-desc">
                Ensure decision makers are empowered with secure, crystal-clear information in real-time, supported by 24/7 performance.
              </p>
              <button className="tw-appblock-download-btn">
                <img src={downloadIcon} className="tw-appblock-download-icon" alt="" />
                <span>Download Brochure</span>
              </button>
            </div>
            <div className="tw-appblock-image-col">
              <div className="tw-appblock-image-frame">
                <img src={controlRoomImg} alt="Control Room Display" className="tw-appblock-img" />
              </div>
            </div>
          </div>

          {/* 2. CORPORATE (Image Left, Text Right - REVERSED) [1.1] */}
          <div className="tw-appblock-grid tw-reversed">
            <div className="tw-appblock-text-col">
              <h3 className="tw-appblock-title">Corporate</h3>
              <p className="tw-tw-appblock-desc">
                The Wall is the standout centerpiece for virtually any lobby or boardroom, allowing you to highlight your values and communicate in profound ways.
              </p>
              <button className="tw-appblock-download-btn">
                <img src={downloadIcon} className="tw-appblock-download-icon" alt="" />
                <span>Download Brochure</span>
              </button>
            </div>
            <div className="tw-appblock-image-col">
              <div className="tw-appblock-image-frame">
                <img src={corporateImg} alt="Corporate Lobby Display" className="tw-appblock-img" />
              </div>
            </div>
          </div>

          {/* 3. RETAIL (Text Left, Image Right) [1.1] */}
          <div className="tw-appblock-grid">
            <div className="tw-appblock-text-col">
              <h3 className="tw-appblock-title">Retail</h3>
              <p className="tw-tw-appblock-desc">
                Lure customers into stores and increase revenue with eye-catching branding and experiential walls integrated into overall store designs.
              </p>
              <button className="tw-appblock-download-btn">
                <img src={downloadIcon} className="tw-appblock-download-icon" alt="" />
                <span>Download Brochure</span>
              </button>
            </div>
            <div className="tw-appblock-image-col">
              <div className="tw-appblock-image-frame">
                <img src={retailImg} alt="Retail Store Experiential Display" className="tw-appblock-img" />
              </div>
            </div>
          </div>

          {/* 4. RESIDENTIAL (Image right, Text left - REVERSED) [1.1] */}
          <div className="tw-appblock-grid tw-reversed">
            <div className="tw-appblock-text-col">
              <h3 className="tw-appblock-title">Residential</h3>
              <p className="tw-tw-appblock-desc">
                Distinguish your residence and intrigue guests with an elegant masterpiece engineered to defy the limits of visual innovation.
              </p>
              <button className="tw-appblock-download-btn">
                <img src={downloadIcon} className="tw-appblock-download-icon" alt="" />
                <span>Download Brochure</span>
              </button>
            </div>
            <div className="tw-appblock-image-col">
              <div className="tw-appblock-image-frame">
                <img src={residentialImg} alt="Luxury Residential Display" className="tw-appblock-img" />
              </div>
            </div>
          </div>

          {/* 5. STUDIO (Text right, Image left) [1.1] */}
          <div className="tw-appblock-grid">
            <div className="tw-appblock-text-col">
              <h3 className="tw-appblock-title">Studio</h3>
              <p className="tw-tw-appblock-desc">
                The Wall is built for virtually any studio environment, ensuring accurate and efficient content during live broadcasts or virtual production for a smooth, seamless delivery.
              </p>
              <button className="tw-appblock-download-btn">
                <img src={downloadIcon} className="tw-appblock-download-icon" alt="" />
                <span>Download Brochure</span>
              </button>
            </div>
            <div className="tw-appblock-image-col">
              <div className="tw-appblock-image-frame">
                <img src={studioImg} alt="Virtual Studio Production" className="tw-appblock-img" />
              </div>
            </div>
          </div>

          <div className="tw-appblock-grid tw-reversed">
            <div className="tw-appblock-text-col">
              <h3 className="tw-appblock-title">Residential</h3>
              <p className="tw-tw-appblock-desc">
                Distinguish your residence and intrigue guests with an elegant masterpiece engineered to defy the limits of visual innovation.
              </p>
              <button className="tw-appblock-download-btn">
                <img src={downloadIcon} className="tw-appblock-download-icon" alt="" />
                <span>Download Brochure</span>
              </button>
            </div>
            <div className="tw-appblock-image-col">
              <div className="tw-appblock-image-frame">
                <img src={appblockImg} alt="Luxury Residential Display" className="tw-appblock-img" />
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default Demo
