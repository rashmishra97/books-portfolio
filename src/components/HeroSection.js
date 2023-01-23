import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faCake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from './Button';
import './HeroSection.css';

const HeroSection = () => {


    console.log("HeroSection");
    return (
        <div className='hero-container'>
            <video src='/videos/video.mp4' autoPlay loop muted />
            <h2 style={{ color: 'white' }} >What you want to do?</h2>
            <p style={{ color: 'white' }} >before you die</p>
            <div className='hero-btns' >
                <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large' >
                    GET STARTED
                </Button>

                <Button className='btns'
                    // buttonStyle='btn--primary'
                    buttonSize='btn--large' style={{ backgroundColor: 'white' }} >
                    WATCH TRAILER
                    <FontAwesomeIcon icon={faPlayCircle} ></FontAwesomeIcon>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;