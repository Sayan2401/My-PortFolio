import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_PUBLIC_ID
        )
            .then((result) => {
                alert('Message sent successfully!');
            }, (error) => {
                alert('Failed to send. Try again later.');
            });
    };

    return (
        <section className='container mt-4' id='contact'>
            <div className='px-3 fs-3 mb-3 about-header'>
                <i className="fas fa-paper-plane me-2 text-primary"></i>
                Contact
            </div>
            <div className="fs-2 fw-semibold my-2">
                Let's Work Together!
            </div>
            <div className='fs-5 text-secondary mb-4'>
                Reach me at <a href="mailto:chhatrasinh345@gmail.com" className='text-decoration-none text-primary'>chhatrasinh345@gmail.com</a>
            </div>

            <form className='my-3' onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="name" className='form-label'>Full Name*</label>
                        <input type="text" className='form-control' id='name' name='Name' placeholder='Your Full Name' required />
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
                        <label htmlFor="budget" className='form-label'>Your Budget</label>
                        <input type="number" className='form-control' id='budget' name='budget' placeholder='Project Budget (Optional)' />
                    </div>
                    <div className="col-12">
                        <label htmlFor="message" className='form-label'>Message</label>
                        <textarea className='form-control' id='message' name='Message' rows="1" placeholder='Write your message here...'></textarea>
                    </div>
                </div>
                <hr className='my-4' />
                <div className='text-end'>
                    <button type="submit" className='btn message-btn px-4 my-2'>
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
