import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css'

const Hero = () => {
    return (
        <>
            <div className='mb-5' >
                <p className=' fs-1 hero-title mb-2'>
                    <Typewriter
                        words={['Hello I Am Chhatrasinh, Software Developer',]}
                        loop={true}
                        cursor
                        cursorStyle='.'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </p>

                <p className='fs-5'>
                    Fueling my journey with curiosity and code,
                    to build meaningful tech that connects and empowers.
                </p>
                {/* <div className='text-center mb-3'>
                        <a href="/#contact">
                            <button className='btn' id='contact-btn'>Contact Me</button>
                        </a>
                    </div> */}
                <div className='text-end'>
                    <a href="#projects" className="position-relative d-inline-block">
                        <img
                            src="round-text.webp"
                            className="img-fluid rotate-animation"
                            alt="My Projects"
                            
                        />
                        <i className="fas fa-arrow-down overlay-icon"></i>
                    </a>
                </div>
            </div>

        </>
    );
};

export default Hero;