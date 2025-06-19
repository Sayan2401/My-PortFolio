import React from 'react';

const Leftside = () => {
    return (
        <div className='my-5' >
            {/* Name and Role */}
            <div className="mb-3 text-center">
                <span className="fs-4 fs-md-3 text-uppercase d-block fw-bold">
                    Chhatrasinh
                </span>
                <span className="d-block fs-6">Software Developer</span>
            </div>

            {/* Profile Image */}
            <div className='img-container m-3'>
                <img
                    src="1695220906205.jpg"
                    alt="Profile"
                    className='img-fluid rounded'

                />
            </div>

            {/* Contact Info with Font Awesome Icons */}
            <div className="mt-3 fs-5 p-2 text-start">
                <span className="d-block mb-3 text-break">
                    <i className="fas fa-envelope me-2"></i>
                    chhatrasinh345@gmail.com
                </span>
                <span className="d-block mb-3 text-break">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    Based in Vadodara, Gujarat, India
                </span>
                <span className="d-block mb-3 text-break">
                    <i className="fas fa-phone me-2"></i>
                    9313539801
                </span>
                <span className="d-block">
                    <a
                        href="https://github.com/Sayan2401"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-decoration-none me-3 d-inline-block mb-3"
                    >
                        <i className="fab fa-github fa-lg me-2"></i> GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chhatrasinh-parmar-b25aa2318"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-decoration-none d-inline-block"
                    >
                        <i className="fab fa-linkedin-in fa-lg me-2"></i> LinkedIn
                    </a>
                </span>
                <a href="https://mail.google.com/mail/?view=cm&to=chhatrasinh345@gmail.com" target="_blank">
                    <button className='fs-5 mb-4 btn message-btn'>
                        <i className="fas fa-envelope me-2"></i> Hire Me
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Leftside;
