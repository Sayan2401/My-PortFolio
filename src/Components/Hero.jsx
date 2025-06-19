import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css'

const Hero = () => {
    return (
        <>
            <div className='text-start my-5 fs-1' >
                <Typewriter
                    words={['Hello I Am Chhatrasinh, Software Developer',]}
                    loop={true}
                    cursor
                    cursorStyle='.'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />

                <p className='fs-5'>
                    I design and code beautifully simple things and i love what i do. Just simple like that!
                </p>
                {/* <div className='text-center mb-3'>
                        <a href="/#contact">
                            <button className='btn' id='contact-btn'>Contact Me</button>
                        </a>
                    </div> */}
                <div className='text-end'>
                    <a href="#projects" >
                        <img
                            src="round-text.png"
                            className="img-fluid rotate-animation"
                            alt="round text"
                        />
                    </a>
                </div>

            </div>

        </>
    );
};

export default Hero;