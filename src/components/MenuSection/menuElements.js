import styled from "styled-components";

export const MenuContainer = styled.div`
    color: #fff;
    background: #9dbbd8;

    /* @media screen and (max-width: 768px) {
        padding: 10px 0;
    } */
`;

export const MenuWrapper = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const MenuRow = styled.div`
    align-items: center;
`;

export const Column1 = styled.div`
    padding: 0 15px;
    align-content: center;
`;

export const Column2 = styled.div`
    padding: 0 15px;
    align-content: center;
`;

// export const TextWrapper = styled.div`
//     max-width: 540px;
//     padding-top: 0;
//     padding-bottom: 60px;
// `;

export const TopLine = styled.p`
    color: #fff;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    text-align: left;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-top: 26px;
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
`;

export const Heading2 = styled.h2`
    margin-bottom: 24px;
    font-size: 34px;
    text-align: center;
    align-content: center;
    line-height: 1.1;
    font-weight: 500;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 22px;
    }
`

export const Subtitle = styled.p`
    margin-bottom: 45px;
    font-size: 18px;
    line-height: 24px;
    text-align: left;
    align-content: center;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`