import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState(''); // 'success' or 'error'

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_ID
        )
            .then(() => {
                setStatusMessage('Message sent successfully!');
                setStatusType('success');
                e.target.reset(); // Clear the form
            })
            .catch(() => {
                setStatusMessage('Failed to send. Please try again later.');
                setStatusType('error');
            });
    };

    return (
        <section className='mt-4' id='contact'>
            <div className='px-3 fs-3 mb-3 about-header'>
                <i className="fas fa-paper-plane me-2 text-primary"></i>
                Contact
            </div>
            <div className="fs-2 fw-semibold my-2">
                Let's Work Together!
            </div>
            <div className='fs-5 text-secondary mb-4'>
                Reach me at <a href="https://mail.google.com/mail/?view=cm&to=chhatrasinh345@gmail.com" className='text-decoration-none text-primary' target="_blank" rel="noopener noreferrer">chhatrasinh345@gmail.com</a>
            </div>

            <form className='mt-3' onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="name" className='form-label'>Full Name*</label>
                        <input type="text" className='form-control' id='name' name='name' placeholder='Your Full Name' required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className='form-label'>Email*</label>
                        <input type="email" className='form-control' id='email' name='email' placeholder='Your Email' required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Phone" className='form-label'>Phone</label>
                        <input type="tel" className='form-control' id='Phone' name='Phone' placeholder='Your Phone Number' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="budget" className='form-label'>Your Budget (Optional)</label>
                        <input type="number" className='form-control' id='budget' name='budget' placeholder='Project Budget' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="company" className='form-label'>Company*</label>
                        <input type="text" className='form-control' id='company' name='company' placeholder='Your Company' required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="website" className='form-label'>Your Company Website*</label>
                        <input type="text" className='form-control' id='website' name='website' placeholder='Company Website' required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="Message" className='form-label'>Message</label>
                        <textarea className='form-control' id='Message' name='Message' rows="4" placeholder='Write your message here...'></textarea>
                    </div>
                    <input type="hidden" name="time" value={new Date().toLocaleString()} />
                </div>
                <hr className='my-4' />
                <div className='text-end'>
                    <button type="submit" className='btn message-btn px-4 my-2 mb-5'>
                        Send Message
                    </button>
                </div>
            </form>

            {statusMessage && (
                <div
                    className="toast-container position-fixed top-0 end-0 p-3"
                    style={{ zIndex: 9999 }}
                >
                    <div
                        className={`toast show align-items-center text-white ${statusType === 'success' ? 'bg-success' : 'bg-danger'
                            } border-0`}
                        role="alert"
                    >
                        <div className="d-flex">
                            <div className="toast-body">
                                {statusMessage}
                            </div>
                            <button
                                type="button"
                                className="btn-close btn-close-white me-2 m-auto"
                                onClick={() => setStatusMessage('')}
                            ></button>
                        </div>
                    </div>
                </div>
            )}


        </section>
    );
};

export default Contact;