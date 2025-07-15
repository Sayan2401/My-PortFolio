import React from 'react';

const Resume = () => {
    const Techs = [
        {
            title: 'Technical Skills',
            Tools: [{
                header: "Beginner",
                skills: [
                    'MongoDB', ' MySQL', 'IOT', 'React', 'SAP ABAP']
            }, {
                header: "Intermediate",
                skills: [
                    'Java', 'SQL', 'HTML5', 'CSS', 'JavaScript', 'Bootstrap',
                    'Node.js', 'Express.js', 'RESTful APIs',
                    'JWT / OAuth', 'Git & GitHub', 'Flutter', 'Dart']
            },
            ]
        }
    ];

    return (
        <div className='mt-4'>

            {/* Education Section */}
            <div className="row" id='edu&skill'>
                <div className="col-lg-6">
                    <div className='px-3 fs-3 mb-4 about-header'>
                        <i className="fas fa-graduation-cap me-2 text-primary"></i>
                        Education
                    </div>

                    <div className='text-secondary mb-1 '>
                        <i className='fas fa-calendar-alt me-2 text-primary'></i>
                        July 2021 &ndash; May 2025
                    </div>
                    <div className="fs-5 mb-4">
                        <strong>B.E in Computer Science & Engineering</strong><br />
                        The Maharaja Sayajirao University of Baroda, Vadodara
                    </div>

                    <div className='text-secondary mb-1'>
                        <i className='fas fa-calendar-alt me-2 text-primary'></i>
                        June 2019 &ndash; May 2021
                    </div>
                    <div className="fs-5 mb-4">
                        <strong>Higher Secondary Education (Science Stream)</strong><br />
                        S.I.D Science Sankul Gurukul Vidyalaya, Vadodara
                    </div>
                </div>


                {/* Skills Section */}
                <div className='col-lg-6'>
                    {Techs.map((item, index) => (
                        <div key={index}>
                            <div className='px-3 fs-3 mb-3 about-header'>
                                <i className="fas fa-laptop-code me-2 text-primary"></i>
                                {item.title}
                            </div>

                            {item.Tools.map((tool, idx) => (
                                <div key={idx}>
                                    <div className="fs-5 text-secondary mb-3">
                                        {tool.header}
                                    </div>
                                    <div className="d-flex flex-wrap mb-4">
                                        {tool.skills.map((skill, idx2) => (
                                            <div
                                                key={idx2}
                                                className='bg-dark skill-btn me-2 mb-2 px-3 py-2 rounded-pill shadow-sm'
                                            >
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                        </div>
                    ))}
                </div>
            </div>
            <section id="certifications" className="my-4">
                <div className="px-3 fs-3 mb-3 about-header" >
                    <i className="fas fa-certificate me-2 text-primary"></i>Certifications
                </div>

                {/* SAP Certification */}
                <div className="d-flex flex-column flex-md-row  rounded shadow-sm mb-4">
                        {/* <img
      src="https://images.credly.com/size/680x680/images/65fe9e2c-6cac-4584-a5c3-a65e01516e7d/image.png" // SAP ABAP badge image URL
      alt="SAP Certified Associate Badge"
      className="img-fluid  me-md-4 mb-3 mb-md-0"
     
    /> */}
                    <div>
                        <h5 className="fw-bold ">
                            SAP Certified Associate - Back-End Developer - ABAP Cloud
                        </h5>
                        <p className="mb-1">
                            Issued by SAP
                        </p>
                        <p className="mb-1 text-secondary">
                            Issued May 2025 &ndash; Expires May 2026
                        </p>
                        <a
                            href="https://www.credly.com/badges/c6316e54-5abc-47bc-b33f-35055b454197/linked_in_profile"
                            className="fw-semibold"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View SAP Certificate on Credly"
                        >
                            View Certificate <i className="fas fa-external-link-alt ms-1"></i>
                        </a>

                        <div className="mt-3">
                            Skills: <span className="bg-dark skill-btn me-2 mb-2 px-3 py-2 rounded-pill shadow-sm">SAP ABAP</span>

                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="mt-5" id="projects">
                <div className='px-3 fs-3 mb-3 about-header'>
                    <i className="fas fa-project-diagram me-2 text-primary"></i>
                    My Projects
                </div>
                <h2 className='fw-light mb-3'>Projects I Have Done</h2>

                <div>
                    <img
                        src="Eco_LifeStyle.webp"
                        alt="Eco-Friendly Lifestyle Tracker Web App"
                        className='img-fluid rounded shadow mb-3'
                        
                    />
                    <div className='fs-5'>
                        <strong>EcoFriendly Lifestyle Tracker Web App</strong> - College Project
                        <p className='mt-2'>
                            <a href="https://github.com/Sayan2401/Flutter_Project" target="_blank" class="text-decoration-none" noopener noreferrer>
                                <i class="bi bi-link-45deg"></i>   GitHub Link
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resume;