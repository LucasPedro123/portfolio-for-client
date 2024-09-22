import { logoDefault } from '../../assets/images';
import * as S from './style';

const Header: React.FC = () => {

    return (
        <S.Container>
            <S.WrapperColumn>
                    <S.Line />
                    <S.Icon className="fa-brands fa-github"></S.Icon>
                    <S.Icon className="fa-brands fa-linkedin-in"></S.Icon>
                    <S.Icon className="fa-brands fa-figma"></S.Icon>
                    
            </S.WrapperColumn>
            <S.IconWrapper>
                <S.Logo src={logoDefault} />
                <S.Title>Elias</S.Title>
            </S.IconWrapper>
            <S.Nav>
                <S.NavItem>
                    <S.NavValue><span>#</span>home</S.NavValue>
                </S.NavItem>
                <S.NavItem>
                    <S.NavValue><span>#</span>home</S.NavValue>
                </S.NavItem>
                <S.NavItem>
                    <S.NavValue><span>#</span>home</S.NavValue>
                </S.NavItem>
                <S.NavItem>
                    <S.NavValue><span>#</span>home</S.NavValue>
                </S.NavItem>
            </S.Nav>
        </S.Container>
    )
}

export default Header