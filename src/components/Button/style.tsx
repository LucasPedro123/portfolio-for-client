import styled from 'styled-components'
import { global } from '../../assets/styles/global.style'

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    position: relative;
    border: none;
    background: none;
    border: 1px solid ${global.color.primary};
    color: ${global.color.white};
    width: 148px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;

    span{
        position: absolute;
    }

    &::before{
        position: absolute;
        transition: 500ms ease;

        content: '';
        width: 100%;
        height: 100%;
        bottom: -100%;
        background-color: ${global.color.primary};

    }
    &:is(:focus, :hover)::before{
        bottom: 0;

    }
`

export const Span = styled.span`
    &:focus{
        top:-100%;        
    }
`