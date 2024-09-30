import styled from 'styled-components';
import { global } from '../../assets/styles/global.style';

export const Container = styled.footer`
    margin-top: 145px;
    display: flex;
    flex-direction: column; 
    gap: 65px;
`

export const LineTop = styled.hr`
    position: absolute;
    border: none;
    margin: 0;
    width: 100vw;
    left: -0%;
    border-top: 1px solid ${global.color.gray};
    margin-bottom: 32px;
`

export const WrapperRow = styled.div`
    padding-top: 32px;
    display: flex;
    justify-content: space-between;
`

export const WrapperColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Content = styled.div`
    display: flex;
    gap: 24px;
`

export const Title = styled.p`
    margin:0;
    font-weight: ${global.fontWeight.medium};
    font-size: ${global.fontSize.label};
    line-height: 21px;
    color: ${global.color.white};
`
export const TextEmail = styled.p`
    margin:0;
    font-weight: ${global.fontWeight.regular};
    font-size: ${global.fontSize.label};
    line-height: 21px;
    color: ${global.color.gray};
`

export const Description = styled.p`
    margin: 0;
    font-weight: ${global.fontWeight.regular};
    font-size: ${global.fontSize.label};
    line-height: 21px;
    color: ${global.color.white};
`

export const IconsGroup = styled.div`
    display: flex;
    gap: 23px;
`

export const Icon = styled.i`
    font-size: 21px;
    color: ${global.color.gray};
    cursor: pointer;

    transition: color 0.3s ease;

    &:hover{
        color: ${global.color.white}
    }
    
`

export const Label = styled.p`
    font-weight: ${global.fontWeight.regular};
    font-size: ${global.fontSize.label};
    line-height: 21px;
    color: ${global.color.gray};
    align-self: center;
`