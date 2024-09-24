import {createGlobalStyle} from 'styled-components'
import { global } from './global.style'

const AppStyle = createGlobalStyle`
    body{
        font-family: 'Fira Code';
        background-color: ${global.color.background};
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-x: hidden;
    }
`

export default AppStyle;