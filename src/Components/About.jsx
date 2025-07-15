import React from 'react';

const About = () => {
    return (
        <section id='about' className='my-4'>
            <div >
                <div className='px-3 fs-3 mb-3 about-header'>
                    <i className="fas fa-user-gear me-2 text-primary"></i>
                    About Me
                </div>
                <div className='fs-5'>
                    <p className='mb-3'>
                        Welcome to my portfolio! I'm <strong>Chhatrasinh Parmar</strong>, an aspiring software developer with hands-on experience in web development, app development, and machine learning.
                    </p>

                    <p className='mb-3'>
                        I specialize in technologies at varying levels of expertise—<strong>Beginner</strong> in MongoDB, MySQL, IoT, SAP ABAP and React, and <strong>Intermediate</strong> in Core Java, HTML5, CSS, JavaScript, Flutter, Node.js, and SQL.
                    </p>

                    <p className='mb-3'>
                        My notable projects include an <strong>Eco-Friendly Lifestyle Tracker</strong> app—developed using Flutter, Node.js, and Firebase—to help users monitor and reduce their carbon footprint, and an <strong>MGVCL Management System</strong> built using SQL for efficient data handling.
                    </p>

                    <p className='mb-3'>
                        I've trained and participated in initiatives under the <strong>Code Unnati Program</strong>, including advanced blockchain development workshops such as <strong>Arbitrum Governance and Development</strong>.
                    </p>

                    <p>
                        Explore my portfolio to learn more about my work, and feel free to reach out for inquiries or potential collaborations. Thank you for visiting!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
