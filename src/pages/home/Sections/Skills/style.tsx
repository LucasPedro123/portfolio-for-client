import styled from 'styled-components';
import { global } from '../../../../assets/styles/global.style';
import { logoOutline } from '../../../../assets/images';

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 391px;
    height: 365px;
    position: relative;
`

export const DotWrapper1 = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 8px);
    grid-template-rows: repeat(5, 8px);   
    gap: 10px; 
    position: absolute;
    left: 32px;
    top: 92px;

    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

  
`;
export const DotWrapper2 = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 8px);
    grid-template-rows: repeat(5, 8px);   
    gap: 10px; 
    position: absolute;
    right: 119px;
    bottom: 75px;

    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

   
`;

export const Dot = styled.div`
    width: 4px;
    height: 4px;
    background-color: ${global.color.gray};
    border-radius: 50%;
    margin-block: 10.75px;
   
`;

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
export const Square1 = styled.div`
    width: 86px;
    height: 86px;
    border: 1px solid ${global.color.gray};
    position: absolute;
    top: 52px;
    right: 46px;

    animation-name: floatingInvert;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;

   
`
export const Square2 = styled.div`
    width: 52px;
    height: 52px;
    border: 1px solid ${global.color.gray};
    position: absolute;
    right: 10px;
    bottom: 37px;

    animation-name: floatingInvert;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`

export const LogoOutline = styled.div`
    width: 113px;
    height: 113px;
    background-repeat: none;
    background-size: 100%;
    background-image: url(${logoOutline});
    position: absolute;
    bottom: 0px;
    left: 47px;

    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
`

export const TablesContainer = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 85px;
`

export const TableGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Table = styled.table`
    border: solid 1px ${global.color.gray};
    padding: 0;
    width: 200px;
    height: 103px;
`

export const TableRow = styled.tr`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`
export const TableHeaderCell = styled.th`
    width: 100%;
    border-bottom: solid 1px ${global.color.gray};
    font-weight: ${global.fontWeight.semiBold};
    font-size: ${global.fontSize.label};
    color: ${global.color.white};
    line-height: 21px;
    padding-block: 8px;
    text-align: start;
    padding-inline-start: 8px;
`

export const TableBodyCell = styled.th`
    font-weight: ${global.fontWeight.regular};
    font-size: ${global.fontSize.label};
    line-height: 21px;
    color: ${global.color.gray};
    padding-block: 8px;
    padding-inline-start: 8px;

`

export const TableHeader = styled.thead`
    
`

export const TableBody = styled.tbody`
`

    