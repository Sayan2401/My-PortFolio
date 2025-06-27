import React from 'react';

const Resume = () => {
    const Techs = [
        {
            title: 'Technical Skills',
            Tools: [{
                header: "Beginner",
                skills: [
                    'MongoDB', ' MySQL', 'IOT', 'React','SAP ABAP']
            }, {
                header: "Intermediate",
                skills: [
                    'Java', 'SQL', 'HTML5', 'CSS', 'JavaScript', 'Bootstrap',
                    'Node.js', 'Express', 'RESTful APIs',
                    'JWT / OAuth', 'Git & GitHub', 'Flutter', 'Dart']

            },

            ]
        }
    ];

    return (
        <div className='mt-4'>

            {/* Education Section */}
            <div className="row">
                <div className="col-lg-6">
                    <div className='px-3 fs-3 mb-3 about-header'>
                        <i className="fas fa-graduation-cap me-2 text-primary"></i>
                        Education
                    </div>

                    <div className='text-secondary mb-2'>2021-2025</div>
                    <div className="fs-5 mb-4">
                        <strong>B.E in Computer Science & Engineering</strong><br />
                        The Maharaja Sayajirao University, Vadodara
                    </div>

                    <div className='text-secondary mb-2'>2019-2021</div>
                    <div className="fs-5 mb-4">
                        <strong>Higher Secondary Education</strong><br />
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

            {/* Projects Section */}
            <section className="mt-5 " id="projects">
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