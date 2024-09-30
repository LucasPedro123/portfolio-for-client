import styled from 'styled-components';
import { global } from '../../../../assets/styles/global.style';

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 112px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 45px;
`


export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const Line = styled.hr`
    border: none;
    margin: 0;
    border-top: 1px solid ${global.color.primary};
    width: 127px;
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

export const Description = styled.p`
    font-weight: ${global.fontWeight.medium};
    font-size: ${global.fontSize.label};
    color: ${global.color.gray};
    line-height: 26px;
    margin:0;
`

export const ContactsGroup = styled.div`
    width: 204px;
    padding: 16px;
    border: 1px solid ${global.color.gray};
    display: flex;
    flex-direction: column;
    gap: 22px;
    margin-top: 87px;
`

export const ContactsTitle = styled.p`
    font-weight: ${global.fontWeight.semiBold};
    font-size: ${global.fontSize.label};
    line-height: 21px;
    color: ${global.color.white};
    margin: 0;
`

export const ContactsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ContactContent = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const Icon = styled.i`
    font-size: 20px;
    color: ${global.color.gray};
`
export const DotTable = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 8px);
    grid-template-rows: repeat(5, 8px);   
    gap: 10px; 
    position: absolute;
    left: -38px;
    top: 2705px;
`;

export const Dot = styled.div`
    width: 4px;
    height: 4px;
    background-color: ${global.color.gray};
    border-radius: 50%;
    margin-block: 10.75px;
   
`;