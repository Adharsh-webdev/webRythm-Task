import React, { useState } from 'react';
import './Contact.css';
import mailIcon from '../../assets/289_tabler_mail.png';
import phoneIcon from '../../assets/286_clarity_mobile_solid.png';
import pinIcon from '../../assets/283_ep_location.png';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    // Input typing state handler
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        // Clear errors dynamically in real-time as the user types [1]
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    // Pure frontend validation handler [1]
    const handleValidateOnly = (e) => {
        e.preventDefault(); // Prevents page reload
        let tempErrors = {};

        // 1. Name Check [1]
        const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
        if (!formData.name.trim()) {
            tempErrors.name = "Name is required";
        } else if (!nameRegex.test(formData.name.trim())) {
            tempErrors.name = "Please enter a valid name (letters and spaces only)";
        }
        // 2. Email Format Check [1]
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = "Please enter a valid email address";
        }

        // 3. Message Content Check [1]
        if (!formData.message.trim()) {
            tempErrors.message = "Message is required";
        }

        setErrors(tempErrors); // Triggers visual validation warning states [1]

        if (Object.keys(tempErrors).length === 0) {
            // Basic log to prove the validation passed successfully [1]
            console.log("Validation passed! Form data:", formData);
        }
    };

    return (
        <>
            <section id="contact" className="tw-contact-section">
                <div className="tw-contact-container">

                    {/* Left Column: Get In Touch Info */}
                    <div className="tw-contact-info-col">
                        <h2 className="tw-contact-main-title">Get In Touch</h2>
                        <p className="tw-contact-sub-desc">
                            Get In Touch With Our Sales Team To Discuss Tailored Solutions For Your Business.
                            You Can Call (866) 726-4249 To Talk To An Expert Now, Or Use The Form Below To Submit Your Requests.
                        </p>

                        {/* Contact Details List */}
                        <div className="tw-contact-details-list">
                            <div className="tw-contact-item">
                                <img src={mailIcon} className="tw-contact-icon" alt="" />
                                <span>lorem ipsum@gmail.com</span>
                            </div>

                            <div className="tw-contact-item">
                                <img src={phoneIcon} className="tw-contact-icon" alt="" />
                                <span>888 55 611 23</span>
                            </div>

                            <div className="tw-contact-item">
                                <img src={pinIcon} className="tw-contact-icon" alt="" />
                                <span>Lorem Ipsum</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Card (Form remains always visible) [1] */}
                    <div className="tw-contact-form-card">
                        <h3 className="tw-contact-card-title">Messege</h3>

                        <form onSubmit={handleValidateOnly} className="tw-contact-form" noValidate>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`tw-contact-input ${errors.name ? 'tw-contact-input-error' : ''}`}
                                />
                                {errors.name && <p className="tw-contact-error-text">{errors.name}</p>}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`tw-contact-input ${errors.email ? 'tw-contact-input-error' : ''}`}
                                />
                                {errors.email && <p className="tw-contact-error-text">{errors.email}</p>}
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Messege"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`tw-contact-input tw-contact-textarea ${errors.message ? 'tw-contact-input-error' : ''}`}
                                    style={{ resize: 'none' }}
                                />
                                {errors.message && <p className="tw-contact-error-text">{errors.message}</p>}
                            </div>

                            <button type="submit" className="tw-contact-submit-btn">
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact
