import styled from 'styled-components';
import { global } from '../../assets/styles/global.style';

export const Container = styled.div`
    width: 330.56px;
    padding-block-end: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid ${global.color.gray};
    position: relative;
    overflow: hidden;
`
export const CardImage = styled.img`
    width: 100%;
    height: 201px;
    object-fit: cover;
`

export const Label = styled.p`
    margin: 0;
    padding-block: 4px;
`

export const CardLabel = styled.p`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-inline: 8px;
    font-weight: ${global.fontWeight.regular};
    font-size: ${global.fontSize.label};
    color: ${global.color.gray};
    border-top: 1px solid ${global.color.gray};
    border-bottom: 1px solid ${global.color.gray};
    margin: 0; 
`;

export const CardTitle = styled.h3`
    font-weight: ${global.fontWeight.medium};
    font-size: ${global.fontSize.subHead};
    color: ${global.color.white};
    margin: 0; 
    text-align: start;
    line-height: 31px;
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;

    /* white */
    color: #FFFFFF;


    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

`

export const CardDescription = styled.p`
    margin: 0;
    font-weight: ${global.fontWeight.regular};
    font-size: ${global.fontSize.label};
    line-height: 21px;
    color: ${global.color.gray};
`

export const Wrapper = styled.div`
    padding-inline: 16px;
    padding-block-start: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const ContentButtons = styled.div`
    display: flex;
    gap: 16px;
`