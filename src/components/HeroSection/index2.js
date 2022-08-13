import React from 'react';
import BreakPic from '../../app/assets/img/hero-img.jpeg';
import {
    HeroContainer,
    HeroBg,
    ImgSection
} from './HeroElements';

const HeroSection2 = () => {

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <ImgSection src={BreakPic} />
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection2;