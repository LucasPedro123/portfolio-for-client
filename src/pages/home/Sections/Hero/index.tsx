import {imageMain, logoOutline } from '../../../../assets/images';
import Button from '../../../../components/Button';
import * as S from './style'

const Hero: React.FC = () => {
    return (
        <S.Container>
            <S.Wrapper>
                <S.Content>
                    <S.Head>Elias is a <span>web designer</span> and <br /> <span>front-end developer</span></S.Head>
                    <S.Description>He crafts responsive websites where technologies<br /> meet creativity</S.Description>
                </S.Content>
                <Button content='Contacte-me!!' />
            </S.Wrapper>
            <S.WrapperImage>
                <S.logoOutline src={logoOutline} />
                <S.ImageMain src={imageMain} />
                <S.DotWrapper>
                    {Array.from({ length: 25 }).map((_, index) => (
                        <S.Dot key={index} />
                    ))}
                </S.DotWrapper>
                <S.LabelInfo>
                    <S.Square />
                    <S.labelImage>
                        Currently working on Portfolio
                    </S.labelImage>
                </S.LabelInfo>
            </S.WrapperImage>
        </S.Container>
    )
}

export default Hero;