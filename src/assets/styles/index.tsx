import {createGlobalStyle} from 'styled-components'
import { global } from './global.style'

const AppStyle = createGlobalStyle`
    body{
        background-color: ${global.color.background};
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export default AppStyle;