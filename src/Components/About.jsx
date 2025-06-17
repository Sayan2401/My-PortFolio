import React from 'react';

const About = () => {
    return (
        <section id='About' className='container my-4'>
            <div className='text-start'>

                <div className='px-3 fs-3 mb-3 about-header'>
                    <i className="fas fa-user-gear me-2 text-primary"></i>
                    About Me
                </div>
                <div className='fs-5'>
                    <p className='mb-3'>
                        Welcome to my portfolio! I'm <strong>Chhatrasinh Parmar</strong>, an aspiring software developer with hands-on experience in full-stack development, IoT, and machine learning.
                    </p>
                    <p className='mb-3'>
                        I specialize in technologies like HTML, CSS, JavaScript, Core Java, Flutter, Node.js, and SQL. I build end-to-end solutions that blend robust functionality with intuitive user experiences.
                    </p>
                    <p className='mb-3'>
                        Notable work includes an <strong>Eco-Friendly Lifestyle Tracker</strong> app—developed using Flutter, Node.js, and Firebase—to help users monitor and reduce their carbon footprint, and a strong <strong>MGVCL Management System</strong> using SQL for efficient data handling.
                    </p>
                    <p className='mb-3'>
                        I’ve trained under the <strong>Code Unnati Program</strong> and participated in advanced blockchain development initiatives, such as the <strong>Arbitrum Governance and Development</strong> workshop.
                    </p>
                    <p>
                        My projects reflect a keen focus on clean design, real-world use cases, and scalable architecture. Take a look around, explore my work, and feel free to connect if you'd like to collaborate!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
