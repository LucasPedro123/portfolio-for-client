import styled from 'styled-components'
import { global } from '../../../../assets/styles/global.style'

export const Container = styled.section`
    display: flex;
    height: 423px;
    align-items: center;
    justify-content: space-between;
`

export const Wrapper = styled.div`
    display: block;
    gap: 24px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const Head = styled.h1`
color: ${global.color.white};
    font-size: ${global.fontSize.head};
    font-weight: ${global.fontWeight.semiBold};
    line-height: 42px;
    span{
        color: ${global.color.primary}
    }

`

export const Description = styled.p`
    font-weight: ${global.fontWeight.regular};
    font-size: ${global.fontSize.label};
    color: ${global.color.gray};
    line-height: 25px;


`

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


export const WrapperImage = styled.div`
    position: relative;
    flex-direction:column;
    display: flex;
    height: 100%;
    width: 469px;
    margin-top: 62px;
`

export const labelImage = styled.p`
    font-size: ${global.fontSize.label};
    line-height: 21px;
    color: ${global.color.gray};
    span{
        font-weight: ${global.fontWeight.semiBold};
        color: ${global.color.white};
    }
`

export const ImageMain = styled.img`
    position: absolute;
    right: 0;

    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`

export const ImageDotsTable = styled.img`
    position: absolute;
    right: 0;
    bottom: 100px;

    animation-name: floatingInvert;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @keyframes floatingInvert {
    0% {
      transform: translate(0, 10px);
    }
    50% {
      transform: translate(0, 0px);
    }
    100% {
      transform: translate(0, 10px);
    }
  }
`

export const logoOutline = styled.img`
    left: 10px;
    position: absolute;
    width: 155px; 
    height: 155px;

    animation-name: floatingInvert;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`

export const LabelInfo = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    gap: 10px;
    width: 402px;
    height: 37px;
    padding-inline-start: 8px;
    background-color: ${global.color.background};
    border: 1px solid ${global.color.gray};
    position: absolute;
    bottom: 0;
`

export const Square = styled.div`
    width: 16px;
    height: 16px;
    background-color: ${global.color.primary}
`