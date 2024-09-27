import styled from 'styled-components';
import { global } from '../../../../assets/styles/global.style';
import { profile2 } from '../../../../assets/images';

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 112px;
`
export const Wrapper = styled.div`
    width: 515px;
    height: 100%;
    display: grid;
    gap: 10px;
`

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const Description = styled.p`
    font-weight: ${global.fontWeight.regular};
    font-size: ${global.fontSize.label};
    color: ${global.color.gray};
    line-height: 26px;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const Line = styled.hr`
    border: none;
    border-top: 1px solid ${global.color.primary};
    width: 100%;
`


export const Title = styled.h1`
    margin: 0;
    font-weight: ${global.fontWeight.medium};
    font-size: ${global.fontSize.head};
    line-height: 42px;
    color: ${global.color.white};
`

export const Span = styled.span`
    color: ${global.color.primary};
`

export const ImageGroup = styled.div`
    width: 343px;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const ImageProfile = styled.div`
    background-image: url(${profile2});
    background-size: cover;
    background-position: center;
    height: 507px;
    width: 339px;

`

export const DotTable = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 8px);
    grid-template-rows: repeat(5, 8px);   
    gap: 10px; 
    position: absolute;
    left: -4px;
    top: 59px;

    animation-name: floatingInvert;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;

`;

export const DotTable2 = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 8px);
    grid-template-rows: repeat(4, 8px);   
    gap: 10px; 
    position: absolute;
    right: 19px;
    bottom: 172px;

    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;

`;
export const DotTable3 = styled.div`
    display: grid;
    position: absolute;
    grid-template-columns: repeat(5, 8px);
    grid-template-rows: repeat(5, 8px);   
    gap: 10px; 
    top: 2304px;
    right:-23px;
    z-index: 0;

    animation-name: floatingInvert;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
`;

export const Dot = styled.div`
    width: 4px;
    height: 4px;
    background-color: ${global.color.gray};
    border-radius: 50%;
    margin-block: 10.75px;
   
`;

export const LineProfile = styled.hr`
    border: none;
    border-top: 1px solid ${global.color.primary};
    width: 271px;
    margin: 0;
    align-self: center;
`