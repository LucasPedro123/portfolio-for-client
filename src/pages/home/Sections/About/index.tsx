import { Button } from '../../../../components';
import * as S from './style';

const AboutMe: React.FC = () => {
    return (
        <S.Container>
            <S.Wrapper>
                <S.Content>
                    <S.Title>
                        <S.Span>#</S.Span>skills
                    </S.Title>
                    <S.Line />
                </S.Content>
                <S.DescriptionWrapper>
                    <S.Description>
                        Hello, i’m Elias!
                    </S.Description>
                    <S.Description>
                        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                    </S.Description>
                    <S.Description>
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                    </S.Description>
                </S.DescriptionWrapper>
                <Button content='Read more ->' />
            </S.Wrapper>
            <S.ImageGroup>
                <S.ImageProfile />
                <S.DotTable>
                    {
                        Array.from({ length: 25 }).map((_, index) => (
                            <S.Dot key={index} />
                        ))
                    }
                </S.DotTable>
                <S.DotTable2>
                    {
                        Array.from({ length: 20 }).map((_, index) => (
                            <S.Dot key={index} />
                        ))
                    }
                </S.DotTable2>
                <S.LineProfile/>
            </S.ImageGroup>
            <S.Square/>
            <S.DotTable3>
                {
                    Array.from({ length: 25 }).map((_, index) => (
                        <S.Dot key={index} />
                    ))
                }
            </S.DotTable3>

        </S.Container>
    )
}

export default AboutMe;