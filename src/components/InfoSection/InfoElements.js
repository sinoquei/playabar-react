import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #806d74;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#806d74')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1100px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    align-content: center;
    grid-area: col1;
`

// export const Column2 = styled.div`
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col2;
// `

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #fff;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    text-align: center;
    align-content: center;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    margin-bottom: 45px;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    align-content: center;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const ImgWrap = styled.div`
    max-width: 375px;
    height: 100%;
    justify-content: center;
    margin: auto;
`

export const Img = styled.img`
    width: 100%;
`;