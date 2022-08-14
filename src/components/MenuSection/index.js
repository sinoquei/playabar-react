import React from "react";
import { Row, Col } from 'reactstrap'
import { 
    MenuContainer, 
    MenuWrapper, 
    MenuRow, 
    Column1, 
    Column2,  
    TopLine, 
    Heading,
    Heading2, 
    Subtitle 
} from "./menuElements";

const MenuSection = ({
    id,
    menuRow,
    lightText,
    darkText,
    headline,
    subheadline,
    subheadline2
}) => {
    return (
        <>
            <MenuContainer id={id}>
                <MenuWrapper>
                    <MenuRow>
                        <Row>
                            <Col>
                                <Heading lightText={lightText}>{headline}</Heading>
                             </Col>
                        </Row>
                        <Row>
                            <Col md='6'>
                            <Column1>
                                
                                    <Heading2>{subheadline}</Heading2>    
                                        <TopLine>Playa Punch</TopLine>
                                        <Subtitle darkText={darkText}>
                                        Rum, guava liquor, pineapple sangria
                                        </Subtitle>
                                        <TopLine>Holla for a Sand Dolla</TopLine>
                                        <Subtitle darkText={darkText}>
                                        Whiskey, bitters, yellow pop rocks candy
                                        </Subtitle>
                                        <TopLine>Saucy Seaweeds</TopLine>
                                        <Subtitle darkText={darkText}>
                                        Tequila, plum sake, rum seamoss
                                        </Subtitle>
                                        <TopLine>is it Fashion?</TopLine>
                                        <Subtitle darkText={darkText}>
                                        Empress gin, thc syrup, champagne
                                        </Subtitle>
                                        <TopLine>Summer Renaissance</TopLine>
                                        <Subtitle darkText={darkText}>
                                        Dusse, secret foam, hypnotic, peach faygo
                                        </Subtitle>
                                        <TopLine>Fantasea Spritz</TopLine>
                                        <Subtitle darkText={darkText}>
                                        Grapefruit vodka, guava sangria, champagne
                                        </Subtitle>
                                
                            </Column1>
                            </Col>
                            <Col md='6'>
                            <Column2>
                                
                                    <Heading2>{subheadline2}</Heading2>
                                    <TopLine>Mojito</TopLine>
                                    <Subtitle darkText={darkText}>
                                    Rum, lime, sugar, mint
                                    </Subtitle>
                                    <TopLine>Caipirinha</TopLine>
                                    <Subtitle darkText={darkText}>
                                    Cachaca, brown sugar, lime    
                                    </Subtitle>
                                    <TopLine>Martini</TopLine>
                                    <Subtitle darkText={darkText}>
                                    Gin, vermouth    
                                    </Subtitle>
                                    <TopLine>Margarita</TopLine>
                                    <Subtitle darkText={darkText}>
                                    Tequila, cointreau, lime    
                                    </Subtitle>
                                    <TopLine>Daiquiri</TopLine>
                                    <Subtitle darkText={darkText}>
                                    Rum, guava syrup, lime    
                                    </Subtitle>
                                
                            </Column2>
                            </Col>
                        </Row>
                    </MenuRow>
                </MenuWrapper>
            </MenuContainer>
        </>
    )
};

export default MenuSection;