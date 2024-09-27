import styled from 'styled-components';
import { global } from '../../assets/styles/global.style';

export const Container = styled.div`
    padding-block-start: 32px;
    scroll-padding-block-end: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
export const Title = styled.h3`
    font-style: normal;
    font-weight: ${global.fontWeight.bold};
    font-size: ${global.fontSize.label};
    line-height: 21px;
    color: ${global.color.white};
`

export const Logo = styled.img`
    width: 16px;
    height: 16px;
`

export const Nav = styled.nav`
    display: flex;
    gap: 32px;
`

export const NavItem = styled.div`
    cursor: pointer;
 
`
export const NavValue = styled.p`
    color: ${global.color.gray};
    transition: color 0.3s ease;
    font-size: 1rem;

    span{
        color: ${global.color.primary}
    }
    &:hover{
        color: ${global.color.white}
    }
`
export const WrapperColumn = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 17px;
    gap: 8px;
    align-items: center; 
`;

export const Line = styled.hr`
    border: none;
    width: 1px; 
    height: 191px; 
    background: ${global.color.gray};
    margin: 0; 
`;

export const Icon = styled.i`
    font-size: 20px; 
    color: ${global.color.gray};
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover{
        color: ${global.color.white}
    }
`;
