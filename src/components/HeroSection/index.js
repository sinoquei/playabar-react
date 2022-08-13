import React from 'react';
import Video from '../../app/assets/videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1
} from './HeroElements';

const HeroSection = () => {

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Playa</HeroH1>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection