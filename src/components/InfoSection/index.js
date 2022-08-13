import React from 'react';
import { Button } from '../ButtonElements';
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1,  
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements';

const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description,
    description2, 
    buttonLabel, 
    img, alt, 
    primary, 
    dark, 
    dark2
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Subtitle darkText={darkText}>
                                    1994 Gemini Blvd<br></br>
                                    Cancun, MX 33333<br></br>
                                    123-456-7788<br></br>
                                </Subtitle>
                                <TopLine>{topLine}</TopLine>
                                <Subtitle darkText={darkText}>
                                    Monday: Closed<br></br>
                                    Tuesday - Sunday: 3PM - 3AM<br></br>
                                </Subtitle>
                                <TopLine>Careers</TopLine>
                                <BtnWrap>
                                    <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;