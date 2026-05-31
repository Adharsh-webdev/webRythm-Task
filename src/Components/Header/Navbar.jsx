
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className={`tw-navbar ${isOpen ? 'is-open' : ''}`}>
        <div className="tw-navbar-container">

          {/* Brand Logo */}
          <div className="tw-navbar-logo">The Wall</div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="tw-navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Links */}
          <div className="tw-navbar-links">
            <a href="#about" onClick={() => setIsOpen(false)} className="tw-navbar-link">About</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="tw-navbar-link">Features</a>
            <a href="#applications" onClick={() => setIsOpen(false)} className="tw-navbar-link">Applications</a>
            <a href="#products" onClick={() => setIsOpen(false)} className="tw-navbar-link">Products</a>
            <a href="#resale" onClick={() => setIsOpen(false)} className="tw-navbar-link">Resale</a>

            {/* MOBILE ONLY Contact Button (Nested inside list wrapper) */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="tw-navbar-cta tw-mobile-only"
            >
              Contact
            </a>
          </div>

          {/* DESKTOP ONLY Contact Button (Placed on header line) */}
          <a href="#contact" className="tw-navbar-cta tw-desktop-only">Contact</a>

        </div>
      </nav>




    </>
  )
}

export default Navbar
