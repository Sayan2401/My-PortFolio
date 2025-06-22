import React, { useEffect, useState } from 'react';
import Rightside from './Rightside';
import Header from './Header';
import Leftside from './Leftside';
import Resume from './Resume';
import Contact from './Contact';
import animationData from './Animation - 1750590021852.json'
import Lottie from 'lottie-react';

const Home = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 3000); // 3 seconds

        return () => clearTimeout(timer); // cleanup
    }, []);
    return (
        <>
            {!showContent ? (
                <div className='d-flex justify-content-center align-items-center vh-100'>

                    <Lottie
                        animationData={animationData}
                        loop={true}
                        style={{ width: '25vw', height: 'auto', margin: '0 auto' }}
                    />
                    {/* <h2 className="text-light mt-3">Loading Portfolio...</h2> */}

                    {/* <div className="spinner-border text-light mt-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> */}
                </div>
            ) : (
                <div>
                    <Header />
                    <div className="container">
                        <section id='home' className='mt-5'>
                            <div className="row">
                                <div className='col-lg-4 col-12'>
                                    <Leftside />
                                </div>
                                <div className='col-lg-8 col-12'>
                                    <Rightside />
                                </div>
                            </div>
                        </section>
                        <Resume />
                        <Contact />
                    </div>
                    <footer className="bg-dark text-light py-4 row">
                        <p className="text-center mb-0">
                            &#9400; 2025 Chhatrasinh Parmar. All Rights Reserved.
                        </p>
                    </footer>
                </div>
            )}
        </>
    );
};

export default Home;