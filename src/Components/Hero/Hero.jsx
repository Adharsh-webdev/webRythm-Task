import './Hero.css';
import heroImg from '../../assets/Hero-Images/4_rectangle.png';
import instagramIcon from '../../assets/Hero-Images/35_vector.png';
import facebookIcon from '../../assets/Hero-Images/36_vector.png';
import twitterIcon from '../../assets/Hero-Images/37_vector.png';
import FirstImage from '../../assets/key feature images/18_pexels_ekamelev_8169649_1.png';
import SecondImage from '../../assets/key feature images/21_pexels_pixabay_163235_1.png';
import ThirdImage from '../../assets/key feature images/24_pexels_tracehudson_2896668_1.png';
import FourthImage from '../../assets/key feature images/27_florida_map_acrylic_1125_1.png';
import videoPlaceholder from '../../assets/38_frame_17.png';
const cardData = [
  {
    title: "Micro LED Technology",
    desc: "Witness an unmatched image presentation on a whole new scale",
    img: FirstImage
  },
  {
    title: "One-of-a-kind Visuals",
    desc: "Experience pure visual innovation derived from best-in-class picture technologies",
    img: SecondImage
  },
  {
    title: "Infinity Design",
    desc: "Choose what you want to see from a diverse selection of entertainment and lifestyle content",
    img: ThirdImage
  },
  {
    title: "Total UX",
    desc: "Make a statement with subtle refinement in a seamless, sophisticated design",
    img: FourthImage
  }
];

const Hero = () => {
  return (
    <>
      <section id="about" className="tw-hero">

        <div className="tw-hero-img">
          <img src={heroImg} alt="Samsung The Wall Screen Background" />
        </div>
        {/* Social Sidebar */}
        <div className="social-bar">
          <div className="line"></div>
          <a href="#instagram"><img src={instagramIcon} alt="instagram" /></a>
          <a href="#facebook"><img src={facebookIcon} alt="facebook" /></a>
          <a href="#twitter"><img src={twitterIcon} alt="twitter" /></a>
          <div className="line"></div>
        </div>

        {/* Hero Content Area */}
        <div className="tw-hero-content">
          {/* Top Group */}
          <div className="tw-hero-top-group">
            <h1 className="tw-hero-title">
              Samsung <span className="light-text">the Wall</span> Series
            </h1>
            <div className="sizes">
              <span>110 2K</span>
              <span className="separator">|</span>
              <span>146 2K</span>
              <span className="separator">|</span>
              <span>146 4K</span>
            </div>
          </div>

          {/* Bottom Group */}
          <div className="tw-hero-bottom-group">
            <div className="tw-hero-price">
              <p className="tw-hero-price-label">
                Offer Price : <span className="tw-hero-price-val">34,399 AED</span>
              </p>
            </div>

            <div className="tw-hero-cta">
              <button className="tw-hero-buy-btn">Buy Now</button>
            </div>

            <p className="tw-hero-footer-text">World's first MICROLED technology</p>
          </div>
        </div>
      </section>
      <section id="features" className="tw-features">
        <h2 className="tw-features-title">Key Features</h2>
        <div className="sm-cards-grid">
          {cardData.map((card, idx) => (
            <div key={idx} className="sm-feature-card">


              <img
                src={card.img}
                alt={card.title}
                className="sm-card-bg-img"
              />

              {/* Frosted Glass overlay block at the bottom */}
              <div className="sm-card-glass-overlay">
                <h3 className="sm-card-title">{card.title}</h3>
                <p className="sm-card-desc">{card.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </section>
      <section className='tw-video'>
        <img src={videoPlaceholder} alt="Video Placeholder" />
      </section>
    </>
  );
};

export default Hero;