import styled from 'styled-components';
import { global } from '../../../../assets/styles/global.style';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 145px;
`

export const Square = styled.div`
    width: 91px;
    height: 91px;
    border: 1px solid ${global.color.gray};
    position: absolute;
    top: 680px;
    right: -20px;
`

export const QuoteWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: end;
   height: 100%;
   position: relative;
`
export const QuoteBorder = styled.div`
    width: 712px;
    height: 95px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${global.color.gray};
`

export const QuoteImage1 = styled.img`
    background: ${global.color.background};
    padding-inline: 8px;
    position: absolute;
    left:8px;
    top: -10px;
`
export const QuoteImage2 = styled.img`
    background: ${global.color.background};
    padding-inline: 8px;
    position: absolute;
    top: 0;
    right: 8px;
    top: -10px;
`
export const QuoteText = styled.p`
    font-size: ${global.fontSize.subHead};
    line-height: 31px;
    color: ${global.color.white};
`
export const QuoteBorderAuthor = styled.div`
    width: 162px;
    height: 63px;
    border: 1px solid ${global.color.gray};
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Wrapper = styled.div`
    margin-top: 74px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`
export const Line = styled.hr`
    border: none;
    border-top: 1px solid ${global.color.primary};
    width: 511px;
`

export const Title = styled.h1`
    margin: 0;
    font-weight: ${global.fontWeight.medium};
    font-size: ${global.fontSize.head};
    line-height: 42px;
    color: ${global.color.white};
    span{
       color: ${global.color.primary};
    }
`
export const Span = styled.span`

`

export const LinkText = styled(Link)`
    font-weight: ${global.fontWeight.medium};
    font-size: 16px;
    line-height: 21px;
    color: ${global.color.white};
    text-decoration: none;
`

export const CardContainer = styled.div`
    width: 100%;
    margin: 48px;
    display: flex;
    justify-content: space-between;
` 