import React from 'react';

const Resume = () => {
    const Techs = [
        {
            title: 'Technical Skills',
            Tools: [
                'Java', 'SQL', 'HTML5', 'CSS', 'JavaScript', 'React', 'Bootstrap',
                'Node.js', 'Express', 'MongoDB / MySQL', 'Firebase', 'RESTful APIs',
                'JWT / OAuth', 'VS Code', 'Git & GitHub', 'Postman', 'Flutter', 'Dart'
            ]
        }
    ];

    return (
        <div className='container mt-4'>

            {/* Education Section */}
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className='px-3 fs-3 mb-3 about-header'>
                        <i className="fas fa-graduation-cap me-2 text-primary"></i>
                        Education
                    </div>

                    <div className='text-secondary'>2021-2025</div>
                    <div className="fs-5 mb-4">
                        <strong>B.E in Computer Science & Engineering</strong><br />
                        The Maharaja Sayajirao University, Vadodara
                    </div>

                    <div className='text-secondary'>2019-2021</div>
                    <div className="fs-5">
                        <strong>Higher Secondary Education</strong><br />
                        S.I.D Science Sankul Gurukul Vidyalaya, Vadodara
                    </div>
                </div>

                {/* Skills Section */}
                <div className="col-md-6 col-12">
                    {Techs.map((item, index) => (
                        <div key={index}>
                            <div className='px-3 fs-3 my-3 about-header'>
                                <i className="fas fa-laptop-code me-2 text-primary"></i>
                                {item.title}
                            </div>
                            <div className="d-flex flex-wrap">
                                {item.Tools.map((tool, idx) => (
                                    <div
                                        key={idx}
                                        className='bg-dark skill-btn me-2 mb-2 px-3 py-2 rounded-pill shadow-sm'
                                    >
                                        {tool}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Projects Section */}
            <section className="row mt-5" id="projects">
                <div className='px-3 fs-3 mb-3 about-header'>
                    <i className="fas fa-project-diagram me-2 text-primary"></i>
                    My Projects
                </div>
                <h2 className='fw-light mb-3'>Projects I Have Done</h2>

                <div className='col-12'>
                    <img
                        src="Eco_LifeStyle.png"
                        alt="Eco-Friendly Lifestyle Tracker Web App"
                        className='img-fluid rounded shadow mb-3'
                    />
                    <div className='fs-5'>
                        <strong>EcoFriendly Lifestyle Tracker Web App</strong> - College Project
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resume;