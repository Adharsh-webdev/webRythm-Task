import React from 'react';
import './Blackseal.css';
import Blacksteal from "../../assets/48_group_19.png";
import smoke from "../../assets/smoke.png";
import sunflower from "../../assets/61_group_20.png";
import upscalingImg from "../../assets/74_group_21.png";
import quantumImg from "../../assets/103_frame_29.png";

const Blackseal = () => {
  return (
    <>
      <section className="tw-blackseal-section">
        <div className="tw-blackseal-container">

          {/* Text Header Block */}
          <div className="tw-blackseal-header">
            <h2 className="tw-blackseal-title">Black Seal Technology</h2>
            <p className="tw-blackseal-desc">
              The fusion of an exceptionally black base with specialised Black Seal Technology,
              delivers deep black levels for intense contrast and immaculate detail.
            </p>
          </div>

          {/* Image Frame with Smoke Overlay */}
          <div className="tw-blackseal-image-frame">
            <img
              src={Blacksteal} // Place your exact fly drop asset here
              alt="Black Seal Fly Droplet"
              className="tw-blackseal-img"
            />


            <img
              src={smoke}
              className="tw-blackseal-smoke-img"
              alt=""
            />

          </div>

        </div>
      </section>
      <section className="tw-ultrachroma-section">
        <div className="tw-ultrachroma-container">

          {/* Header Text Block */}
          <div className="tw-ultrachroma-header">
            <h2 className="tw-ultrachroma-title">Ultra Chroma Technology</h2>
            <p className="tw-ultrachroma-desc">
              The Wall's inherent colour qualities produce vibrant and natural colour for an
              awe-inspiring visual experience, bringing details to life like never before.
            </p>
          </div>

          {/* Media Wrapper */}
          <div className="tw-ultrachroma-media-container">

            {/* Ellipse 11 positioned behind the frame */}
            <div className="tw-ultrachroma-glow-ellipse" />

            {/* Foreground Image Frame */}
            <div className="tw-ultrachroma-image-frame">
              <img
                src={sunflower} // Place your exact sunflower asset here
                alt="Ultra Chroma Sunflower Panel Display"
                className="tw-ultrachroma-img"
              />
            </div>

          </div>

        </div>
      </section>
      <section className="tw-upscaling-section">
        <div className="tw-upscaling-container">

          {/* Header Text Block */}
          <div className="tw-upscaling-header">
            <h2 className="tw-upscaling-title">AI Upscaling Technology</h2>
            <p className="tw-upscaling-desc">
              An intuitive resolution-to-screen size adaption powered by the Quantum Processor Flex,
              delivers a perfect view of reality in any size for a truly immersive experience.
            </p>
          </div>

          {/* Media Wrapper */}
          <div className="tw-upscaling-media-container">

            {/* Glowing yellow ambient ellipse backdrop */}
            <div className="tw-upscaling-glow-ellipse" />

            {/* Single Image Frame Container */}
            <div className="tw-upscaling-frame">
              <img
                src={upscalingImg}
                className="tw-upscaling-img"
                alt="AI Upscaling Split Comparison Showcase"
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </section>
      <section className='tw-quantum'>
        <div className="tw-quantum-title">
          <h1>Quantum HDR Technology</h1>
        </div>
        <div className="tw-quantum-desc">
          <p>Boasting the industry’s best picture quality engine, The Wall utilises advanced HDR picture refinement technologies to render optimum peak brightness and
            contrast in every single scene.</p>
        </div>
        <div className="tw-quantum-image">
          <img src={quantumImg} alt="Quantum HDR Technology" />
        </div>
      </section>
    </>
  )
}

export default Blackseal
