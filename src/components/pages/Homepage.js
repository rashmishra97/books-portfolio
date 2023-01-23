import '../../App.css'
import React from 'react';
import HeroSection from '../HeroSection'
import Cards from '../Cards';
import Footer from '../Footer';

const Homepage = () => {

    return (
        <>
            <div >

                <HeroSection />
                <Cards />
                <Footer />
            </div>
        </>
    )
}

export default Homepage;