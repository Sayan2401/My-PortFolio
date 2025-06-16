import React from 'react';
import Rightside from './Rightside';
import Header from './Header';
import Services from './Services';
import Leftside from './Leftside';
import Resume from './Resume';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className="row">
                    <div className='col-md-4 col-12'>
                        <Leftside />
                    </div>
                    <div className='col-md-8 col-12'>
                        <Rightside />
                    </div>
                </div>
            </div>
            <Resume />
            <Contact />
        </>
    );
};

export default Home;