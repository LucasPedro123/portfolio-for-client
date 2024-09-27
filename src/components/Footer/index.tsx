import * as S from './style'

const Footer: React.FC = () => {

    return (
        <S.Container>
            <S.LineTop />
            <S.WrapperRow>
                <S.WrapperColumn>
                    <S.Content>
                        <S.Title>Elias</S.Title>
                        <S.TextEmail>elias@elias-dev.ml</S.TextEmail>
                    </S.Content>
                    <S.Description>
                        Web designer and front-end developer
                    </S.Description>
                </S.WrapperColumn>
                <S.WrapperColumn>
                    <S.Content>
                        <S.Title>Media</S.Title>
                    </S.Content>
                    <S.IconsGroup>
                        <S.Icon className="fa-brands fa-github"></S.Icon>
                        <S.Icon className="fa-brands fa-figma"></S.Icon>
                        <S.Icon className="fa-brands fa-discord"></S.Icon>
                    </S.IconsGroup>
                </S.WrapperColumn>
            </S.WrapperRow>
            <S.Label>© Copyright 2022. Made by Elias</S.Label>
        </S.Container>
    )
}

export default Footer;